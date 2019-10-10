import { AutomationToolActions } from '../../../../../app/types/automation-tool-actions';

export class ActionAdapter implements AutomationToolActions {

    openPage(args: { url: string }): string {
        return `browser.url('${args.url}')`;
    };

    inputValueBySelector(args: { value: string, targetSelector: string }): string {
        return `$('${args.targetSelector}').setValue('${args.value}');`;
    };

    pressOnButtonBySelector(args: { targetSelector: string }): string {
        return `$('${args.targetSelector}').click();`;
    };

    checkPageScreen(args: { title: string }): string {
        // TODO Add wdio image comprase typings
        return `
            // @ts-ignore
            expect(browser.checkFullPageScreen('${args.title}').toEqual(0);
        `;
    };

    waitUntil(): string {
        return '';
    }

    wrapToHeaderSpec(args: { title: string, scenarios: string }): string {
        return `
            import * as expect from 'expect';
            
            describe('${args.title}', () => {
                ${args.scenarios}
            });
        `;
    };

    wrapToItemSpec(args: { title: string, steps: string }): string {
        return `
            it('${args.title}', () => {
                ${args.steps}
            });
        `;
    };
}