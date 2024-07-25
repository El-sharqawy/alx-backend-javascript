/* eslint-disable */
import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstname, lastName, fileName) {
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName),
	]).then((results) => results.map((result)=> ({
		status: result.status,
		value:
			result.status === 'fulfilled' ? result.value : String(result.reason),
	})));
}
