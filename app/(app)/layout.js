import AppShell from "@/components/layout/AppShell";
import { BusinessProvider } from "@/contexts/BusinessContext";

export default function AppLayout({ children }) {
  return (
    <BusinessProvider>
      <AppShell>{children}</AppShell>
    </BusinessProvider>
  );
}
