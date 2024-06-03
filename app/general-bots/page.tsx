import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { IoLogoSlack } from "react-icons/io";
import { MdFacebook, MdOutlineDocumentScanner, MdOutlineEmail } from "react-icons/md";
import { PiMicrosoftTeamsLogoFill, PiWhatsappLogoLight } from "react-icons/pi";
import { SiGooglechat } from "react-icons/si";
import { TbWorldCheck } from "react-icons/tb";
import { LuConstruction } from "react-icons/lu";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Check } from "lucide-react";


export default function Page() {
  return (

    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Badge variant="outline">Go General Bots</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              The power of LLM with the simplicity of MSOffice.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Rapidly deploy AI chatbots leveraging your knowledge base and BASIC skills.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Free Tier <MoveRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Book a Demo <PhoneCall className="w-4 h-4" />
            </Button>

          </div>
          No credit card required.
        </div>
      </div>




      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using General Bots® today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Do automation the self way. Do your work from your WhatsApp or any channel.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />

          </div>
        </div>
      </div>


      <div className="container m-auto ">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Something new!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Managing a small business today is already tough.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <a href="/features/ai-search">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/ai-search.png" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />

                </div>
                <h3 className="text-xl tracking-tight">AI Search</h3>
                <p className="text-muted-foreground text-base">
                  Deploy AI-driven search capabilities for corporate documents, covering PDF and .docx formats, facilitating seamless access across the organization.
                </p>

              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/features/content-generation">

                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/content-generation.jpeg" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">Content Generation</h3>
                <p className="text-muted-foreground text-base">
                  Strategic content creation across diverse platforms acts as the engine propelling business growth while nurturing audience engagement.
                </p>

              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/features/bot-factory">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/bot-factory.png" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />

                </div>
                <h3 className="text-xl tracking-tight">Bot Factory</h3>
                <p className="text-muted-foreground text-base">
                  Unleash limitless chatbots and virtual assistants to transform all system interactions into natural conversations.
                </p>

              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/features/talk-to-data">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/talk-data.png" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">Talk to data</h3>
                <p className="text-muted-foreground text-base">
                  Bots for data-driven decision-making oriented culture, guiding conversations in a conversational and actionable manner.
                </p>

              </a>
            </div>

            <div className="flex flex-col gap-2">
              <a href="/features/broadcast">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/broadcast.jpeg" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">Broadcast</h3>
                <p className="text-muted-foreground text-base">
                  Effortlessly reach out to vast audiences on WhatsApp or Enterprise. Craft bespoke conversation experiences by customizing AI-backed message replies.
                </p>

              </a>
            </div>

            <div className="flex flex-col gap-2">
              <a href="/features/trainning">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/train.jpeg" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">Train with well-known tools</h3>
                <p className="text-muted-foreground text-base">
                  Use Tools you know to edit content like MS Word or Excel. Train by using natural language with no code or diagram skills.
                </p>

              </a>
            </div>

            <div className="flex flex-col gap-2">
              <a href="/features/web-automation">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/web-automation.jpeg" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">Web Automation</h3>
                <p className="text-muted-foreground text-base">
                  Perform web tasks with General Bots® Web Automation scrapping data from sites or getting key indicators from online services.
                </p>

              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/features/llm-tools">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/llm-tools.png" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">LLM Tools</h3>
                <p className="text-muted-foreground text-base">
                  Streamline the creation of web services in BASIC and develop LLM tools, seamlessly callable by your Large Language Models.
                </p>

              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/features/create-apis-in-word">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/api.png" alt="GB Features" width={1024} height={768} layout="fixed" className="rounded-md" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">Calling APIs</h3>
                <p className="text-muted-foreground text-base">
                  In simplified BASIC code, you can easily send and receive data from remote servers by using HTTP rest.
                </p>

              </a>
            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto mt-20">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Channels</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Write once, it is ominichannel
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                General Bots is omni-channel, so you can design conversations across channels providing 
                'get things done' faster.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/whatsapp">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <Image src="/icons/whatsapp.svg" alt="WhatsApp Logo" width={200} height={200} className="rounded-md w-full h-full" loading="lazy" />
                </div>
                <h3 className="text-xl tracking-tight">WhatsApp Official</h3>
                <p className="text-muted-foreground text-base">Connect with your audience through WhatsApp Official integration.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/sms">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <MessageSquareIcon className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">SMS</h3>
                <p className="text-muted-foreground text-base">Reach out to customers via SMS for instant communication.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/web-chat">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <CgWebsite className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">Web Chat in your site</h3>
                <p className="text-muted-foreground text-base">Integrate a web chat feature directly into your website for seamless interaction.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/instagram-direct-messages">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <FaInstagram className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">Instagram DM</h3>
                <p className="text-muted-foreground text-base">Engage with your audience through Instagram Direct Messages.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/email">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <MdOutlineEmail className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">E-mail</h3>
                <p className="text-muted-foreground text-base">Communicate with your customers via email for important updates and notifications.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/microsoft-teams">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <PiMicrosoftTeamsLogoFill className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">Microsoft Teams</h3>
                <p className="text-muted-foreground text-base">Collaborate efficiently with your team using Microsoft Teams integration.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/google-chat">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <SiGooglechat className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">Google Chat</h3>
                <p className="text-muted-foreground text-base">Stay connected with your team through Google Chat integration.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/facebook-pages">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <MdFacebook className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">Facebook Pages</h3>
                <p className="text-muted-foreground text-base">Engage with your audience on Facebook Pages with ease.</p>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/integrations/channels/slack">
                <div className="bg-muted rounded-md aspect-video mb-2">
                  <IoLogoSlack className="ml-2 mr-1 w-full h-full inline-block" />
                </div>
                <h3 className="text-xl tracking-tight">Slack</h3>
                <p className="text-muted-foreground text-base">Communicate and collaborate with your team via Slack integration.</p>
              </a>
            </div>
          </div>
        </div>
      </div>





    </div>

  )
}

{/* Localize a próxima etapa para iniciar sua organização com o Azure
Comece a usar o Azure
Compre serviços de nuvem com preços pagos conforme o uso.

Receba quantidades gratuitas de mais de 40 serviços por mês.
Pague apenas pelo que você usar além das quantidades gratuitas.
Sem compromisso. Cancele a qualquer momento.
PAGO CONFORME O USO
Contatar Vendas
Saiba mais sobre o preço e a otimização do custo do Azure. Conecte-se com um especialista em vendas para:

Discuta sua estimativa de preços.
Saiba mais sobre otimização de custos.
Obtenha orientações sobre como começar a usar o Azure.
Entrar em contato
Localize um parceiro do Azure
Obtenha assistência técnica, conselhos e suporte. Os parceiros ajudam você:

Planeje, implemente e gerencie serviços do Azure.
Crie um plano de cobrança personalizado.
Otimizar os custos e obter o suporte de que você precisa.
Localize um parceiro */}

{/* Writing GPT Tools in Word */ }
