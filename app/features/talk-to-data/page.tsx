import React from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall, MoveRight } from "lucide-react";

const DataDialogsPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-20 lg:py-40 bg-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Transformative Tech</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Elevate Your Dialogs with Intelligent Data Interactions!
              </h1>
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
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Excel Integration Section */}
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Excel Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Intelligent Spreadsheet Interactions
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Turn your spreadsheets into smart data assistants with General Bots! Our platform allows your bots to **retrieve and update Excel data effortlessly**.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Instant Data Retrieval</p>
                  <p className="text-muted-foreground text-sm">
                    Fetch the latest data from your spreadsheets with ease. Just ask your bot!
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Updates</p>
                  <p className="text-muted-foreground text-sm">
                    Automate data entries and updates directly from conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Database Integration Section */}
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Database Dialogs</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Real-Time Data Management
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Connect your bots to databases for real-time data access and interactive management. **Experience seamless data interactions** like never before.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Data Access</p>
                  <p className="text-muted-foreground text-sm">
                    Fetch and filter data from your databases instantly.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Interactive Data Management</p>
                  <p className="text-muted-foreground text-sm">
                    Update, add, or delete records through simple conversational commands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Web Services Integration Section */}
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Web Services Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Connect Across Platforms
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Integrate with a wide array of web services and APIs. **From CRM systems to social media**, your bots will connect and interact seamlessly.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>API Connectivity</p>
                  <p className="text-muted-foreground text-sm">
                    Fetch data, process transactions, and more through API integrations.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Multi-Platform Support</p>
                  <p className="text-muted-foreground text-sm">
                    Connect with CRM systems, payment gateways, and other tools effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl tracking-tighter font-regular">
            Ready to Transform Your Data Interactions?
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-lg text-center">
            Don’t settle for ordinary—**elevate your data interactions** with General Bots. **Get started today** and experience the future of intelligent dialogs.
          </p>
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
