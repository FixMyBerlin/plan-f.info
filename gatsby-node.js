const path = require('path');

// mak envs available
require('dotenv').config({
  path: `.env`,
});

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // @ts-ignore
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const pageComponent = path.resolve(
    `src/components/ReleasePage/ReleasePage.tsx`
  );
  const { GITHUB_ACTION_URL, GITHUB_TOKEN } = process.env;
  createPage({
    path: `/release-${process.env.RELEASE_SECRET}`,
    component: pageComponent,
    context: {
      GITHUB_ACTION_URL,
      GITHUB_TOKEN,
    },
  });
};
