import { html } from 'lit-element';
import { fixture } from '@open-wc/testing-helpers';
import '../src/components/screen-component.ts';

describe('screen-component', () => {
    it('should render', async () => {
        const element = await fixture(html`<screen-component></screen-component>`);
        const shadowRoot = element.shadowRoot;
        expect(shadowRoot.querySelectorAll('.ScreenComponent').length).toEqual(1);
    });

    it('should contain a screen showing 0', async () => {
        const element = await fixture(html`<screen-component></screen-component>`);
        const shadowRoot = element.shadowRoot;
        expect(shadowRoot.querySelector('digit-component').getAttribute('digit')).toEqual('0');
    });

    it('should contain a screen showing 1234567890', async () => {
        const element = await fixture(html`<screen-component value="1234567890"></screen-component>`);
        const shadowRoot = element.shadowRoot;
        const digits = shadowRoot.querySelectorAll('digit-component');
        expect(digits[0].getAttribute('digit')).toEqual('1');
        expect(digits[1].getAttribute('digit')).toEqual('2');
        expect(digits[2].getAttribute('digit')).toEqual('3');
        expect(digits[3].getAttribute('digit')).toEqual('4');
        expect(digits[4].getAttribute('digit')).toEqual('5');
        expect(digits[5].getAttribute('digit')).toEqual('6');
        expect(digits[6].getAttribute('digit')).toEqual('7');
        expect(digits[7].getAttribute('digit')).toEqual('8');
        expect(digits[8].getAttribute('digit')).toEqual('9');
        expect(digits[9].getAttribute('digit')).toEqual('0');
    });
});