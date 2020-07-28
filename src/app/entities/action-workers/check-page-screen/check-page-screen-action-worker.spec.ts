import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';
import { CheckPageScreenActionWorker } from './check-page-screen-action-worker';

describe('CheckPageScreenActionWorker', () => {

    function buildStep(name = ''): string {
        return `Check page screen as '${name}'`;
    }

    const worker = new CheckPageScreenActionWorker(pageActionGeneratorMock);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const title = 'Invoice form';
            const step = buildStep(title);

            worker.do(step);

            expect(pageActionGeneratorMock.checkPageScreen).toBeCalledWith({ title });
        });
    });

    describe('#checkAffiliation', () => {

        it('should return true if the worker processes this step', () => {
            const step = buildStep('Check page screen');
            expect(worker.checkAffiliation(step)).toBeTruthy();
        });

        it('should return false if the worker does not processes this step', () => {
            const step = buildStep().replace('\'\'', '');
            expect(worker.checkAffiliation(step)).toBeFalsy();
        });
    });
});
