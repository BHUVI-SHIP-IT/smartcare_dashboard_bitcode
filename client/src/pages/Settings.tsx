import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Shield, User, Building, LogOut } from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
             Settings & Preferences
          </h1>
          <p className="text-muted-foreground mt-1">
             Manage your account, hospital branding, and system preferences.
          </p>
        </div>

        <Tabs defaultValue="account" className="w-full">
           <div className="flex flex-col md:flex-row gap-8">
              <TabsList className="flex flex-col h-auto w-full md:w-64 bg-transparent space-y-1 p-0 justify-start">
                 <TabsTrigger value="account" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-lg transition-all">
                    <User className="w-4 h-4 mr-3" /> Account
                 </TabsTrigger>
                 <TabsTrigger value="notifications" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-lg transition-all">
                    <Bell className="w-4 h-4 mr-3" /> Notifications
                 </TabsTrigger>
                 <TabsTrigger value="branding" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-lg transition-all">
                    <Building className="w-4 h-4 mr-3" /> Hospital Branding
                 </TabsTrigger>
                 <TabsTrigger value="security" className="w-full justify-start px-4 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-lg transition-all">
                    <Shield className="w-4 h-4 mr-3" /> Security
                 </TabsTrigger>
              </TabsList>

              <div className="flex-1">
                 <TabsContent value="account" className="mt-0 space-y-6">
                    <Card className="border-none shadow-sm">
                       <CardHeader>
                          <CardTitle>Profile Information</CardTitle>
                          <CardDescription>Update your personal details and public profile.</CardDescription>
                       </CardHeader>
                       <CardContent className="space-y-6">
                          <div className="flex items-center gap-6">
                             <Avatar className="w-20 h-20 border border-border">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>SS</AvatarFallback>
                             </Avatar>
                             <Button variant="outline">Change Avatar</Button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" defaultValue="Sarah Smith" />
                             </div>
                             <div className="space-y-2">
                                <Label htmlFor="specialty">Specialty</Label>
                                <Input id="specialty" defaultValue="Cardiologist" />
                             </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue="sarah.smith@smartcare.com" />
                             </div>
                             <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" defaultValue="+1 (555) 000-0000" />
                             </div>
                          </div>
                          <Button>Save Changes</Button>
                       </CardContent>
                    </Card>
                 </TabsContent>

                 <TabsContent value="notifications" className="mt-0 space-y-6">
                    <Card className="border-none shadow-sm">
                       <CardHeader>
                          <CardTitle>Notification Preferences</CardTitle>
                          <CardDescription>Configure how you want to be alerted.</CardDescription>
                       </CardHeader>
                       <CardContent className="space-y-6">
                          <div className="flex items-center justify-between">
                             <div className="space-y-0.5">
                                <Label className="text-base">Enable AI Risk Alerts</Label>
                                <p className="text-sm text-muted-foreground">Receive immediate alerts for high-risk patient predictions.</p>
                             </div>
                             <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                             <div className="space-y-0.5">
                                <Label className="text-base">Patient Messages</Label>
                                <p className="text-sm text-muted-foreground">Get notified when a patient sends a new message.</p>
                             </div>
                             <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                             <div className="space-y-0.5">
                                <Label className="text-base">Daily Summary Email</Label>
                                <p className="text-sm text-muted-foreground">Receive a morning digest of your patients' status.</p>
                             </div>
                             <Switch />
                          </div>
                       </CardContent>
                    </Card>
                 </TabsContent>

                  <TabsContent value="branding" className="mt-0 space-y-6">
                    <Card className="border-none shadow-sm">
                       <CardHeader>
                          <CardTitle>Hospital Branding</CardTitle>
                          <CardDescription>Customize the dashboard look.</CardDescription>
                       </CardHeader>
                       <CardContent className="space-y-6">
                          <div className="space-y-2">
                             <Label>Primary Color</Label>
                             <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-teal-500 ring-2 ring-offset-2 ring-primary cursor-pointer"></div>
                                <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
                                <div className="w-8 h-8 rounded-full bg-indigo-500 cursor-pointer"></div>
                                <div className="w-8 h-8 rounded-full bg-rose-500 cursor-pointer"></div>
                             </div>
                          </div>
                       </CardContent>
                    </Card>
                 </TabsContent>
              </div>
           </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
