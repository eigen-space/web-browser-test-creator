import { ScrollToElementActionWorker } from './scroll-to-element-action-worker';
import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';

describe('ScrollToElementActionWorker', () => {

    function buildStep(data = ''): string {
        return `Scroll to element '${data}'`;
    }

    const worker = new ScrollToElementActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const data = 'data';
            const step = buildStep(data);

            worker.do(step);

            expect(pageActionGeneratorMock.scrollToElement).toBeCalledWith({ data });
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