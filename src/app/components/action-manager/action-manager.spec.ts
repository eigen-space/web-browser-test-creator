import { PageActionGenerator } from '../../types/page-action-generator';
import { ActionManager } from './action-manager';

describe('ActionManager', () => {
    let manager: ActionManager;

    const generator: PageActionGenerator = {
        openPage: jest.fn(),
        inputValueBySelector: jest.fn(),
        pressOnButtonBySelector: jest.fn(),
        checkPageScreen: jest.fn()
    };

    beforeEach(() => {
        manager = new ActionManager(generator);
    });

    describe('#getConvertedStep', () => {

        it('should generate a piece of spec for given step', () => {
            manager.getConvertedStep('Open page on http://ya.ru');
            expect(generator.openPage).toBeCalled();
        });

        it('should throw an error when it does not find a worker', () => {
            expect(() => manager.getConvertedStep('step')).toThrow();
        });
    });
});