import CalculatorApp from '../src/calculator-app';
import { OPERATION_SUBSTRACT, OPERATION_ADD, OPERATION_MULTIPLY, OPERATION_DIVIDE } from '../src/constants';

describe('calculator-app', () => {
    it('should update the value', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('1');
        expect(CalculatorApp.getValue()).toEqual('1');
        CalculatorApp.updateValue('2');
        expect(CalculatorApp.getValue()).toEqual('12');
    });

    it('should clear the value', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('1');
        CalculatorApp.clearValue();
        expect(CalculatorApp.getValue()).toEqual('');
    });

    it('should update the operation', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateOperation('+');
        expect(CalculatorApp.getStoredOperation()).toEqual('+');
    });

    it('should evaluate the addition of 2 numbers', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('1');
        CalculatorApp.updateOperation(OPERATION_ADD);
        CalculatorApp.updateValue('1');
        CalculatorApp.evaluate();
        expect(CalculatorApp.getValue()).toEqual('2');
    });

    it('should evaluate the substraction of 2 numbers', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('3');
        CalculatorApp.updateOperation(OPERATION_SUBSTRACT);
        CalculatorApp.updateValue('1');
        CalculatorApp.evaluate();
        expect(CalculatorApp.getValue()).toEqual('2');
    });

    it('should return a negative value', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('3');
        CalculatorApp.updateOperation(OPERATION_SUBSTRACT);
        CalculatorApp.updateValue('5');
        CalculatorApp.evaluate();
        expect(CalculatorApp.getValue()).toEqual('-2');
    });

    it('should evaluate the multiplication of 2 numbers', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('3');
        CalculatorApp.updateOperation(OPERATION_MULTIPLY);
        CalculatorApp.updateValue('2');
        CalculatorApp.evaluate();
        expect(CalculatorApp.getValue()).toEqual('6');
    });

    it('should evaluate the division of 2 numbers', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('10');
        CalculatorApp.updateOperation(OPERATION_DIVIDE);
        CalculatorApp.updateValue('5');
        CalculatorApp.evaluate();
        expect(CalculatorApp.getValue()).toEqual('2');
    });

    it('should return a floating point value', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('3');
        CalculatorApp.updateOperation(OPERATION_DIVIDE);
        CalculatorApp.updateValue('2');
        CalculatorApp.evaluate();
        expect(CalculatorApp.getValue()).toEqual('1.5');
    });

    it('should store the last operation chosen', () => {
        CalculatorApp.clearAll();
        CalculatorApp.updateValue('3');
        CalculatorApp.updateOperation(OPERATION_ADD);
        CalculatorApp.updateOperation(OPERATION_DIVIDE);
        CalculatorApp.updateOperation(OPERATION_MULTIPLY);
        CalculatorApp.updateOperation(OPERATION_SUBSTRACT);
        CalculatorApp.updateValue('2');
        CalculatorApp.evaluate();
        expect(CalculatorApp.getValue()).toEqual('1');
    });
});