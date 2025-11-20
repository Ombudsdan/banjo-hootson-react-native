export type PanelId =
  | 'CALENDAR'
  | 'SUBMIT_BIRTHDAY'
  | 'BEER'
  | 'INSTAGRAM'
  | 'FACEBOOK'
  | 'THREADS';

export interface PanelConfig {
  id: PanelId;
  label: string;
  href: string;
}

export type PanelGroupId = 'community-links' | 'social-links';

export const PANEL_GROUPS: Record<PanelGroupId, PanelConfig[]> = {
  'community-links': [
    {
      id: 'CALENDAR',
      label: 'Banjo birthday calendar',
      href: '/calendar',
    },
    {
      id: 'SUBMIT_BIRTHDAY',
      label: 'Submit a plushie birthday',
      href: '/birthdays/submit',
    },
    {
      id: 'BEER',
      label: 'Buy Banjo a beer',
      href: '/support/beer',
    },
  ],
  'social-links': [
    {
      id: 'INSTAGRAM',
      label: 'Instagram',
      href: 'https://instagram.com/',
    },
    {
      id: 'FACEBOOK',
      label: 'Facebook',
      href: 'https://facebook.com/',
    },
    {
      id: 'THREADS',
      label: 'Threads',
      href: 'https://threads.net/',
    },
  ],
};
