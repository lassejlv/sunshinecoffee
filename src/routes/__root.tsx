import { Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "../globals.css";
import { Toaster } from 'sonner';




export const Route = createRootRoute({
  component: function Root() {


    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        }
      }
    });

    return (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors visibleToasts={1} />
        <Outlet />
      </QueryClientProvider>
    )
  }
})
