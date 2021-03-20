import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URL })

const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() })

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)
