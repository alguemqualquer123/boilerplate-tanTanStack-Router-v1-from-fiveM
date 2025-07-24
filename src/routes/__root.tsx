import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { queryClient } from '../lib/_reactQuery/reactQuery.ts'
import { QueryClientProvider } from '@tanstack/react-query'
// src/routes/__root.tsx
/// <reference types="vite/client" />
// other imports...

import appCss from '../styles.css?url'
import { VisibleProvider } from '@/_provider/visibleProvider.tsx'


export const Route = createRootRoute({
  head: () => ({
    meta: [
      // your meta tags and site config
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
    // other head config
  }),
  component: () => (
    <>
      <HeadContent />
      <QueryClientProvider client={queryClient} >
        <VisibleProvider>
          <Outlet />
          <TanStackRouterDevtools initialIsOpen={false} />
        </VisibleProvider>
      </QueryClientProvider>
    </>
  ),
})
