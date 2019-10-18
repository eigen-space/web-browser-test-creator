import { PressOnElementActionWorker } from './press-on-element-action-worker';
import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';

describe('PressOnElementActionWorker', () => {

    function buildStep(data = '', typeElement = 'element'): string {
        return `Press on ${typeElement} '${data}'`;
    }

    const worker = new PressOnElementActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const data = 'title';
            const step = buildStep(data);

            worker.do(step);

            expect(pageActionGeneratorMock.pressOnElement).toBeCalledWith({ data });
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