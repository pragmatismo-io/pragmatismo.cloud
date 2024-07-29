import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

 const FeatureIntegration = () => (
  <div className="w-full py-12 lg:py-12">
    <div className="container mx-auto">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">Slack Automation</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Transform Your Slack Experience with General Bots
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Revolutionize how your team interacts within Slack channels. With General Bots, automate routine tasks, streamline communication, and enhance team collaboration—all seamlessly integrated into your Slack environment.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a Call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>

      {/* Automation Benefits */}
      <div className="flex flex-col py-12 lg:py-12">
        <div className="flex gap-4 flex-col">
          <Badge>Automation Benefits</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Maximize Efficiency with Automated Tasks
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Enhance your team’s productivity and efficiency with General Bots by automating repetitive tasks and processes directly within your Slack channels. Enjoy a more streamlined workflow and focus on what truly matters.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automate Routine Tasks</p>
                <p className="text-muted-foreground text-sm">
                  Set up bots to handle repetitive tasks like scheduling, reminders, and data entry, freeing up your team to focus on higher-value activities.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Streamline Communication</p>
                <p className="text-muted-foreground text-sm">
                  Use bots to manage notifications, summarize discussions, and automatically respond to common queries, ensuring clear and effective communication.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Real-Time Updates</p>
                <p className="text-muted-foreground text-sm">
                  Receive instant updates and notifications on critical tasks and projects directly in your Slack channels, ensuring everyone stays informed and on track.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Team Collaboration</p>
                <p className="text-muted-foreground text-sm">
                  Foster better collaboration with automated team updates, task assignments, and project tracking, keeping everyone aligned and engaged.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customizable Workflows</p>
                <p className="text-muted-foreground text-sm">
                  Tailor bot functionalities to fit your specific team needs and workflows, ensuring maximum efficiency and relevance.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Improved Accountability</p>
                <p className="text-muted-foreground text-sm">
                  Track task completions and project progress automatically, enhancing accountability and visibility within your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Collaboration */}
      <div className="flex flex-col py-12 lg:py-12">
        <div className="flex gap-4 flex-col">
          <Badge>Team Collaboration</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Seamless Integration for In-Room Teams
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Leverage General Bots to enhance team collaboration and efficiency, especially for teams working in the same room. Automate interactions and maintain an organized workflow effortlessly.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Centralized Task Management</p>
                <p className="text-muted-foreground text-sm">
                  Centralize task management and updates in your Slack channels, making it easy for everyone in the room to stay informed and synchronized.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Immediate Feedback</p>
                <p className="text-muted-foreground text-sm">
                  Get instant feedback and responses through automated bots, improving communication and decision-making speed during in-room meetings.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Efficient Meeting Management</p>
                <p className="text-muted-foreground text-sm">
                  Use bots to schedule, manage, and follow up on meetings, ensuring a smooth and efficient meeting experience for all team members.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Task Visibility</p>
                <p className="text-muted-foreground text-sm">
                  Improve visibility of tasks and projects within the team, allowing everyone to track progress and updates in real time.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Reduced Manual Effort</p>
                <p className="text-muted-foreground text-sm">
                  Minimize manual effort and administrative tasks with automated processes, allowing your team to focus on core responsibilities.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Improved Team Dynamics</p>
                <p className="text-muted-foreground text-sm">
                  Enhance team dynamics with streamlined communication and task management, fostering a more collaborative and efficient work environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="flex flex-col py-12 lg:py-12">
        <div className="flex gap-4 flex-col">
          <Badge variant="outline">Summary</Badge>
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Elevate Your Slack Experience Today
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Unlock the full potential of Slack with General Bots. Automate tasks, streamline workflows, and enhance collaboration—all within your Slack environment. Revolutionize how your team works and communicates today!
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Automated Efficiency</p>
                <p className="text-muted-foreground text-sm">
                  Experience unmatched efficiency with automated tasks and streamlined workflows.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Enhanced Collaboration</p>
                <p className="text-muted-foreground text-sm">
                  Foster better team collaboration with real-time updates and automated task management.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Seamless Integration</p>
                <p className="text-muted-foreground text-sm">
                  Integrate bots seamlessly into your Slack environment to improve overall productivity.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Customizable Solutions</p>
                <p className="text-muted-foreground text-sm">
                  Tailor bot functionalities to fit your team’s specific needs and workflows.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Improved Task Visibility</p>
                <p className="text-muted-foreground text-sm">
                  Enhance task visibility and tracking for better team alignment and accountability.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Future-Ready</p>
                <p className="text-muted-foreground text-sm">
                  Stay ahead with a solution that evolves with your team’s needs and industry changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default FeatureIntegration;