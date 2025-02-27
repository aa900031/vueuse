import contributors from './contributors.json'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam {
  avatar: string
  name: string
  github: string
  twitter?: string
  sponsors?: boolean
  description: string
  packages?: string[]
  functions?: string[]
}

const contributorsAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

const contributorList = (contributors as string[]).reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [] as Contributor[])

const coreTeamMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars.antfu,
    name: 'Anthony Fu',
    github: 'antfu',
    twitter: 'antfu7',
    sponsors: true,
    description: 'A fanatical open sourceror<br>Core team member of Vite & Vue<br>Working at NuxtLabs',
    packages: ['core'],
  },
  {
    avatar: contributorsAvatars['patak-dev'],
    name: 'Patak',
    github: 'patak-dev',
    twitter: 'patak_dev',
    sponsors: true,
    description: 'A collaborative being<br>Core team member of Vite<br>Team member of Vue',
  },
  {
    avatar: contributorsAvatars.wheatjs,
    name: 'wheatjs',
    github: 'wheatjs',
    twitter: 'wheatjs',
    sponsors: false,
    description: '',
    functions: ['useFetch'],
    packages: ['components'],
  },
  {
    avatar: contributorsAvatars.Tahul,
    name: 'Tahul',
    github: 'Tahul',
    twitter: 'yaeeelglx',
    sponsors: true,
    description: '',
    packages: ['motion', 'gesture', 'sound'],
  },
  {
    avatar: contributorsAvatars.anteriovieira,
    name: 'anteriovieira',
    github: 'anteriovieira',
    twitter: 'anteriovieira',
    sponsors: false,
    description: '',
  },
  {
    avatar: contributorsAvatars['cawa-93'],
    name: 'Alex Kozack',
    github: 'cawa-93',
    twitter: 'alex_kozack',
    sponsors: false,
    description: '',
  },
  {
    avatar: contributorsAvatars.scottbedard,
    name: 'Scott Bedard',
    github: 'scottbedard',
    twitter: 'scottbedard',
    sponsors: false,
    description: '',
  },
  {
    avatar: contributorsAvatars.sibbng,
    name: 'Nurettin Kaya',
    github: 'sibbng',
    twitter: 'sibbng',
    sponsors: false,
    description: '',
  },
  {
    avatar: contributorsAvatars.okxiaoliang4,
    name: 'Jelf',
    github: 'okxiaoliang4',
    twitter: 'okxiaoliang4',
    sponsors: false,
    description: '',
  },
  {
    avatar: contributorsAvatars.lstoeferle,
    name: 'lstoeferle',
    github: 'lstoeferle',
    twitter: '54ku1',
    sponsors: false,
    description: '',
  },
  {
    avatar: contributorsAvatars.webfansplz,
    name: 'webfansplz',
    github: 'webfansplz',
    twitter: 'webfansplz',
    sponsors: false,
    description: 'FE Developer<br>Love open source',
  },
  {
    avatar: contributorsAvatars.egoist,
    name: 'EGOIST',
    github: 'egoist',
    twitter: '_egoistlily',
    sponsors: true,
    description: '',
    packages: ['head'],
  },
]
  .sort((pre, cur) => contributors.findIndex(name => name === pre.github) - contributors.findIndex(name => name === cur.github))

export { coreTeamMembers, contributorList as contributors }
