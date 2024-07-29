import { Check, Instagram, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Main Page Component
const GeneralBotsInstagramPage = () => (
  <div className="w-full py-40 lg:py-40">
    <div className="container mx-auto">

      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <Badge variant="outline">Introducing</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg font-regular">Boost Engagement with Instagram Bots</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Leverage Instagram bots to interact with followers, enhance brand visibility, and drive engagement on the platform where your audience is active.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="outline">
              Contact Us <Instagram className="w-4 h-4" />
            </Button>
            <Button size="lg">
              Learn More <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Feature Section */}
      <div className="w-full py-40 lg:py-40">
        <div className="container mx-auto">
          <div className="grid border rounded-lg py-8 grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Badge variant="outline">Features</Badge>
              <h2 className="text-3xl lg:text-5xl font-regular">Instagram Bot Features</h2>
              <p className="text-lg text-muted-foreground">Explore the standout features of using bots on Instagram.</p>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Automated Responses</p>
                    <p className="text-muted-foreground text-sm">Instant replies to comments and direct messages to keep followers engaged.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Content Scheduling</p>
                    <p className="text-muted-foreground text-sm">Plan and automate posts to maintain consistent activity on your account.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Follower Engagement</p>
                    <p className="text-muted-foreground text-sm">Engage with followers through likes, comments, and direct interactions.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Analytics Tracking</p>
                    <p className="text-muted-foreground text-sm">Monitor engagement metrics and gain insights into follower behavior.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Lead Generation</p>
                    <p className="text-muted-foreground text-sm">Capture leads through automated interactions and calls to action.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Personalized Engagement</p>
                    <p className="text-muted-foreground text-sm">Tailor interactions based on user interests and behavior.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="w-full py-40 lg:py-40 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <Badge>Use Cases</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Instagram Bot Use Cases</h2>
            <p className="text-lg text-muted-foreground">How Instagram bots can be effectively used for various objectives.</p>
            <div className="flex flex-col gap-8 pt-12">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customer Service</p>
                  <p className="text-muted-foreground text-sm">Provide immediate support and handle inquiries through direct messages.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Brand Promotion</p>
                  <p className="text-muted-foreground text-sm">Promote your brand with automated messages and engaging content.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Event Management</p>
                  <p className="text-muted-foreground text-sm">Automate RSVPs and provide event details through Instagram interactions.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Product Launches</p>
                  <p className="text-muted-foreground text-sm">Generate excitement and manage inquiries for new product launches.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Contest Management</p>
                  <p className="text-muted-foreground text-sm">Facilitate and track entries for Instagram contests and giveaways.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Follower Growth</p>
                  <p className="text-muted-foreground text-sm">Automate interactions to attract and retain new followers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-40 lg:py-40 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <Badge>Benefits</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Benefits of Instagram Bots</h2>
            <p className="text-lg text-muted-foreground">Advantages of using bots on Instagram for your brand.</p>
            <div className="grid lg:grid-cols-3 gap-6 pt-12">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Engagement</p>
                  <p className="text-muted-foreground text-sm">Increase interaction rates with automated and timely responses.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Consistent Presence</p>
                  <p className="text-muted-foreground text-sm">Maintain a constant presence on Instagram with scheduled posts and interactions.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Efficient Management</p>
                  <p className="text-muted-foreground text-sm">Streamline Instagram account management with automated tasks.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Increased Reach</p>
                  <p className="text-muted-foreground text-sm">Expand your reach by engaging with a larger audience through automated interactions.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Insights</p>
                  <p className="text-muted-foreground text-sm">Gain insights into follower behavior and campaign effectiveness.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Cost Savings</p>
                  <p className="text-muted-foreground text-sm">Reduce manual workload and associated costs with automated solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full py-40 lg:py-40 bg-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <Badge>Get Started</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Elevate Your Instagram Engagement</h2>
            <p className="text-lg text-muted-foreground">Harness the power of Instagram bots to boost engagement and streamline interactions.</p>
            <Button size="lg" className="mt-8">
              Contact Us <Instagram className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

    </div>
  </div>
);

// Feature Item Component
const FeatureItem = ({ title, description }) => (
  <div className="flex flex-row gap-6 items-start">
    <Check className="w-4 h-4 mt-2 text-primary" />
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

// Use Case Item Component
const UseCaseItem = ({ title, description }) => (
  <div className="flex flex-row gap-6 items-start">
    <Check className="w-4 h-4 mt-2 text-primary" />
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

// Benefit Item Component
const BenefitItem = ({ title, description }) => (
  <div className="flex flex-row gap-6 items-start">
    <Check className="w-4 h-4 mt-2 text-primary" />
    <div className="flex flex-col gap-1">
      <p>{title}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

export default GeneralBotsInstagramPage;
