import { Check, PhoneCall, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BotBroadcastPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Bot Broadcast</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Transform Your Communication with Bot Broadcast
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Reach your customers and employees more effectively with General Bots. Our Bot Broadcast feature enables powerful marketing campaigns, notifications, and real-time data-driven communication, all driven by advanced custom AI models.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                Schedule a Demo <PhoneCall className="w-4 h-4" />
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

    {/* Feature 1: Effective Marketing Campaigns */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Marketing</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Elevate Your Marketing with Targeted Broadcasts
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Leverage General Bots to run highly targeted marketing campaigns. Our Bot Broadcast feature allows you to segment your audience and deliver personalized messages that resonate with each group.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Personalized Messaging</p>
                  <p className="text-muted-foreground text-sm">
                    Create customized messages for different audience segments to increase engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Campaigns</p>
                  <p className="text-muted-foreground text-sm">
                    Automate your marketing efforts with scheduled broadcasts and follow-up sequences.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Performance Analytics</p>
                  <p className="text-muted-foreground text-sm">
                    Monitor the performance of your campaigns with detailed analytics and adjust strategies as needed.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Real-Time Adjustments</p>
                  <p className="text-muted-foreground text-sm">
                    Make real-time adjustments to your campaigns based on live feedback and data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Multi-Channel Delivery</p>
                  <p className="text-muted-foreground text-sm">
                    Reach your audience through various channels, including email, SMS, and social media.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Integrate seamlessly with your existing marketing tools and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 2: Real-Time Notifications */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Notifications</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Keep Everyone Informed with Real-Time Notifications
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Use General Bots to send instant notifications to your customers and employees. Whether it’s for system updates, urgent messages, or routine reminders, our Bot Broadcast feature ensures timely and effective communication.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Instant Delivery</p>
                  <p className="text-muted-foreground text-sm">
                    Send notifications instantly to ensure timely delivery of important messages.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customizable Alerts</p>
                  <p className="text-muted-foreground text-sm">
                    Customize notifications based on recipient preferences and urgency levels.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Multi-Platform Support</p>
                  <p className="text-muted-foreground text-sm">
                    Deliver notifications across various platforms and devices.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Feedback Collection</p>
                  <p className="text-muted-foreground text-sm">
                    Gather recipient feedback and responses to improve communication strategies.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Automated Reminders</p>
                  <p className="text-muted-foreground text-sm">
                    Set up automated reminders for routine tasks and important deadlines.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Comprehensive Logs</p>
                  <p className="text-muted-foreground text-sm">
                    Access detailed logs and reports to track notification delivery and responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Feature 3: Data-Driven Custom AI Models */}
    <div className="w-full py-25 lg:py-25">
      <div className="container mx-auto">
        <div className="flex gap-4 py-25 lg:py-25 flex-col items-start">
          <div>
            <Badge>Custom AI</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Leverage Custom AI Models for Enhanced Communication
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Utilize our platform’s custom AI models to tailor your communication strategies. By analyzing data, these AI models help craft messages that are relevant and effective, ensuring your communications hit the mark.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Tailored Messaging</p>
                  <p className="text-muted-foreground text-sm">
                    Develop messaging strategies based on customer behavior and preferences.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Gain insights from data to enhance communication effectiveness and engagement.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Dynamic Adjustments</p>
                  <p className="text-muted-foreground text-sm">
                    Adjust messaging dynamically based on real-time data and feedback.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Personalization</p>
                  <p className="text-muted-foreground text-sm">
                    Provide highly personalized experiences based on individual user data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Optimized Delivery</p>
                  <p className="text-muted-foreground text-sm">
                    Optimize the timing and content of messages for maximum impact.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>AI-Driven Insights</p>
                  <p className="text-muted-foreground text-sm">
                    Use AI-driven insights to refine communication strategies and improve ROI.
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

export default BotBroadcastPage;
