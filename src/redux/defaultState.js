function createNavLink(id, args = {}) {
  const { text, to, href, authenticated, rest } = args
  return {
    authenticated,
    id,
    text: text || id.charAt(0).toUpperCase() + id.slice(1),
    to: to || '/' + id,
    href,
    ...rest,
  }
}

export default {
  db: {
    support: {
      chat: 'https://www.hipchat.com/gv1XLjgaV',
      bugs: 'https://github.com/cape-io/cape-editor/issues',
    },
    title: 'ACF Client',
    description: 'Membership Fun',
    image: 'https://pbs.twimg.com/profile_images/568082657292976128/SNZjMW8N.png',
    tagline: 'Create Anywhere Publish Everywhere',
    navLinks: [
      createNavLink('about', { text: 'About Us' }),
      createNavLink('members'),
      createNavLink('acf40', {
        text: 'ACF 40',
        href: 'https://composersforum.org/acf40',
      }),
      createNavLink('discover', {
        text: 'Discover',
        href: 'https://composersforum.org/discover',
      }),
      createNavLink('get-involved', {
        text: 'Get Involved',
        href: 'https://composersforum.org/get-involved',
      }),
      createNavLink('opportunities-upcoming', {
        text: 'Opportunities',
        href: 'https://composersforum.org/opportunities-upcoming',
      }),
      createNavLink('programs', {
        text: 'Programs',
        href: 'https://composersforum.org/programs',
      }),
    ],
  },
  entity: {
    forms: {},
    repos: {},
    users: {},
  },
}
