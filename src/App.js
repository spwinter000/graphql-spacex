import './App.css';
import LaunchList from './LaunchList';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.spacex.land/graphql/"
  })

  return (
    <ApolloProvider client={client}>
      <LaunchList />
    </ApolloProvider>
  );
}

export default App;
