import { PressOnButtonBySelectorActionWorker } from './press-on-button-by-selector-action-worker';
import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';

describe('PressOnButtonBySelectorActionWorker', () => {

    function buildStep(targetSelector = ''): string {
        return `Press on button by selector ${targetSelector}`;
    }

    const worker = new PressOnButtonBySelectorActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const targetSelector = '//[@id=selector]';
            const step = buildStep(targetSelector);

            worker.do(step);

            expect(pageActionGeneratorMock.pressOnButtonBySelector).toBeCalledWith({ targetSelector });
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
            const step = buildStep().replace(' ', '');
            expect(worker.checkAffiliation(step)).toBeFalsy();
        });
    });
});