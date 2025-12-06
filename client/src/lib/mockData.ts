import { User, Calendar, Activity, AlertCircle, Heart, MessageSquare, Settings, LogOut, PieChart, Users } from "lucide-react";

export const MOCK_STATS = {
  totalPatients: 124,
  atRisk: 16,
  criticalCases: 4,
  averageAdherence: 82,
};

export const RISK_DATA = [
  { day: 'Mon', value: 12 },
  { day: 'Tue', value: 14 },
  { day: 'Wed', value: 11 },
  { day: 'Thu', value: 15 },
  { day: 'Fri', value: 13 },
  { day: 'Sat', value: 10 },
  { day: 'Sun', value: 9 },
];

export const ADHERENCE_DATA = [
  { name: 'High Adherence', value: 65, fill: 'hsl(var(--chart-1))' },
  { name: 'Moderate', value: 25, fill: 'hsl(var(--chart-4))' },
  { name: 'Low', value: 10, fill: 'hsl(var(--chart-5))' },
];

export const PATIENTS = [
  {
    id: "P-1001",
    name: "John Doe",
    condition: "Post-Surgery Recovery",
    adherence: 45,
    riskLevel: "High",
    lastUpdate: "2 hours ago",
    age: 58,
    diagnosis: "Cardiac Bypass",
    dischargeDate: "2024-05-15",
    doctor: "Dr. Sarah Smith",
  },
  {
    id: "P-1002",
    name: "Jane Williams",
    condition: "Diabetes Management",
    adherence: 92,
    riskLevel: "Low",
    lastUpdate: "5 mins ago",
    age: 42,
    diagnosis: "Type 2 Diabetes",
    dischargeDate: "2024-05-10",
    doctor: "Dr. Sarah Smith",
  },
  {
    id: "P-1003",
    name: "Robert Chen",
    condition: "Hypertension",
    adherence: 78,
    riskLevel: "Moderate",
    lastUpdate: "1 day ago",
    age: 65,
    diagnosis: "High Blood Pressure",
    dischargeDate: "2024-05-12",
    doctor: "Dr. Emily White",
  },
  {
    id: "P-1004",
    name: "Alice Johnson",
    condition: "COPD",
    adherence: 88,
    riskLevel: "Low",
    lastUpdate: "3 hours ago",
    age: 71,
    diagnosis: "COPD Stage 2",
    dischargeDate: "2024-05-18",
    doctor: "Dr. Michael Brown",
  },
  {
    id: "P-1005",
    name: "David Miller",
    condition: "Knee Replacement",
    adherence: 60,
    riskLevel: "Moderate",
    lastUpdate: "6 hours ago",
    age: 55,
    diagnosis: "Total Knee Arthroplasty",
    dischargeDate: "2024-05-20",
    doctor: "Dr. Sarah Smith",
  },
];

export const MESSAGES = [
  {
    id: 1,
    patientId: "P-1001",
    sender: "John Doe",
    text: "I'm feeling a bit dizzy after taking the new medication.",
    timestamp: "10:30 AM",
    read: false,
  },
  {
    id: 2,
    patientId: "P-1001",
    sender: "Dr. Sarah Smith",
    text: "Please sit down and drink some water. Monitor your blood pressure if you can. How is it now?",
    timestamp: "10:32 AM",
    read: true,
    isMe: true,
  },
  {
    id: 3,
    patientId: "P-1002",
    sender: "Jane Williams",
    text: "Just submitted my daily glucose logs.",
    timestamp: "09:15 AM",
    read: true,
  },
];

export const MEDICATIONS = [
  { name: "Lisinopril", dosage: "10mg", frequency: "Daily", status: "taken" },
  { name: "Metformin", dosage: "500mg", frequency: "With meals", status: "taken" },
  { name: "Atorvastatin", dosage: "20mg", frequency: "Nightly", status: "missed" },
];

export const MENU_ITEMS = [
  { icon: Activity, label: "Dashboard", path: "/" },
  { icon: Users, label: "Patients", path: "/patients" },
  { icon: PieChart, label: "Analytics", path: "/analytics" },
  { icon: MessageSquare, label: "Chat", path: "/chat" },
  { icon: Settings, label: "Settings", path: "/settings" },
];
