import {expect, fixture, html} from '@open-wc/testing';
import {HelloWorldComponent} from '../hello-world.component';

suite('hello-world.component tests', () => {
  test('fixture instantiation', async () => {
    const el: HTMLElement = (await fixture(
      html`<hello-world></hello-world> `
    )) as HelloWorldComponent;
    expect(el).not.to.equal(null);
    //    expect(true).to.equal(false);
  });
});
