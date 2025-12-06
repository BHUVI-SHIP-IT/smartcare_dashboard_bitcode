import { Bell, Search, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

export function Header() {
  return (
    <header className="h-16 bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-10 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="-ml-2">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 border-r border-sidebar-border">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <span className="text-lg font-heading font-bold text-foreground">
          Smart<span className="text-primary">Care</span>
        </span>
      </div>

      <div className="hidden md:flex flex-1 max-w-md ml-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search patients, reports..." 
            className="pl-9 bg-secondary/50 border-transparent focus-visible:bg-background focus-visible:border-input transition-all rounded-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
        </Button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground leading-none">Dr. Sarah Smith</p>
            <p className="text-xs text-muted-foreground mt-1">Chief Cardiologist</p>
          </div>
          <Avatar className="h-9 w-9 border border-border cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all">
            <AvatarImage src="https://github.com/shadcn.png" alt="Dr. Sarah Smith" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
