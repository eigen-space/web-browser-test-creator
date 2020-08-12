import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    title: string;
}

export class CheckPageScreenActionWorker extends ActionWorker<ParsedParams> {

    protected runAutomationToolMethod(): string {
        return this.actionGenerator.checkPageScreen();
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, title] = rawArgs;
        return { title };
    };

    protected getStepName(): string {
        return 'Check page screen';
    }

    protected getStepPattern(): RegExp {
        return /^Check\spage\sscreen$/g;
    }
}
