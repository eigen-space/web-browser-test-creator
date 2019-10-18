import { PageActionGenerator } from '../types/page-action-generator';

export const pageActionGeneratorMock: PageActionGenerator = {
    openPage: jest.fn(),
    inputValueBySelector: jest.fn(),
    pressOnButtonBySelector: jest.fn(),
    checkPageScreen: jest.fn(),
    pause: jest.fn(),
    scrollToElementBySelector: jest.fn(),
    pressOnElement: jest.fn(),
    scrollToElement: jest.fn()
};