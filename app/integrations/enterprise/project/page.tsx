import { LuConstruction } from "react-icons/lu";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import React from "react";

const ProjectTaskManagementBots = () => (
  <div>
    {/* Section 1: Overview */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex gap-4 py-10 lg:py-10 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              General Bots for Microsoft Project and Task Management
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Enhance your task management and project planning with General Bots. Seamlessly integrate with Microsoft Project and other task management tools to automate workflows and improve efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Section 2: Task Automation */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Automate Task Management
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Use General Bots to automate task assignments, updates, and notifications. Save time and ensure that your team stays on track with automated task management.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 items-start lg:grid-cols-2 gap-4">
              {["Automated Task Assignment", "Real-time Updates", "Deadline Reminders", "Task Prioritization", "Custom Workflows", "Error Reduction"].map(item => (
                <div className="flex flex-row gap-6 items-start" key={item}>
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{item}</p>
                    <p className="text-muted-foreground text-sm">
                      {item} with ease.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Section 3: Integration with Microsoft Project */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex gap-4 py-10 lg:py-10 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Seamless Integration with Microsoft Project
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Integrate General Bots with Microsoft Project to enhance project planning and management. Automate scheduling, resource allocation, and progress tracking for improved project outcomes.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-10">
              {["Automated Scheduling", "Resource Allocation", "Progress Tracking", "Budget Management", "Risk Management", "Custom Reports"].map(item => (
                <div className="flex flex-row gap-6 items-start" key={item}>
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{item}</p>
                    <p className="text-muted-foreground text-sm">
                      Optimize {item.toLowerCase()}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 4: Custom Integrations */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex gap-4 py-10 lg:py-10 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Custom Integrations with WhatsApp
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Empower your task management with custom integrations. Connect with WhatsApp for instant updates, task notifications, and seamless communication.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-10">
              {["Instant Notifications", "Task Updates", "Seamless Communication", "Team Collaboration", "Automated Reminders", "Custom Alerts"].map(item => (
                <div className="flex flex-row gap-6 items-start" key={item}>
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{item}</p>
                    <p className="text-muted-foreground text-sm">
                      Enhance {item.toLowerCase()}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 5: Data Insights */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Unlock Valuable Data Insights
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Use the insights feature to uncover trends and patterns in your task and project data. Analyze metadata and content to gain actionable insights that can drive business decisions and strategy.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 items-start lg:grid-cols-2 gap-4">
              {["Trend Analysis", "Actionable Insights", "Custom Reports", "Data Visualization", "Predictive Analysis", "Comprehensive Data"].map(item => (
                <div className="flex flex-row gap-6 items-start" key={item}>
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{item}</p>
                    <p className="text-muted-foreground text-sm">
                      {item} from your data.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectTaskManagementBots;
