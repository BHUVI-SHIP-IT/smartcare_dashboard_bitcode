import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MESSAGES, PATIENTS } from "@/lib/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Phone, Video, MoreVertical, Paperclip, Send, Smile } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Chat() {
  const [selectedPatientId, setSelectedPatientId] = useState(PATIENTS[0].id);
  const [messageInput, setMessageInput] = useState("");
  
  const selectedPatient = PATIENTS.find(p => p.id === selectedPatientId);

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] flex gap-6">
        {/* Sidebar List */}
        <Card className="w-80 flex flex-col border-none shadow-lg shadow-slate-200/50 dark:shadow-none overflow-hidden">
          <div className="p-4 border-b border-border">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search chats..." 
                  className="pl-9 bg-secondary/50 border-transparent focus-visible:bg-background"
                />
             </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col p-2 gap-1">
              {PATIENTS.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => setSelectedPatientId(patient.id)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-all text-left",
                    selectedPatientId === patient.id 
                      ? "bg-primary/10" 
                      : "hover:bg-secondary/50"
                  )}
                >
                  <div className="relative">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${patient.name}`} />
                      <AvatarFallback>{patient.name[0]}</AvatarFallback>
                    </Avatar>
                    {patient.riskLevel === 'High' && (
                       <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-background"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className={cn(
                        "font-medium truncate",
                        selectedPatientId === patient.id ? "text-primary" : "text-foreground"
                      )}>
                        {patient.name}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">10:30 AM</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                       Patient reported feeling dizzy after medication...
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col border-none shadow-lg shadow-slate-200/50 dark:shadow-none overflow-hidden">
          {/* Header */}
          <div className="h-16 px-6 border-b border-border flex items-center justify-between bg-card">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedPatient?.name}`} />
                <AvatarFallback>{selectedPatient?.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{selectedPatient?.name}</h3>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                   <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6 bg-secondary/10">
            <div className="space-y-4">
               {/* Date Divider */}
               <div className="flex justify-center my-4">
                 <span className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">Today, Dec 06</span>
               </div>

               {/* Messages Mock */}
               {MESSAGES.map((msg) => (
                 <div 
                    key={msg.id} 
                    className={cn(
                      "flex w-full",
                      msg.isMe ? "justify-end" : "justify-start"
                    )}
                 >
                   <div 
                      className={cn(
                        "max-w-[70%] px-4 py-3 rounded-2xl shadow-sm text-sm",
                        msg.isMe 
                          ? "bg-primary text-primary-foreground rounded-tr-none" 
                          : "bg-white dark:bg-card text-foreground rounded-tl-none border border-border"
                      )}
                   >
                     <p>{msg.text}</p>
                     <p className={cn(
                       "text-[10px] mt-1 text-right",
                       msg.isMe ? "text-primary-foreground/70" : "text-muted-foreground"
                     )}>
                       {msg.timestamp}
                     </p>
                   </div>
                 </div>
               ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 bg-card border-t border-border">
            <div className="flex items-end gap-2 bg-secondary/30 p-2 rounded-xl border border-transparent focus-within:border-primary/30 transition-colors">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg text-muted-foreground hover:text-foreground shrink-0">
                <Paperclip className="w-5 h-5" />
              </Button>
              <textarea
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none focus:ring-0 resize-none max-h-32 min-h-[40px] py-2 text-sm"
                rows={1}
              />
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg text-muted-foreground hover:text-foreground shrink-0">
                <Smile className="w-5 h-5" />
              </Button>
              <Button size="icon" className="h-10 w-10 rounded-lg shrink-0 shadow-md shadow-primary/20">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
