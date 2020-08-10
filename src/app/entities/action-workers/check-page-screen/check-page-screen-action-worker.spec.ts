import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';
import { CheckPageScreenActionWorker } from './check-page-screen-action-worker';

describe('CheckPageScreenActionWorker', () => {

    function buildStep(): string {
        return 'Check page screen';
    }

    const worker = new CheckPageScreenActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const step = buildStep();

            worker.do(step);

            expect(pageActionGeneratorMock.checkPageScreen).toBeCalledWith();
        });
    });

    describe('#checkAffiliation', () => {

        it('should return true if the worker processes this step', () => {
            const step = buildStep();
            expect(worker.checkAffiliation(step)).toBeTruthy();
        });
    });
});
