import { PageActionGenerator } from '../..';

export const pageActionGeneratorMock: PageActionGenerator = {
    openPage: jest.fn(),
    inputValueBySelector: jest.fn(),
    pressOnButtonBySelector: jest.fn(),
    checkPageScreen: jest.fn(),
    pause: jest.fn(),
    pressOnElement: jest.fn(),
    scrollToElement: jest.fn(),
    checkRequest: jest.fn()
};
