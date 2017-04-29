import { lighten } from 'polished';

const BLACK = '#000';

export default {
  BLACK,
  WHITE: '#FFF',

  TEXT: lighten(0.25, BLACK),
  TEXT_SECONDARY: lighten(0.6, BLACK),
  TEXT_DISABLED: lighten(0.75, BLACK),

  DEFAULT: '#ecf0f1',
  PRIMARY: '#9b59b6',
  ACCENT: '#34495e',

  ERROR: '#f44336',
  SUCCESS: '#8bc34a',
  WARNING: '#ffc107',
  BACKGROUND: '#fafafa',

  DIVIDER: lighten(0.85, BLACK),
};
