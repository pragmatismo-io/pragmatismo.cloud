import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CaseStudyPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      
      {/* Introduction Section */}
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge variant="outline">Case Study</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h1 className="text-5xl md:text-7xl tracking-tighter lg:max-w-xl font-regular">
            How ArteBazar Transformed Its Operations with General Bots
          </h1>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            ArteBazar, a leading art material store in Rio de Janeiro, adopted General Bots' automation solutions to streamline their operations. This case study explores how our cutting-edge automation technology has revolutionized their business processes.
          </p>
        </div>
      </div>
      
      {/* Problem Statement Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">Challenge</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              The Challenges Faced
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              ArteBazar was grappling with several challenges including manual data entry errors, inefficient customer communication, and difficulties in managing both their online and physical store operations. They needed a robust solution to streamline their processes and enhance customer engagement.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Solution Section */}
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge variant="outline">Solution</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            How General Bots Helped
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            By integrating General Bots' automation solutions, ArteBazar transformed their operations with several key features that addressed their specific needs:
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automated Data Management</p>
                <p className="text-muted-foreground text-sm">
                  Streamlined customer data transfer to the bot database, minimizing errors and manual entries.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Customer Communication</p>
                <p className="text-muted-foreground text-sm">
                  Implemented automated WhatsApp dialogues to keep customers engaged and informed in real-time.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Unified Store Management</p>
                <p className="text-muted-foreground text-sm">
                  Integrated both online and physical store operations for seamless management.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Real-Time Insights</p>
                <p className="text-muted-foreground text-sm">
                  Gained access to real-time data and insights, enabling better decision-making and customer service.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Improved Internal Communication</p>
                <p className="text-muted-foreground text-sm">
                  Leveraged WhatsApp and Teams for better governance and coordination within the team.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Increased Operational Efficiency</p>
                <p className="text-muted-foreground text-sm">
                  Reduced manual tasks and focused on strategic growth with the automation of routine processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">Results</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              The Impact of Automation
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">
              The implementation of General Bots' automation solutions brought significant improvements to ArteBazar’s operations:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground">
              <li>Reduced data entry errors by 70%</li>
              <li>Enhanced customer satisfaction with a 50% increase in engagement rates</li>
              <li>Streamlined inventory management and order processing</li>
              <li>Increased team productivity by 40% through improved internal communication tools</li>
            </ul>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Call to Action Section */}
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-center">
        <div>
          <Badge variant="outline">Get Started</Badge>
        </div>
        <div className="flex gap-4 flex-col items-center">
          <h2 className="text-3xl md:text-5xl tracking-tighter text-center font-regular">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-center">
            Discover how General Bots can streamline your operations and enhance customer engagement. Contact us today to learn more about our automation solutions.
          </p>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a Call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Learn More <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudyPage;
