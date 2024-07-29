import { Check, Lightbulb, PenTool, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ContentGenerationPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">AI-Driven Content Generation</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Revolutionize Your Content Creation with AI
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Leverage the power of AI-driven language models to effortlessly generate high-quality content. Our General Bots use advanced AI to create compelling, relevant, and engaging content tailored to your needs.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Schedule a Demo <Lightbulb className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Learn More <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div>
    </div>

    {/* Feature 1: Streamlined Content Creation */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Streamlined Creation</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Effortless Content Generation with AI
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our AI-driven General Bots simplify the content creation process. Generate articles, blog posts, social media updates, and more with minimal effort, all while maintaining high quality and relevance.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Writing</p>
                  <p className="text-muted-foreground text-sm">
                    Automatically generate written content with our AI models, reducing the need for manual writing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>High-Quality Output</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure high-quality, engaging content tailored to your target audience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customizable Templates</p>
                  <p className="text-muted-foreground text-sm">
                    Use customizable templates to maintain brand consistency and streamline content creation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Content Variety</p>
                  <p className="text-muted-foreground text-sm">
                    Generate a wide range of content types, from marketing copy to technical documentation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Quick Turnaround</p>
                  <p className="text-muted-foreground text-sm">
                    Reduce content production time with fast and efficient AI-driven generation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Collaborative Features</p>
                  <p className="text-muted-foreground text-sm">
                    Collaborate seamlessly with team members on content creation projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2: SEO Optimization and Relevance */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>SEO Optimization</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Optimize Content for Search Engines
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Improve your content's visibility with AI-powered SEO optimization. Our General Bots help you generate content that ranks well on search engines, enhancing your online presence and driving more traffic to your site.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Keyword Optimization</p>
                  <p className="text-muted-foreground text-sm">
                    Incorporate relevant keywords and phrases to improve search engine rankings.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Content Relevance</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure content relevance with AI-driven insights and suggestions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Meta Descriptions</p>
                  <p className="text-muted-foreground text-sm">
                    Automatically generate SEO-friendly meta descriptions for better search engine results.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Readability Enhancements</p>
                  <p className="text-muted-foreground text-sm">
                    Improve readability with AI-driven suggestions for content structure and style.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Competitor Analysis</p>
                  <p className="text-muted-foreground text-sm">
                    Analyze competitor content to identify opportunities and gaps.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Content Performance Tracking</p>
                  <p className="text-muted-foreground text-sm">
                    Monitor content performance and make data-driven improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 3: Personalized Content Creation */}
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Personalization</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Create Personalized Content for Your Audience
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our AI models help you create highly personalized content that resonates with your audience. Utilize data-driven insights to tailor content to specific user preferences, enhancing engagement and conversion rates.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Audience Segmentation</p>
                  <p className="text-muted-foreground text-sm">
                    Segment your audience to deliver highly relevant content.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Behavior Analysis</p>
                  <p className="text-muted-foreground text-sm">
                    Analyze user behavior to tailor content to individual preferences.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Dynamic Content</p>
                  <p className="text-muted-foreground text-sm">
                    Create dynamic content that adjusts based on user interactions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced User Engagement</p>
                  <p className="text-muted-foreground text-sm">
                    Boost user engagement with content that speaks directly to their interests and needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Content Relevance</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure content relevance with AI-driven insights and user data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Feedback Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Integrate user feedback to continuously improve content personalization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContentGenerationPage;
