import { LitElement, html, customElement, CSSResult, property } from 'lit-element';
import styles from '../styles/main-component.lit.scss';
import './screen-component';
import './button-component';
import CalculatorApp from '../calculator-app';
import {OPERATION_ADD, OPERATION_SUBSTRACT, OPERATION_MULTIPLY, OPERATION_DIVIDE} from '../constants';

@customElement('calculator-app')
export class MainComponent extends LitElement {
    static styles: CSSResult = styles;

    @property({type: String})
    value: string = '';

    getLabelFromEvent(e: Event) {
        return (<HTMLElement>e.target).getAttribute('label');
    }

    updateScreenValue() {
        this.shadowRoot.querySelector('screen-component').setAttribute('value', CalculatorApp.getValue());
    }

    updateValue(e: Event) {
        CalculatorApp.updateValue(this.getLabelFromEvent(e));
        this.updateScreenValue();
    }

    clear() {
        CalculatorApp.clearAll();
        this.clearOperation();
        this.updateScreenValue();
    }

    updateStoredOperation() {
        this.clearOperation();
        this.shadowRoot.querySelector(`button-component[label="${CalculatorApp.getStoredOperation()}"]`).setAttribute('active', 'active');
    }

    clearOperation() {
        this.shadowRoot.querySelectorAll('button-component[type="operation"]').forEach(item => item.removeAttribute('active'));
    }

    updateOperation(e: Event) {
        if (!CalculatorApp.getStoredOperation()) {
            const operation = this.getLabelFromEvent(e);
            CalculatorApp.updateOperation(operation);
            this.updateStoredOperation();
        }
    }

    evaluate() {
        if (CalculatorApp.getStoredOperation()) {
            this.value = CalculatorApp.evaluate();
            this.updateScreenValue();
            this.clearOperation();
        }
    }

    render() {
        return html`
            <div class="CalculatorApp">
                <screen-component value="${this.value}"></screen-component>
                <div class="CalculatorApp-userInput">
                    <div class="CalculatorApp-userInput-numbers">
                        <button-component label="1" @click="${this.updateValue}"></button-component>
                        <button-component label="2" @click="${this.updateValue}"></button-component>
                        <button-component label="3" @click="${this.updateValue}"></button-component>
                        <button-component label="4" @click="${this.updateValue}"></button-component>
                        <button-component label="5" @click="${this.updateValue}"></button-component>
                        <button-component label="6" @click="${this.updateValue}"></button-component>
                        <button-component label="7" @click="${this.updateValue}"></button-component>
                        <button-component label="8" @click="${this.updateValue}"></button-component>
                        <button-component label="9" @click="${this.updateValue}"></button-component>
                        <button-component label="0" @click="${this.updateValue}"></button-component>
                        <button-component label="." @click="${this.updateValue}"></button-component>
                        <button-component label="AC" @click="${this.clear}"></button-component>
                    </div>
                    <div class="CalculatorApp-userInput-operations">
                        <button-component label="${OPERATION_ADD}" type="operation" @click="${this.updateOperation}"></button-component>
                        <button-component label="${OPERATION_SUBSTRACT}" type="operation" @click="${this.updateOperation}"></button-component>
                        <button-component label="${OPERATION_MULTIPLY}" type="operation" @click="${this.updateOperation}"></button-component>
                        <button-component label="${OPERATION_DIVIDE}" type="operation" @click="${this.updateOperation}"></button-component>
                    </div>
                    <button-component label="=" type="operation" @click="${this.evaluate}"></button-component>
                </div>
            </div>
        `;
    }
}