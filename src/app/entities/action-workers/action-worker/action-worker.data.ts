import { ActionWorker } from './action-worker';

interface Args {
    url: string;
}

export class SomeActionWorker extends ActionWorker {

    runAutomationToolMethod(args: Required<Args>): string {
        return args.url;
    }

    protected parseRawArgs(rawArgs: RegExpExecArray): Args {
        const [, url] = rawArgs;
        return { url };
    };

    protected getStepName(): string {
        return 'Open page';
    }

    protected getStepPattern(): RegExp {
        return /^Open\spage\s'(.*)'$/g;
    }
}
