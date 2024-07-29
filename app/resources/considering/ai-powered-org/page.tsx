import { LuConstruction } from "react-icons/lu";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const AIPoweredOrganizationPage = () => (
  <div className="w-full">
    {/* Hero Section */}
    <div className="w-full py-20 lg:py-40 bg-blue-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col items-start">
          <Badge variant="outline">AI-Powered Organization</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
            Transform Your Business with AI-Driven Solutions!
          </h1>
          <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
            Embrace the future of business with AI technology that enhances productivity, streamlines operations, and drives innovation. Discover how AI can revolutionize your organization.
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg" className="gap-4" variant="outline">
              Schedule a Call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Learn More <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>

    {/* Feature Section 1 */}
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex flex-col gap-4">
            <Badge>AI Integration</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">
              Elevate Efficiency with AI
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Transform your operations with AI-driven solutions. From automating repetitive tasks to enhancing decision-making, our AI tools integrate seamlessly into your existing workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Streamlined Processes</p>
                <p className="text-muted-foreground text-sm">
                  Simplify complex workflows and boost efficiency with AI solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Data-Driven Insights</p>
                <p className="text-muted-foreground text-sm">
                  Leverage AI to analyze data and uncover actionable insights.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Communication</p>
                <p className="text-muted-foreground text-sm">
                  Optimize interactions through platforms like WhatsApp and Teams.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automated Customer Support</p>
                <p className="text-muted-foreground text-sm">
                  Use AI-powered chatbots for instant support, improving customer satisfaction.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Increased Productivity</p>
                <p className="text-muted-foreground text-sm">
                  Automate routine tasks to focus on strategic initiatives.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Advanced Analytics</p>
                <p className="text-muted-foreground text-sm">
                  Gain a competitive edge with sophisticated data analysis and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature Section 2 */}
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex flex-col gap-4">
            <Badge variant="outline">AI Benefits</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">
              Unlock the Full Potential of AI
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Discover the full spectrum of benefits AI can offer your organization. From enhancing customer interactions to streamlining internal processes, our solutions are designed to drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Personalized Customer Experience</p>
                <p className="text-muted-foreground text-sm">
                  Tailor interactions to individual customer needs with AI-driven personalization.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Real-Time Monitoring</p>
                <p className="text-muted-foreground text-sm">
                  Keep track of operations and customer interactions in real-time with AI.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Proactive Issue Resolution</p>
                <p className="text-muted-foreground text-sm">
                  Address potential problems before they escalate with AI-driven alerts.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Seamless Integration</p>
                <p className="text-muted-foreground text-sm">
                  Integrate AI seamlessly with your existing systems and workflows.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Collaboration</p>
                <p className="text-muted-foreground text-sm">
                  Foster better teamwork with AI-enhanced communication tools like Teams.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Cost Efficiency</p>
                <p className="text-muted-foreground text-sm">
                  Reduce operational costs through intelligent automation and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature Section 3 */}
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex flex-col gap-4">
            <Badge>AI in Communication</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">
              Revolutionize Customer Communication
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              Enhance customer communication with AI-powered tools. Utilize platforms like WhatsApp and Teams to provide seamless, efficient, and personalized interactions with your clients.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>AI-Enhanced Messaging</p>
                <p className="text-muted-foreground text-sm">
                  Integrate AI with messaging platforms like WhatsApp to automate and personalize responses.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automated Scheduling</p>
                <p className="text-muted-foreground text-sm">
                  Use AI to schedule meetings and follow-ups directly through Teams, saving time and reducing manual effort.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Intelligent Data Capture</p>
                <p className="text-muted-foreground text-sm">
                  Capture and analyze customer data automatically to enhance service delivery.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Customer Insights</p>
                <p className="text-muted-foreground text-sm">
                  Use AI to gain deeper insights into customer behavior and preferences, leading to more targeted communication strategies.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Seamless Integration with Teams</p>
                <p className="text-muted-foreground text-sm">
                  Leverage AI to enhance team collaboration and communication within Teams, improving overall productivity.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Real-Time Support</p>
                <p className="text-muted-foreground text-sm">
                  Provide instant, AI-powered support to customers through integrated chat solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="w-full py-20 lg:py-40 bg-blue-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl md:text-5xl font-regular">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md">
            Discover how AI can drive your business forward. Contact us today to explore our AI-powered solutions and start your transformation journey.
          </p>
          <div className="flex gap-4 mt-6">
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

export default AIPoweredOrganizationPage;
