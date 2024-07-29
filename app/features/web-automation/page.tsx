import React from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall, MoveRight } from "lucide-react";

const WebAutomationPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-12 lg:py-12 bg-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Web Automation Simplified</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Automate Web Tasks with Ease!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                With General Bots, you can automate your web interactions effortlessly using **BASIC** commands like OPEN, CLICK, and TYPE. Navigate pages, simulate mouse clicks, and fill out forms with simple, intuitive instructions. Revolutionize your web automation process today!
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Learn More <PhoneCall className="w-4 h-4" />
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

    {/* OPEN Command Section */}
    <div className="w-full py-12 lg:py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>OPEN Command</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Navigate to Any Web Page
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Use the **OPEN** command to navigate to any web page effortlessly. With **BASIC** syntax, you can direct your bot to visit URLs, access resources, and initiate web sessions with ease. No complex coding required—just a simple command!
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Simple Navigation</p>
                  <p className="text-muted-foreground text-sm">
                    **OPEN** any URL with a straightforward command, making web navigation a breeze.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Fast Access</p>
                  <p className="text-muted-foreground text-sm">
                    Quickly access web resources and initiate sessions without writing complex code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CLICK Command Section */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>CLICK Command</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Simulate Mouse Clicks
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Use the **CLICK** command to simulate mouse clicks on any web element. **BASIC** syntax ensures that you can automate interactions such as button clicks and link selections effortlessly. Control your web interactions with precision!
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Intuitive Clicks</p>
                  <p className="text-muted-foreground text-sm">
                    Simulate clicks on buttons, links, and other elements with **BASIC** ease.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Interaction</p>
                  <p className="text-muted-foreground text-sm">
                    Automate repetitive tasks and interactions on web pages without complex scripts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* TYPE Command Section */}
    <div className="w-full py-12 lg:py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>TYPE Command</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Fill Out Forms Instantly
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Utilize the **TYPE** command to fill out forms and input data automatically. With **BASIC** commands, you can direct your bot to enter text into fields, submit forms, and interact with web forms efficiently. Simplify your data entry processes today!
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Efficient Data Entry</p>
                  <p className="text-muted-foreground text-sm">
                    Automate form filling and data entry tasks using simple **TYPE** commands.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Precise Input</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure accurate and consistent data entry with controlled **BASIC** commands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Benefits Section */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Why Choose Us?</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              The Advantages of General Bots
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              **General Bots** offers unmatched ease in web automation with commands like **OPEN**, **CLICK**, and **TYPE**. **BASIC** functionality ensures intuitive control, simplifying complex automation tasks. Say goodbye to manual processes and hello to streamlined efficiency with our platform!
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Setup</p>
                  <p className="text-muted-foreground text-sm">
                    Start automating your web tasks with minimal setup and intuitive **BASIC** commands.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Comprehensive Control</p>
                  <p className="text-muted-foreground text-sm">
                    Gain complete control over web interactions with a few simple commands.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Increased Productivity</p>
                  <p className="text-muted-foreground text-sm">
                    Automate repetitive tasks to save time and enhance productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="w-full py-12 lg:py-12 bg-blue-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-regular text-left">Ready to Revolutionize Your Web Automation?</h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Join the future of web automation with General Bots. Simplify your workflows and harness the power of **BASIC** commands to streamline your web tasks. Start your automation journey today!
            </p>
          </div>
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

export default WebAutomationPage;
