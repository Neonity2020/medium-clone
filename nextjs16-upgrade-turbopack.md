使用`pnpm`升级到nextjs16
```shell
pnpm i next@latest react@latest react-dom@latest eslint-config-next@latest
```


You can use it as a top-level turbopack option:

```ts
# next.config.ts

import type { NextConfig } from 'next'
 
// Next.js 16 - turbopack at the top level of nextConfig
const nextConfig: NextConfig = {
  turbopack: {
    // options
  },
}
 
export default nextConfig
```