import type * as Types from './index';

declare global {
    type NextPageProps<
        Params extends Types.RouteParams = {},
        SearchParams extends Types.QueryParams = {}
    > = Types.NextPageProps<Params, SearchParams>;

    type NextLayoutProps<
        Params extends Types.RouteParams = {}
    > = Types.NextLayoutProps<Params>;

    type NextRouteProps<
        Params extends Types.RouteParams = {}
    > = Types.NextRouteProps<Params>;
}

export { };