import React from 'react';
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FullPageComponent = () => (
  <div className="w-full">
    {/* Section 1 */}
    <div className="w-full py-25 lg:py-25 bg-white">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Transform Your Business with ChatGPT and General Bots
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Leverage ChatGPT integrated with General Bots for enhanced user experience, scalability, and advanced AI capabilities.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced User Experience</p>
                  <p className="text-muted-foreground text-sm">
                    Provide intuitive interactions with customizable behaviors and content control.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalability</p>
                  <p className="text-muted-foreground text-sm">
                    Scale your solutions effortlessly to accommodate business growth and demands.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customization</p>
                  <p className="text-muted-foreground text-sm">
                    Tailor ChatGPT's capabilities to fit your specific business needs and goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Advanced Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    Gain valuable insights from data-driven analytics to drive strategic decisions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>API Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Seamlessly integrate with third-party APIs to extend functionality and capabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Plugin Development</p>
                  <p className="text-muted-foreground text-sm">
                    Develop custom plugins and actions to enhance ChatGPT's functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="w-full py-25 lg:py-25 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Customization</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Customize ChatGPT for Your Unique Needs
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Tailor ChatGPT's behavior, functionality, and integration capabilities to align with your business objectives.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Behavior Customization</p>
                  <p className="text-muted-foreground text-sm">
                    Define specific behaviors and interactions to suit your user engagement strategy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Content Control</p>
                  <p className="text-muted-foreground text-sm">
                    Manage content delivery and ensure compliance with organizational standards.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Language Adaptation</p>
                  <p className="text-muted-foreground text-sm">
                    Adapt ChatGPT's language and responses to resonate with diverse user demographics.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Integration Flexibility</p>
                  <p className="text-muted-foreground text-sm">
                    Integrate ChatGPT seamlessly with existing systems and platforms for enhanced functionality.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Performance Optimization</p>
                  <p className="text-muted-foreground text-sm">
                    Optimize ChatGPT's performance to deliver superior user experiences consistently.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Deployment Agility</p>
                  <p className="text-muted-foreground text-sm">
                    Deploy updates and new features swiftly to meet evolving business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Integrate ChatGPT with Third-Party APIs and Plugins
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Seamlessly incorporate third-party APIs and custom plugins to extend ChatGPT's functionality and integration capabilities.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>API Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Integrate with third-party APIs to enhance data exchange and functionality.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Plugin Development</p>
                  <p className="text-muted-foreground text-sm">
                    Develop custom plugins to extend ChatGPT's capabilities and integrate specialized functionalities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Implement scalable solutions with seamless API integrations and plugin developments.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Security</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure data security and compliance while integrating with external APIs and plugins.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Functionality</p>
                  <p className="text-muted-foreground text-sm">
                    Enhance ChatGPT's capabilities with specialized plugins for advanced functionality.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Continuous Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Continuously integrate new plugins and APIs to keep ChatGPT updated and efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 4 */}
    <div className="w-full py-25 lg:py-25 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Enhancements</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Enhance User Engagement with Advanced Features
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Elevate user experience and engagement with advanced features and real-time interaction capabilities powered by ChatGPT.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Responses</p>
                  <p className="text-muted-foreground text-sm">
                    Provide instant responses and support with real-time interaction capabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Personalized Experiences</p>
                  <p className="text-muted-foreground text-sm">
                    Deliver personalized user experiences with adaptive learning and customization features.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Multi-Channel Support</p>
                  <p className="text-muted-foreground text-sm">
                    Engage users across multiple channels seamlessly with integrated support capabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Performance Monitoring</p>
                  <p className="text-muted-foreground text-sm">
                    Monitor performance metrics and optimize ChatGPT's capabilities for enhanced user engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data-Driven Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Gain actionable insights from data analytics to drive informed decisions and strategies.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Scalable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Scale operations efficiently with ChatGPT's advanced capabilities and integration flexibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 5 */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Conclusion</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Embrace the Future with ChatGPT and General Bots
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Unlock limitless possibilities for innovation, growth, and customer satisfaction by integrating ChatGPT with General Bots.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Business Growth</p>
                  <p className="text-muted-foreground text-sm">
                    Drive business growth with scalable AI solutions and innovative capabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Innovation</p>
                  <p className="text-muted-foreground text-sm">
                    Foster innovation with continuous integration of advanced AI technologies and features.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customer Satisfaction</p>
                  <p className="text-muted-foreground text-sm">
                    Enhance customer satisfaction with personalized experiences and efficient support solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Collaborative Partnerships</p>
                  <p className="text-muted-foreground text-sm">
                    Collaborate effectively with General Bots to drive mutual success and innovation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Continuous Improvement</p>
                  <p className="text-muted-foreground text-sm">
                    Continuously improve and optimize ChatGPT's capabilities for sustained business success.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Future-Ready Strategies</p>
                  <p className="text-muted-foreground text-sm">
                    Implement future-ready strategies with ChatGPT's advanced AI capabilities and integration versatility.
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

export default FullPageComponent;
