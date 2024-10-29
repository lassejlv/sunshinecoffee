import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout')({
  component: () => <div>Hello /checkout!</div>,
})
