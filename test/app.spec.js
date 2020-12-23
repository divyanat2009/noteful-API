const App = require( '../src/App' );

describe( 'App', () => {
  it( 'GET / responds with 200 containing "Hello, world!"', () => {
    return supertest( App )
      .get( '/' )
      .expect( 200, 'Hello, World!' );
  } );
} );