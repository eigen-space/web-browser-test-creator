import { OpenPageActionWorker } from './open-page-action-worker';
import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';

describe('OpenPageActionWorker', () => {

    function buildStep(url = ''): string {
        return `Open page on ${url}`;
    }

    const worker = new OpenPageActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const url = 'http://www.ya.ru';
            const step = buildStep(url);

            worker.do(step);

            expect(pageActionGeneratorMock.openPage).toBeCalledWith({ url });
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