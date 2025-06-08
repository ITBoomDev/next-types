# @itboom/next-types 🚀

**@itboom/next-types** is a global TypeScript utility that provides
strongly-typed, **collision-safe** prop types for Next.js App Router components.

It includes three globally available types — `NextPageProps`, `NextLayoutProps`, and
`NextRouteProps` — optimized for use in asynchronous environments where `params` and
`searchParams` are promises.

---

## Table of Contents

1. [Features ✨](#features)
2. [Installation 📦](#installation)
3. [Usage 🔧](#usage)
   - [Option 1: Import types](#option-1-import-types)
   - [Option 2: Enable global types](#option-2-enable-global-types)
4. [Examples](#examples)
   - [Page Props](#page-props)
   - [Layout Props](#layout-props)
   - [Route Props](#route-props)
5. [API Reference 📚](#api-reference)
6. [License 📄](#license)
7. [Contributing 🤝](#contributing)
8. [Author 👤](#author)

---

## Features ✨

- ✅ **Two usage modes:** Import types or enable them globally via `tsconfig.json`
- 🧠 **Async-first design:** All props are promise-wrapped for `await` support
- 🧩 **Collision-safe names:** No clashes with `LayoutProps` from other libraries
- 🔍 **Clear intent:** Names follow `NextPageProps`, `NextLayoutProps`, `NextRouteProps`
- ⚡ **Lightweight:** Types only, zero runtime code

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

---

## Usage 🔧

### Option 1: Import types

```ts
import type {
  NextPageProps,
  NextLayoutProps,
  NextRouteProps
} from '@itboom/next-types';
```

### Option 2: Enable global types

In your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@itboom/next-types"]
  }
}
```

> If IntelliSense doesn’t work immediately, reload VS Code or restart the TS server.

---

## Examples

### Page Props

```tsx
// /app/product/[id]/page.tsx

const Page = async (
  { params, searchParams }: NextPageProps<{ id: string }, { lang: string }>
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
  { children, params }: NextLayoutProps<{ locale: string }>
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

const GET = async ({ params }: NextRouteProps<{ id: string }>) => {
  const { id } = await params;

  return new Response(`User ID: ${id}`);
};
```

---

## API Reference 📚

### `NextPageProps<Params, SearchParams>`

Props type for `page.tsx` components:

- `params: Promise<Params>` – dynamic route segments
- `searchParams: Promise<SearchParams>` – parsed query string

---

### `NextLayoutProps<Params>`

Props type for `layout.tsx` components:

- `params: Promise<Params>`
- `children: React.ReactNode`

---

### `NextRouteProps<Params>`

Props type for `route.ts` handlers:

- `params: Promise<Params>`

---

## License 📄

MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing 🤝

Issues, ideas, and PRs are welcome — help improve typing hygiene for the Next.js ecosystem!

---

## Author 👤

Created by **Bohdan Kulinchenko**  
Founder of [itboom.dev](https://itboom.dev)  
GitHub: [@ITBoomDev](https://github.com/ITBoomDev)

---

Enjoy using **@itboom/next-types** — and type your props the clean and correct way. 🔥