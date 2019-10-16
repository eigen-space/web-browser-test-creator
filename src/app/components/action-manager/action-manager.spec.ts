import { PageActionGenerator } from '../../types/page-action-generator';
import { ActionManager } from './action-manager';

describe('ActionManager', () => {
    const generator: PageActionGenerator = {
        openPage: jest.fn(),
        inputValueBySelector: jest.fn(),
        pressOnButtonBySelector: jest.fn(),
        checkPageScreen: jest.fn()
    };

    const manager = new ActionManager(generator);

    describe('#getConvertedStep', () => {

        it('should call the adapter method corresponding to the step', () => {
            manager.getConvertedStep('Open page on http://ya.ru');
            expect(generator.openPage).toBeCalled();
        });

        it('should throw an error when he does not find a worker', () => {
            expect(() => manager.getConvertedStep('step')).toThrow();
        });
    });
});