import { Check, PhoneCall, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Main Page Component
const GeneralBotsWebPage = () => (
  <div className="w-full py-25 lg:py-25">
    <div className="container mx-auto">

      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <Badge variant="outline">Introducing</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg font-regular">Elevate Your Website with Smart Bots</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Integrate a conversational bot directly on your website to engage visitors, streamline support, and enhance user experience.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="outline">
              Contact Us <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg">
              Learn More <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Feature Section */}
      <div className="w-full py-25 lg:py-25">
        <div className="container mx-auto">
          <div className="grid border rounded-lg py-8 grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Badge variant="outline">Features</Badge>
              <h2 className="text-3xl lg:text-5xl font-regular">Web Bot Features</h2>
              <p className="text-lg text-muted-foreground">Discover the key features of hosting a bot on your website.</p>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Seamless Integration</p>
                    <p className="text-muted-foreground text-sm">Embed a bot into your website with minimal effort and technical requirements.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Customizable UI</p>
                    <p className="text-muted-foreground text-sm">Tailor the bot’s appearance to match your site’s design and branding.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Real-Time Interaction</p>
                    <p className="text-muted-foreground text-sm">Provide immediate assistance and engage visitors with real-time chat capabilities.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Automated Responses</p>
                    <p className="text-muted-foreground text-sm">Automate replies to common questions and streamline customer service.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Lead Capture</p>
                    <p className="text-muted-foreground text-sm">Collect visitor information and generate leads directly through the chat interface.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Analytics Integration</p>
                    <p className="text-muted-foreground text-sm">Track interactions and gather insights on user behavior and engagement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="w-full py-25 lg:py-25 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <Badge>Use Cases</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Website Bot Use Cases</h2>
            <p className="text-lg text-muted-foreground">Explore how a bot can enhance different aspects of your website.</p>
            <div className="flex flex-col gap-8 pt-12">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customer Support</p>
                  <p className="text-muted-foreground text-sm">Offer support and troubleshooting directly on your website.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Sales Assistance</p>
                  <p className="text-muted-foreground text-sm">Guide visitors through purchasing decisions and answer queries.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Onboarding</p>
                  <p className="text-muted-foreground text-sm">Provide new users with helpful information and tutorials.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Event Registration</p>
                  <p className="text-muted-foreground text-sm">Facilitate event sign-ups and gather participant information.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Feedback Collection</p>
                  <p className="text-muted-foreground text-sm">Collect user feedback and reviews to improve your services.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Product Recommendations</p>
                  <p className="text-muted-foreground text-sm">Suggest products based on user preferences and behavior.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-25 lg:py-25 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <Badge>Benefits</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Benefits of Web Bots</h2>
            <p className="text-lg text-muted-foreground">Why integrating a bot on your website is advantageous.</p>
            <div className="grid lg:grid-cols-3 gap-6 pt-12">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced User Engagement</p>
                  <p className="text-muted-foreground text-sm">Keep visitors engaged and reduce bounce rates with interactive chat.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>24/7 Availability</p>
                  <p className="text-muted-foreground text-sm">Offer support and services around the clock, without human limitations.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Cost Efficiency</p>
                  <p className="text-muted-foreground text-sm">Reduce operational costs with automated interactions and responses.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Collection</p>
                  <p className="text-muted-foreground text-sm">Gather valuable data on user preferences and behavior for better insights.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Increased Conversions</p>
                  <p className="text-muted-foreground text-sm">Improve conversion rates with personalized recommendations and support.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Streamlined Processes</p>
                  <p className="text-muted-foreground text-sm">Simplify tasks like booking, purchasing, and inquiries with automated workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full py-25 lg:py-25 bg-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <Badge>Get Started</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Transform Your Website Today</h2>
            <p className="text-lg text-muted-foreground">Leverage the power of web bots to enhance user engagement and streamline operations.</p>
            <Button size="lg" className="mt-8">
              Contact Us <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

    </div>
  </div>
);

// Feature Item Component
const FeatureItem = ({ title, description, subItems }) => (
  <div className="flex flex-row gap-6 items-start">
    <Check className="w-4 h-4 mt-2 text-primary" />
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="text-muted-foreground text-sm mt-2">
        {subItems.join(", ")}
      </div>
    </div>
  </div>
);

// Use Case Item Component
const UseCaseItem = ({ title, description, subItems }) => (
  <div className="flex flex-row gap-6 items-start">
    <Check className="w-4 h-4 mt-2 text-primary" />
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="text-muted-foreground text-sm mt-2">
        {subItems.join(", ")}
      </div>
    </div>
  </div>
);

// Benefit Item Component
const BenefitItem = ({ title, description, subItems }) => (
  <div className="flex flex-row gap-6 items-start">
    <Check className="w-4 h-4 mt-2 text-primary" />
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
      <div className="text-muted-foreground text-sm mt-2">
        {subItems.join(", ")}
      </div>
    </div>
  </div>
);

export default GeneralBotsWebPage;
