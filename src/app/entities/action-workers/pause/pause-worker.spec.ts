import { PauseActionWorker } from './pause-action-worker';
import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';

describe('OpenPageActionWorker', () => {

    function buildStep(duration = ''): string {
        return `Pause for ${duration} ms`;
    }

    const worker = new PauseActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const duration = '1000';
            const step = buildStep(duration);

            worker.do(step);

            expect(pageActionGeneratorMock.pause).toBeCalledWith({ duration });
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