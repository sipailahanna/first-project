const Page = require('./page');

class ArticlePage extends Page {
    get mainHeader () {
        return $('article header h1');
    }
}

module.exports = new ArticlePage();