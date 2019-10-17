import { ActionManager } from './action-manager';
import { pageActionGeneratorMock } from '../../mocks/page-action-generator.mock';

describe('ActionManager', () => {
    let manager: ActionManager;

    beforeEach(() => {
        manager = new ActionManager(pageActionGeneratorMock);
    });

    describe('#getConvertedStep', () => {

        it('should generate a piece of spec for given step', () => {
            manager.getConvertedStep('Open page on http://ya.ru');
            expect(pageActionGeneratorMock.openPage).toBeCalled();
        });

        it('should throw an error when it does not find a worker', () => {
            expect(() => manager.getConvertedStep('step')).toThrow();
        });
    });
});