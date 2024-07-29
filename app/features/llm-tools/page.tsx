import { Code, Plug, Lightbulb, ArrowRightCircle, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LLMToolCreationPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Revolutionize Your AI Tools</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Create Advanced LLM Tools with BASIC Functions
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Unlock the power of advanced AI models like OpenAI's GPT or Claude with General Bots. Our platform allows you to create sophisticated LLM tools using simple BASIC functions. Seamlessly integrate these tools with AI models and leverage their capabilities effortlessly.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Start Creating <Lightbulb className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Explore Features <ArrowRightCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Feature 1: Simplified LLM Tool Creation */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Effortless LLM Tool Development</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Build LLM Tools with BASIC Simplicity
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              With General Bots, creating tools that can be called by sophisticated LLMs is straightforward. Write your tool using BASIC functions, and seamlessly integrate it with advanced AI models. No complex coding required—just simple BASIC functions to harness the power of AI.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Simple Syntax</p>
                  <p className="text-muted-foreground text-sm">
                    Use BASIC's intuitive syntax to write functions that are easy to understand and deploy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Quick Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Integrate your BASIC functions with LLMs like GPT or Claude without hassle.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pre-Built Templates</p>
                  <p className="text-muted-foreground text-sm">
                    Get started quickly with pre-built templates designed for LLM integration.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Easily scale your tools as your needs grow, with robust support for large-scale applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Data</p>
                  <p className="text-muted-foreground text-sm">
                    Utilize real-time data and events to enhance the functionality of your LLM tools.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Support & Resources</p>
                  <p className="text-muted-foreground text-sm">
                    Access comprehensive support and learning resources to help you master LLM tool creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2: Seamless LLM Integration */}
    <div className="w-full py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Effortless Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Integrate Your BASIC Tools with LLMs Easily
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              General Bots makes it easy to connect your BASIC functions with advanced AI models. Whether you’re working with OpenAI’s GPT, Claude, or other LLMs, our platform ensures seamless integration, allowing your tools to interact with and leverage the full potential of these AI systems.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Effortless Connectivity</p>
                  <p className="text-muted-foreground text-sm">
                    Easily connect your BASIC functions with various LLM platforms for seamless operation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Unified Workflow</p>
                  <p className="text-muted-foreground text-sm">
                    Create a unified workflow by integrating BASIC functions with LLM tools.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Functionality</p>
                  <p className="text-muted-foreground text-sm">
                    Enhance the capabilities of your tools with LLM-driven features and insights.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Interaction</p>
                  <p className="text-muted-foreground text-sm">
                    Enable real-time interaction between your BASIC functions and LLMs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Scale your integrations effortlessly as your requirements evolve.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Dedicated Support</p>
                  <p className="text-muted-foreground text-sm">
                    Access dedicated support to ensure smooth integration and optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="w-full py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Build the Future of LLM Tools?
        </h2>
        <p className="text-lg mb-8">
          Start leveraging the power of BASIC functions to create sophisticated tools that integrate seamlessly with LLMs. Transform your ideas into powerful solutions with General Bots today!
        </p>
        <Button size="lg" className="gap-4">
          Get Started <ArrowRightCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

export default LLMToolCreationPage;
