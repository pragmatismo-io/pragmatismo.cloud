import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => (
  <div className="w-full py-40 lg:py-40">
    <div className="container mx-auto">

      {/* Section 1 - AI and Bots */}
      <section className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">AI and Bots</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Custom AI Assistants and LLM Algorithms
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                We specialize in crafting bespoke virtual assistants and artificial intelligence algorithms as pluggable services.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            {/* Virtual Assistants */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Custom Virtual Assistants</p>
                <p className="text-muted-foreground text-sm">
                  Tailored development of virtual assistants to streamline internal processes, replacing screens and forms.
                </p>
              </div>
            </div>
            {/* Engagement Generators */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Engagement Generators</p>
                <p className="text-muted-foreground text-sm">
                  Orchestrating corporate-wide engagement in conversational environments, fostering the modern workplace with virtual assistants.
                </p>
              </div>
            </div>
            {/* AI Algorithms */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Custom AI Algorithms</p>
                <p className="text-muted-foreground text-sm">
                  Development of tailored AI algorithms to enhance operational efficiency and user interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </section>

      {/* Section 2 - LLM and Arts */}
      <section className="flex gap-4 py-40 lg:py-40 flex-col items-start">
        <div>
          <Badge>LLM and Arts Integration</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Blending Artistry with Large Language Models
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Our approach integrates the creative arts with cutting-edge Large Language Models (LLM), enhancing engagement and user experience across sectors.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            {/* AI-driven Creativity */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>AI-driven Creativity</p>
                <p className="text-muted-foreground text-sm">
                  Leveraging AI to innovate and personalize user engagement with creative arts and language models.
                </p>
              </div>
            </div>
            {/* Arts and Culture Integration */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Arts and Culture Integration</p>
                <p className="text-muted-foreground text-sm">
                  Applying arts integration to enhance brand storytelling and user experience through AI technologies.
                </p>
              </div>
            </div>
            {/* Custom AI Solutions */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Custom AI Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Designing bespoke AI solutions that blend creativity and advanced analytics for transformative business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Digital Transformation */}
      <section className="w-full py-40 lg:py-40">
        <div className="container mx-auto">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="outline">Digital Transformation</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Tailored Solutions for Digital Transformation
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                We accompany enterprises in their conversational journey, emphasizing integration through Bots, Big Data & Analytics, Machine Learning, and IoT.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            {/* Cortana Intelligence Suite */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customized Cortana Intelligence Suite and Azure Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Development of hybrid cloud solutions for high-performance analytics and modern workplace adoption.
                </p>
              </div>
            </div>
            {/* Modern Workplace Solutions */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Modern Workplace Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Deployment and integration of WhatsApp, Teams, Project, SharePoint, Office 365, and Dynamics 365 (CRM) to enhance productivity and collaboration.
                </p>
              </div>
            </div>
            {/* Automation and Quality Assurance */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automation and Quality Assurance</p>
                <p className="text-muted-foreground text-sm">
                  Dedicated team of Data Scientists, Architects, and DevOps engineers focused on automating QA processes for rapid and reliable software deliveries.
                </p>
              </div>
            </div>
            {/* Bot Factory */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Bot Factory</p>
                <p className="text-muted-foreground text-sm">
                  Efficient creation and deployment of custom bots and software solutions across diverse sectors including corporate, educational, agricultural, financial, logistics, pharmaceutical, B2B, and B2C markets.
                </p>
              </div>
            </div>
            {/* General Bots Platform */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>General Bots Platform</p>
                <p className="text-muted-foreground text-sm">
                  Our philosophy exemplified in General Bots, an open-source platform built in Brazil (GitHub), empowering innovation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - QA Automation */}
      <section className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">QA Automation</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Automated Quality Assurance
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                We ensure rapid and reliable software deliveries through advanced QA automation techniques.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            {/* Continuous Testing */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Continuous Testing</p>
                <p className="text-muted-foreground text-sm">
                  Implementing continuous testing methodologies to identify defects early and ensure software reliability.
                </p>
              </div>
            </div>
            {/* Test Automation */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Test Automation Frameworks</p>
                <p className="text-muted-foreground text-sm">
                  Utilizing robust test automation frameworks to streamline QA processes and accelerate time-to-market.
                </p>
              </div>
            </div>
            {/* DevOps Integration */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>DevOps Integration</p>
                <p className="text-muted-foreground text-sm">
                  Integration of DevOps practices to automate testing, deployment, and monitoring for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </section>

      {/* Section 5 - Industry Solutions */}
      <section className="flex gap-4 py-40 lg:py-40 flex-col items-start">
        <div>
          <Badge>Industry Solutions</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Tailored Solutions for Every Sector
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            We specialize in building customized AI solutions and bots for various industries, including corporate, educational, agricultural, financial, logistics, pharmaceutical, B2B, and B2C sectors.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            {/* Sector-Specific Bots */}
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Sector-Specific Bots</p>
                <p className="text-muted-foreground text-sm">
                  Developing specialized bots and AI solutions tailored to meet the unique challenges of each industry sector.
                </p>
              </div>
            </div>
            {/* Industry-Specific Applications */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Industry-Specific Applications</p>
                <p className="text-muted-foreground text-sm">
                  Designing and deploying applications that address industry-specific needs, enhancing operational efficiency and customer satisfaction.
                </p>
              </div>
            </div>
            {/* Customer-Centric Solutions */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customer-Centric Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Creating customer-centric solutions that leverage AI to optimize business processes and improve service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Open Source Initiative */}
      <section className="w-full py-40 lg:py-40">
        <div className="container mx-auto">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge variant="outline">Open Source Initiative</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Embracing Innovation through Open Source
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                We are committed to fostering innovation and collaboration through our open-source initiative, General Bots.
              </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            {/* General Bots Platform */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>General Bots Platform</p>
                <p className="text-muted-foreground text-sm">
                  Contributing to the development community with General Bots, an open-source platform designed to empower developers and advance AI technologies.
                </p>
              </div>
            </div>
            {/* Community Engagement */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Community Engagement</p>
                <p className="text-muted-foreground text-sm">
                  Engaging with a global community of developers to collaborate on open-source projects and drive innovation in AI and bot development.
                </p>
              </div>
            </div>
            {/* Innovation Hub */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Innovation Hub</p>
                <p className="text-muted-foreground text-sm">
                  Establishing an innovation hub where ideas are shared, refined, and implemented to address emerging challenges in AI and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AboutPage;
