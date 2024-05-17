import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import classNames from "classnames";
import Image from "next/image";
import { BotIcon, CalendarIcon, Check, MessageCircleDashedIcon, MessageSquareIcon, MoveRight, PhoneCall, WebhookIcon, ZapIcon } from "lucide-react";

export const TheMenu = () => (
  <div>
    <div>EN CHINES PT</div>
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <a href="/">
          <Image src="/logo.png" alt="Pragmatismo Logo" width={302} height={77} layout="fixed" className="rounded-md" loading="lazy" />
          </a>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            General Bots
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 4" }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <Image src="/gb-logo.png" alt="Pragmatismo Logo" width={302} height={77} layout="fixed" className="rounded-md" loading="lazy" />
                    <div className="CalloutHeading">LLMs on the go</div>
                    <p className="CalloutText">Use familiar tools like MS Word or Excel to create your own LLM bot today on WhatsApp.</p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <li>
                <Check className="ml-2 mr-1 h-6 w-8 inline-block" />
                <span className="ListItemHeading">LLM</span>
                <a className="ListItemLink" href="/general-bots/llm">
                  <p className="ListItemText">General Bots is a Large Language Models (LLMs) orchestrator, providing reading comprehension, custom channels and custom AI models.</p>
                </a>
              </li>

              <li>
                <PhoneCall className="ml-2 mr-1 h-6 w-8 inline-block" />
                <span className="ListItemHeading">Vector Retrieval</span>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Chat to Enterprise documents using vector retrieval powered by Large Language Models (LLMs),\n optimizes data retrieval efficiency through advanced vector representations.</p>
                </a>
              </li>

              <li>
                <CalendarIcon className="ml-2 mr-1 h-6 w-8 inline-block" />
                <span className="ListItemHeading">Open source</span>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Owning your LLM bot platform offers unparalleled\n benefits, including customized AI capabilities, enhanced data privacy,\n seamless integration with existing systems, and full control over content\n generation and user experience.</p>
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
              <ListItem title="AI Search" href="/primitives/docs/overview/introduction">
                AI search on corporate documents (PDF, .docx, etc.)
              </ListItem>
              <ListItem title="Content generation" href="/primitives/docs/overview/getting-started">
                Strategic content generation across various platforms drives business growth and audience engagement.
              </ListItem>
              <ListItem title="Bot Factory" href="/primitives/docs/guides/styling">
                Unlimited chatbots and virtual assistants to turn everything conversational.
              </ListItem>
              <ListItem title="Talk to data" href="/features/talk-to-data">
                Data analysis and insights serve as the foundation for data-driven decision-making, guiding conversations in a conversational and actionable manner.
              </ListItem>
              <ListItem title="Broadcast" href="/primitives/docs/overview/accessibility">
                Easily send messages to a large group of people without fearing getting shut down by WhatsApp. Send broadcasts through templates to several people simultaneously.
              </ListItem>
              <ListItem title="Train with well-known tools" href="/primitives/docs/overview/releases">
                Use Tools you know to edit content like MS Word or Excel.
              </ListItem>
              <ListItem title="Web Automation" href="/primitives/docs/guides/styling">
                Perform web tasks with General Bots Web Automation.
              </ListItem>
              <ListItem title="LLM Tools" href="/primitives/docs/guides/styling">
                Write LLL Tools in BASIC to be called by your LLM.
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

                <a className="ListItemLink" href="/">
                <MessageSquareIcon className="ml-2 mr-1 h-6 w-8 inline-block" />
                  <p className="ListItemText">SMS</p>
                </a>

                <a className="ListItemLink" href="/">
                <ZapIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">WhatsApp Official</p>
                </a>

                <a className="ListItemLink" href="/">
                <BotIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Chatbots</p>
                </a>
                <a className="ListItemLink" href="/">
                <WebhookIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Web push</p>
                </a>
                <a className="ListItemLink" href="/">
                <MessageCircleDashedIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Transactional emails</p>
                </a>
                <a className="ListItemLink" href="/">
                <WebhookIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Web push</p>
                </a>
                <a className="ListItemLink" href="/">
                <MessageCircleDashedIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Transactional emails</p>
                </a>
                <a className="ListItemLink" href="/">
                <WebhookIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Web push</p>
                </a>
                <a className="ListItemLink" href="/">
                <MessageCircleDashedIcon className="ml-2 mr-1 h-6 w-8  inline-block" />
                  <p className="ListItemText">Transactional emails</p>
                </a>
              </li>

              <li>
                <div className="ListItemHeading">Virtual Assistants</div>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">CoPilot</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">ChatGPT plugins and apps</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Alexa </p>
                </a>
                <a className="ListItemLink" href="/integrations/google-chat-whatsapp-connector">
                  <p className="ListItemText">AnyApi</p>
                </a>
                <div className="ListItemHeading">Team Work & Customer</div>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">WhatsApp and PowerPlatform</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">WhatsApp and Teams</p>
                </a>
                <a className="ListItemLink" href="/integrations/google-chat-whatsapp-connector">
                  <p className="ListItemText">WhatsApp and Google Workspace</p>
                </a>
                <a className="ListItemLink" href="/integrations/facebook-workplace-whatsapp">
                  <p className="ListItemText">WhatsApp and Facebook Workplace</p>
                </a>
                <div className="ListItemHeading">Enterprise</div>
                <a className="ListItemLink" href="/integrations/facebook-workplace-whatsapp">
                  <p className="ListItemText">SharePoint Online</p>
                </a>
                <a className="ListItemLink" href="/integrations/google-chat-whatsapp-connector">
                  <p className="ListItemText">Project Online</p>
                </a>
                <a className="ListItemLink" href="/integrations/facebook-workplace-whatsapp">
                  <p className="ListItemText">Calling APIs in General Bots</p>
                </a>
                <a className="ListItemLink" href="/integrations/facebook-workplace-whatsapp">
                  <p className="ListItemText">Additional channels</p>
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
                  <p className="ListItemText">CRM</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">My Company</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Restaurant</p>
                </a>
                <div className="ListItemHeading">Corporate</div>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Recruitment Bot</p>
                </a>
                <div className="ListItemHeading">Enterprise</div>
                <a className="ListItemLink" href="/">
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
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">General Bots on Microsoft App Source</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Becoming an AI-Powered Organization with General Bots</p>
                </a>
                
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">General Bots on Azure Marketplace</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Case studies</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Onboard support</p>
                </a>
              </li>
              <li>
                <div className="ListItemHeading">Already use it</div>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Essential resources</p>
                </a>
                <a className="ListItemLink" href="/resources/data-science">
                  <p className="ListItemText">Data Science</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Blog</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Help center</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Academy</p>
                </a>
              </li>
              <li>
                <div className="ListItemHeading">Community</div>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Become a Partner</p>
                </a>
                <a className="ListItemLink" href="/resources/data-science">
                  <p className="ListItemText">Partner Center Bot</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Social</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Pragmatismo Cloud Status</p>
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
