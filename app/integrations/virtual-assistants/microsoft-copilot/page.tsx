import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MicrosoftCopilotPage = () => (
  <div className="w-full py-25 lg:py-25">
    <div className="container mx-auto">
      {/* Section 1: Microsoft Copilot Plugins and Custom Connectors */}
      <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
        <div>
          <Badge variant="outline">AI Integration</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Microsoft Copilot Plugins and Custom Connectors
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Enhance Microsoft 365 capabilities with custom plugins using
            General Bots, integrating seamlessly with platforms like WhatsApp
            and Teams.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Subitem 1: Extend 365 Capabilities */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Extend Microsoft 365 Capabilities</p>
                <p className="text-muted-foreground text-sm">
                  Empower your ecosystem with custom Copilot plugins that
                  leverage General Bots' AI capabilities.
                </p>
              </div>
            </div>
            {/* Subitem 2: WhatsApp Integration */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Integrate with WhatsApp Channels</p>
                <p className="text-muted-foreground text-sm">
                  Use Copilot to manage customer interactions on WhatsApp,
                  enhancing engagement and governance.
                </p>
              </div>
            </div>
            {/* Subitem 3: Teams Integration */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Integrate with Microsoft Teams</p>
                <p className="text-muted-foreground text-sm">
                  Collaborate efficiently using Copilot within Microsoft Teams,
                  improving workflow governance and productivity.
                </p>
              </div>
            </div>
            {/* Subitem 4: Private LLM Integration */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Integrate with Private Large Language Models (LLMs)</p>
                <p className="text-muted-foreground text-sm">
                  Seamlessly integrate Copilot with Private LLMs for enhanced
                  data security and personalized AI capabilities.
                </p>
              </div>
            </div>
            {/* Subitem 5: Governance Solutions */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Governance Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Utilize Copilot to implement robust governance solutions,
                  ensuring compliance and security across interactions.
                </p>
              </div>
            </div>
            {/* Subitem 6: Advanced AI Capabilities */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Advanced AI Capabilities</p>
                <p className="text-muted-foreground text-sm">
                  Leverage General Bots' dynamic response adaptation and
                  Copilot's real-time coding assistance to achieve superior
                  operational efficiency and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Future of AI Collaboration */}
      <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
        <div>
          <Badge variant="outline">Future Vision</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            The Future of AI Collaboration
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Embrace the future of AI collaboration with General Bots and
            Copilot, unlocking transformative possibilities across industries.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Subitem 1: Industry Revolution */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Revolutionizing Industries</p>
                <p className="text-muted-foreground text-sm">
                  Drive industry transformation by automating tasks and
                  enhancing productivity with AI-driven solutions.
                </p>
              </div>
            </div>
            {/* Subitem 2: Innovation and Scalability */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Driving Innovation and Scalability</p>
                <p className="text-muted-foreground text-sm">
                  Foster innovation and achieve scalable growth through
                  synergistic AI collaboration.
                </p>
              </div>
            </div>
            {/* Subitem 3: Strategic Partnerships */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Strategic Partnerships</p>
                <p className="text-muted-foreground text-sm">
                  Collaborate strategically to leverage AI technologies for
                  mutual business success and competitive advantage.
                </p>
              </div>
            </div>
            {/* Subitem 4: Customer-Centric Solutions */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customer-Centric Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Deliver personalized, customer-centric solutions by harnessing
                  the power of AI-driven insights and automation.
                </p>
              </div>
            </div>
            {/* Subitem 5: Global Impact */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Global Impact</p>
                <p className="text-muted-foreground text-sm">
                  Make a global impact by adopting AI technologies that drive
                  positive change and innovation across borders.
                </p>
              </div>
            </div>
            {/* Subitem 6: Scalability */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Scalability and Future Potential</p>
                <p className="text-muted-foreground text-sm">
                  Scale operations and explore future potential with scalable AI
                  solutions that adapt to evolving business needs and
                  technological advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Enhanced User Experience */}
      <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
        <div>
          <Badge variant="outline">User Experience</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Enhanced User Experience with AI Collaboration
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Elevate user experience by integrating General Bots and Copilot,
            delivering intuitive and efficient solutions.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Subitem 1: Intuitive Interfaces */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Intuitive Interfaces</p>
                <p className="text-muted-foreground text-sm">
                  Create intuitive interfaces that enhance user interaction and
                  satisfaction with AI-driven recommendations and automation.
                </p>
              </div>
            </div>
            {/* Subitem 2: Personalized Recommendations */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Personalized Recommendations</p>
                <p className="text-muted-foreground text-sm">
                  Provide personalized recommendations and responses based on
                  user preferences and historical data insights.
                </p>
              </div>
            </div>
            {/* Subitem 3: Seamless Integration */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Seamless Integration</p>
                <p className="text-muted-foreground text-sm">
                  Seamlessly integrate AI capabilities into existing platforms
                  for a cohesive user experience across multiple channels,
                  including WhatsApp and Microsoft Teams.
                </p>
              </div>
            </div>
            {/* Subitem 4: Automation and Efficiency */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automation and Efficiency</p>
                <p className="text-muted-foreground text-sm">
                  Automate routine tasks and streamline operations with
                  intelligent AI solutions that boost efficiency and reduce
                  manual effort.
                </p>
              </div>
            </div>
            {/* Subitem 5: Data-Driven Insights */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Data-Driven Insights</p>
                <p className="text-muted-foreground text-sm">
                  Gain actionable insights from data-driven AI models to enhance
                  decision-making processes and improve overall user
                  satisfaction.
                </p>
              </div>
            </div>
            {/* Subitem 6: Scalability and Growth */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Scalability and Growth</p>
                <p className="text-muted-foreground text-sm">
                  Scale user-centric solutions and drive business growth by
                  leveraging scalable AI technologies that adapt to evolving
                  customer needs and market trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Implementing AI Solutions */}
      <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
        <div>
          <Badge variant="outline">Implementation</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Implementing AI Solutions for Modern Businesses
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Empower modern businesses with AI-driven solutions that optimize
            processes and drive innovation.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Subitem 1: Streamlined Operations */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Streamlined Operations</p>
                <p className="text-muted-foreground text-sm">
                  Streamline business operations and workflows with AI-driven
                  solutions that automate tasks and optimize resource
                  allocation.
                </p>
              </div>
            </div>
            {/* Subitem 2: Enhanced Productivity */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Productivity</p>
                <p className="text-muted-foreground text-sm">
                  Boost employee productivity and collaboration with AI tools
                  that facilitate seamless communication and project
                  management.
                </p>
              </div>
            </div>
            {/* Subitem 3: Data Security and Compliance */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Data Security and Compliance</p>
                <p className="text-muted-foreground text-sm">
                  Ensure data security and regulatory compliance with AI
                  solutions that prioritize privacy and governance standards.
                </p>
              </div>
            </div>
            {/* Subitem 4: Customer Engagement */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Customer Engagement</p>
                <p className="text-muted-foreground text-sm">
                  Improve customer engagement and satisfaction by delivering
                  personalized experiences and proactive support with AI-driven
                  insights.
                </p>
              </div>
            </div>
            {/* Subitem 5: Innovation and Adaptation */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Innovation and Adaptation</p>
                <p className="text-muted-foreground text-sm">
                  Foster innovation and adaptability within your organization
                  by harnessing AI technologies to address market challenges and
                  capitalize on emerging opportunities.
                </p>
              </div>
            </div>
            {/* Subitem 6: Competitive Advantage */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Competitive Advantage</p>
                <p className="text-muted-foreground text-sm">
                  Gain a competitive advantage in the marketplace by leveraging
                  AI-driven insights and automation to differentiate your
                  offerings and drive business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Conclusion and Call to Action */}
      <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
        <div>
          <Badge variant="outline">Conclusion</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Transform Your Business with AI Collaboration
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Discover the transformative power of AI collaboration with General
            Bots and Copilot, paving the way for a future of innovation,
            efficiency, and growth.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="flex flex-row gap-4">
            {/* Call to Action Buttons */}
            <Button size="lg" className="gap-4" variant="outline">
              Schedule a Demo <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Sign Up Now <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MicrosoftCopilotPage;
