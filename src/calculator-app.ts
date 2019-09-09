import {OPERATION_ADD, OPERATION_SUBSTRACT, OPERATION_MULTIPLY, OPERATION_DIVIDE, MAX_DIGITS} from './constants';

class CalculatorApp {
    value: string = '';

    operation: string = '';

    storedValue: number = 0;

    storedOperation: string = '';

    getValue() {
        return this.value;
    }

    getStoredOperation() {
        return this.storedOperation;
    }

    getStoredValue() {
        return this.storedValue;
    }

    updateValue(value: String) {
        if (this.value.indexOf('.') > -1 && value === '.') {
            return;
        }

        if (this.operation) {
            this.value = '';
            this.operation = '';
        }

        if (this.value.replace('.', '').length < MAX_DIGITS) {
            this.value += value;
        }
        
        this.updateOperation('');
    }

    clearValue() {
        this.value = '';
    }

    clearAll() {
        this.value = '';
        this.operation = '';
        this.storedOperation = '';
        this.storedValue = 0;
    }

    updateOperation(operation: string) {
        if (operation) {
            this.operation = operation;
            this.storedOperation = operation;
            this.storedValue = parseFloat(this.value) || 0;
        }
    }

    clearOperation() {
        this.operation = '';
        this.storedOperation = '';
    }

    evaluate() {
        let value: number;

        switch(this.storedOperation) {
            case OPERATION_ADD:
                value = (this.storedValue + parseFloat(this.value));
                break;
            case OPERATION_SUBSTRACT:
                value = (this.storedValue - parseFloat(this.value));
                break;
            case OPERATION_MULTIPLY:
                value = (this.storedValue * parseFloat(this.value));
                break;
            case OPERATION_DIVIDE:
                value = (this.storedValue / parseFloat(this.value));
                break;
        }

        const maxDigitsConverter = Math.pow(10, MAX_DIGITS);
        value = Math.round(value * maxDigitsConverter) / maxDigitsConverter;
        this.clearAll();
        return value.toString();
    }
}

export default new CalculatorApp();