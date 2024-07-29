import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DataSciencePage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Badge variant="outline">Empower with Data Science</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter font-regular">
            Leverage Data Science with General Bots
          </h1>
          <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md">
            Unlock the power of data science and engage users effectively with General Bots. Our platform integrates cutting-edge open-source models to democratize data science, offering unparalleled opportunities to enhance your data-driven strategies and drive meaningful interactions.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Learn More
            </Button>
            <Button size="lg" className="gap-4">
              Get Started
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Data Science Benefits Section */}
      <div className="py-20 lg:py-40">
        <div className="flex flex-col gap-4 items-start">
          <Badge>Transform with Data Science</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Why Use Data Science with General Bots?
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Data science is a powerful tool for deriving insights and driving decisions. By integrating data science with General Bots, you can leverage the best open-source models to engage your audience, automate processes, and enhance decision-making. Our platform provides robust tools and support to help you harness data science effectively.
          </p>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Here’s how General Bots can transform your data science approach:
          </p>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Access to Advanced Models</p>
                  <p className="text-muted-foreground text-sm">
                    Utilize the latest open-source data science models to gain insights and drive actions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced User Engagement</p>
                  <p className="text-muted-foreground text-sm">
                    Create interactive experiences that leverage data science to engage and educate users.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Automate data processing and insights generation to streamline operations and decision-making.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Scale your data science solutions effortlessly with our flexible and robust platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Open-Source Flexibility</p>
                  <p className="text-muted-foreground text-sm">
                    Leverage open-source tools and models to customize and enhance your data science capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 lg:py-40 bg-gray-100">
        <div className="flex flex-col gap-4 items-start">
          <Badge>Ready to Transform?</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Start Your Data Science Journey with Us
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Dive into the world of data science with General Bots. Whether you're looking to enhance user engagement, automate insights, or leverage advanced models, our platform offers everything you need to succeed. Join us in democratizing data science and start transforming your strategies today.
          </p>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <Button size="lg" className="gap-4">
              Get Started with Data Science
            </Button>
            <Button size="lg" className="gap-4" variant="outline">
              Contact Us for More Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DataSciencePage;
