import { PageActionGenerator } from '../../../types/page-action-generator';

export abstract class ActionWorker<P = {}> {
    protected requiredFieldNames: (keyof P)[] = [];

    constructor(protected actionGenerator: PageActionGenerator) {
    }

    do(step: string): string {
        const args = this.getArgs(step);
        return this.runAutomationToolMethod(args);
    };

    checkAffiliation(step: string): boolean {
        return this.getStepPattern().test(step);
    };

    protected getArgs(step: string): Required<P> {
        const rawArgs = this.getStepPattern().exec(step);

        if (!rawArgs) {
            const name = this.getStepName();
            throw new Error(`Check "${name}" step`);
        }

        const parsedArgs = this.parseRawArgs(rawArgs);

        this.validateFields(parsedArgs);

        return parsedArgs as Required<P>;
    }

    protected validateFields(args: P): void {
        const invalidFields = this.requiredFieldNames.filter(name => args[name] == null);

        if (invalidFields.length) {
            throw new Error(`${this.getStepName()} step parameters are not valid: ${invalidFields.join(', ')}`);
        }
    };

    protected abstract runAutomationToolMethod(args: Required<P>): string;

    protected abstract parseRawArgs(rawArgs: RegExpExecArray): P;

    protected abstract getStepPattern(): RegExp;

    protected abstract getStepName(): string;
}
