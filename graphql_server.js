'use strict';

const app = require('./src/graphql/graphql_app');

// let's set the port on which the server will run
app.set( 'port', 3000 );

// start the server
app.listen(
	app.get('port'),
	() => {
		const port = app.get('port');
		console.log('GraphQL Server Running at http://localhost:' + port );
	}
);
