export enum RouteName {
  Home = 'Home',
  About = 'About',
  Contact = 'Contact',
}

export type RouteKey = keyof typeof RouteName;
