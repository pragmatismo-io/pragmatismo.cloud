import { LuConstruction } from "react-icons/lu";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import React from "react";
const SharePointGeneralBots = () => (
  <div>
    {/* Section 1: Autofill Columns */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              SharePoint and General Bots
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Autofill columns automatically extract, summarize, or generate content from files uploaded to a SharePoint document library. Using large language models (LLMs), designated columns can save metadata automatically, streamlining the process of managing files and their associated information.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Effortless Extraction</p>
                  <p className="text-muted-foreground text-sm">
                    Save time with automatic metadata extraction.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Streamlined Summarization</p>
                  <p className="text-muted-foreground text-sm">
                    Summarize content effortlessly with AI-powered tools.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Generation</p>
                  <p className="text-muted-foreground text-sm">
                    Generate new content automatically from existing files.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Consistent Updates</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure data consistency with automated updates.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Configuration</p>
                  <p className="text-muted-foreground text-sm">
                    Configure with minimal effort and customization.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Integrity</p>
                  <p className="text-muted-foreground text-sm">
                    Maintain data integrity across documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 2: Content Assembly */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Automate Your Document Creation
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Use content assembly to automatically generate standard repetitive business documents, such as contracts, statements of work, service agreements, letters of consent, and correspondence. You can do all these tasks quicker, more consistently, and with fewer errors.
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
        <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10 pt-12">
          <div className="flex flex-row gap-6 w-full items-start">
            <Check className="w-4 h-4 mt-2 text-primary" />
            <div className="flex flex-col gap-1">
              <p>Time Efficiency</p>
              <p className="text-muted-foreground text-sm">
                Save time on repetitive tasks with automation.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-start">
            <Check className="w-4 h-4 mt-2 text-primary" />
            <div className="flex flex-col gap-1">
              <p>Error Reduction</p>
              <p className="text-muted-foreground text-sm">
                Minimize errors in document creation.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-start">
            <Check className="w-4 h-4 mt-2 text-primary" />
            <div className="flex flex-col gap-1">
              <p>Consistency</p>
              <p className="text-muted-foreground text-sm">
                Maintain consistency across all documents.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-start">
            <Check className="w-4 h-4 mt-2 text-primary" />
            <div className="flex flex-col gap-1">
              <p>Custom Templates</p>
              <p className="text-muted-foreground text-sm">
                Use and create templates tailored to your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-start">
            <Check className="w-4 h-4 mt-2 text-primary" />
            <div className="flex flex-col gap-1">
              <p>Secure Handling</p>
              <p className="text-muted-foreground text-sm">
                Ensure secure handling of sensitive documents.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-start">
            <Check className="w-4 h-4 mt-2 text-primary" />
            <div className="flex flex-col gap-1">
              <p>Easy Integration</p>
              <p className="text-muted-foreground text-sm">
                Integrate seamlessly with other tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 3: Document Processing */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Efficient Document Processing
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Use prebuilt models to save time processing and extracting information from contracts, invoices, and receipts. Prebuilt models are pretrained to recognize common business documents and the structured information in the documents.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 items-start lg:grid-cols-2 gap-4">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Pretrained Models</p>
                  <p className="text-muted-foreground text-sm">
                    Utilize pretrained models for document processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Accurate Extraction</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure accurate data extraction from documents.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Workflows</p>
                  <p className="text-muted-foreground text-sm">
                    Automate workflows for processing documents.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Scale solutions to meet your business needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Comprehensive Analysis</p>
                  <p className="text-muted-foreground text-sm">
                    Get comprehensive analysis of document content.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Secure Data Handling</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure secure handling of extracted data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Section 4: Smart Tagging */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Intelligent Document Tagging
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Automatically classify and tag documents for easy retrieval. Smart tagging uses AI to assign relevant tags to documents, making it easier to search and manage your digital content.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automatic Classification</p>
                  <p className="text-muted-foreground text-sm">
                    Classify documents automatically with AI.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Improved Searchability</p>
                  <p className="text-muted-foreground text-sm">
                    Enhance document searchability with smart tags.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Efficient Management</p>
                  <p className="text-muted-foreground text-sm">
                    Manage digital content more efficiently.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customizable Tags</p>
                  <p className="text-muted-foreground text-sm">
                    Customize tags to fit your business needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Organization</p>
                  <p className="text-muted-foreground text-sm">
                    Keep your documents well-organized.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Seamless Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Integrate smart tagging with existing workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 5: Data Insights */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Unlock Valuable Data Insights
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Use the insights feature to uncover trends and patterns in your document data. Analyze metadata and content to gain actionable insights that can drive business decisions and strategy.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 items-start lg:grid-cols-2 gap-4">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Trend Analysis</p>
                  <p className="text-muted-foreground text-sm">
                    Identify trends in document data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Actionable Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Gain actionable insights from data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Custom Reports</p>
                  <p className="text-muted-foreground text-sm">
                    Generate custom reports easily.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Visualization</p>
                  <p className="text-muted-foreground text-sm">
                    Visualize data for better understanding.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Predictive Analysis</p>
                  <p className="text-muted-foreground text-sm">
                    Use predictive analysis for future trends.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Comprehensive Data</p>
                  <p className="text-muted-foreground text-sm">
                    Get a comprehensive view of your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>
  </div>
);

export default SharePointGeneralBots;
