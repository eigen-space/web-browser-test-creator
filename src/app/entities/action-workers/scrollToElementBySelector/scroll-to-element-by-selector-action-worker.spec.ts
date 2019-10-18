import { ScrollToElementBySelectorActionWorker } from './scroll-to-element-by-selector-action-worker';
import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';

describe('ScrollToElementBySelectorActionWorker', () => {

    function buildStep(selector = ''): string {
        return `Scroll to element by selector ${selector}`;
    }

    const worker = new ScrollToElementBySelectorActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const targetSelector = 'someSelector';
            const step = buildStep(targetSelector);

            worker.do(step);

            expect(pageActionGeneratorMock.scrollToElementBySelector).toBeCalledWith({ targetSelector });
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