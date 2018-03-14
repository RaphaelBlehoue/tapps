import { SubmissionError } from 'redux-form'
import api from '../config';
import FormatPhoneNumber from './FormatPhoneNumber';

export const SubmitAsyncValidate = async (data) => {
		if (data.phone && data.countries) {
				try {
						await api.user.check('phone', FormatPhoneNumber(data));
				} catch (err) {
					throw new SubmissionError({
		         phone: 'Invalid phone Number',
		        _error: 'Register failed!'
		      });
				}
		}
		if (data.email) {
				try {
						await api.user.check('email', data.email);
				} catch (err) {
						throw new SubmissionError({
							 email: 'Invalid Email ',
							_error: 'Register failed!'
						});
				}
		}
}
