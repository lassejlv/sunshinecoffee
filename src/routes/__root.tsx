import { Outlet, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import '../globals.css';

export const Route = createRootRoute({
  component: function Root() {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    });

    return (
      <QueryClientProvider client={queryClient}>
        <Toaster richColors visibleToasts={1} />
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    );
  },
});
