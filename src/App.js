import './App.css';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import LaunchList from './components/LaunchList/LaunchList';
import LaunchDetails from './components/LaunchDetails/LaunchDetails';
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
    <div>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={LaunchList}/>
          <Route exact path="/:id" component={LaunchDetails}/>
        </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
