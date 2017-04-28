module.exports = {
  components: 'src/components/**/*.js',
  sections: [
    {
      name: 'Introduction',
      content: 'src/components/Introduction.md',
    },
    {
      name: 'UI Components',
      components: 'src/components/**/*.js',
    },
  ],
  title: 'Neska Styleguide',
  webpackConfig: require('./config/webpack.config.dev.js'),
};
