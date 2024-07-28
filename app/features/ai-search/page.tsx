import React from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall, MoveRight } from "lucide-react";

const AISearchPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-20 lg:py-40 bg-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">AI Search Revolutionized</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Discover Advanced Search with AI!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Harness the power of vector databases and Large Language Models (LLMs) with General Bots. Our AI-driven search solutions provide unparalleled accuracy and relevance, transforming how you access and retrieve information.
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

    {/* Vector Databases Section */}
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Vector Databases</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Power Your Search with Vector Databases
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Vector databases are essential for modern AI search capabilities. By representing data as high-dimensional vectors, these databases enable General Bots to perform advanced similarity searches, offering highly relevant results and insights based on contextual understanding.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Search Accuracy</p>
                  <p className="text-muted-foreground text-sm">
                    Vector databases improve the accuracy of search results by analyzing data similarity in high-dimensional space.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Contextual Understanding</p>
                  <p className="text-muted-foreground text-sm">
                    Leverage contextual information to find relevant results that traditional databases might miss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Large Language Models (LLMs) Section */}
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Large Language Models (LLMs)</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Unleash the Power of LLMs
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Large Language Models bring advanced natural language understanding to your search capabilities. General Bots uses LLMs to comprehend complex queries, provide nuanced answers, and generate contextually appropriate responses, elevating your search experience to new heights.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Advanced Query Understanding</p>
                  <p className="text-muted-foreground text-sm">
                    LLMs enhance query interpretation, ensuring accurate and contextually relevant search results.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Natural Language Responses</p>
                  <p className="text-muted-foreground text-sm">
                    Get responses in natural language, making interactions more intuitive and user-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Integration Section */}
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Seamless Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Integrate AI Search Effortlessly
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              General Bots provides a straightforward integration process for leveraging vector databases and LLMs in your search applications. Our user-friendly interface and **BASIC** commands allow for easy setup and customization, ensuring that you can deploy advanced search solutions with minimal effort.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Configuration</p>
                  <p className="text-muted-foreground text-sm">
                    Set up and configure AI search functionalities with intuitive controls and **BASIC** commands.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Flexible Deployment</p>
                  <p className="text-muted-foreground text-sm">
                    Deploy AI-driven search solutions across various platforms and applications effortlessly.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Scale your search capabilities as needed, with robust support for expanding data and user queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="w-full py-20 lg:py-40 bg-blue-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-regular text-left">Transform Your Search Experience with AI</h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Experience the future of search with General Bots. Leverage vector databases and LLMs to deliver precise, contextually relevant results. Get started today and redefine how you search and access information.
            </p>
          </div>
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
);

export default AISearchPage;
