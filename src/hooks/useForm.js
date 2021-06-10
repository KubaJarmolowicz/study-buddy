import { useReducer } from "react";

const actionTypes = {
	inputChange: "INPUT CHANGE",
	clearForm: "CLEAR FORM",
	consentToggle: "CONSENT TOGGLE",
	throwError: "THROW ERROR",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.inputChange:
			return { ...state, [action.field]: action.value };
		case actionTypes.clearForm:
			return action.initialValues;
		case actionTypes.consentToggle:
			return { ...state, consent: !state.consent };
		case actionTypes.throwError:
			return { ...state, error: action.errorValue };
		default:
			return state;
	}
};

export const useForm = initialValues => {
	const [formValues, dispatch] = useReducer(reducer, initialValues);

	const handleInputChange = e => {
		dispatch({
			type: actionTypes.inputChange,
			field: e.target.name,
			value: e.target.value,
		});
	};

	const handleClearForm = () => {
		dispatch({ type: actionTypes.clearForm, initialValues });
	};

	const handleThrowError = errorMessage => {
		dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
	};

	const handleConsentToggle = () => {
		dispatch({ type: actionTypes.consentToggle });
	};

	return {
		formValues,
		handleInputChange,
		handleClearForm,
		handleThrowError,
		handleConsentToggle,
	};
};
