const initialState = {
  firstOperand: '',
  secondOperand: '',
  operator: undefined,
  display: '0',
  clearLabel: 'AC',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DIGIT_CLICK':
      let valueToAppend = action.operandValue;
      if (valueToAppend === '.') {
        valueToAppend = /\./.test(state.display) ? '' : valueToAppend;
        valueToAppend = state.display === '0' ? '0.' : valueToAppend;
      }

      const nextValue = state[action.operandKey] + valueToAppend;

      return {
        ...state,
        [action.operandKey]: nextValue,
        display: formatNumberByLocale(nextValue),
        clearLabel: 'C',
      };

    case 'OPERATOR_CLICK':
      return { ...state, operator: action.operator };

    case 'PLUS_MINUS_CLICK':
      const operandKey =
        state.secondOperand !== '' ? 'secondOperand' : 'firstOperand';
      const signedValue = Number(state[operandKey]) * -1 + '';

      return {
        ...state,
        [operandKey]: signedValue,
        display: formatNumberByLocale(signedValue),
      };

    case 'CLEAR_CLICK':
      const newState = { clearLabel: 'AC' };

      if (state.secondOperand !== '') {
        newState.firstOperand = state.firstOperand;
        newState.operator = state.operator;
      } else if (state.operator) {
        newState.firstOperand = state.firstOperand;
        newState.display = state.display;
      }

      return {
        ...initialState,
        ...newState,
      };

    case 'EQUALS_CLICK':
      return { ...state };
    case 'CALCULATE':
      const { type, display, ...rest } = action;
      return { ...state, display: formatNumberByLocale(display), ...rest };
    case 'ERROR':
      return { ...state, display: 'Error' };
    default:
      return state;
  }
}

function formatNumberByLocale(value) {
  return Number(value).toLocaleString(window.navigator.language || 'en-GB', {});
}

export default reducer;
