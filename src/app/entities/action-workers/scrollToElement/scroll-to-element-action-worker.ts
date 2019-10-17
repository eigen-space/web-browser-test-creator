import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    targetSelector?: string;
}

export class ScrollToElementActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['targetSelector'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.scrollToElement(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, targetSelector] = rawArgs;
        return { targetSelector };
    };

    protected getStepPattern(): RegExp {
        return /^Scroll\sto\selement\sby\sselector\s(.*)$/g;
    }

    protected getStepName(): string {
        return 'Scroll to element';
    }
}
