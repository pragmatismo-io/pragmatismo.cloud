import React from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall, MoveRight } from "lucide-react";

const GeneralBotsTrainingPage = () => (
  <div>
    {/* Hero Section */}
    <div className="w-full py-20 lg:py-40 bg-blue-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">Next-Level Training</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Train Your Bots Using Familiar Tools!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                With General Bots, training your AI is now as simple as using **Word documents** and **Excel sheets**. **BASIC** functionality makes it effortless to control and customize your training process. Start today and revolutionize your AI training!
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

    {/* Word Documents Training Section */}
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Word Documents Training</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Leverage Familiar Formats
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              **Train your bots with Word documents** effortlessly. Upload your documents and use them to teach your bots with **BASIC** functionality, ensuring you have full control over how your AI interacts with content.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy Integration</p>
                  <p className="text-muted-foreground text-sm">
                    Upload Word documents and utilize **BASIC** controls for straightforward bot training.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Contextual Learning</p>
                  <p className="text-muted-foreground text-sm">
                    Your bots learn from the content, with **BASIC** functionality ensuring precise control over how they understand context and structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Excel Sheets Training Section */}
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Excel Sheets Training</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Streamlined Data Handling
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              **Utilize Excel sheets** to train your bots with structured data. With **BASIC** tools, easily import spreadsheets and allow your bots to learn from organized data sets, giving you control over data processing and insights.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Import</p>
                  <p className="text-muted-foreground text-sm">
                    **BASIC** functionality allows for easy import of Excel sheets, streamlining your bot training process.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enhanced Data Processing</p>
                  <p className="text-muted-foreground text-sm">
                    Your bots handle complex data sets efficiently with **BASIC** control, enabling accurate data processing and insight generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Benefits Section */}
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>Why Choose Us?</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              The Benefits of Familiar Tools
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              By using **Word documents** and **Excel sheets**, you gain the advantage of **BASIC** training tools, reducing complexity and enhancing your bot training process. **Our platform offers intuitive control** and effective training solutions.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Familiar Tools</p>
                  <p className="text-muted-foreground text-sm">
                    Leverage the tools you already use with **BASIC** ease for efficient training.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Accelerated Learning</p>
                  <p className="text-muted-foreground text-sm">
                    Speed up bot training with familiar formats and **BASIC** functionalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl tracking-tighter font-regular">
            Ready to Train Your Bots Efficiently?
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-lg text-center">
            **Transform your bot training** with General Bots. Use **Word documents** and **Excel sheets** to train your bots with **BASIC** functionality. **Get started today** and streamline your AI training process!
          </p>
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

export default GeneralBotsTrainingPage;
