function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  aboutUs: path(ROOTS_DASHBOARD, 'about-us'),
  services: path(ROOTS_DASHBOARD, 'services'),
  portfolio: path(ROOTS_DASHBOARD, 'portfolio'),
  contactUs: path(ROOTS_DASHBOARD, 'contactUs'),
};
