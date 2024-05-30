import { PiWhatsappLogoLight } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { FcSearch } from "react-icons/fc";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { SiGooglechat } from "react-icons/si";
import { MdFacebook } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { IoLogoSlack } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FcServices } from "react-icons/fc";

import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import classNames from "classnames";
import Image from "next/image";
import {
  BotIcon,
  CalendarIcon,
  Check,
  MessageCircleDashedIcon,
  MessageSquareIcon,
  MoveRight,
  PhoneCall,
  WebhookIcon,
  ZapIcon,
} from "lucide-react";

export const TheMenu = () => (
  <div>
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <a href="/">
            <Image
              src="/logo.png"
              alt="Pragmatismo Logo"
              width={302}
              height={77}
              className="rounded-md"
              loading="lazy"
            />
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            General Bots®
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 4" }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <Image
                      src="/icons/general-bots-text.svg"
                      alt="Pragmatismo Logo"
                      width={302}
                      height={302}
                      layout="fixed"
                      className="rounded-md"
                      loading="lazy"
                    />

                    <div className="CalloutHeading">LLMs on the go</div>
                    <p className="CalloutText">
                      Use familiar tools like MS Word or Excel to create your
                      own LLM bot today on WhatsApp.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <li>
                <Image
                  src="/icons/llm.svg"
                  alt="Pragmatismo Logo"
                  width={15}
                  height={15}
                  className="ml-2 mr-1 h-6 w-8  inline-block"
                  loading="lazy"
                />


                <span className="ListItemHeading">LLMs</span>
                <a className="ListItemLink" href="/general-bots/llm">
                  <p className="ListItemText">
                    General Bots® integrates Large Language Models (LLMs) such as Generative Pretrained
                    Transformers (GPT) with Robotic Process Automation (RPA) across channels
                    like WhatsApp, Google Chat, Microsoft Teams, and Websites.
                  </p>
                </a>
              </li>

              <li>
                <MdOutlineDocumentScanner className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />

                <span className="ListItemHeading">Vector Retrieval</span>
                <a
                  className="ListItemLink"
                  href="/general-bots/vector-retrieval"
                >
                  <p className="ListItemText">
                    Design bots with the ability to respond to queries sourced from websites
                    or enterprise documents and databases. Harness the power of LLMs
                    to enhance data retrieval efficiency through advanced vector representations in
                    vector retrieval.
                  </p>
                </a>
              </li>

              <li>

                <TbWorldCheck className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />

                <span className="ListItemHeading">Open source</span>
                <a className="ListItemLink" href="/general-bots/open-source">
                  <p className="ListItemText">
                    Owning your LLM bot platform offers unparalleled benefits,
                    including tailored custom AI models, enhanced data
                    privacy, seamless integration with existing systems, and
                    full control over content generation and total cost of ownership.
                  </p>
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
                Deploy AI-driven search capabilities for corporate documents, covering PDF and
                .docx formats, facilitating seamless access across the organization.
              </ListItem>
              <ListItem
                title="Content Generation"
                href="/features/content-generation"
              >
                Strategic content creation across diverse platforms acts as the engine propelling
                business growth while nurturing audience engagement.
              </ListItem>
              <ListItem title="Bot Factory" href="/features/bot-factory">
                Unleash limitless chatbots and virtual assistants to transform all
                system interactions into natural conversations.
              </ListItem>
              <ListItem title="Talk to data" href="/features/talk-to-data">
                Bots for
                data-driven decision-making oriented culture, guiding conversations in a
                conversational and actionable manner.
              </ListItem>
              <ListItem title="Broadcast" href="/features/broadcast">

                Effortlessly reach out to vast audiences on WhatsApp or Enterprise.
                Craft bespoke conversation experiences by customizing AI-backed message replies.


              </ListItem>
              <ListItem
                title="Train with well-known tools"
                href="/features/training"
              >
                Use Tools you know to edit content like MS Word or Excel.Train
                by using natural language with no code or diagram skills.
              </ListItem>
              <ListItem title="Web Automation" href="/web-automation">
                Perform web tasks with General Bots® Web Automation scrapping data
                from sites or getting key indicators from online services.
              </ListItem>
              <ListItem title="LLM Tools" href="/llm-tools">
                Streamline the creation of web services in BASIC and develop LLM tools, seamlessly callable by your Large Language Models.
              </ListItem>
              <ListItem title="Calling APIs" href="/llm-tools">
                In simplified BASIC code, you can easly send and receive data from remote servers by using HTTP rest.
              </ListItem>


            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Integrations <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li>
                <div className="ListItemHeading">Channels</div>

                <a
                  className="ListItemLink"
                  href="/integrations/channels/whatsapp"
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                    className="ml-2 mr-1 h-6 w-8  inline-block"
                    loading="lazy"
                  />

                  <p className="ListItemText">WhatsApp Official</p>
                </a>


                <a className="ListItemLink" href="/integrations/channels/sms">
                  <MessageSquareIcon className="ml-2 mr-1 h-6 w-8 inline-block" />
                  <p className="ListItemText">SMS</p>
                </a>

                <a
                  className="ListItemLink"
                  href="/integrations/channels/web-chat"
                >
                  <CgWebsite className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Web Chat in your site</p>
                </a>
                <a className="ListItemLink" href="/">
                  <FaInstagram className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Instagram DM</p>
                </a>
                <a className="ListItemLink" href="/">
                  <MdOutlineEmail className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">E-mail</p>
                </a>
                <a className="ListItemLink" href="/">
                  <PiMicrosoftTeamsLogoFill className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Microsoft Teams</p>
                </a>
                <a className="ListItemLink" href="/">
                  <SiGooglechat className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Google Chat</p>
                </a>
                <a className="ListItemLink" href="/">
                  <MdFacebook className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Facebook Pages</p>
                </a>
                <a className="ListItemLink" href="/">
                  <IoLogoSlack className="ml-2 mr-1 h-6 w-8  inline-block " />
                  <p className="ListItemText">Slack</p>
                </a>
              </li>

              <li>
                <div className="ListItemHeading">Team Work & Customer</div>
                <a className="ListItemLink" href="/">
                  <PiWhatsappLogoLight className="ml-2 mr-1 h-6 w-8  inline-block " style={{ color: "gray" }} />
                  <FaArrowRightArrowLeft className="inline-block" style={{ color: "lightgray" }} />

                  <Image
                    src="/icons/power-platform.svg"
                    alt="Logo"
                    width={15}
                    height={15}
                    className="ml-2 mr-1 h-6 w-8  inline-block"
                    loading="lazy"
                  />

                  <p className="ListItemText">WhatsApp and PowerPlatform</p>
                </a>
                <a className="ListItemLink" href="/">
                  <PiWhatsappLogoLight className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <FaArrowRightArrowLeft className="inline-block" style={{ color: "lightgray" }} />
                  <PiMicrosoftTeamsLogoFill className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">WhatsApp and Teams</p>
                </a>
                <a
                  className="ListItemLink"
                  href="/integrations/google-chat-whatsapp-connector"
                >
                  <PiWhatsappLogoLight className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <FaArrowRightArrowLeft className="inline-block" style={{ color: "lightgray" }} />
                  <SiGooglechat className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">WhatsApp and Workspace</p>
                </a>
                <a
                  className="ListItemLink"
                  href="/integrations/facebook-workplace-whatsapp"
                >
                  <PiWhatsappLogoLight className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <FaArrowRightArrowLeft className="inline-block" style={{ color: "lightgray" }} />
                  <MdFacebook className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">
                    WhatsApp and Workplace
                  </p>
                </a>


                <div className="ListItemHeading">Virtual Assistants</div>
                <a className="ListItemLink" href="/">
                  <Image
                    src="/icons/copilot.svg"
                    alt="Logo"
                    width={15}
                    height={15}
                    className="ml-2 mr-1 h-6 w-8  inline-block"
                    loading="lazy"
                  />

                  <p className="ListItemText">CoPilot</p>
                </a>

                <a className="ListItemLink" href="/">
                  <Image
                    alt="Logo"
                    src="/icons/chatgpt.svg"
                    width={15}
                    height={15}
                    className="ml-2 mr-1 h-6 w-8  inline-block"
                    loading="lazy"
                  />
                  <p className="ListItemText">ChatGPT plugins</p>
                </a>

                <a className="ListItemLink" href="/">
                  <Image
                    alt="Logo"
                    src="/icons/alexa.svg"
                    width={15}
                    height={15}
                    className="ml-2 mr-1 h-6 w-8  inline-block"
                    loading="lazy"
                  />
                  <p className="ListItemText">Alexa </p>
                </a>




                <div className="ListItemHeading">Enterprise</div>
                <a
                  className="ListItemLink"
                  href="/integrations/facebook-workplace-whatsapp"
                >
                  <Image
                    alt="Logo"
                    src="/icons/sharepoint.svg"
                    width={15}
                    height={15}
                    className="ml-2 mr-1 h-6 w-8  inline-block"
                    loading="lazy"
                  />

                  <p className="ListItemText">SharePoint</p>
                </a>
                <a
                  className="ListItemLink"
                  href="/integrations/google-chat-whatsapp-connector"
                >
                  <Image
                    alt="Logo"
                    src="/icons/project.svg"
                    width={15}
                    height={15}
                    className="ml-2 mr-1 h-6 w-8  inline-block"
                    loading="lazy"
                  />
                  <p className="ListItemText">Project Online</p>
                </a>

              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Templates <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li>
                <div className="ListItemHeading">Small Business</div>
                <a className="ListItemLink" href="/">
                  <Image

                    src="/icons/general-bots.svg"
                    alt="Pragmatismo Logo"
                    width={32}
                    height={32}
                    className="rounded-md   inline-block m-2"
                    loading="lazy"
                  />

                  <p className="ListItemText">CRM</p>
                </a>
                <a className="ListItemLink" href="/">
                  <Image
                    src="/icons/general-bots.svg"
                    alt="Pragmatismo Logo"
                    width={32}
                    height={32}
                    className="rounded-md   inline-block m-2"
                    loading="lazy"
                  />
                  <p className="ListItemText">My Company</p>
                </a>
                <a className="ListItemLink" href="/">
                  <Image
                    src="/icons/general-bots.svg"
                    alt="Pragmatismo Logo"
                    width={32}
                    height={32}
                    className="rounded-md   inline-block m-2"
                    loading="lazy"
                  />
                  <p className="ListItemText">Restaurant</p>
                </a>
              </li>
              <li>
                <div className="ListItemHeading">Corporate</div>
                <a className="ListItemLink" href="/">
                  <Image
                    src="/icons/general-bots.svg"
                    alt="Pragmatismo Logo"
                    width={32}
                    height={32}
                    className="rounded-md   inline-block m-2"
                    loading="lazy"
                  />
                  <p className="ListItemText">Recruitment Bot</p>
                </a>
                <div className="ListItemHeading">Enterprise</div>
                <a className="ListItemLink" href="/">
                  <Image
                  
                    src="/icons/entra.svg"
                    alt="Pragmatismo Logo"
                    width={32}
                    height={32}
                    className="rounded-md   inline-block m-2"
                    loading="lazy"
                  />
                  <p className="ListItemText">ADResetPassword.gbapp</p>
                </a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Resources <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li>
                <div className="ListItemHeading">Considering the Product</div>
                <a className="ListItemLink" href="https://azuremarketplace.microsoft.com/pt-br/marketplace/apps/pragmatismoio-4835990.generalbot?tab=overview">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />

                  <p className="ListItemText">
                    AI-powered org. </p>
                </a>

                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Case studies</p>
                </a>
                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Onboard support</p>
                </a>
              </li>
              <li>
                <div className="ListItemHeading">Already use it</div>
                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Essential resources</p>
                </a>
                <a className="ListItemLink" href="/resources/data-science">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Data Science</p>
                </a>
                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Blog</p>
                </a>
                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Help center</p>
                </a>
                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Academy</p>
                </a>
              </li>
              <li>
                <div className="ListItemHeading">Community</div>
                <a className="ListItemLink " href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Become a Partner</p>
                </a>
                <a className="ListItemLink" href="/resources/data-science">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText ">Partner Center Bot</p>
                </a>
                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Social</p>
                </a>
                <a className="ListItemLink" href="/">
                  <GrResources className="ml-2 mr-1 h-6 w-8  inline-block" style={{ color: "gray" }} />
                  <p className="ListItemText">Pragmatismo Cloud Status</p>
                </a>
              </li>
              <li>
                <div className="ListItemHeading">Marketplaces</div>
                <a className="ListItemLink" href="https://appsource.microsoft.com/pt-pt/product/web-apps/pragmatismoio-4835990.generalbot?tab=overview">
                  <p className="ListItemText">
                    <Image
                    alt="Logo"
                      src="/icons/microsoft.svg"
                      width={24}
                      height={24}
                      className="ml-2 mr-1 h-6 w-8  inline-block"
                      loading="lazy"
                    />

                    Microsoft App Source
                  </p>
                </a>

                <a className="ListItemLink" href="/">
                  <p className="ListItemText">
                    <Image
                    alt="Logo"
                      src="/icons/azure.svg"
                      width={24}
                      height={24}
                      className="ml-2 mr-1 h-6 w-8  inline-block"
                      loading="lazy"
                    />

                    Azure Marketplace
                  </p>
                </a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/pricing">
            Pricing
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/contact">
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  </div>
);

type Props = {
  href: string;
  id?: string;
  className?: string;
  children: any;
  title: string;
};

const ListItem = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, children, title, ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLInputElement>(null);

    return (
      <li>
        <NavigationMenu.Link asChild>
          <a
            className={classNames("ListItemLink", className)}
            {...props}
            ref={forwardedRef}
          >
            <div className="ListItemHeading">{title}</div>
            <p className="ListItemText">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    );
    ListItem.displayName = "Component";
  }
);
