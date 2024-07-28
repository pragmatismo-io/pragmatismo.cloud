import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";

export const FeaturePage = () => (
  <div className="w-full">
    {/* Section 1: Introduction */}
    <div className="py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">New Integration</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Elevate Your Facebook Page with Seamless Automation!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Integrate our advanced bot platform with your Facebook Page to automate interactions and content management. From handling customer inquiries to managing posts and events, our solution offers a comprehensive suite of automation features.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Learn More <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Section 2: Comprehensive Automation Features */}
    <div className="py-20 lg:py-40 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Automation Suite</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Automate Every Aspect of Your Facebook Page
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our platform offers a robust set of automation features to streamline your Facebook Page management. Whether it's posting updates, managing events, or handling user interactions, we cover it all to ensure a smooth and efficient experience.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Album Management</p>
                  <p className="text-muted-foreground text-sm">
                    Automatically create, update, and manage photo albums, ensuring that your media is always organized and up-to-date.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>App Link Host Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Seamlessly integrate and manage app links, allowing for smooth transitions and interactions between your app and Facebook Page.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Application Automation</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the management of your applications linked to your Facebook Page, including updates and notifications.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Authentication Handling</p>
                  <p className="text-muted-foreground text-sm">
                    Automate authentication processes for secure and seamless user access to your page and applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Business Mapping API</p>
                  <p className="text-muted-foreground text-sm">
                    Leverage automation for business mapping to streamline location-based services and interactions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Check-In Management</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the process of handling check-ins at your location to enhance customer engagement and data collection.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Comment Moderation</p>
                  <p className="text-muted-foreground text-sm">
                    Automatically manage and moderate comments on your posts to maintain a positive and engaging community.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Event Management</p>
                  <p className="text-muted-foreground text-sm">
                    Schedule, update, and manage events on your Facebook Page with automated tools to keep your audience informed and engaged.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>FB Reels Publishing</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the publishing of Reels to keep your content fresh and engaging, maximizing your reach and interaction.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Group Management</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the management of Facebook Groups, including posts and member interactions, to ensure a smooth community experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Likes and Reactions</p>
                  <p className="text-muted-foreground text-sm">
                    Automatically manage and analyze likes and reactions on your posts to gauge audience sentiment and engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Live Videos</p>
                  <p className="text-muted-foreground text-sm">
                    Schedule and manage live video streams with automation tools to keep your audience engaged in real-time.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Page and Page Posts</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the creation and management of page posts to ensure regular updates and consistent engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pages Tab Management</p>
                  <p className="text-muted-foreground text-sm">
                    Automatically manage and update the Pages tab to enhance user navigation and page visibility.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Payment Automation</p>
                  <p className="text-muted-foreground text-sm">
                    Manage and automate payment transactions and billing processes for your Facebook Page and associated applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Photo Management</p>
                  <p className="text-muted-foreground text-sm">
                    Automatically post and organize photos to maintain a visually appealing and up-to-date page.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Post and Page Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the collection and analysis of post and page insights to track performance and optimize content strategy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Post Read and Write</p>
                  <p className="text-muted-foreground text-sm">
                    Manage and automate reading and writing posts on your page, ensuring timely updates and engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>URL Handling</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the management and sharing of URLs to ensure smooth navigation and engagement on your Facebook Page.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>User Management</p>
                  <p className="text-muted-foreground text-sm">
                    Automate user interactions, including responses and data collection, to enhance user experience and engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Video Management</p>
                  <p className="text-muted-foreground text-sm">
                    Automate the posting and management of videos to keep your content dynamic and engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 3: Benefits of Automation */}
    <div className="py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Benefits</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Why Automate Your Facebook Page?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Automation not only saves time but also enhances efficiency and consistency across all aspects of your Facebook Page. Here’s how our platform benefits your business:
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Increased Efficiency</p>
                  <p className="text-muted-foreground text-sm">
                    Automate routine tasks to free up time for more strategic activities and improve overall efficiency.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Consistency</p>
                  <p className="text-muted-foreground text-sm">
                    Maintain a consistent presence on your Facebook Page with scheduled posts and automated updates.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Improved Engagement</p>
                  <p className="text-muted-foreground text-sm">
                    Engage with your audience more effectively through timely responses and interactive content.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data-Driven Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Gain valuable insights from automated data collection and analysis to refine your content strategy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalability</p>
                  <p className="text-muted-foreground text-sm">
                    Scale your Facebook Page activities effortlessly with automation tools designed for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 4: Easy Integration Process */}
    <div className="py-20 lg:py-40 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Effortless Integration with Your Facebook Page
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our platform ensures a smooth and efficient integration process with your Facebook Page. Enjoy easy setup and customization to fit your specific needs.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Quick Setup</p>
                  <p className="text-muted-foreground text-sm">
                    Complete integration swiftly with straightforward setup guides and support.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Detailed Documentation</p>
                  <p className="text-muted-foreground text-sm">
                    Access comprehensive documentation to assist with every step of the integration.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Ongoing Support</p>
                  <p className="text-muted-foreground text-sm">
                    Receive dedicated support throughout the integration process and beyond.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customizable Options</p>
                  <p className="text-muted-foreground text-sm">
                    Tailor the integration to your specific requirements with customizable settings.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Seamless Updates</p>
                  <p className="text-muted-foreground text-sm">
                    Enjoy seamless updates and enhancements without disrupting your page operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 5: Get Started */}
    <div className="py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Next Steps</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Ready to Transform Your Facebook Page?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Start automating your Facebook Page today and experience the benefits of advanced automation tools. Contact us to get started or to learn more about our offerings.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Contact Us <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FeaturePage;