import { PageActionGenerator } from '../../../types/page-action-generator';
import { OpenPageActionWorker } from './open-page-action-worker';

describe('OpenPageActionWorker', () => {

    function buildStep(url = ''): string {
        return `Open page on ${url}`;
    }

    const generator: PageActionGenerator = {
        openPage: jest.fn(),
        inputValueBySelector: jest.fn(),
        pressOnButtonBySelector: jest.fn(),
        checkPageScreen: jest.fn()
    };

    const worker = new OpenPageActionWorker(generator);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const url = 'http://www.ya.ru';
            const step = buildStep(url);

            worker.do(step);

            expect(generator.openPage).toBeCalledWith({ url });
        });

        it('should throw an error when the step does not contain the some parameters', () => {
            const step = buildStep();
            expect(() => worker.do(step)).toThrow();
        });
    });

    describe('#checkAffiliation', () => {

        it('should return true if the worker processes this step', () => {
            const step = buildStep();
            expect(worker.checkAffiliation(step)).toBeTruthy();
        });

        it('should return false if the worker does not processes this step', () => {
            expect(worker.checkAffiliation('step')).toBeFalsy();
        });
    });
});