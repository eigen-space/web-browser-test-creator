import { Dictionary } from '@eigenspace/common-types';
import { PageActionGenerator } from '../../../types/page-action-generator';

export abstract class ActionWorker {

    constructor(protected actionGenerator: PageActionGenerator) {
    }

    do(step: string): string {
        const args = this.getArgs(step);
        return this.runAutomationToolMethod(args);
    };

    checkAffiliation(step: string): boolean {
        return this.getStepPattern().test(step);
    };

    protected getArgs(step: string): Dictionary<string> {
        const rawArgs = this.getStepPattern().exec(step);
        return this.parseRawArgs(rawArgs);
    }

    protected abstract runAutomationToolMethod(args: Dictionary<string>): string;

    protected abstract parseRawArgs(rawArgs: RegExpExecArray | null): Dictionary<string>;

    protected abstract getStepPattern(): RegExp;
}
