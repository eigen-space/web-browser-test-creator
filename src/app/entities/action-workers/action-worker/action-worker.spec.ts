import { ActionWorker } from './action-worker';
import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';

describe('ActionWorker', () => {

    describe('#do', () => {

        it('should inject variables', () => {
            const someActionWorker = new SomeActionWorker(pageActionGeneratorMock);
            const actual = someActionWorker.do('Open page \'{{MY_IP}}\'');
            expect(actual).toMatch(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/gm);
        });

        it('should throw an error if a variable is not defined', () => {
            const someActionWorker = new SomeActionWorker(pageActionGeneratorMock);
            expect(() => someActionWorker.do('Open page \'{{BROKEN_VAR}}\''))
                .toThrowError('the requested variable is not available');
        });
    });
});

interface Args {
    url: string;
}

class SomeActionWorker extends ActionWorker {

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
