import fs from 'fs-extra';

const onPreExtractQueries = async ({ store, getNodes }) => {
  const program = store.getState().program;

  await fs.copy(
    require.resolve(`@igorko/gatsby-plugin-i18next/lib/plugin/fragments.js`),
    `${program.directory}/.cache/fragments/@igorko/fragments.js`,
  );
};

export default onPreExtractQueries;
