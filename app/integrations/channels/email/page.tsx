import { Check, Mail, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Main Page Component
const GeneralBotsEmailPage = () => (
  <div className="w-full py-25 lg:py-25">
    <div className="container mx-auto">

      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <Badge variant="outline">Introducing</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg font-regular">Enhance Engagement with Email Bots</h1>
          <p className="text-xl text-muted-foreground max-w-md">
            Utilize email bots to connect with your audience, automate communication, and drive marketing success with the timeless power of email.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="outline">
              Contact Us <Mail className="w-4 h-4" />
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
              <h2 className="text-3xl lg:text-5xl font-regular">Email Bot Features</h2>
              <p className="text-lg text-muted-foreground">Discover the powerful features of email bots for effective communication.</p>
              <div className="grid lg:grid-cols-3 gap-6">
                <FeatureItem title="Automated Responses" description="Instantly reply to emails and manage communication seamlessly." />
                <FeatureItem title="Personalized Campaigns" description="Send tailored email campaigns based on user behavior and preferences." />
                <FeatureItem title="Follow-up Sequences" description="Automate follow-up emails to nurture leads and drive conversions." />
                <FeatureItem title="Segmentation" description="Segment your audience for targeted messaging and improved engagement." />
                <FeatureItem title="Analytics Tracking" description="Monitor open rates, click-through rates, and campaign performance." />
                <FeatureItem title="Integration" description="Integrate with CRM and other marketing tools for a unified approach." />
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
            <h2 className="text-3xl md:text-5xl font-regular">Email Bot Use Cases</h2>
            <p className="text-lg text-muted-foreground">Effective applications of email bots for diverse marketing needs.</p>
            <div className="flex flex-col gap-8 pt-12">
              <UseCaseItem title="Lead Nurturing" description="Automate follow-ups and content delivery to guide leads through the funnel." />
              <UseCaseItem title="Welcome Series" description="Create a series of welcome emails to onboard new subscribers and customers." />
              <UseCaseItem title="Event Promotion" description="Send out automated invitations, reminders, and follow-ups for events." />
              <UseCaseItem title="Product Announcements" description="Announce new products and updates with automated email blasts." />
              <UseCaseItem title="Survey Distribution" description="Send surveys and collect feedback with automated email campaigns." />
              <UseCaseItem title="Abandoned Cart Reminders" description="Recover lost sales with automated reminders for abandoned shopping carts." />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full py-25 lg:py-25 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col items-start">
            <Badge>Benefits</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Benefits of Email Bots</h2>
            <p className="text-lg text-muted-foreground">Key advantages of using email bots for your marketing strategy.</p>
            <div className="grid lg:grid-cols-3 gap-6 pt-12">
              <BenefitItem title="Increased Efficiency" description="Automate routine tasks and save time for more strategic activities." />
              <BenefitItem title="Improved Personalization" description="Deliver personalized content and offers to engage your audience." />
              <BenefitItem title="Higher Conversion Rates" description="Drive better results with targeted follow-ups and automated campaigns." />
              <BenefitItem title="Scalability" description="Easily scale your marketing efforts without increasing manual workload." />
              <BenefitItem title="Cost Savings" description="Reduce costs associated with manual email management and campaign execution." />
              <BenefitItem title="Data Insights" description="Gain valuable insights into campaign performance and user behavior." />
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="w-full py-25 lg:py-25 bg-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <Badge>Get Started</Badge>
            <h2 className="text-3xl md:text-5xl font-regular">Boost Your Email Marketing Today</h2>
            <p className="text-lg text-muted-foreground">Leverage the power of email bots to enhance your communication and marketing efforts.</p>
            <Button size="lg" className="mt-8">
              Contact Us <Mail className="w-4 h-4" />
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

export default GeneralBotsEmailPage;
