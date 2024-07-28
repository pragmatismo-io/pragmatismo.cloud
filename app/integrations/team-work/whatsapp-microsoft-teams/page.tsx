import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";

const IntegrationPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      {/* Section 1: Introduction */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Introduction</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Transforming Business with WhatsApp and Teams Integration
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Empower your business with seamless connectivity between WhatsApp
              and Teams. Enhance customer governance and support using AI-driven bots.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Schedule a Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Section 2: Features */}
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <Badge>Features</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Streamlined Communication and Governance
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Manage customer interactions efficiently with integrated bots and automated workflows.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            {/* Feature sub-items */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Seamless Integration</p>
                <p className="text-muted-foreground text-sm">
                  Connect WhatsApp and Teams effortlessly for unified communication.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>AI-powered Bots</p>
                <p className="text-muted-foreground text-sm">
                  Automate customer support and governance with intelligent bots.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Security</p>
                <p className="text-muted-foreground text-sm">
                  Ensure data governance and compliance with robust security measures.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Real-time Collaboration</p>
                <p className="text-muted-foreground text-sm">
                  Foster instant communication and collaboration across teams.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customizable Workflows</p>
                <p className="text-muted-foreground text-sm">
                  Tailor workflows to fit your business processes seamlessly.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Analytics and Insights</p>
                <p className="text-muted-foreground text-sm">
                  Gain valuable insights through analytics on customer interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Benefits */}
      <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Benefits</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Why Choose Our Integration?
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Explore the advantages of integrating WhatsApp and Teams for your business.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Improved Efficiency</p>
                <p className="text-muted-foreground text-sm">
                  Streamline operations and communications, reducing response times.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Collaboration</p>
                <p className="text-muted-foreground text-sm">
                  Foster teamwork and knowledge sharing across departments.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Scalable Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Grow your business with scalable solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Customer Experience</p>
                <p className="text-muted-foreground text-sm">
                  Deliver personalized customer experiences with integrated platforms.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Cost Savings</p>
                <p className="text-muted-foreground text-sm">
                  Reduce operational costs by consolidating communication tools.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Increased Productivity</p>
                <p className="text-muted-foreground text-sm">
                  Empower employees to work more efficiently with streamlined tools.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Section 4: How It Works */}
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <Badge>How It Works</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Simplifying Business Processes
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Discover the simplicity of integrating WhatsApp and Teams into your daily operations.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* How It Works steps */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg text-gray-800">Step 1: Integration Setup</h3>
              <p className="text-sm text-gray-600 mt-2">
                Easily connect WhatsApp and Teams through our intuitive setup process.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg text-gray-800">Step 2: Customization</h3>
              <p className="text-sm text-gray-600 mt-2">
                Customize workflows and settings to align with your business needs.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg text-gray-800">Step 3: Deployment</h3>
              <p className="text-sm text-gray-600 mt-2">
                Deploy integrated solutions across your organization seamlessly.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg text-gray-800">Step 4: Training and Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                Receive comprehensive training and ongoing support from our team.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg text-gray-800">Step 5: Monitoring and Optimization</h3>
              <p className="text-sm text-gray-600 mt-2">
                Monitor performance and optimize processes for continuous improvement.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg text-gray-800">Step 6: Integration Benefits</h3>
              <p className="text-sm text-gray-600 mt-2">
                Experience the benefits of streamlined communication and enhanced collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Call to Action */}
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <Badge>Get Started</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Contact us today to learn more about how our integration can benefit your business.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button size="lg" className="gap-4" variant="outline">
            Schedule a Demo <PhoneCall className="w-4 h-4" />
          </Button>
          <Button size="lg" className="gap-4">
            Contact Sales <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default IntegrationPage;
