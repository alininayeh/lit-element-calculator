import { LitElement, html, customElement, property } from 'lit-element';
import styles from '../styles/digit-component.lit.scss';

@customElement('digit-component')
export class DigitComponent extends LitElement {
    static styles = styles;

    @property({type: String})
    digit: string = '0';

    render() {
        return html`
            <div class="DigitComponent digit${this.digit}">
                <span class="DigitComponent-part"></span>
                <span class="DigitComponent-part"></span>
                <span class="DigitComponent-part"></span>
                <span class="DigitComponent-part"></span>
                <span class="DigitComponent-part"></span>
                <span class="DigitComponent-part"></span>
                <span class="DigitComponent-part"></span>
            </div>
        `;
    }
}
