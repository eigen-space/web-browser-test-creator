import { Dictionary } from '@eigenspace/common-types';
import { PageActions } from '../../../types/page-actions';

interface ActionWorkerOptions {
    adapter: PageActions;
}

export abstract class ActionWorker {
    protected adapter: PageActions;

    constructor(options: ActionWorkerOptions) {
        this.adapter = options.adapter;
    }

    do(step: string): string {
        const args = this.getArgs(step);
        return this.runAdapterMethod(args);
    };

    checkAffiliation(step: string): boolean {
        return this.getStepPattern().test(step);
    };

    protected getArgs(step: string): Dictionary<string> {
        const rawArgs = this.getStepPattern().exec(step);
        return this.parseRawArgs(rawArgs);
    }

    protected abstract runAdapterMethod(args: Dictionary<string>): string;

    protected abstract parseRawArgs(rawArgs: RegExpExecArray | null): Dictionary<string>;

    protected abstract getStepPattern(): RegExp;
}
