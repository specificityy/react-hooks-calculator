import { reducer } from './';

describe('Reducer', () => {
    describe('SET_DIGIT', () => {
        it('should set passed operand and clearLabel', () => {
            expect(
                reducer({ firstOperand: '' }, { type: 'SET_DIGIT', operandKey: 'firstOperand', operandValue: '5' }),
            ).toEqual({
                firstOperand: '5',
                display: '5',
                clearLabel: 'C',
            });
        });

        it('should not append more than one dot', () => {
            expect(
                reducer(
                    { firstOperand: '5.5', display: '5.5' },
                    { type: 'SET_DIGIT', operandKey: 'firstOperand', operandValue: '.' },
                ),
            ).toEqual({
                firstOperand: '5.5',
                display: '5.5',
                clearLabel: 'C',
            });
        });

        it('should append dot after 0 when there is no firstOperand yet', () => {
            expect(
                reducer(
                    { firstOperand: '', display: '0' },
                    { type: 'SET_DIGIT', operandKey: 'firstOperand', operandValue: '.' },
                ),
            ).toMatchObject({
                firstOperand: '0.',
                display: '0.',
                clearLabel: 'C',
            });
        });
    });

    describe('SET_OPERATOR', () => {
        it('should set operator', () => {
            expect(reducer({}, { type: 'SET_OPERATOR', operator: '+' })).toEqual({
                operator: '+',
            });
        });
    });

    describe('TOGGLE_PLUS_MINUS', () => {
        it('should toggle plus minus on firstOperand when there is no secondOperand present', () => {
            expect(reducer({ firstOperand: '5', secondOperand: '' }, { type: 'TOGGLE_PLUS_MINUS' })).toEqual({
                display: '-5',
                firstOperand: '-5',
                secondOperand: '',
            });
        });

        it('should toggle plus minus on secondOperand when present', () => {
            expect(reducer({ firstOperand: '5', secondOperand: '5' }, { type: 'TOGGLE_PLUS_MINUS' })).toEqual({
                display: '-5',
                firstOperand: '5',
                secondOperand: '-5',
            });
        });
    });

    describe('CLEAR', () => {
        it('should set label to AC', () => {
            expect(reducer({}, { type: 'CLEAR' })).toMatchObject({
                clearLabel: 'AC',
            });
        });

        it('should only remove secondOperand if present', () => {
            expect(reducer({ firstOperand: '5', secondOperand: '5', operator: '+' }, { type: 'CLEAR' })).toEqual({
                firstOperand: '5',
                secondOperand: '',
                display: '0',
                operator: '+',
                clearLabel: 'AC',
            });
        });

        it('should only remove operator if present and secondOperand is not present', () => {
            expect(reducer({ firstOperand: '5', secondOperand: '', operator: '+' }, { type: 'CLEAR' })).toEqual({
                firstOperand: '5',
                secondOperand: '',
                operator: undefined,
                clearLabel: 'AC',
            });
        });

        it('should remove firstOperand if there is no operator or secondOperand', () => {
            expect(reducer({ firstOperand: '5', secondOperand: '', operator: '' }, { type: 'CLEAR' })).toEqual({
                firstOperand: '',
                secondOperand: '',
                display: '0',
                clearLabel: 'AC',
            });
        });
    });

    describe('CALCULATE', () => {
        it('should set the calculated value in the display', () => {
            expect(reducer({}, { type: 'CALCULATE', display: '2000000' })).toEqual({
                display: '2,000,000',
            });
        });
    });

    describe('ERROR', () => {
        it('should set the display to Error', () => {
            expect(reducer({}, { type: 'ERROR' })).toEqual({
                display: 'Error',
            });
        });
    });
});
