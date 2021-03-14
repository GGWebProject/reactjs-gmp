export const BUTTON_TYPES = {
  primary: 'primary',
  cancel: 'cancel',
  secondary: 'secondary',
  close: 'close',
  movieMenu: 'movieMenu',
};

export const BUTTON_SIZES = {
  s: 's',
  m: 'm',
  l: 'l',
};

export class ButtonOptions {
  constructor({ type = BUTTON_TYPES.primary, size = BUTTON_SIZES.s, ariaLabel = '', content = null }) {
    this.type = type;
    this.size = size;
    this.content = content;
    this.ariaLabel = ariaLabel;
  }
}

export const cancelButton = new ButtonOptions({
  type: BUTTON_TYPES.cancel,
  size: BUTTON_SIZES.m,
  ariaLabel: 'cancel',
});

export const submitButton = new ButtonOptions({
  type: BUTTON_TYPES.primary,
  size: BUTTON_SIZES.m,
  ariaLabel: 'submit',
});

export const addMovieButton = new ButtonOptions({
  type: BUTTON_TYPES.secondary,
  size: BUTTON_SIZES.s,
  ariaLabel: 'add new movie',
});

export const searchButton = new ButtonOptions({
  type: BUTTON_TYPES.primary,
  size: BUTTON_SIZES.l,
  ariaLabel: 'search movie',
});

export const closeModalButton = new ButtonOptions({
  type: [BUTTON_TYPES.close],
  size: [BUTTON_SIZES.m],
  ariaLabel: 'close modal button',
});

export const closeMovieOptionsButton = new ButtonOptions({
  type: [BUTTON_TYPES.close],
  size: [BUTTON_SIZES.s],
  ariaLabel: 'close button',
});
