import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import PatientDetail from "@/pages/PatientDetail";
import Analytics from "@/pages/Analytics";
import Chat from "@/pages/Chat";
import Settings from "@/pages/Settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/patients" component={Dashboard} /> {/* For now reuse dashboard or can build a list view later if requested */}
      <Route path="/analytics" component={Analytics} />
      <Route path="/chat" component={Chat} />
      <Route path="/settings" component={Settings} />
      <Route path="/patient/:id" component={PatientDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
