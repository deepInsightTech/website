module.exports = {
  siteMetadata: {
    title: 'Deep Insight Tech',
    description: '',
    keywords: '',
  },
  // pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Deep Insight Tech',
        short_name: 'Deep Insight Tech',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0f62fe',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        // mediumAccount: 'info_36885',
        iconPath: './src/images/favicon.svg',
        titleType: 'prepend',
        repository: {
          baseUrl:
            'https://github.com/deepInsightTech/website',
          subDirectory: '',
        },
        theme: {
          homepage: 'white'
        }
      },
    }
  ],
};
