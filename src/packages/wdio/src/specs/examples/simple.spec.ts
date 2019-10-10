import * as expect from 'expect';

describe('webdriver.io page', () => {

    it('should have the right title', () => {
        browser.url('https://docs.google.com/forms/d/e/1FAIpQLSceMm-yoB3e9tLG-aoSRdyss705mXxRr_su6BP46ByOBH_0oA/viewform');
        // @ts-ignore
        expect(browser.checkFullPageScreen('fullPage')).toEqual(0);
    });
});