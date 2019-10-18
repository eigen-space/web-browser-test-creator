import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    targetSelector?: string;
}

export class PressOnButtonBySelectorActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['targetSelector'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.pressOnButtonBySelector(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, targetSelector] = rawArgs;
        return { targetSelector };
    };

    protected getStepPattern(): RegExp {
        return /^Press\son\sbutton\sby\sselector\s(.*)$/g;
    }

    protected getStepName(): string {
        return 'Press on button by selector';
    }
}
