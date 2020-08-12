import { PageActionGenerator } from '../../../..';
import { ActionVariableStore } from '../../../components/action-variable-store/action-variable-store';

export abstract class ActionWorker<P = {}> {
    private static VARIABLE_PATTERN = /{{(.+?)}}/g;

    protected requiredFieldNames: (keyof P)[] = [];

    private actionVariableStore = new ActionVariableStore();

    constructor(protected actionGenerator: PageActionGenerator) {
    }

    do(step: string): string {
        const stepWithVariables = this.injectVariables(step);
        const args = this.getArgs(stepWithVariables);
        return this.runAutomationToolMethod(args);
    };

    checkAffiliation(step: string): boolean {
        return this.getStepPattern().test(step);
    };

    protected injectVariables(step: string): string {
        const variables = Array.from(step.matchAll(ActionWorker.VARIABLE_PATTERN));

        let result = step;
        variables.forEach(([group, value]) => {
            result = result.replace(group, this.actionVariableStore.get(value));
        });

        return result;
    }

    protected getArgs(step: string): Required<P> {
        const rawArgs: RegExpExecArray = this.getStepPattern().exec(step)!;
        const parsedArgs = this.parseRawArgs(rawArgs);
        this.validateFields(parsedArgs);
        return parsedArgs as Required<P>;
    }

    protected validateFields(args: P): void {
        const invalidFields = this.requiredFieldNames.filter(name => !Boolean(args[name]));

        if (invalidFields.length) {
            throw new Error(`'${this.getStepName()}' step parameters are not valid: ${invalidFields.join(', ')}`);
        }
    };

    protected abstract runAutomationToolMethod(args: Required<P>): string;

    protected abstract parseRawArgs(rawArgs: RegExpExecArray): P;

    protected abstract getStepPattern(): RegExp;

    protected abstract getStepName(): string;
}
