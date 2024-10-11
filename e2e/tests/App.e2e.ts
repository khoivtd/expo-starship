import { by, element, expect } from 'detox';

describe('App', () => {
  it('should have App screen', async () => {
    await expect(
      element(by.text('Open up App/ to start working on your app!')),
    ).toBeVisible();
  });
});
