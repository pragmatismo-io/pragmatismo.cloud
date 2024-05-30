import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function FacebookWorkplaceWhatsApp () {



  return(
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              Connecting the AI World: Introducing WhatsApp and Google Chat Connector
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
            Welcome to the future of seamless communication and collaboration! In digital age, where businesses thrive on efficient connectivity and advanced automation, the General Bots® WhatsApp and Google Chat Connector emerges as a game-changer. This innovative solution bridges the gap between customer-facing WhatsApp interactions and the internal governance of Google Chat, empowering enterprises with unparalleled AI-driven capabilities.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
          <Image src="/facebook-workplace-whatsapp-connector.jpeg" alt="Facebook Workplace WhatsApp" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />

        </div>
      </div>
    </div>

    {/* https://www.workplace.com/workplace-microsoft */}


  </div>
)
}