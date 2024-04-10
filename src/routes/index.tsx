function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AGENCY = '/';

export const PATH_AGENCY = {
  root: ROOTS_AGENCY,
  aboutUs: path(ROOTS_AGENCY, 'about-us'),
  services: path(ROOTS_AGENCY, 'services'),
  portfolio: path(ROOTS_AGENCY, 'portfolio'),
  contactUs: path(ROOTS_AGENCY, 'contactUs'),
};
