import { LitElement, html, customElement, property } from 'lit-element';
import styles from '../styles/button-component.lit.scss';

@customElement('button-component')
export class ButtonComponent extends LitElement {
    static styles = styles;
    
    @property({type: String})
    label: string = '';

    @property({type: Boolean})
    active: boolean = false;

    @property({type: String})
    type: string = '';

    render() {
        return html`<button class="${this.type} ${this.active? 'active' : ''}">${this.label}</button>`;
    }
}