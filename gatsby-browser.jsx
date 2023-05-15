const React = require('react');
const { QueryClient, QueryClientProvider } = require('@tanstack/react-query');
const Layout = require('./src/components/Layout/Layout').default;
require('./src/styles/global.css');

const queryClient = new QueryClient();

exports.wrapRootElement = ({ element }) => {
  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
};

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};
