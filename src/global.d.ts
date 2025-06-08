import type {
    NextPageProps as _NextPageProps,
    NextLayoutProps as _NextLayoutProps,
    NextRouteProps as _NextRouteProps
} from './index';

declare global {
    type NextPageProps<Params = {}, SearchParams = {}> = _NextPageProps<Params, SearchParams>;
    type NextLayoutProps<Params = {}> = _NextLayoutProps<Params>;
    type NextRouteProps<Params = {}> = _NextRouteProps<Params>;
}

export { };