import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes} from 'prism-react-renderer';

const DESCRIPTION =
  'An MCP server that lets AI assistants read and change your iCloud Calendar over CalDAV. Runs on your computer, talks only to iCloud. Free and open source.';
const REPO = 'https://github.com/icloud-calendar-mcp/icloud-calendar-mcp';
// The one organization every OneKash Labs site points to, defined on onekash.org.
const ORG = {'@type': 'Organization', '@id': 'https://onekash.org/#org', name: 'OneKash Labs', url: 'https://onekash.org'};

// Code blocks on the hero's slate, so commands read as part of the logo's palette.
const codeTheme = {...themes.palenight, plain: {...themes.palenight.plain, backgroundColor: '#0f2a2e'}};

const config: Config = {
  title: 'iCloud Calendar MCP',
  tagline: 'Ask AI to plan your week',
  favicon: 'img/favicon.png',
  future: {v4: true},
  url: 'https://mcp.onekash.org',
  baseUrl: '/',
  organizationName: 'OneKashLabs',
  projectName: 'mcp-website',
  // GitHub Pages serves /path/index.html at /path/, so links use the slash form.
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  headTags: [
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/logo.png'}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#0f2a2e'}},
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'iCloud Calendar MCP',
        url: 'https://mcp.onekash.org',
        description: DESCRIPTION,
        operatingSystem: 'Windows, macOS, Linux (Java 21 or later)',
        applicationCategory: 'DeveloperApplication',
        downloadUrl: `${REPO}/releases`,
        softwareHelp: `${REPO}/issues`,
        license: 'https://www.apache.org/licenses/LICENSE-2.0',
        image: 'https://mcp.onekash.org/img/logo.png',
        offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
        sameAs: [
          REPO,
          'https://www.npmjs.com/package/@icloud-calendar-mcp/server',
          'https://pypi.org/project/icloud-calendar-mcp/',
        ],
        author: ORG,
        publisher: ORG,
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'iCloud Calendar MCP',
        url: 'https://mcp.onekash.org/',
        publisher: ORG,
      }),
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'description', content: DESCRIPTION},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'iCloud Calendar MCP'},
      {property: 'og:image:width', content: '1200'},
      {property: 'og:image:height', content: '630'},
      {property: 'og:image:alt', content: 'iCloud Calendar MCP: ask AI to plan your week. The install command and the calendar logo.'},
      {name: 'twitter:image:alt', content: 'iCloud Calendar MCP: ask AI to plan your week. The install command and the calendar logo.'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    prism: {theme: codeTheme, darkTheme: codeTheme, additionalLanguages: ['bash', 'json']},
    navbar: {
      title: 'iCloud Calendar MCP',
      logo: {alt: 'iCloud Calendar MCP logo', src: 'img/icon-rounded.png'},
      items: [
        // The home page is not these links' page, so they never show as the current one.
        {to: '/#setup', label: 'Set up', position: 'left', activeBaseRegex: '^$'},
        {to: '/#tools', label: 'Tools', position: 'left', activeBaseRegex: '^$'},
        {to: '/#security', label: 'Security', position: 'left', activeBaseRegex: '^$'},
        {href: 'https://github.com/sponsors/one-kash', label: 'Donate', position: 'right'},
        {href: REPO, label: 'Source', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {label: 'Set up', to: '/#setup'},
            {label: 'Full reference', href: `${REPO}#readme`},
            {label: 'Security policy', href: `${REPO}/blob/main/SECURITY.md`},
            {label: 'Report a problem', href: `${REPO}/issues`},
            {label: 'Donate', href: 'https://github.com/sponsors/one-kash'},
            {label: 'Source', href: REPO},
          ],
        },
      ],
      copyright:
        'Built with love in Austin by <a href="https://onekash.org">onekash labs</a>. Free and open source under Apache-2.0. Not affiliated with Apple.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
