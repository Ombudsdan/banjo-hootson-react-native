import {
  PredefinedClickablePanelGroupProps,
  PredefinedClickablePanelProps,
} from 'components/common/ClickablePanelRow';

const PLUSHIE_BIRTHDAY_CALENDAR_VIEW = {
  id: 'CALENDAR',
  label: 'Banjo birthday calendar',
  href: '/calendar',
} as const satisfies PredefinedClickablePanelProps;

const PLUSHIE_BIRTHDAY_CALENDAR_SUBMIT = {
  id: 'SUBMIT_BIRTHDAY',
  label: 'Submit a plushie birthday',
  href: '/birthdays/submit',
} as const satisfies PredefinedClickablePanelProps;

const BUY_ME_A_COFFEE = {
  id: 'BEER',
  label: 'Buy Banjo a beer',
  href: '/support/beer',
} as const satisfies PredefinedClickablePanelProps;

const SOCIAL_MEDIA_INSTAGRAM = {
  id: 'INSTAGRAM',
  label: 'Instagram',
  href: 'https://instagram.com/',
} as const satisfies PredefinedClickablePanelProps;

const SOCIAL_MEDIA_FACEBOOK = {
  id: 'FACEBOOK',
  label: 'Facebook',
  href: 'https://facebook.com/',
} as const satisfies PredefinedClickablePanelProps;

const SOCIAL_MEDIA_THREADS = {
  id: 'THREADS',
  label: 'Threads',
  href: 'https://threads.net/',
} as const satisfies PredefinedClickablePanelProps;

export const PREDEFINED_CLICKABLE_PANELS = {
  'community-links': [
    PLUSHIE_BIRTHDAY_CALENDAR_VIEW,
    PLUSHIE_BIRTHDAY_CALENDAR_SUBMIT,
    BUY_ME_A_COFFEE,
  ],
  'social-links': [
    SOCIAL_MEDIA_INSTAGRAM,
    SOCIAL_MEDIA_FACEBOOK,
    SOCIAL_MEDIA_THREADS,
  ],
} as const satisfies PredefinedClickablePanelGroupProps;
