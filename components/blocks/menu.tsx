import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import classNames from "classnames";
import Image from "next/image";
import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";

export const TheMenu = () => (
  <div className="w-full py-20">
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <Image src="/logo.png" alt="Pragmatismo Logo" width={302} height={77} layout="fixed" className="rounded-md" loading="lazy" />
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            General Bots<CaretDownIcon className="CaretDown" aria-hidden />
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
                <CalendarIcon className="ml-2 mr-1 h-6 w-8 inline-block" />
                <span className="ListItemHeading">Channels</span>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">General Bots is a Large Language Models (LLMs) orchestrator, providing reading comprehension, custom channels and custom AI models.</p>
                </a>
              </li>

              <ListItem href="/general-bots/vector-retrieval" title="Vector Retrieval">
                <CalendarIcon className="mr-2 h-4 w-8" />
                Enterprise document vector retrieval, powered by Large Language Models (LLMs),\n optimizes data retrieval efficiency through advanced vector representations.
              </ListItem>

              <ListItem href="https://icons.radix-ui.com/" title="Open source">
                <CalendarIcon className="mr-2 h-4 w-8" />
                Owning your LLM bot platform offers unparalleled\n benefits, including customized AI capabilities, enhanced data privacy,\n seamless integration with existing systems, and full control over content\n generation and user experience.
              </ListItem>
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
              <ListItem title="Data analysis and insights" href="/primitives/docs/guides/animation">
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
                  <p className="ListItemText">SMS</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">WhatsApp Official Account (Green tick)</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Chatbots</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">Web push</p>
                </a>
                <a className="ListItemLink" href="/">
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
              </li>
            </ul>
            <ul className="List three">
              <li>
                <div className="ListItemHeading">Team Work & Customer</div>
                <a className="ListItemLink" href="/integrations/facebook-workplace-whatsapp">
                  <p className="ListItemText">WhatsApp and Facebook Workplace</p>
                </a>
                <a className="ListItemLink" href="/integrations/google-chat-whatsapp-connector">
                  <p className="ListItemText">WhatsApp and Google Workspace</p>
                </a>
                <a className="ListItemLink" href="/">
                  <p className="ListItemText">WhatsApp and Teams</p>
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
                <div className="ListItemHeading">Considering General Bots</div>
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
