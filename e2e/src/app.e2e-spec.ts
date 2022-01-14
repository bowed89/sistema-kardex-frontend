import {SerenityPage} from './app.po';

describe('SerenityPage', () => {
    let page: SerenityPage;

    beforeEach(() => {
        page = new SerenityPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to Serenity!');
    });

});
