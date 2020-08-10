import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';
import { RequestCheckActionWorker } from './request-check-action-worker';

describe('RequestCheckActionWorker', () => {

    function buildStep(method = '', url = ''): string {
        return `Check ${method}-request to '${url}'`;
    }

    const worker = new RequestCheckActionWorker(pageActionGeneratorMock);

    const url = 'http://localhost:3001/invoices/list';
    const method = 'POST';

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const step = buildStep(method, url);

            worker.do(step);

            expect(pageActionGeneratorMock.checkRequest).toBeCalledWith({ url, method });
        });
    });

    describe('#checkAffiliation', () => {

        it('should return true if the worker processes this step', () => {
            const step = buildStep(method, url);
            expect(worker.checkAffiliation(step)).toBeTruthy();
        });

        it('should return false if the worker does not processes this step because of url', () => {
            const step = 'Check POST-request';
            expect(worker.checkAffiliation(step)).toBeFalsy();
        });
    });
});
