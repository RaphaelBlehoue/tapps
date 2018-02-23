import { isEmpty } from 'lodash'
import { TOKEN_KEY, USER_INFO } from './key';


const authParam = {
	/**
	 * Remove an item from the used storage
	 * @param  {String} key [description]
	 */
	remove(key) {
		if (localStorage && localStorage.getItem(key)) {
			return localStorage.removeItem(key);
		}

		if (sessionStorage && sessionStorage.getItem(key)) {
			return sessionStorage.removeItem(key);
		}

		return null;
	},
	/**
	 * Clear all app storage
	 */
	clearAppStorage() {
		if (localStorage) {
			localStorage.clear();
		}

		if (sessionStorage) {
			sessionStorage.clear();
		}
	},
	/**
	 * Clear this Token
	 */
	clearToken(tokenKey = TOKEN_KEY) {
		return authParam.clear(tokenKey);
	},
	/**
	 * Clear user Info save this localstorage
	 */
	clearUserInfo(userInfo = USER_INFO) {
		return authParam.clear(userInfo);
	},

	/**
	 * Returns data from storage
	 * @param  {String} key Item to get from the storage
	 * @return {String|Object}     Data from the storage
	 */
	get(key) {
		if (localStorage && localStorage.getItem(key)) {
			return localStorage.getItem(key) || null;
		}

		if (sessionStorage && sessionStorage.getItem(key)) {
			return sessionStorage.getItem(key) || null;
		}

		return null;
	},
	getToken(tokenKey = TOKEN_KEY) {
		return authParam.get(tokenKey);
	},

	getUserInfo(userInfo = USER_INFO) {
		return authParam.get(userInfo);
	},
	/**
	 * Set data in storage
	 * @param {String|Object}  value    The data to store
	 * @param {String}  key
	 * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
	 */
	set(key, value, isLocalStorage) {
		if (isEmpty(value)) {
			return null;
		}

		if (isLocalStorage && localStorage) {
			return localStorage.setItem(key, value);
		}

		if (sessionStorage) {
			return sessionStorage.setItem(key, value);
		}

		return null;
	},
	setToken(value = '', isLocalStorage = false, tokenKey = TOKEN_KEY) {
		return authParam.set(tokenKey, value, isLocalStorage);
	},

	setUserInfo(value = '', isLocalStorage = false, userInfo = USER_INFO) {
		return authParam.set(value, userInfo, isLocalStorage);
	},
};

export default authParam;