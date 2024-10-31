import { Outlet, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import '../globals.css';
import CookieBanner from '@/components/CookieBanner';

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
        <CookieBanner />
        <Toaster richColors visibleToasts={1} />
        <Navbar />
        <Outlet />
      </QueryClientProvider>
    );
  },
});
