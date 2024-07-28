import { Check, PhoneCall, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Main Page Component
const GeneralBotsWhatsAppPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">

      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Introducing</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Revolutionize Your Conversations with WhatsApp
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Transform the way you interact with customers by replacing outdated UIs with the intuitive, always-on WhatsApp. Engage in meaningful conversations right where your audience is.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Get in Touch <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Learn More <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Feature Section 1 */}
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-10 flex-col">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">Features</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                    Key Features of WhatsApp Integration
                  </h2>
                  <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                    Our WhatsApp integration offers a range of features designed to enhance user interactions and streamline your communication processes.
                  </p>
                </div>
              </div>
              <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                <FeatureItem
                  title="Seamless Integration"
                  description="Integrate WhatsApp directly into your existing systems for a unified communication experience."
                  subItems={[
                    "Effortless setup with your current CRM",
                    "Sync contacts and conversations",
                    "Maintain a unified communication history"
                  ]}
                />
                <FeatureItem
                  title="Interactive Conversations"
                  description="Engage customers with interactive and dynamic messaging that goes beyond traditional forms."
                  subItems={[
                    "Rich media support (images, videos, documents)",
                    "Quick replies and interactive buttons",
                    "Personalized responses based on user behavior"
                  ]}
                />
                <FeatureItem
                  title="Automated Replies"
                  description="Set up automated replies to ensure instant and accurate responses to common queries."
                  subItems={[
                    "Customizable response templates",
                    "Automatic responses for FAQs",
                    "Advanced routing based on user input"
                  ]}
                />
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>

      {/* Feature Section 2 */}
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
            <div>
              <Badge>Advanced Capabilities</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                Enhance Your Conversations with Advanced Features
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                Discover advanced features that take your WhatsApp conversations to the next level, providing a more engaging and efficient experience.
              </p>
            </div>
            <div className="flex gap-10 pt-12 flex-col w-full">
              <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                <FeatureItem
                  title="Rich Media Support"
                  description="Send images, videos, and documents to enrich your conversations."
                  subItems={[
                    "Share product images and videos",
                    "Send documents and PDFs",
                    "Create engaging multimedia experiences"
                  ]}
                />
                <FeatureItem
                  title="Customizable Templates"
                  description="Create and use customizable templates for consistent and professional communication."
                  subItems={[
                    "Design reusable message templates",
                    "Maintain brand consistency",
                    "Quickly respond to common queries"
                  ]}
                />
                <FeatureItem
                  title="Analytics and Insights"
                  description="Gain insights into conversation metrics and customer interactions to refine your approach."
                  subItems={[
                    "Track message delivery and read rates",
                    "Analyze customer engagement patterns",
                    "Optimize responses based on data"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="w-full py-20 lg:py-40 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
            <div>
              <Badge>Use Cases</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                Transformative Use Cases for WhatsApp
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                Explore how WhatsApp integration can transform various aspects of your business communication.
              </p>
            </div>
            <div className="flex gap-10 pt-12 flex-col w-full">
              <UseCaseItem
                title="Customer Support"
                description="Offer prompt and personalized support through WhatsApp, enhancing customer satisfaction."
                subItems={[
                  "Real-time issue resolution",
                  "Personalized assistance",
                  "Support across various languages"
                ]}
              />
              <UseCaseItem
                title="Product Inquiries"
                description="Handle product inquiries and provide information directly in a familiar and convenient chat interface."
                subItems={[
                  "Instant product information",
                  "Availability and pricing details",
                  "Streamlined purchase process"
                ]}
              />
              <UseCaseItem
                title="Appointment Scheduling"
                description="Allow customers to book appointments and manage schedules through simple WhatsApp messages."
                subItems={[
                  "Easy booking process",
                  "Automated reminders",
                  "Flexible scheduling options"
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-20 lg:py-40 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
            <div>
              <Badge>Benefits</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                Benefits of WhatsApp for Your Business
              </h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                Discover the numerous benefits of replacing traditional UIs with WhatsApp to facilitate more effective and engaging conversations.
              </p>
            </div>
            <div className="flex gap-10 pt-12 flex-col w-full">
              <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                <BenefitItem
                  title="Improved Engagement"
                  description="Connect with customers where they already spend their time, leading to higher engagement rates."
                  subItems={[
                    "Access to a large user base",
                    "Enhanced customer interaction",
                    "Increased response rates"
                  ]}
                />
                <BenefitItem
                  title="Increased Convenience"
                  description="Simplify interactions with a platform that customers are familiar with and prefer."
                  subItems={[
                    "Easy-to-use interface",
                    "No need for additional apps",
                    "Streamlined communication"
                  ]}
                />
                <BenefitItem
                  title="Enhanced Flexibility"
                  description="Adapt your communication strategies easily with dynamic and versatile messaging capabilities."
                  subItems={[
                    "Customizable message formats",
                    "Flexible response options",
                    "Adapt to different customer needs"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Ready to Transform Your Conversations?
            </h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground mt-4">
              Experience the future of customer communication with our WhatsApp integration. Contact us today to learn more or request a personalized demo.
            </p>
            <div className="flex flex-row gap-4 mt-6">
              <Button size="lg" className="gap-4" variant="outline">
                Contact Us <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Request a Demo <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

// Feature Item Component
const FeatureItem = ({ title, description, subItems }) => (
  <div className="flex flex-col items-start">
    <div className="flex flex-row gap-6 items-start">
      <Check className="w-4 h-4 mt-2 text-primary" />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
          {subItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Use Case Item Component
const UseCaseItem = ({ title, description, subItems }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-primary">
      <Check className="w-4 h-4" />
    </div>
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
    <p className="text-muted-foreground mt-2">{description}</p>
    <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
      {subItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Benefit Item Component
const BenefitItem = ({ title, description, subItems }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-primary">
      <Check className="w-4 h-4" />
    </div>
    <h3 className="text-xl font-semibold mt-4">{title}</h3>
    <p className="text-muted-foreground mt-2">{description}</p>
    <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
      {subItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default GeneralBotsWhatsAppPage;
