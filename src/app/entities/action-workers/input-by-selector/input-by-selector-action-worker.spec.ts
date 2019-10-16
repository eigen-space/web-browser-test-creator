import { InputBySelectorActionWorker } from './input-by-selector-action-worker';
import { PageActionGenerator } from '../../../types/page-action-generator';

describe('InputBySelectorActionWorker', () => {

    function buildStep(value = '', selector = ''): string {
        return `Enter ${value} in the input field by selector ${selector}`;
    }

    const generator: PageActionGenerator = {
        openPage: jest.fn(),
        inputValueBySelector: jest.fn(),
        pressOnButtonBySelector: jest.fn(),
        checkPageScreen: jest.fn()
    };

    const worker = new InputBySelectorActionWorker(generator);

    describe('#do', () => {

        it('should call the adapter method with the correct parameters', () => {
            const value = 'someValue';
            const targetSelector = '//[@id=selector]';
            const step = buildStep(value, targetSelector);

            worker.do(step);

            expect(generator.inputValueBySelector).toBeCalledWith({ value, targetSelector });
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