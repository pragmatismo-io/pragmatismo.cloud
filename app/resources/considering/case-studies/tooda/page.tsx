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
          <h1 className="text-5xl md:text-7xl tracking-tighter lg:max-w-xl font-regular">How Tooda used General Bots API to enhance user experience with LLM power</h1>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">Tooda, a leading food delivery platform, leveraged General Bots' API to build a powerful REST LLM engine. This case study explores how our innovative API Builder in BASIC with LLM capabilities transformed their service delivery and user experience.</p>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div>
            <Badge variant="outline">Challenge</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">The Challenges Faced</h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">Tooda was struggling with order processing flow, AI-demanding personalization in user recommendations, and difficulties in scaling their natural language understanding capabilities. They needed a robust solution to enhance their app's insights and user experience with LLM power.</p>
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
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">How General Bots API Helped</h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">By integrating General Bots' API and leveraging its API Builder in BASIC with LLM capabilities, Tooda transformed their platform with several key features:</p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Intelligent Order Processing</p>
                <p className="text-muted-foreground text-sm">Implemented LLM-powered order understanding and routing for faster, more accurate deliveries.</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Personalized Recommendations</p>
                <p className="text-muted-foreground text-sm">Utilized LLM to analyze user preferences and provide tailored food suggestions.</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Natural Language Interface</p>
                <p className="text-muted-foreground text-sm">Developed an intuitive chat-based ordering system using LLM capabilities.</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Scalable REST API</p>
                <p className="text-muted-foreground text-sm">Built a robust REST LLM engine that could handle growing user demands efficiently.</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Rapid Development</p>
                <p className="text-muted-foreground text-sm">Leveraged API Builder in BASIC for quick iterations and feature deployments.</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced User Experience</p>
                <p className="text-muted-foreground text-sm">Improved app responsiveness and interaction quality using LLM-powered features.</p>
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
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">The Impact of General Bots API</h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground">The implementation of General Bots' API and LLM capabilities brought significant improvements to Tooda's platform:</p>
            <ul className="list-disc ml-6 text-muted-foreground">
              <li>Reduced order processing time</li>
              <li>Increased user engagement through personalized recommendations</li>
              <li>Improved order accuracy with natural language understanding</li>
              <li>Achieved 99.9% uptime with the scalable REST LLM engine</li>
              <li>Decreased development time for new features by using the simple API Builder: MSWord</li>
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
          <h2 className="text-3xl md:text-5xl tracking-tighter text-center font-regular">Ready to Enhance Your Platform?</h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground text-center">Discover how General Bots API can revolutionize your application with powerful LLM capabilities. Contact us today to learn more about our API solutions.</p>
          <div className="flex flex-row gap-4">
            <a href="tel:+552140402160">
              <Button size="lg" className="gap-4" variant="outline">
                Schedule a Demo <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
            <a href="https://gb.pragmatismo.cloud/docs/">
              <Button size="lg" className="gap-4">
                Explore API Docs <MoveRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudyPage;
