const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Tinker - San Francisco Bay Area Software Consultant', // Navigation and Site Title
  siteTitleAlt: 'Tinker', // Alternative Site title for SEO
  siteTitleShort: 'Tinker', // short_name for manifest
  siteHeadline: 'San Francisco Bay Area Software Consultant', // Headline for schema.org JSONLD
  siteUrl: 'https://tinker.to', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'San Francisco Bay Area Software Consultant',
  author: 'Richard Baker', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@Tinker', // Twitter Username
  ogSiteName: 'Tinker', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
