import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PATIENTS, MEDICATIONS } from "@/lib/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Calendar, FileText, Activity, Pill, Check, X, AlertCircle } from "lucide-react";
import { Link, useRoute } from "wouter";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const ADHERENCE_HISTORY = [
  { day: 'Mon', value: 90 },
  { day: 'Tue', value: 85 },
  { day: 'Wed', value: 45 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 95 },
  { day: 'Sat', value: 100 },
  { day: 'Sun', value: 100 },
];

export default function PatientDetail() {
  const [, params] = useRoute("/patient/:id");
  const id = params?.id;
  
  // Mock finding patient (in real app, fetch from API)
  const patient = PATIENTS.find(p => p.id === id) || PATIENTS[0];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Breadcrumb / Back */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Patients</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{patient.name}</span>
          </div>
        </div>

        {/* Profile Header Card */}
        <Card className="border-none shadow-md shadow-slate-200/50 dark:shadow-none bg-gradient-to-r from-card to-secondary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <Avatar className="w-24 h-24 border-4 border-background shadow-sm">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patient.name}`} />
                <AvatarFallback className="text-2xl">{patient.name[0]}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-heading font-bold">{patient.name}</h1>
                    <div className="flex items-center gap-3 text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> ID: {patient.id}</span>
                      <span>•</span>
                      <span>{patient.age} Years Old</span>
                      <span>•</span>
                      <span>{patient.diagnosis}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                     <Button variant="outline" className="gap-2">
                      <FileText className="w-4 h-4" />
                      View Reports
                    </Button>
                    <Button className="gap-2">
                      <Activity className="w-4 h-4" />
                      Update Plan
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                   <Badge variant="secondary" className="px-3 py-1 text-sm bg-background border border-border">
                    Condition: {patient.condition}
                   </Badge>
                   <Badge variant="secondary" className="px-3 py-1 text-sm bg-background border border-border">
                    <Calendar className="w-3 h-3 mr-2" />
                    Discharged: {patient.dischargeDate}
                   </Badge>
                   <Badge 
                      variant="outline" 
                      className={`px-3 py-1 text-sm
                        ${patient.riskLevel === 'High' ? 'border-rose-200 bg-rose-50 text-rose-700' : ''}
                        ${patient.riskLevel === 'Moderate' ? 'border-amber-200 bg-amber-50 text-amber-700' : ''}
                        ${patient.riskLevel === 'Low' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : ''}
                      `}
                    >
                      Risk: {patient.riskLevel}
                    </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="care-plan" className="w-full">
          <TabsList className="w-full justify-start h-auto p-1 bg-secondary/50 rounded-xl mb-6 overflow-x-auto">
            <TabsTrigger value="overview" className="rounded-lg px-4 py-2">Overview</TabsTrigger>
            <TabsTrigger value="care-plan" className="rounded-lg px-4 py-2">Care Plan</TabsTrigger>
            <TabsTrigger value="history" className="rounded-lg px-4 py-2">History</TabsTrigger>
            <TabsTrigger value="reports" className="rounded-lg px-4 py-2">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="care-plan" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Medications Column */}
              <div className="md:col-span-2 space-y-6">
                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="w-5 h-5 text-primary" />
                      Daily Medications
                    </CardTitle>
                    <CardDescription>Track daily intake and adherence.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {MEDICATIONS.map((med, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Pill className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium">{med.name}</p>
                            <p className="text-sm text-muted-foreground">{med.dosage} • {med.frequency}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {med.status === 'taken' ? (
                             <Badge className="bg-emerald-500 hover:bg-emerald-600 gap-1">
                               <Check className="w-3 h-3" /> Taken
                             </Badge>
                          ) : (
                             <div className="flex gap-2">
                               <Button size="sm" variant="outline" className="h-8 border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700">Missed</Button>
                               <Button size="sm" className="h-8 bg-primary hover:bg-primary/90">Mark Taken</Button>
                             </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                   <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      Adherence Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={ADHERENCE_HISTORY}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis 
                              dataKey="day" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                              dy={10}
                            />
                            <YAxis 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                            />
                            <Tooltip
                              contentStyle={{ 
                                backgroundColor: 'hsl(var(--popover))', 
                                borderColor: 'hsl(var(--border))',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                              }} 
                             />
                            <Line 
                              type="monotone" 
                              dataKey="value" 
                              stroke="hsl(var(--primary))" 
                              strokeWidth={3}
                              dot={{ r: 4, fill: 'hsl(var(--primary))', strokeWidth: 2, stroke: 'hsl(var(--background))' }}
                              activeDot={{ r: 6 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                     </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card className="border-none shadow-sm bg-amber-50/50 dark:bg-amber-900/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-500 text-lg">
                      <AlertCircle className="w-5 h-5" />
                      AI Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-background rounded-lg border border-amber-100 dark:border-amber-900/50 shadow-sm">
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-400">Missed Medication</p>
                      <p className="text-xs text-muted-foreground mt-1">Patient missed Atorvastatin last night. Risk of BP fluctuation increased by 12%.</p>
                    </div>
                     <div className="p-3 bg-background rounded-lg border border-amber-100 dark:border-amber-900/50 shadow-sm">
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-400">Low Activity</p>
                      <p className="text-xs text-muted-foreground mt-1">Daily step count is 40% below recommended recovery target.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Diet & Exercise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Sodium Intake</span>
                          <span className="font-medium text-emerald-600">Low (Good)</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                           <div className="h-full bg-emerald-500 w-[30%]"></div>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Water Intake</span>
                          <span className="font-medium text-amber-600">1.2L / 2.5L</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                           <div className="h-full bg-amber-500 w-[48%]"></div>
                        </div>
                     </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="overview">
             <div className="p-12 text-center text-muted-foreground bg-secondary/20 rounded-xl border border-dashed border-border">
               Overview content placeholder
             </div>
          </TabsContent>
          <TabsContent value="history">
             <div className="p-12 text-center text-muted-foreground bg-secondary/20 rounded-xl border border-dashed border-border">
               History content placeholder
             </div>
          </TabsContent>
          <TabsContent value="reports">
             <div className="p-12 text-center text-muted-foreground bg-secondary/20 rounded-xl border border-dashed border-border">
               Reports content placeholder
             </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
