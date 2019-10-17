export interface PageActionGenerator {
    openPage(args: { url: string }): string;
    inputValueBySelector(args: { value: string, targetSelector: string }): string;
    pressOnButtonBySelector(args: { targetSelector: string }): string;
    checkPageScreen(args: { title: string }): string;
    pause(args: { duration: string }): string;
    scrollToElement(args: { targetSelector: string }): string;
}