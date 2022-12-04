const Page = require('./page');

class LandingPage extends Page {
    get mainHeader () {
        return $('.hero__subtitle');
    }

    get btnGettingStarted () {
        return $('div.buttons_pzbO a[href="/docs/gettingstarted"]');
    }

    get btnSearch () {
        return $('button.DocSearch');
    }

    get searchInput () {
        return $('#docsearch-input');
    }

    async searchFor (searchPhrase) {
        await this.btnSearch.click();
        await this.searchInput.waitForEnabled();
        await this.searchInput.setValue(searchPhrase);
        await browser.keys('Enter');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new LandingPage();
