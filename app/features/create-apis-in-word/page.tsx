import { Code, Plug, Lightbulb, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ApiCreationPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Easy API Creation</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Build APIs with High-Level BASIC Code Effortlessly
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Transform your API development process with high-level BASIC code that's simple to write and understand. With the support of advanced LLMs, even beginners can create powerful APIs and integrate seamlessly with General Bots.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Get Started <Lightbulb className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Learn More <ArrowRightCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Feature 1: Simplified API Creation */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Simplified Creation</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Create APIs with High-Level BASIC Code
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our platform allows you to write APIs using a high-level BASIC code that's easy to learn and use. No need for extensive programming knowledge—just straightforward, intuitive coding that anyone can pick up quickly.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Beginner-Friendly Syntax</p>
                  <p className="text-muted-foreground text-sm">
                    Use high-level BASIC code that's designed for simplicity and ease of use.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Rapid Development</p>
                  <p className="text-muted-foreground text-sm">
                    Develop APIs quickly without the complexity of traditional programming languages.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Seamlessly integrate with General Bots and other services using simple code.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Built-in Support</p>
                  <p className="text-muted-foreground text-sm">
                    Access built-in support and resources to help you through the development process.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pre-Built Templates</p>
                  <p className="text-muted-foreground text-sm">
                    Use pre-built templates to accelerate your API creation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Code className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Learning Resources</p>
                  <p className="text-muted-foreground text-sm">
                    Access tutorials and guides to get started with BASIC code for API development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2: LLM Assistance for API Development */}
    <div className="w-full py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>LLM Assistance</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Enhance Your Development with LLM Assistance
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our advanced LLMs provide real-time assistance, helping you write, debug, and optimize your BASIC code for API development. Whether you're a beginner or experienced developer, our LLMs ensure you have the support you need to succeed.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Lightbulb className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Guidance</p>
                  <p className="text-muted-foreground text-sm">
                    Get instant help with code suggestions, debugging, and optimization.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Lightbulb className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Code Completion</p>
                  <p className="text-muted-foreground text-sm">
                    Utilize auto-complete features to speed up coding and reduce errors.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Lightbulb className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Contextual Help</p>
                  <p className="text-muted-foreground text-sm">
                    Receive context-aware assistance based on your coding environment and goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Lightbulb className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Best Practices</p>
                  <p className="text-muted-foreground text-sm">
                    Learn and implement best practices for API development with guided support.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Lightbulb className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Error Detection</p>
                  <p className="text-muted-foreground text-sm">
                    Quickly identify and fix coding errors with real-time feedback.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Lightbulb className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Optimized Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Optimize your code for performance and scalability with AI-driven insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 3: Integration with General Bots */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Seamless Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Connect Effortlessly with General Bots
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Integrate your newly created APIs seamlessly with General Bots. Our platform ensures a smooth connection, enabling you to leverage bots for automation, customer interaction, and more without any hassle.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Setup</p>
                  <p className="text-muted-foreground text-sm">
                    Follow straightforward steps to connect your API with General Bots.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Workflows</p>
                  <p className="text-muted-foreground text-sm">
                    Set up automated workflows to enhance efficiency and productivity.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Interaction</p>
                  <p className="text-muted-foreground text-sm">
                    Use bots to interact with users and clients in meaningful ways.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Comprehensive Support</p>
                  <p className="text-muted-foreground text-sm">
                    Access support for troubleshooting and optimization of your API integrations.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Scale your integrations easily as your needs grow.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Plug className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Updates</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure your API and bot interactions are always up-to-date with real-time updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApiCreationPage;
