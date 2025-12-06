import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Users, Activity, BrainCircuit } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const READMISSION_DATA = [
  { month: 'Jan', rate: 12 },
  { month: 'Feb', rate: 15 },
  { month: 'Mar', rate: 10 },
  { month: 'Apr', rate: 8 },
  { month: 'May', rate: 9 },
  { month: 'Jun', rate: 7 },
];

const RISK_FACTOR_DATA = [
  { factor: 'Missed Meds', count: 45 },
  { factor: 'Low Mobility', count: 32 },
  { factor: 'Diet non-compliance', count: 28 },
  { factor: 'Missed Appt', count: 15 },
  { factor: 'High BP', count: 40 },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
             Predictive Analytics & Insights
          </h1>
          <p className="text-muted-foreground mt-1">
             AI-driven risk assessment and hospital performance metrics.
          </p>
        </div>

        {/* AI Insights Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Card className="md:col-span-2 border-none shadow-lg shadow-slate-200/50 dark:shadow-none bg-gradient-to-br from-indigo-950 to-slate-900 text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
             <CardHeader className="relative z-10">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                   <BrainCircuit className="w-6 h-6 text-primary" />
                 </div>
                 <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">AI Model v2.4 Active</Badge>
               </div>
               <CardTitle className="text-2xl font-heading text-white">Readmission Risk Forecast</CardTitle>
               <CardDescription className="text-slate-300">
                 Based on current patient adherence and vitals, we predict a <span className="text-emerald-400 font-bold">12% decrease</span> in readmissions next month.
               </CardDescription>
             </CardHeader>
             <CardContent className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
               <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                 <p className="text-slate-300 text-sm mb-1">High Risk Patients</p>
                 <p className="text-3xl font-bold">16</p>
                 <p className="text-xs text-rose-300 mt-2 flex items-center gap-1">
                   <AlertTriangle className="w-3 h-3" /> Action Required
                 </p>
               </div>
               <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                 <p className="text-slate-300 text-sm mb-1">Predicted Readmissions</p>
                 <p className="text-3xl font-bold">5</p>
                 <p className="text-xs text-emerald-300 mt-2">
                   ↓ 2 from last week
                 </p>
               </div>
               <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                 <p className="text-slate-300 text-sm mb-1">System Accuracy</p>
                 <p className="text-3xl font-bold">94%</p>
                 <p className="text-xs text-slate-400 mt-2">Last validated 2h ago</p>
               </div>
             </CardContent>
           </Card>

           <Card className="border-none shadow-lg shadow-slate-200/50 dark:shadow-none bg-white dark:bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Risk Distribution</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center h-[200px]">
                 <div className="space-y-5">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                         <span className="font-medium">High Risk</span>
                         <span className="text-rose-600 font-bold">12%</span>
                      </div>
                      <Progress value={12} className="h-3 bg-secondary" indicatorClassName="bg-rose-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                         <span className="font-medium">Moderate Risk</span>
                         <span className="text-amber-600 font-bold">28%</span>
                      </div>
                      <Progress value={28} className="h-3 bg-secondary" indicatorClassName="bg-amber-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                         <span className="font-medium">Low Risk</span>
                         <span className="text-emerald-600 font-bold">60%</span>
                      </div>
                      <Progress value={60} className="h-3 bg-secondary" indicatorClassName="bg-emerald-500" />
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>

        {/* Detailed Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <Card className="border-none shadow-lg shadow-slate-200/50 dark:shadow-none">
              <CardHeader>
                 <CardTitle>Hospital Readmission Rate</CardTitle>
                 <CardDescription>6 Month Trend</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={READMISSION_DATA}>
                          <defs>
                            <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} />
                          <YAxis axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                          <Area type="monotone" dataKey="rate" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRate)" strokeWidth={3} />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-none shadow-lg shadow-slate-200/50 dark:shadow-none">
              <CardHeader>
                 <CardTitle>Top Risk Contributing Factors</CardTitle>
                 <CardDescription>Based on patient data analysis</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={RISK_FACTOR_DATA} layout="vertical" margin={{ left: 40 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
                          <XAxis type="number" axisLine={false} tickLine={false} />
                          <YAxis dataKey="factor" type="category" axisLine={false} tickLine={false} width={100} tick={{fontSize: 12}} />
                          <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                          <Bar dataKey="count" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} barSize={20} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
