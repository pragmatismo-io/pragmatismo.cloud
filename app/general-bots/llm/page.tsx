import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full py-40 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">Introducing General Bots® for Word™</h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Unleash the power of custom LLM functions with unparalleled simplicity, right from your Microsoft Word interface. With General Bots® for Word™, writing custom LLM functions becomes as easy as typing a document. Harness the advanced capabilities of GPT to craft intricate functions and automate complex tasks, all within the familiar environment of MS Word. Say goodbye to switching
                between multiple applications. General Bots® for Word™ seamlessly integrates with your existing workflow, allowing you to write, edit, and execute custom LLM functions without ever leaving the comfort of Word.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <a href="tel:+552140402160">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://generalbots.online/PROD-GeneralBots006?p=FREE">
                <Button size="lg" className="gap-4">
                  Create Bot <MoveRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-muted rounded-md row-span-2">
              <Image src="/word-robot.jpeg" alt="Word Robot" className="rounded-md" width={1024} height={2400} loading="lazy" />
            </div>
            <div className="bg-muted rounded-md aspect-square">
              <Image src="/pc-word.jpeg" alt="PC Word" className="rounded-md" width={1024} height={1024} loading="lazy" />
            </div>
            <div className="bg-muted rounded-md aspect-square">
              <Image src="/llm-documents.jpeg" alt="LLM Documents" className="rounded-md" width={1024} height={2400} loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-40 lg:py-40">
        <div className="container mx-auto">
          <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-10 flex-col">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">Platform</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">Enhancing LLM Orchestration</h2>
                  <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">Harness the power of combining text with BASIC programming to elevate LLM orchestration to new heights of efficiency and effectiveness.</p>
                </div>
              </div>
              <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Enhanced Flexibility</p>
                    <p className="text-muted-foreground text-sm">Seamlessly blend natural language text with BASIC programming logic for unparalleled flexibility in LLM orchestration.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Optimized Performance</p>
                    <p className="text-muted-foreground text-sm">Utilize the synergy of text and BASIC programming to optimize LLM performance and achieve superior results in orchestration tasks.</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Advanced Adaptability</p>
                    <p className="text-muted-foreground text-sm">Leverage the combined capabilities of text and BASIC programming to dynamically adapt LLM orchestration strategies to changing requirements and scenarios.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square">
              <Image src="/word-system-prompt.png" alt="LLM Documents" className="rounded-md" width={1024} height={1024} loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-40 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Choose your LLM provider</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">General Bots uses a layer between you and providers</h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">Avoid vendor lock-in complications by streamlining main LLM providers.</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  <Image src="/deep-seek.svg" alt="Deep Seek LLM" className="rounded-md" width={200} height={200} loading="lazy" />
                </p>
              </div>

              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  <Image src="/gpt4all.svg" alt="GPT4All LLM" className="rounded-md" width={200} height={200} loading="lazy" />
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                <p className="text-base leading-relaxed tracking-tight align-middle text-muted-foreground max-w-xl text-left">
                  <Image src="/open-ai.svg" alt="Open AI LLM" className="rounded-md " width={400} height={400} loading="lazy" />
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  <Image src="/claude.svg" alt="Claude LLM" className="rounded-md" width={200} height={200} loading="lazy" />
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  <Image src="/llama-cpp.png" alt="Lama CPP" className="rounded-md" width={200} height={200} loading="lazy" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-40 mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>You own the platform</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">The costs behind the gears are exposed.</h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">We provide clear insight into the expenses involved in utilizing our platform, empowering you to make informed decisions.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid border rounded-lg container py-8 grid-cols-4 gap-8 items-center lg:grid-cols-5">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">LLM architecture of the orchestrator.</p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-1 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy to use</p>
                  <p className="text-muted-foreground text-sm">We&apos;ve made it easy to use and understand.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Fast and reliable</p>
                  <p className="text-muted-foreground text-sm">We&apos;ve made it fast and reliable.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Beautiful and modern</p>
                  <p className="text-muted-foreground text-sm">We&apos;ve made it beautiful and modern.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted align-middle col-span-4">
            <Image src="/rag-diagram.svg" alt="Word Robot" className="rounded-md bm-10" width={1024} height={1024} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Use the code to automate customer service inquiries by training your GPT-3 based AI assistant to respond to common complaints and questions in your business.
// You can use the code to generate automated reports and summaries based on data scraped from your company’s website or social media platforms.
// Use the code to create a chatbot that can answer frequently asked questions on your website or in your customer support chat.
// Use the code to generate automated email responses for customer inquiries, based on the specific content of the inquiry.
// Use the code to generate automated social media posts for your business, using data scraped from your website or other sources.
// Use the code to generate automated product descriptions for your e-commerce site, using data scraped from your competitors’ sites.
// Use the code to generate automated blog posts for your business, using data scraped from industry news sources.
// Use the code to generate automated SEO-friendly content for your website, using data scraped from your competitors’ sites and popular keywords.
// Use the code to generate automated summaries of meetings or conference calls, by sending the transcript to the GPT-3 API.
// Use the code to generate automated language translations for your business, by sending text to the GPT-3 API in one language and having it translate it to another.
