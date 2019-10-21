import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    data?: string;
}

export class ScrollToElementActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['data'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.scrollToElement(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, data] = rawArgs;
        return { data };
    };

    protected getStepPattern(): RegExp {
        return /^Scroll\sto\selement\s'(.*)'$/g;
    }

    protected getStepName(): string {
        return 'Scroll to element';
    }
}
