export type Route = "/" | "/about" | "/ourServices" | "/blog" | "/contact";

export interface Routes {
  name: string;
  route: Route;
}