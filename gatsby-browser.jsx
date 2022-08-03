const React = require('react');
const { QueryClient, QueryClientProvider } = require('@tanstack/react-query');
require('./src/styles/global.css');

const queryClient = new QueryClient();

exports.wrapRootElement = ({ element }) => {
  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
};
