# @itboom/next-types 🚀

**@itboom/next-types** is a global TypeScript utility that provides
strongly-typed, zero-import **props types** for Next.js App Router components.

It includes three globally available types — `PageProps`, `LayoutProps`, and
`RouteProps` — optimized for use in asynchronous environments where `params` and
`searchParams` are promises.

---

## Table of Contents

1. [Features ✨](#features)
2. [Installation 📦](#installation)
3. [Usage 🔧](#usage)
   - [Page Props](#page-props)
   - [Layout Props](#layout-props)
   - [Route Props](#route-props)
4. [API Reference 📚](#api-reference)
5. [License 📄](#license)
6. [Contributing 🤝](#contributing)
7. [Author 👤](#author)

---

## Features ✨

- ✅ **Zero imports:** All types are globally available — no need to import
- 💡 **Precise typings for props:** Generic support for route `params`,
  `searchParams`, and layout `children`
- 🧠 **Optimized for App Router async context:** All props are `Promise`-wrapped
  for native `await` usage
- ⚡ **Small and focused:** No code — types only

---

## Installation 📦

### Bun

```bash
bun add @itboom/next-types
```

### npm

```bash
npm install @itboom/next-types
```

Then register it in your `tsconfig.json`:

```json
{
    "compilerOptions": {
        "types": ["@itboom/next-types"]
    }
}
```

---

## Usage 🔧

### Page Props

```tsx
// /app/product/[id]/page.tsx

const Page = async (
    { params, searchParams }: PageProps<{ id: string }, { lang: string }>,
) => {
    const { id } = await params;
    const { lang } = await searchParams;

    return <div>Product ID: {id} | Language: {lang}</div>;
};
```

---

### Layout Props

```tsx
// /app/[locale]/layout.tsx

const Layout = async (
    { children, params }: LayoutProps<{ locale: string }>,
) => {
    const { locale } = await params;

    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    );
};
```

---

### Route Props

```ts
// /app/api/user/[id]/route.ts

const GET = async ({ params }: RouteProps<{ id: string }>) => {
    const { id } = await params;

    return new Response(`User ID: ${id}`);
};
```

---

## API Reference 📚

### `PageProps<Params, SearchParams>`

Props type for `page.tsx` components.

- `params: Promise<Params>` – dynamic route segments
- `searchParams: Promise<SearchParams>` – parsed URL query

---

### `LayoutProps<Params>`

Props type for `layout.tsx` components.

- `params: Promise<Params>` – dynamic route segments
- `children: React.ReactNode` – nested content

---

### `RouteProps<Params>`

Props type for `route.ts` API handlers.

- `params: Promise<Params>` – dynamic route segments

---

## License 📄

MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing 🤝

Issues, feedback, and pull requests are welcome! Help make this type utility
even better.

---

## Author 👤

Created by **Bohdan Kulinchenko**\
Founder @ [itboom.dev](https://itboom.dev)\
GitHub: [@ITBoomDev](https://github.com/ITBoomDev)

---

Enjoy using **@itboom/next-types** — type your props the clean and correct way.
🔥
