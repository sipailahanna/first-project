const LandingPage = require('../pageobjects/landing.page');
const ArticlePage = require('../pageobjects/article.page');
const DocsPage = require('../pageobjects/docs.page');

describe('Test webdriverio site', () => {
    it('open webdriverio site and verify main elements are present', async () => {
        await LandingPage.open()
        await expect(LandingPage.mainHeader).toBeDisplayed();
        await expect(LandingPage.mainHeader).toHaveTextContaining(
            'Next-gen browser and mobile automation test framework for Node.js')
        await expect(LandingPage.btnGettingStarted).toBeDisplayed();
    })

    it('search for getValue function documentation', async () => {
        const searchPhrase = 'getValue';

        await LandingPage.open();
        await LandingPage.searchFor(searchPhrase);
        await expect(ArticlePage.mainHeader).toBeDisplayed();
        await expect(ArticlePage.mainHeader).toHaveTextContaining(searchPhrase);
    })

    it('open docs page and verify all items in configuration tab', async () => {
        const expectedSubItemNames = ['Driver Binaries', 'Capabilities', 'Babel Setup', 'TypeScript Setup', 'Proxy Setup'];
        const configuration = 'configuration';

        await DocsPage.open();
        await DocsPage.openSidebarItem(configuration);
        const subItems = await DocsPage.getSubItemsOfSidebarItem(configuration);
        await expect(subItems).toBeElementsArrayOfSize(5);
        const subItemsNames = await Promise.all(subItems.map(item => item.getText()));
        await expect(subItemsNames).toEqual(expectedSubItemNames);
    })
})


