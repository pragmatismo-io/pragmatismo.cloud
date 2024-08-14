import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall, MoveRight } from "lucide-react";

const DataDialogsPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Transformative Tech</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">Elevate Your Dialogs with Intelligent Data Interactions!</h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Welcome to a new era of conversational AI! General Bots turns every conversation into a powerful data interaction tool. From Excel to databases and web services, **our platform integrates seamlessly** to bring you real-time, actionable insights. Ready to revolutionize your data interactions?
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Discover More <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <Image src="/talk-data.png" alt="LLM Documents" className="rounded-md" width={1024} height={2400} loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    {/* Excel Integration Section */}
    <div className="w-full py-10 lg:py-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-10 lg:py-10 flex-col items-start">
          <div>
            <Badge>Data Sources and Excel Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">Intelligent Spreadsheet and Database Interactions</h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">Turn your spreadsheets into smart data assistants with General Bots! Our platform allows your bots to **retrieve and update Excel data effortlessly**.</p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Instant Data Retrieval</p>
                  <p className="text-muted-foreground text-sm">Fetch the latest data from your spreadsheets with ease. Just ask your bot!</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Updates</p>
                  <p className="text-muted-foreground text-sm">Automate data entries and updates directly from conversations.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>LLM-Generated SQL Queries</p>
                  <p className="text-muted-foreground text-sm">Leverage AI to generate complex SQL queries from simple natural language prompts.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Multi-Source Data Aggregation</p>
                  <p className="text-muted-foreground text-sm">Seamlessly retrieve and consolidate data from various databases and APIs into one unified view.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Cross-Platform Integration</p>
                  <p className="text-muted-foreground text-sm">Use AI to bridge data from different platforms, allowing for integrated insights across systems.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Natural Language to Database Interaction</p>
                  <p className="text-muted-foreground text-sm">Interact with your database using natural language, and let AI handle the technicalities.</p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square">
                <Image src="/talk-data-diagram.png" alt="LLM Documents" className="rounded-md" width={1024} height={2400} loading="lazy" />
              </div>
          </div>
        </div>
      </div>
    </div>

    {/* Database Integration Section */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex gap-4 py-10 lg:py-10 flex-col items-start">
          <div>
            <Badge>Database Dialogs</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">Real-Time Data Management</h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">Connect your bots to databases for real-time data access and interactive management. **Experience seamless data interactions** like never before.</p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Data Access</p>
                  <p className="text-muted-foreground text-sm">Just specify connection information in secured "Config.xls".</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>So you have BI on hands</p>
                  <p className="text-muted-foreground text-sm">Start talking to the bot about your data.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Interactive Data Management</p>
                  <p className="text-muted-foreground text-sm">Update, add, or delete records through simple conversational commands.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>API Connectivity</p>
                  <p className="text-muted-foreground text-sm">Fetch data, process transactions, and more through API integrations.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Multi-Platform Support</p>
                  <p className="text-muted-foreground text-sm">Connect with CRM systems, payment gateways, and other tools effortlessly.</p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square">
              <Image src="/talk-to-data-example.png" alt="LLM Documents" className="rounded-md" width={900} height={500} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl tracking-tighter font-regular">Ready to Transform Your Data Interactions?</h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-lg text-center">Don’t settle for ordinary—**elevate your data interactions** with General Bots. **Get started today** and experience the future of intelligent dialogs.</p>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Contact Us <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DataDialogsPage;
