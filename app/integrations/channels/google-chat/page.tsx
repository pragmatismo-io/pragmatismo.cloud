import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";

 const FeaturePage = () => (
  <div className="w-full">
    {/* Section 1: Introduction */}
    <div className="py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Platform Update</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Transform Your Communication with Google Chat Integration!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Elevate your business communication with seamless integration of Google Chat. Connect effortlessly to streamline interactions, enhance collaboration, and optimize workflows. Our solution ensures top-notch governance, support, and migration services tailored to Google Chat.
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

    {/* Section 2: Bots Integration with Google Chat */}
    <div className="py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Advanced Bots Integration with Google Chat
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Leverage the power of advanced bots with Google Chat to enhance business communication and productivity. Our integration solution is designed for effortless setup and maximum efficiency, ensuring that your team and customers experience seamless interactions.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Unified Communication</p>
                  <p className="text-muted-foreground text-sm">
                    Integrate bots across Google Chat to unify communication channels for improved collaboration.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Instant Messaging</p>
                  <p className="text-muted-foreground text-sm">
                    Facilitate real-time messaging and notifications to enhance responsiveness and engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Workflows</p>
                  <p className="text-muted-foreground text-sm">
                    Automate repetitive tasks and queries to boost efficiency and reduce manual intervention.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Insightful Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    Obtain detailed analytics on communication trends and bot performance for continuous improvement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customizable Bots</p>
                  <p className="text-muted-foreground text-sm">
                    Tailor bot functionalities and responses to meet your business requirements and user needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Effortlessly integrate with Google Chat and existing systems to create a cohesive operational environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 3: Governance and Compliance */}
    <div className="py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Governance</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Strong Governance and Compliance with Google Chat
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Ensure that your operations adhere to the highest standards of governance and compliance with our integrated solution. From safeguarding data to meeting regulatory requirements, we provide robust measures to protect and manage your information.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Regulatory Compliance</p>
                  <p className="text-muted-foreground text-sm">
                    Adhere to industry regulations and standards to ensure legal and ethical operations.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Security</p>
                  <p className="text-muted-foreground text-sm">
                    Protect sensitive information with advanced security measures and encryption technologies.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Comprehensive Audit Trails</p>
                  <p className="text-muted-foreground text-sm">
                    Maintain detailed logs of all system activities for accountability and auditing purposes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Access Management</p>
                  <p className="text-muted-foreground text-sm">
                    Implement strict access controls to ensure that only authorized personnel can access sensitive information.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Incident Management</p>
                  <p className="text-muted-foreground text-sm">
                    Have a proactive incident response plan to address any security breaches or compliance issues promptly.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Continuous Monitoring</p>
                  <p className="text-muted-foreground text-sm">
                    Continuously monitor systems to identify and address potential security threats before they escalate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 4: Migration to Google Chat Plugins */}
    <div className="py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Migration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Effortless Migration to Google Chat Plugins
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Transitioning to Google Chat Plugins is seamless with our dedicated migration services. Our approach ensures minimal disruption, maintaining the integrity of your data while enhancing your platform with advanced features and functionalities.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Seamless Transition</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure a smooth transition with minimal disruption to your ongoing operations and workflows.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Features</p>
                  <p className="text-muted-foreground text-sm">
                    Enjoy new functionalities and improvements with Google Chat Plugins to elevate your productivity.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Expert Support</p>
                  <p className="text-muted-foreground text-sm">
                    Receive dedicated assistance from our experienced team throughout the migration process.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Integrity</p>
                  <p className="text-muted-foreground text-sm">
                    Protect and maintain the integrity of your data with our comprehensive migration protocols.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Custom Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Tailor the migration process to align with your specific business needs and requirements.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Continuous Improvement</p>
                  <p className="text-muted-foreground text-sm">
                    Benefit from ongoing updates and improvements to the Google Chat Plugins platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 5: Call to Action */}
    <div className="py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 flex-col items-center">
          <div>
            <Badge>Ready to Transform?</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Start Your Google Chat Integration Today!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Don’t wait to transform your communication and collaboration. Reach out to our team to explore how integrating with Google Chat can enhance your business operations and governance. Discover the benefits of cutting-edge technology and exceptional support.
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
export default FeaturePage;