import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom';
import App from './App';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
