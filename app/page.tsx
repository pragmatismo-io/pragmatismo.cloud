"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Arrow } from "@radix-ui/react-dropdown-menu";

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function Page() {
  function handleClick() {
    alert("Thank you for using React Social Login Buttons!");
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
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
            <p className="mt-6 text-lg leading-8 text-gray-300">Do automation the self way. Do your work from your WhatsApp or any channel.</p>
            <div>
              <a href="https://gb.pragmatismo.cloud/PROD-GeneralBots006?p=FREE">
                <Button className="gap-4">
                  Create Bot <MoveRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width={1824} height={1080} />
          </div>
        </div>
      </div>

      <section className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">AI and Bots</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">Pragmatismo: Custom AI Assistants and Software Integration</h2>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">With 8 years of expertise in software integration, Pragmatismo specializes in creating bespoke AI assistants and advanced LLM algorithms tailored to your needs.</p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            {/* Custom Virtual Assistants */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Custom Virtual Assistants</p>
                <p className="text-muted-foreground text-sm">Tailored development of virtual assistants to streamline internal processes, replacing screens and forms.</p>
              </div>
            </div>
            {/* Engagement Generators */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Engagement Generators</p>
                <p className="text-muted-foreground text-sm">Orchestrating corporate-wide engagement in conversational environments, fostering the modern workplace with virtual assistants.</p>
              </div>
            </div>
            {/* Custom AI Algorithms */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Custom AI Algorithms</p>
                <p className="text-muted-foreground text-sm">Development of tailored AI algorithms to enhance operational efficiency and user interaction.</p>
              </div>
            </div>
            {/* Integration Solutions */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Integration Solutions</p>
                <p className="text-muted-foreground text-sm">Seamless integration of AI services into your existing software landscape, ensuring smooth operation and minimal disruption.</p>
              </div>
            </div>
            {/* Data-Driven Decisions */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Data-Driven Decisions</p>
                <p className="text-muted-foreground text-sm">Leveraging AI to analyze and interpret data, providing actionable insights that drive smarter business decisions.</p>
              </div>
            </div>
            {/* Continuous Improvement */}
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Continuous Improvement</p>
                <p className="text-muted-foreground text-sm">Ongoing optimization and support to keep your AI systems up-to-date with the latest advancements and best practices.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </section>

      {/* Call-to-Action Section */}
      <div className="w-full py-40 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Ready to Transform Your Conversations?</h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground mt-4">Experience the future of customer communication with our WhatsApp integration. Contact us today to learn more or request a personalized demo.</p>
            <div className="flex flex-row gap-4 mt-6">
              <Button size="lg" className="gap-4" variant="outline">
                Contact Us <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Request a Demo <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
