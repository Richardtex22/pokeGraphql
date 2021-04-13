import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import App from './App';
import './index.css';


const httpLink = new HttpLink({ uri: 'https://graphql-pokemon2.vercel.app/' });
const client = new ApolloClient({
  // Provide required constructor fields
  cache: new InMemoryCache(),
  link: httpLink, 
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
