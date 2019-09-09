import { LitElement, html, customElement, property, CSSResult } from 'lit-element';
import styles from '../styles/screen-component.lit.scss';
import './digit-component';

@customElement('screen-component')
export class ScreenComponent extends LitElement {
    static styles: CSSResult = styles;

    @property({type: String}) value = '';

    convertToDigits(n: string) {
        if (n === '') {
            return html`<digit-component digit="0"></digit-component>`;
        } else if (n === 'E' || n === 'Infinity') {
            return html`<digit-component digit="E"></digit-component>`;
        } else {
            const stringifiedNumber = n.split('');
            const templates = [];

            stringifiedNumber.forEach(val => {
                switch(val) {
                    case '.':
                        templates.push(html`<span class="ScreenComponent-floatingpoint"></span>`);
                        break;
                    case '-':
                        templates.push(html`<span class="ScreenComponent-minus"></span>`);
                        break;
                    default:
                        templates.push(html`<digit-component digit="${val}"></digit-component>`);
                        break;
                }
            });

            return templates;
        }
    }

    render() {
        return html`
            <div class="ScreenComponent">
                ${this.convertToDigits(this.value)}
            </div>
        `;
    }
}
