import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    title: string;
}

export class CheckPageScreenActionWorker extends ActionWorker<ParsedParams> {

    protected runAutomationToolMethod(args: { title: string }): string {
        return this.actionGenerator.checkPageScreen(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, title] = rawArgs;
        return { title };
    };

    protected getStepName(): string {
        return 'Check page screen';
    }

    protected getStepPattern(): RegExp {
        return /^Check\spage\sscreen\sas\s'(.*)'$/g;
    }
}
