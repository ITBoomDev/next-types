export type NextPageProps<
    Params extends Record<string, any> = {},
    SearchParams extends Record<string, any> = {}
> = Readonly<{
    params: Promise<Params>;
    searchParams: Promise<SearchParams>;
}>;

export type NextLayoutProps<
    Params extends Record<string, any> = {}
> = Readonly<{
    children: React.ReactNode;
    params: Promise<Params>;
}>;

export type NextRouteProps<
    Params extends Record<string, any> = {}
> = Readonly<{
    params: Promise<Params>;
}>;