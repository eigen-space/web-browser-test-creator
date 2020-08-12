import { pageActionGeneratorMock } from '../../../mocks/page-action-generator.mock';
import { SomeActionWorker } from './action-worker.data';

describe('ActionWorker', () => {

    describe('#do', () => {

        it('should inject variables', () => {
            const someActionWorker = new SomeActionWorker(pageActionGeneratorMock);
            const actual = someActionWorker.do('Open page \'{{MY_IP}}\'');
            expect(actual).toMatch(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/gm);
        });

        it('should throw an error if a variable is not defined', () => {
            const someActionWorker = new SomeActionWorker(pageActionGeneratorMock);
            expect(() => someActionWorker.do('Open page \'{{BROKEN_VAR}}\''))
                .toThrowError('the requested variable is not available');
        });
    });
});
