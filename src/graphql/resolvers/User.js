'use strict';

const UsersController = {

	index: ( args ) => {

		const user = [{
			"firstName": "Lucid",
			"lastName": "Programmer",
			"company": "Acme Inc"
		}]

		return user;

	}


}

module.exports = UsersController;
