import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Sign-up"
      }
    ]
  })
})

function RouteComponent() {
  return <div>Hello "/sign-up/"!</div>
}
