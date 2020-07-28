export interface PageActionGenerator {
    openPage(args: { url: string }): string;
    inputValueBySelector(args: { value: string, targetSelector: string }): string;
    pressOnButtonBySelector(args: { targetSelector: string }): string;
    checkPageScreen(args: { title: string }): string;
    pause(args: { duration: string }): string;
    scrollToElementBySelector(args: { targetSelector: string }): string;
    pressOnElement(args: { data: string }): string;
    scrollToElement(args: { data: string }): string;
    checkRequest(args: { method: string, url: string, bodyPath: string }): string;
}
