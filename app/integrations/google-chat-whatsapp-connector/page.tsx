import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function GoogleChatWhatsApp() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
          <div className="flex gap-4 flex-col flex-1">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">Connecting the AI World: Introducing WhatsApp and Google Chat Connector</h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Welcome to the future of seamless communication and collaboration! In digital age, where businesses thrive on efficient connectivity and advanced automation, the General Bots® WhatsApp and Google Chat Connector emerges as a game-changer. This innovative solution bridges the gap between customer-facing WhatsApp interactions and the internal governance of Google Chat, empowering enterprises with unparalleled AI-driven capabilities.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
            <Image src="/google-whatsapp-connector.jpeg" alt="Google WhatsApp" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">Elevate Your Small Business with Essential: The General Bots® WhatsApp and Google Chat Connector</h2>
              <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">Managing a small business today is already tough, juggling customer engagements on WhatsApp while ensuring internal collaboration on Google Chat remains efficient and compliant. Enter Essential, the General Bots® WhatsApp and Google Chat Connector, designed to simplify your communication landscape and amplify your business capabilities.</p>
            </div>
            <div className="flex gap-10 pt-12 flex-col w-full">
              <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                <div className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Easy to Use</p>
                    <p className="text-muted-foreground text-sm">We&apos;ve made it easy to use and understand, ensuring that even small business owners without extensive technical knowledge can harness its power. With a focus on simplicity and functionality, Essential empowers you to streamline communication and enhance productivity.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Fast and Reliable</p>
                    <p className="text-muted-foreground text-sm">We&apos;ve made it fast and reliable. Save time and resources with streamlined communication workflows and rely on a platform that meets your critical communication needs.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Beautiful and Modern</p>
                    <p className="text-muted-foreground text-sm">Essential is not just functional; it&apos;s beautiful and modern. Present a professional image to your customers and stakeholders while enjoying a seamless communication experience.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Efficient Workflow</p>
                    <p className="text-muted-foreground text-sm">With Essential, streamline your workflow and save time by automating repetitive tasks, allowing you to focus on strategic decision-making.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Data Security and Compliance</p>
                    <p className="text-muted-foreground text-sm">Ensure data security and compliance with Google Chat&apos;s governance features, providing peace of mind in your communication processes.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Real-time Insights</p>
                    <p className="text-muted-foreground text-sm">Gain valuable insights into customer interactions and internal processes, empowering data-driven decision-making and continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
