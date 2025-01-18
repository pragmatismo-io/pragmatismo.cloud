import React from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PartnerProgramPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Badge variant="outline">Join Our Partner Program</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter font-regular">Partner with General Bots</h1>
          <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md">
            Become a partner with General Bots and unlock a world of opportunities. Our Partner Program is designed to offer valuable benefits to organizations and individuals who are passionate about expanding the reach of our open-source bot platform. Learn how you can leverage our resources, share leads, and collaborate for mutual growth.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Learn More
            </Button>
            <Button size="lg" className="gap-4">
              Apply Now
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Partner Program Details Section */}
      <div className="py-20 lg:py-40">
        <div className="flex flex-col gap-4 items-start">
          <Badge>About the Partner Program</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">Why Partner with General Bots?</h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Our Partner Program offers a range of benefits to help you grow your business and expand your influence in the bot development community. By partnering with us, you gain access to exclusive resources, support, and opportunities to collaborate on cutting-edge projects with our open-source platform.
          </p>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">Here’s what you can expect from our Partner Program:</p>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Access to Exclusive Resources</p>
                  <p className="text-muted-foreground text-sm">Get access to premium tools, documentation, and support tailored to help you succeed.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Collaborative Opportunities</p>
                  <p className="text-muted-foreground text-sm">Work closely with our team on innovative projects and enhance your offerings with our technology.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Lead Sharing</p>
                  <p className="text-muted-foreground text-sm">Share leads and opportunities to grow together and benefit from mutual referrals.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Marketing Support</p>
                  <p className="text-muted-foreground text-sm">Leverage our marketing tools and support to boost your visibility and reach.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Training and Certification</p>
                  <p className="text-muted-foreground text-sm">Receive comprehensive training and certification to enhance your skills and knowledge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 lg:py-40 bg-gray-100">
        <div className="flex flex-col gap-4 items-start">
          <Badge>Ready to Partner?</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">Join Us and Start Growing</h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">Ready to take the next step? Apply to become a partner with General Bots and start leveraging our resources and network to grow your business. We’re excited to collaborate with you and achieve great things together.</p>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <a href="https://generalbots.online/pragmatismopartner">
              <Button size="lg" className="gap-4">
                Apply to Become a Partner
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" className="gap-4" variant="outline">
                Contact Us for More Information
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PartnerProgramPage;
