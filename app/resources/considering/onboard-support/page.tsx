import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GeneralBotsPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Badge variant="outline">Introducing General Bots</Badge>
          <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter font-regular">
            Discover General Bots
          </h1>
          <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md">
            Dive into the world of General Bots with our comprehensive reference material. Learn about the organization of our bot server and how to utilize our various packages to enhance your bot development experience.
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

      {/* The Bot Server Section */}
      <div className="py-20 lg:py-40">
        <div className="flex flex-col gap-4 items-start">
          <Badge>Understanding the Bot Server</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            How the General Bots Server is Organized
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Welcome to the General Bots Book, your ultimate guide to understanding how our bot server is structured. The server is organized into a set of packages that streamline development and deployment for various types of bots, including .gbkb, .gbtheme, and .gbapp. This organization allows for modular and efficient development, making it easier to manage and scale your bot projects.
          </p>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            The book is divided into ten chapters, each covering essential aspects of the General Bots platform. Here’s an overview:
          </p>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Acknowledgments</p>
                  <p className="text-muted-foreground text-sm">
                    A note of thanks to those who contributed to the General Bots platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 01 - Run and Talk</p>
                  <p className="text-muted-foreground text-sm">
                    How to run the bot server and initiate conversations with your bots.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 02 - About Packages</p>
                  <p className="text-muted-foreground text-sm">
                    An overview of the various packages used in General Bots.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 03 - gbkb Reference</p>
                  <p className="text-muted-foreground text-sm">
                    Details on the .gbkb package and its use in bot knowledge bases.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 04 - gbtheme Reference</p>
                  <p className="text-muted-foreground text-sm">
                    Information on the .gbtheme package for bot theming and design.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 05 - gbdialog Reference</p>
                  <p className="text-muted-foreground text-sm">
                    How to manage dialog interactions with .gbdialog.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 06 - gbapp Reference</p>
                  <p className="text-muted-foreground text-sm">
                    Reference for building applications with the .gbapp package.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 07 - gbot Reference</p>
                  <p className="text-muted-foreground text-sm">
                    Insights into the .gbot extension and its role in bot services.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 08 - Tooling</p>
                  <p className="text-muted-foreground text-sm">
                    Tools and utilities to support bot development and deployment.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 09 - Services</p>
                  <p className="text-muted-foreground text-sm">
                    Overview of services available within the General Bots platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Chapter 10 - Contributing</p>
                  <p className="text-muted-foreground text-sm">
                    How to contribute to the General Bots project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground pt-10">
            For additional details, refer to the Appendix I - Database Model, and check out the Copyright, Foreword, and Glossary sections for more context and legal information.
          </p>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="py-20 lg:py-40 bg-gray-100">
        <div className="flex flex-col gap-4 items-start">
          <Badge>Additional Resources</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Explore More About General Bots
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Our reference material is designed to guide you through every aspect of General Bots, from server organization to package deployment. Dive deeper into each chapter to unlock the full potential of our platform and start building advanced bots with ease.
          </p>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <a href="https://github.com/GeneralBots/BotBook/tree/master">
            <Button size="lg" className="gap-4">
              Access the Book
            </Button>
            </a>
            <a href="/contact">
            <Button size="lg" className="gap-4" variant="outline">
              Contact Support
            </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GeneralBotsPage;
