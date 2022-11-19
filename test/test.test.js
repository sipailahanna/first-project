const {Builder, By, until, Key} = require("selenium-webdriver");
const { expect } = require('chai');

describe('selenium-webdriver tests', function () {
    let driver;
    const TIMEOUT = 5000;

    beforeEach( async() => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.manage().window().maximize();
    });

    it('verify header, select new menu item, verify header again', async () => {
        const chromeDriverHeaderLocator = '//h1/*[contains(text(),"ChromeDriver")]';
        const header = await driver.findElement(By.xpath(chromeDriverHeaderLocator));
        expect(await header.isDisplayed()).to.be.true;

        const extensionsLinkLocator = '//nav[@id="WDxLfe"]/ul/li[3]//a[@href="/extensions"]';
        const chromeExtensionsHeaderLocator = '//h1/*[contains(text(),"Chrome Extensions")]';
        await driver.findElement(By.xpath(extensionsLinkLocator)).click();
        const newHeader = await driver.findElement(By.xpath(chromeExtensionsHeaderLocator));
        expect(await newHeader.isDisplayed()).to.be.true;
    })

    it('search for driver and verify first link contains driver word', async () => {
        const searchButtonLocator = '//div[@role="button" and @aria-label="Open search bar"]';
        const searchInputLocator = '//input[@type="search"]';
        const resultsLocator = '//div[contains(text(),"Results from this site")]';
        const firstLinkLocator = '(//a[1]/following-sibling::*)[1]';

        await driver.findElement(By.xpath(searchButtonLocator)).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath(searchInputLocator))), TIMEOUT);
        const searchInput = await driver.findElement(By.xpath(searchInputLocator));
        await driver.actions()
            .click(searchInput)
            .sendKeys('driver')
            .sendKeys(Key.ENTER)
            .perform();
        await driver.wait(until.elementLocated(By.xpath(resultsLocator)), TIMEOUT);
        await driver.wait(until.elementLocated(By.xpath(firstLinkLocator)), TIMEOUT);
        const firstLink = await driver.findElement(By.xpath(firstLinkLocator));
        expect(await firstLink.getText()).to.be.a('string').that.contains('driver');
    })

    it('open mobile emulation and verify url contains /mobile-emulation', async () => {
        const moreElementLocator = '//nav[@id="WDxLfe"]/ul/li[position()>11]';
        await driver.wait(until.elementLocated(By.xpath(moreElementLocator)), TIMEOUT);
        const moreElement = await driver.findElement(By.xpath(moreElementLocator));
        const actions = driver.actions({ async: true });
        await actions.move({ origin: moreElement }).perform();

        const mobileEmulatorLinkLocator = '//li[@in-more-item]//a[@href=\"/mobile-emulation\"]';
        await driver.wait(until.elementLocated(By.xpath(mobileEmulatorLinkLocator)), TIMEOUT);
        await driver.findElement(By.xpath(mobileEmulatorLinkLocator)).click();
        const currentUrl = await driver.getCurrentUrl();
        expect(await currentUrl).to.be.a('string').that.contains('/mobile-emulation');
    })

    afterEach(async () => {
        await driver.close();
    })
})