import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import { ImGithub } from "react-icons/im";
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io";
import { TbBrandTiktokFilled } from "react-icons/tb";

export const TheFooter = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "General Bots",
      href: "/general-bots",
      description: "",
      items: [
        {
          title: "LLM",
          href: "/general-bots/llm",
        },
        {
          title: "Vector Search",
          href: "/general-bots/vector-retrieval",
        },
        {
          title: "AI Search",
          href: "/features/ai-search",
        },
        {
          title: "Content Generation",
          href: "/features/content-generation",
        },
        {
          title: "Bot Factory",
          href: "/features/bot-factory",
        },
        {
          title: "Talk to data",
          href: "/features/talk-to-data",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
      ],
    },
    {
      title: "Company",
      description: "Create your own bot today with General Bots.",
      items: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Help Center",
          href: "https://help.pragmatismo.cloud",
        },
        {
          title: "How to become a Partner",
          href: "/resources/community/become-a-partner",
        },
        {
          title: "On Board Support",
          href: "/resources/considering/onboard-support",
        },
        {
          title: "Blog",
          href: "https://blog.pragmatismo.cloud",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-40 lg:py-40 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                <Link href="/">
                  <Image src="/logo.png" alt="Pragmatismo Logo" width={302} height={77} className="rounded-md" loading="lazy" />
                </Link>
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">General Bots® LLM and custom AI models.</p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Rio de Janeiro - São Paulo - Paraná</p>
                <p>Brazil</p>
                <p>+55 21 4040-2160</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/terms">Terms of service</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
              Copyright © 2016-2024 Pragmatismo. CNPJ 35.973.500/0001-94. <br/>
              RUA FERNANDO AMARO, 881 - ALTO DA RUA XV - 80045-230<br/>
              CURITIBA, PR <br/>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex text-base gap-1 flex-col items-start">
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link href={item.href} className="flex justify-between items-center">
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link key={subItem.title} href={subItem.href} className="flex justify-between items-center">
                        <span className="text-background/75">{subItem.title}</span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-10">
                <Link href="https://www.github.com/GeneralBots" className="inline-block p-4">
                  <ImGithub />
                </Link>
                <Link href="https://www.youtube.com/@pragmatismocloud" className="inline-block  p-4">
                  <IoLogoYoutube />
                </Link>
                <Link href="https://web.whatsapp.com/send?phone=+552140402160" className="inline-block  p-4">
                  <IoLogoWhatsapp />
                </Link>
              </div>
      </div>
    </div>
  );
};
