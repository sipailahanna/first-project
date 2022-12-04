const Page = require('./page');

class DocsPage extends Page {
    open () {
        return super.open('docs/gettingstarted');
    }

    async openSidebarItem (itemName) {
        const sidebarItemLocator = `div.sidebar_njMd ul li a[href*='${itemName}']`;
        await $(sidebarItemLocator).waitForClickable();
        await $(sidebarItemLocator).click();
    }

    async getSubItemsOfSidebarItem (itemName) {
        const subItemListLocator =
            `(//a[contains(@href,'${itemName}')]//../following-sibling::ul//a[@class='menu__link'])`;
        const lastSubItemIndex = await $$(subItemListLocator).length;
        await $(subItemListLocator.concat(`[${lastSubItemIndex}]`)).waitForDisplayed({ timeout: 5000 });
        return $$(subItemListLocator);
    }
}

module.exports = new DocsPage();