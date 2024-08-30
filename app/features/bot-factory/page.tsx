import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall, MoveRight } from "lucide-react";

const GeneralBotsPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-40 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We're Live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Revolutionize Your Workflow with General Bots!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                General Bots accelerates bot development by provisioning all code, resources, and deployment to the cloud. Choose from a range of templates and customize them using familiar tools like Excel, JSON files, or Visual Studio Code. Enhance productivity and efficiency with bots that seamlessly integrate into your daily operations.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <a href="tel:+552140402160">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://gb.pragmatismo.cloud/PROD-GeneralBots006?p=FREE">
                <Button size="lg" className="gap-4">
                  Create Bot <MoveRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Feature Section */}
    <div className="w-full py-40 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-40 lg:py-40 flex-col items-start">
          <div>
            <Badge>Bot Factory</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Powerful and Flexible Bot Creation
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              General Bots makes it easy to create and manage bots with a range of templates and customization options. Whether you're a small business or an enterprise, our platform helps you integrate bots into your processes and communications seamlessly.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Rapid Development</p>
                  <p className="text-muted-foreground text-sm">
                    Accelerate your bot development with pre-provisioned code bases and cloud deployment.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Flexible Templates</p>
                  <p className="text-muted-foreground text-sm">
                    Choose from various templates and customize them using tools like Excel, JSON files, or Visual Studio Code.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Seamless Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Effortlessly integrate bots into your business processes to enhance productivity and efficiency.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Omnichannel Support</p>
                  <p className="text-muted-foreground text-sm">
                    Achieve omnichannel communication with advanced AI services on Azure, connecting with customers across multiple platforms.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>High Reliability</p>
                  <p className="text-muted-foreground text-sm">
                    Benefit from the reliability of Azure’s web servers and cognitive services for consistent bot performance and uptime.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Cost Efficiency</p>
                  <p className="text-muted-foreground text-sm">
                    Reduce operational costs with automated solutions, saving significantly compared to traditional methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Section */}
    <div className="w-full py-40 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                Get in touch with us to learn more about how General Bots can enhance your business operations. Our team is here to help you get started and make the most out of our platform.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Schedule a Demo <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Contact Us <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);

export default GeneralBotsPage;
