import { FirebaseAuthAngular2Page } from './app.po';

describe('firebase-auth-angular2 App', function() {
  let page: FirebaseAuthAngular2Page;

  beforeEach(() => {
    page = new FirebaseAuthAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
