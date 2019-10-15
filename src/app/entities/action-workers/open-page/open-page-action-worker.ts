import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    url?: string;
}

export class OpenPageActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['url'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.openPage(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, url] = rawArgs;
        return { url };
    };

    protected getStepPattern(): RegExp {
        return /^Open\spage\son\s(.*)$/g;
    }

    protected getStepName(): string {
        return 'Open page';
    }
}
