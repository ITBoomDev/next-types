import type {
    PageProps as _PageProps,
    LayoutProps as _LayoutProps,
    RouteProps as _RouteProps
} from './index';

declare global {
    type PageProps<Params = {}, SearchParams = {}> = _PageProps<Params, SearchParams>;
    type LayoutProps<Params = {}> = _LayoutProps<Params>;
    type RouteProps<Params = {}> = _RouteProps<Params>;
}

export { };