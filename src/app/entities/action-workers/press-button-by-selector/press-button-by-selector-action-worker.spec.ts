import { PageActionGenerator } from '../../../types/page-action-generator';
import { PressButtonBySelectorActionWorker } from './press-button-by-selector-action-worker';

describe('PressButtonBySelectorActionWorker', () => {

    function buildStep(targetSelector = ''): string {
        return `Press on button by selector ${targetSelector}`;
    }

    const generator: PageActionGenerator = {
        openPage: jest.fn(),
        inputValueBySelector: jest.fn(),
        pressOnButtonBySelector: jest.fn(),
        checkPageScreen: jest.fn()
    };

    const worker = new PressButtonBySelectorActionWorker(generator);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const targetSelector = '//[@id=selector]';
            const step = buildStep(targetSelector);

            worker.do(step);

            expect(generator.pressOnButtonBySelector).toBeCalledWith({ targetSelector });
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