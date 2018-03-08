import { format } from 'libphonenumber-js';

const FormatPhoneNumber = (values) => {
		const FormatPhone = format(values.phone, values.countries.code, "E.164");
		return FormatPhone;
};

export default FormatPhoneNumber;
