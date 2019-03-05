const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Aditya Giri', // Navigation and Site Title
  siteTitleAlt: 'Aditya Giri', // Alternative Site title for SEO
  siteTitleShort: 'Aditya', // short_name for manifest
  siteHeadline: 'Indie Maker and Teacher', // Headline for schema.org JSONLD
  siteUrl: 'https://brainbuzzer.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal Portfolio of Aditya Giri, who is an Indie Maker, Teacher, and Programmer.',
  author: 'Aditya Giri', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@BrainBUzzer', // Twitter Username
  ogSiteName: 'brainbuzzer', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-63818132-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
