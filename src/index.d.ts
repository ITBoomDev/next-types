export type PageProps<
    Params extends Record<string, any> = {},
    SearchParams extends Record<string, any> = {}
> = Readonly<{
    params: Promise<Params>;
    searchParams: Promise<SearchParams>;
}>;

export type LayoutProps<
    Params extends Record<string, any> = {}
> = Readonly<{
    children: React.ReactNode;
    params: Promise<Params>;
}>;

export type RouteProps<
    Params extends Record<string, any> = {}
> = Readonly<{
    params: Promise<Params>;
}>;