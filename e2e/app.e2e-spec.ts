import { Prototipo2Page } from './app.po';

describe('prototipo2 App', function() {
  let page: Prototipo2Page;

  beforeEach(() => {
    page = new Prototipo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
