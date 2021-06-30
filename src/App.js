import './App.css';
import LaunchList from './components/LaunchList/LaunchList';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ grapghqlErrors, networkError }) => {
//   if (grapghqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`graphql error ${message}`)
//     })
//   }
// });

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
