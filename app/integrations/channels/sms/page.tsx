import { Check, PhoneCall, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Main Page Component
const GeneralBotsSMSPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">

      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <Badge variant="outline">Introducing</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg font-regular">SMS Marketing Made Simple</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Connect instantly with your audience through SMS. Simple, effective, and direct.
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
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="grid border rounded-lg py-8 grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Badge variant="outline">Features</Badge>
              <h2 className="text-3xl lg:text-5xl font-regular">SMS Marketing Features</h2>
              <p className="text-lg text-muted-foreground">Explore the core features of SMS marketing.</p>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Direct Delivery</p>
                    <p className="text-muted-foreground text-sm">Reach customers instantly with high open rates and no internet needed.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Automation</p>
                    <p className="text-muted-foreground text-sm">Automate campaigns with trigger messages, scheduling, and replies.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Concise Messaging</p>
                    <p className="text-muted-foreground text-sm">Craft brief, impactful messages that encourage action.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Templates</p>
                    <p className="text-muted-foreground text-sm">Customize and use a variety of templates for quick setup.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Two-Way Communication</p>
                    <p className="text-muted-foreground text-sm">Engage in real-time conversations and handle queries.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Scheduling</p>
                    <p className="text-muted-foreground text-sm">Plan messages ahead with flexible scheduling options.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="w-full py-20 lg:py-40 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <Badge>Use Cases</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">SMS Marketing Use Cases</h2>
            <p className="text-lg text-muted-foreground">See how SMS can be applied in real scenarios.</p>
            <div className="flex flex-col gap-8 pt-12">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Promotions</p>
                  <p className="text-muted-foreground text-sm">Send time-sensitive deals, discount codes, and event reminders.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Order Confirmations</p>
                  <p className="text-muted-foreground text-sm">Update on order status with confirmation messages and shipping updates.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Feedback</p>
                  <p className="text-muted-foreground text-sm">Collect opinions through quick surveys and real-time feedback.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Appointment Reminders</p>
                  <p className="text-muted-foreground text-sm">Reduce no-shows with reminders, confirmations, and rescheduling options.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Product Notifications</p>
                  <p className="text-muted-foreground text-sm">Inform about new products, availability updates, and features.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Loyalty Programs</p>
                  <p className="text-muted-foreground text-sm">Engage with reward notifications, program updates, and exclusive offers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-20 lg:py-40 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <Badge>Benefits</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Benefits of SMS Marketing</h2>
            <p className="text-lg text-muted-foreground">Why SMS is a valuable tool for your business.</p>
            <div className="grid lg:grid-cols-3 gap-6 pt-12">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>High Engagement</p>
                  <p className="text-muted-foreground text-sm">Achieve high open rates and quick responses with immediate attention.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Wide Reach</p>
                  <p className="text-muted-foreground text-sm">Connect broadly without needing internet or apps.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Cost-Effective</p>
                  <p className="text-muted-foreground text-sm">Affordable messaging with low cost per message and minimal setup.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Instant Feedback</p>
                  <p className="text-muted-foreground text-sm">Receive immediate insights and adjust quickly for enhanced decision-making.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Setup</p>
                  <p className="text-muted-foreground text-sm">Simple tools with minimal technical needs for quick deployment.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Versatile Uses</p>
                  <p className="text-muted-foreground text-sm">Adaptable for diverse campaigns and flexible message types.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full py-20 lg:py-40 bg-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <Badge>Get Started</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Ready to Transform Your Communication?</h2>
            <p className="text-lg text-muted-foreground">Start leveraging SMS marketing for better engagement and results.</p>
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

export default GeneralBotsSMSPage;
