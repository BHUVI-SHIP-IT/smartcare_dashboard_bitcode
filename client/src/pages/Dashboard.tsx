import { MOCK_STATS, PATIENTS, RISK_DATA, ADHERENCE_DATA } from "@/lib/mockData";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Activity, AlertTriangle, HeartPulse, ArrowUpRight, ArrowDownRight, MoreHorizontal, Eye, MessageSquare } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
              Patient Monitoring Overview
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back, Dr. Smith. Here's what's happening today.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 hidden sm:flex bg-background hover:bg-secondary/50">
              Download Report
            </Button>
            <Button className="gap-2 shadow-lg shadow-primary/25">
              <Users className="w-4 h-4" />
              Add Patient
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Patients"
            value={MOCK_STATS.totalPatients}
            icon={Users}
            trend="+2.5%"
            trendUp={true}
            color="text-blue-500"
            bg="bg-blue-500/10"
          />
          <StatsCard
            title="At Risk"
            value={MOCK_STATS.atRisk}
            icon={AlertTriangle}
            trend="+4.1%"
            trendUp={true} // More risk is technically "up" but bad contextually, visually keeping consistent for now
            color="text-amber-500"
            bg="bg-amber-500/10"
          />
          <StatsCard
            title="Critical Cases"
            value={MOCK_STATS.criticalCases}
            icon={HeartPulse}
            trend="-1.2%"
            trendUp={false}
            color="text-rose-500"
            bg="bg-rose-500/10"
          />
          <StatsCard
            title="Avg. Adherence"
            value={`${MOCK_STATS.averageAdherence}%`}
            icon={Activity}
            trend="+1.8%"
            trendUp={true}
            color="text-emerald-500"
            bg="bg-emerald-500/10"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line Chart */}
          <Card className="lg:col-span-2 border-none shadow-lg shadow-slate-200/50 dark:shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Readmission Risk Trend (30 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={RISK_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
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
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="border-none shadow-lg shadow-slate-200/50 dark:shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Adherence Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ADHERENCE_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {ADHERENCE_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--popover))', 
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* Legend overlay or positioned below */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[hsl(var(--chart-1))]"></span> High
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[hsl(var(--chart-4))]"></span> Mod
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[hsl(var(--chart-5))]"></span> Low
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patients Table */}
        <Card className="border-none shadow-lg shadow-slate-200/50 dark:shadow-none overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-heading text-lg">Recent Patients</CardTitle>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
              View All
            </Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Condition</th>
                  <th className="px-6 py-4 font-medium">Adherence</th>
                  <th className="px-6 py-4 font-medium">Risk Level</th>
                  <th className="px-6 py-4 font-medium">Last Update</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {PATIENTS.map((patient) => (
                  <tr key={patient.id} className="bg-card hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <Link href={`/patient/${patient.id}`}>
                          <a className="hover:text-primary transition-colors">{patient.name}</a>
                        </Link>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{patient.condition}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              patient.adherence > 80 ? 'bg-emerald-500' : 
                              patient.adherence > 50 ? 'bg-amber-500' : 'bg-rose-500'
                            }`}
                            style={{ width: `${patient.adherence}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium">{patient.adherence}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant="outline" 
                        className={`
                          ${patient.riskLevel === 'High' ? 'border-rose-200 bg-rose-50 text-rose-700' : ''}
                          ${patient.riskLevel === 'Moderate' ? 'border-amber-200 bg-amber-50 text-amber-700' : ''}
                          ${patient.riskLevel === 'Low' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : ''}
                        `}
                      >
                        {patient.riskLevel}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{patient.lastUpdate}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                          <Link href={`/patient/${patient.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function StatsCard({ title, value, icon: Icon, trend, trendUp, color, bg }: any) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold font-heading mt-1 text-foreground">{value}</h3>
          </div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bg}`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </div>
        <div className="flex items-center mt-4 text-xs">
          <span className={`flex items-center font-medium ${trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
            {trend}
          </span>
          <span className="text-muted-foreground ml-1">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
