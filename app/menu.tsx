import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import { IoLogoSlack } from "react-icons/io";
import { Menu, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { MdFacebook, MdOutlineDocumentScanner, MdOutlineEmail } from "react-icons/md";
import { PiMicrosoftTeamsLogo, PiMicrosoftTeamsLogoFill, PiWhatsappLogoLight } from "react-icons/pi";
import { SiGooglechat } from "react-icons/si";
import { TbWorldCheck } from "react-icons/tb";
import { TiSocialInstagram } from "react-icons/ti";
import { ImGithub } from "react-icons/im";
import { IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { TbBrandTiktokFilled } from "react-icons/tb";

import "./styles.css";

export const TheMenu = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "General Bots",
      href: "/general-bots",
    },
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Integrations",
      href: "/features",
    },
    {
      title: "Templates",
      href: "/templates",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "ESG",
      href: "/esg",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "About",
      href: "/about",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  type Props = {
    href: string;
    id?: string;
    className?: string;
    children: any;
    title: string;
  };

  const ListItem = React.forwardRef<HTMLAnchorElement, Props>(({ className, children, title, ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLInputElement>(null);

    return (
      <li>
        <NavigationMenu.Link asChild>
          <a className={classNames("ListItemLink", className)} {...props} ref={forwardedRef}>
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    );
    ListItem.displayName = "Component";
  });

  return (

    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="w-full m-0 p-0 text-xs text-right">
         <a href="https://docs.pragmatismo.cloud">Documentation</a> |
         Support: <a href="tel:+552140402160">+55 21 4040-2160</a> |

      <Button size="sm" className="m-2 mr-6 gap-2">Pragmatismo Store </Button>
      <div className="gtranslate_wrapper"></div>
      </div>
      <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
        <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
          <a href="/">
            <Image src="/logo.png" alt="Pragmatismo Logo" width={302} height={77} className="rounded-md" loading="lazy" />
          </a>
          <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
            <NavigationMenu.Root className="NavigationMenuRoot">
              <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item>
                  <NavigationMenu.Link className="NavigationMenuLink text-nowrap" href="/about">
                    About Us
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <a href="/general-bots">
                    <NavigationMenu.Trigger className="NavigationMenuTrigger text-nowrap">
                      General Bots®
                      <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                  </a>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List one">
                      <li style={{ gridRow: "span 4" }}>
                        <NavigationMenu.Link asChild>
                          <a className="Callout" href="/general-bots">
                            <Image src="/icons/general-bots-text.svg" alt="Pragmatismo Logo" width={302} height={302} layout="fixed" className="rounded-md" loading="lazy" />
                            <div className="CalloutHeading">LLMs on the go</div>
                            <p className="CalloutText">Use familiar tools like MS Word or Excel to create your own LLM bot today on WhatsApp.</p>
                          </a>
                        </NavigationMenu.Link>
                      </li>

                      <li>
                        <Image src="/icons/llm.svg" alt="Pragmatismo Logo" width={15} height={15} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />
                        <span className="ListItemHeading">LLMs</span>
                        <a className="ListItemLink" href="/general-bots/llm">
                          <p className="ListItemText">General Bots® integrates Large Language Models (LLMs) such as Generative Pretrained Transformers (GPT) with Robotic Process Automation (RPA) across channels like WhatsApp, Google Chat, Microsoft Teams, and Websites.</p>
                        </a>
                      </li>

                      <li>
                        <MdOutlineDocumentScanner className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                        <span className="ListItemHeading">Vector Retrieval</span>
                        <a className="ListItemLink" href="/general-bots/vector-retrieval">
                          <p className="ListItemText">Design bots with the ability to respond to queries sourced from websites or enterprise documents and databases. Harness the power of LLMs to enhance data retrieval efficiency through advanced vector representations in vector retrieval.</p>
                        </a>
                      </li>

                      <li>
                        <TbWorldCheck className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />

                        <span className="ListItemHeading">Open source</span>
                        <a className="ListItemLink" href="/general-bots/open-source">
                          <p className="ListItemText">Owning your LLM bot platform offers unparalleled benefits, including tailored custom AI models, enhanced data privacy, seamless integration with existing systems, and full control over content generation and total cost of ownership.</p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="NavigationMenuTrigger">
                    Features <CaretDownIcon className="CaretDown" aria-hidden />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List two" style={{ gridRow: "span 5" }}>
                      <ListItem title="AI Search" href="/features/ai-search">
                        Deploy AI-driven search capabilities for corporate documents, covering PDF and .docx formats, facilitating seamless access across the organization.
                      </ListItem>
                      <ListItem title="Content Generation" href="/features/content-generation">
                        Strategic content creation across diverse platforms acts as the engine propelling business growth while nurturing audience engagement.
                      </ListItem>
                      <ListItem title="Bot Factory" href="/features/bot-factory">
                        Unleash limitless chatbots and virtual assistants to transform all system interactions into natural conversations.
                      </ListItem>
                      <ListItem title="Talk to data" href="/features/talk-to-data">
                        Bots for data-driven decision-making oriented culture, guiding conversations in a conversational and actionable manner.
                      </ListItem>
                      <ListItem title="Broadcast" href="/features/broadcast">
                        Effortlessly reach out to vast audiences on WhatsApp or Enterprise. Craft bespoke conversation experiences by customizing AI-backed message replies.
                      </ListItem>
                      <ListItem title="Train with well-known tools" href="/features/trainning">
                        Use Tools you know to edit content like MS Word or Excel.Train by using natural language with no code or diagram skills.
                      </ListItem>
                      <ListItem title="Web Automation" href="/features/web-automation">
                        Perform web tasks with General Bots® Web Automation scrapping data from sites or getting key indicators from online services.
                      </ListItem>
                      <ListItem title="LLM Tools" href="/features/llm-tools">
                        Streamline the creation of web services in BASIC and develop LLM tools, seamlessly callable by your Large Language Models.
                      </ListItem>
                      <ListItem title="Calling APIs" href="/features/create-apis-in-word">
                        In simplified BASIC code, you can easly send and receive data from remote servers by using HTTP rest.
                      </ListItem>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a href="/integrations">
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                      Integrations <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                  </a>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List one">
                      <li>
                        <div className="ListItemHeading">Channels</div>

                        <a className="ListItemLink" href="/integrations/channels/whatsapp">
                          <Image src="/icons/whatsapp.svg" alt="Logo" width={24} height={24} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />

                          <p className="ListItemText">WhatsApp Official</p>
                        </a>

                        <a className="ListItemLink" href="/integrations/channels/sms">
                          <MessageSquareIcon className="ml-2 mr-1 h-6 w-8 inline-block" />
                          <p className="ListItemText">SMS</p>
                        </a>

                        <a className="ListItemLink" href="/integrations/channels/web-chat">
                          <CgWebsite className="ml-2 mr-1 h-6 w-8  inline-block" />
                          <p className="ListItemText">Web Chat in your site</p>
                        </a>
                        <a className="ListItemLink inline-block" href="/integrations/channels/instagram">
                          <FaInstagram className="ml-2 mr-1 h-6 w-8  inline-block" />
                          <p className="ListItemText">Instagram DM&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        </a>
                        <a className="ListItemLink inline-block" href="/integrations/channels/email">
                          <MdOutlineEmail className="ml-2 mr-1 h-6 w-8  inline-block" />
                          <p className="ListItemText">E-mail</p>
                        </a>
                        <a className="ListItemLink" href="/integrations/channels/microsoft-teams">
                          <PiMicrosoftTeamsLogo className="ml-2 mr-1 h-6 w-8  inline-block" />
                          <p className="ListItemText">Microsoft Teams</p>
                        </a>
                        <a className="ListItemLink" href="/integrations/channels/google-chat">
                          <SiGooglechat className="ml-2 mr-1 h-6 w-8  inline-block" />
                          <p className="ListItemText">Google Chat</p>
                        </a>
                        <a className="ListItemLink" href="/integrations/channels/facebook-pages">
                          <MdFacebook className="ml-2 mr-1 h-6 w-8  inline-block" />
                          <p className="ListItemText">Facebook Pages</p>
                        </a>
                        <a className="ListItemLink" href="/integrations/channels/slack">
                          <IoLogoSlack className="ml-2 mr-1 h-6 w-8  inline-block " />
                          <p className="ListItemText">Slack</p>
                        </a>
                      </li>

                      <li>
                        <div className="ListItemHeading">Team Work & Customer</div>
                        <a className="ListItemLink" href="/integrations/team-work/whatsapp-microsoft-teams">
                          <PiWhatsappLogoLight className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <FaArrowRightArrowLeft className="inline-block" style={{ color: "lightgray" }} />
                          <PiMicrosoftTeamsLogoFill className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">WhatsApp and Teams</p>
                        </a>
                        <a className="ListItemLink" href="/integrations/team-work/whatsapp-google-workspace">
                          <PiWhatsappLogoLight className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <FaArrowRightArrowLeft className="inline-block" style={{ color: "lightgray" }} />
                          <Image src="/google-chat.svg" alt="Logo" width={15} height={15} loading="lazy" className="ml-2 mr-1 h-6 w-8  inline-block" />

                          <p className="ListItemText">WhatsApp and Workspace</p>
                        </a>
                        <a className="ListItemLink" href="/integrations/team-work/whatsapp-facebook-workplace">
                          <PiWhatsappLogoLight className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <FaArrowRightArrowLeft className="inline-block" style={{ color: "lightgray" }} />
                          <MdFacebook className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">WhatsApp and Workplace</p>
                        </a>

                        <div className="ListItemHeading">Virtual Assistants</div>
                        <a className="ListItemLink" href="/integrations/virtual-assistants/microsoft-copilot">
                          <Image src="/icons/copilot.svg" alt="Logo" width={15} height={15} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />

                          <p className="ListItemText">CoPilot</p>
                        </a>

                        <a className="ListItemLink" href="/integrations/virtual-assistants/chat-gpt">
                          <Image alt="Logo" src="/icons/chatgpt.svg" width={15} height={15} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />
                          <p className="ListItemText">ChatGPT plugins</p>
                        </a>

                        <a className="ListItemLink" href="/integrations/virtual-assistants/alexa">
                          <Image alt="Logo" src="/icons/alexa.svg" width={15} height={15} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />
                          <p className="ListItemText">Alexa </p>
                        </a>

                        <div className="ListItemHeading">Enterprise</div>
                        <a className="ListItemLink" href="/integrations/enterprise/sharepoint">
                          <Image alt="Logo" src="/icons/sharepoint.svg" width={15} height={15} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />

                          <p className="ListItemText">SharePoint</p>
                        </a>
                        <a className="ListItemLink" href="/integrations/enterprise/project">
                          <Image alt="Logo" src="/icons/project.svg" width={15} height={15} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />
                          <p className="ListItemText">Project Online</p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <a href="/templates">
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                      Templates <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                  </a>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List one">
                      <li>
                        <div className="ListItemHeading">Small Business</div>
                        <a className="ListItemLink" href="https://generalbots.online/PROD-GeneralBots006?dialog=new&template=crm.gbai">
                          <Image src="/icons/general-bots.svg" alt="Pragmatismo Logo" width={32} height={32} className="rounded-md   inline-block m-2" loading="lazy" />

                          <p className="ListItemText">CRM</p>
                        </a>
                        <a className="ListItemLink" href="https://generalbots.online/PROD-GeneralBots006?dialog=new?template=mycompany.gbai">
                          <Image src="/icons/general-bots.svg" alt="Pragmatismo Logo" width={32} height={32} className="rounded-md   inline-block m-2" loading="lazy" />
                          <p className="ListItemText">My Company</p>
                        </a>
                        <a className="ListItemLink" href="https://generalbots.online/PROD-GeneralBots006?dialog=new&template=restaurant.gbai">
                          <Image src="/icons/general-bots.svg" alt="Pragmatismo Logo" width={32} height={32} className="rounded-md   inline-block m-2" loading="lazy" />
                          <p className="ListItemText">Restaurant</p>
                        </a>
                      </li>
                      <li>
                        <div className="ListItemHeading">Corporate</div>
                        <a className="ListItemLink" href="https://generalbots.online/PROD-GeneralBots006?dialog=new&template=recruitment.gbai">
                          <Image src="/icons/general-bots.svg" alt="Pragmatismo Logo" width={32} height={32} className="rounded-md   inline-block m-2" loading="lazy" />
                          <p className="ListItemText">Recruitment</p>
                        </a>
                        <div className="ListItemHeading">Enterprise</div>
                        <a className="ListItemLink" href="https://generalbots.online/PROD-GeneralBots006?dialog=new&template=ADResetPassword.gbapp">
                          <Image src="/icons/entra.svg" alt="Pragmatismo Logo" width={32} height={32} className="rounded-md   inline-block m-2" loading="lazy" />
                          <p className="ListItemText">ADResetPassword.gbapp</p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <a href="/resources">
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                      Resources <CaretDownIcon className="CaretDown" aria-hidden />
                    </NavigationMenu.Trigger>
                  </a>
                  <NavigationMenu.Content className="NavigationMenuContent">
                    <ul className="List one">
                      <li>
                        <div className="ListItemHeading">Considering the Product</div>
                        <a className="ListItemLink" href="/resources/considering/ai-powered-org">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">AI-powered org. </p>
                        </a>

                        <a className="ListItemLink" href="/resources/considering/case-studies">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Case studies</p>
                        </a>
                        <a className="ListItemLink" href="/resources/considering/customers">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Customers</p>
                        </a>
                        <a className="ListItemLink" href="/resources/considering/onboard-support">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Onboard support</p>
                        </a>
                      </li>
                      <li>
                        <div className="ListItemHeading">Already use it</div>
                        <a className="ListItemLink" href="/resources/already-using/essential-resources">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Essential resources</p>
                        </a>
                        <a className="ListItemLink" href="/resources/already-using/data-science">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Data Science</p>
                        </a>
                        <a className="ListItemLink" href="/blog">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Blog</p>
                        </a>
                        <a className="ListItemLink" href="https://generalbots.online/pragmatismohelpcenter">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Help center</p>
                        </a>
                        <a className="ListItemLink" href="https://generalbots.online/pragmatismostatus">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Pragmatismo Cloud Status</p>
                        </a>
                      </li>
                      <li>
                        <div className="ListItemHeading">Community</div>
                        <a className="ListItemLink " href="/resources/community/become-a-partner">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">Become a Partner</p>
                        </a>
                        <a className="ListItemLink" href="https://generalbots.online/pragmatismopartner">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText ">Partner Bot</p>
                        </a>
                        <a className="ListItemLink" href="https://github.com/generalbots">
                          <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                          <p className="ListItemText">GitHub</p>
                        </a>
                      </li>
                      <li>
                        <div className="ListItemHeading">Marketplaces</div>
                        <a className="ListItemLink" href="https://appsource.microsoft.com/pt-pt/product/web-apps/pragmatismoio-4835990.generalbot?tab=overview">
                          <p className="ListItemText">
                            <Image alt="Logo" src="/icons/microsoft.svg" width={24} height={24} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />
                            Microsoft App Source
                          </p>
                        </a>

                        <a className="ListItemLink" href="https://azuremarketplace.microsoft.com/pt-br/marketplace/apps/pragmatismoio-4835990.generalbot?tab=overview">
                          <p className="ListItemText">
                            <Image alt="Logo" src="/icons/azure.svg" width={24} height={24} className="ml-2 mr-1 h-6 w-8  inline-block" loading="lazy" />
                            Azure Marketplace
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link className="NavigationMenuLink" href="/esg">
                    ESG
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                  <NavigationMenu.Link className="NavigationMenuLink" href="/pricing">
                    Pricing
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link className="NavigationMenuLink" href="/contact">
                    Contact
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>

              <div className="ViewportPosition top-full flex justify-center right-0 left-auto">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
              </div>

            </NavigationMenu.Root>
          </div>
        </div>
      </div>
      <div className="flex w-720 shrink lg:hidden ">
        <a href="/" className="flex lg:justify-center">
          <Image src="/logo.png" alt="Pragmatismo Logo" width={302} height={77} className="rounded-md" loading="lazy" />
        </a>
        <div className="flex justify-end w-full gap-4">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-15 h-5" /> : <Menu className="w-15 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col flex-row w-full right-0 bg-background shadow-lg py-4 container gap-1">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-1 mt-0">
                    {item.href ? (
                      <Link href={item.href} onClick={() => setOpen(!isOpen)} className="flex justify-between items-center">
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item["items"] &&
                      item["items"].map((subItem) => (
                        <Link key={subItem.title} onClick={() => setOpen(!isOpen)} href={subItem.href} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{subItem.title}</span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Desenvolvimento de aplicativos

// Migração para a nuvem

// Contact Center AI

// Análise de dados

// Modernização de data centers

// Gerenciamento de dados

// DevOps

// Educação

// Infraestrutura

// Serviços com base na localização (Plataforma Google Maps e Google Cloud)

// Machine learning

// Análise de mercado

// SAP no Google Cloud

// Segurança

// Treinamento em Análise de dados, Infraestrutura, ou Segurança

// Transformação do trabalho: PME

// Transformação do trabalho: empresarial
