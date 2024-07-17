import { expect, fixture, html } from '@open-wc/testing';
suite('hello-world.component tests', () => {
    test('fixture instantiation', async () => {
        const el = (await fixture(html `<hello-world></hello-world> `));
        expect(el).not.to.equal(null);
        //    expect(true).to.equal(false);
    });
});
//# sourceMappingURL=hello-world.component.spec.js.map