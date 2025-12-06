import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Sidebar />
      <div className="md:pl-64 flex flex-col min-h-screen transition-all duration-300">
        <Header />
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden animate-in fade-in duration-500">
          {children}
        </main>
      </div>
    </div>
  );
}
