import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CaseStudyPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      {/* Introduction Section */}
      <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
        <div>
          <Badge variant="outline">Case Study #1</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h1 className="text-5xl md:text-7xl tracking-tighter lg:max-w-xl font-regular">
            <a href="/resources/considering/case-studies/artebazar">ArteBazar</a>
          </h1>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">ArteBazar, a leading art material store in Rio de Janeiro, adopted General Bots' automation solutions to streamline their operations. This case study explores how our cutting-edge automation technology has revolutionized their business processes.</p>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">Case Study #2</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              <a href="/resources/considering/case-studies/tooda">Tooda</a>
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">Tooda, a leading food delivery platform, AI-powered its operations by leveraging General Bots' API to build a powerful REST LLM engine, positioning Tooda at the forefront of technology-driven customer service.</p>
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
          <h2 className="text-3xl md:text-5xl tracking-tighter text-center font-regular">Ready to Transform Your Business?</h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-center">Discover how General Bots can streamline your operations and enhance customer engagement. Contact us today to learn more about our automation solutions.</p>
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
