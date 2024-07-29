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
                Revolutionize Your Business with Our Latest Integrations!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Experience the future of business operations with our cutting-edge integrations. Connect effortlessly with Microsoft Teams and WhatsApp to streamline your communication and enhance customer interactions. Our solution is designed to improve governance, support, and efficiency across your organization.
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

    {/* Section 2: Bots Integration with Microsoft Teams and WhatsApp */}
    <div className="py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Integration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Seamless Bots Integration
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Integrate advanced bots with Microsoft Teams and WhatsApp to revolutionize your business communications. Our solution ensures smooth and efficient operations, helping you connect with customers and team members like never before.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Cross-Platform Compatibility</p>
                  <p className="text-muted-foreground text-sm">
                    Seamlessly integrate bots across Microsoft Teams and WhatsApp for a unified experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Communication</p>
                  <p className="text-muted-foreground text-sm">
                    Facilitate instant messaging and notifications to keep your team and customers engaged.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Responses</p>
                  <p className="text-muted-foreground text-sm">
                    Automate routine queries and tasks to enhance efficiency and reduce manual workload.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Advanced Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    Gain insights into communication patterns and bot performance with comprehensive analytics.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customizable Workflows</p>
                  <p className="text-muted-foreground text-sm">
                    Tailor workflows and responses to match your business needs and user expectations.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Seamless Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Easily integrate with existing systems and tools for a cohesive business environment.
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
              Enhanced Governance and Compliance
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Maintain strict governance and compliance standards with our integrated solution. From data protection to regulatory adherence, ensure that all aspects of your communication and data handling are secure and compliant.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Regulatory Adherence</p>
                  <p className="text-muted-foreground text-sm">
                    Comply with industry regulations and standards to avoid legal complications.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Encryption</p>
                  <p className="text-muted-foreground text-sm">
                    Protect sensitive data with advanced encryption technologies to ensure privacy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Audit Trails</p>
                  <p className="text-muted-foreground text-sm">
                    Maintain detailed logs of all interactions and changes for transparency and auditing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Access Control</p>
                  <p className="text-muted-foreground text-sm">
                    Implement fine-grained access controls to ensure only authorized personnel have access to sensitive data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Incident Response</p>
                  <p className="text-muted-foreground text-sm">
                    Be prepared for any data breaches or compliance issues with a robust incident response plan.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Continuous Monitoring</p>
                  <p className="text-muted-foreground text-sm">
                    Monitor systems continuously to identify and address potential security threats proactively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section 4: Migration to Copilot Plugins */}
    <div className="py-12 lg:py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex gap-4 py-12 lg:py-12 flex-col items-start">
          <div>
            <Badge>Migration</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Smooth Migration to Copilot Plugins
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Transition your Power Apps to Copilot Plugins effortlessly. Our migration process is designed to ensure a smooth and efficient transition with minimal disruption to your operations. Enjoy enhanced features and capabilities with our new platform.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Seamless Transition</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure a smooth transition with minimal disruption to your existing processes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Features</p>
                  <p className="text-muted-foreground text-sm">
                    Leverage advanced capabilities and improvements with Copilot Plugins.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Expert Support</p>
                  <p className="text-muted-foreground text-sm">
                    Receive dedicated support throughout the migration process from our experienced team.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Integrity</p>
                  <p className="text-muted-foreground text-sm">
                    Ensure the integrity of your data during the migration process with our robust protocols.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Custom Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Tailor the migration process to fit your specific business needs and requirements.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Continuous Improvement</p>
                  <p className="text-muted-foreground text-sm">
                    Benefit from ongoing improvements and updates to the Copilot Plugins platform.
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
              Start Your Integration Today!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Don’t wait to elevate your business processes. Connect with our team to explore how our integrations and migrations can transform your operations and governance practices. Discover the benefits of advanced technology and exceptional support.
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
export default FeaturePage