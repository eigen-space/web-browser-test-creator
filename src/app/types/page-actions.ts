export interface PageActions {
    openPage(args: { url: string }): string;
    inputValueBySelector(args: { value: string, targetSelector: string }): string;
    pressOnButtonBySelector(args: { targetSelector: string }): string;
    checkPageScreen(args: { title: string }): string;
    waitUntil(args: { duration: number }): string;
}