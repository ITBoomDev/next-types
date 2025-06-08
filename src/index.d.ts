// Generic base types for consistency and reuse
export type RouteParams = Record<string, any>;
export type QueryParams = Record<string, any>;

// Typed props for Next.js App Router components
export type NextPageProps<
    Params extends RouteParams = {},
    SearchParams extends QueryParams = {}
> = Readonly<{
    params: Promise<Params>;
    searchParams: Promise<SearchParams>;
}>;

export type NextLayoutProps<
    Params extends RouteParams = {}
> = Readonly<{
    children: React.ReactNode;
    params: Promise<Params>;
}>;

export type NextRouteProps<
    Params extends RouteParams = {}
> = Readonly<{
    params: Promise<Params>;
}>;