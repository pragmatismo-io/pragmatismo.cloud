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

export default function Page() {
  return (
    <div className="w-full py-25 lg:py-25">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact us today!</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">Proof-of-concepts</h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">Unlock seamless automation and enhanced customer engagement with Pragmatismo's expert integration of General Bots. Discover how our tailored solutions can transform your business operations today, contact-us!</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Schedule a demonstration meeting</p>
                <p className="text-muted-foreground text-sm">
                  Pragmatismo specializes in automation, chatbot development, and system integration through General Bots. <a href="https://outlook.office365.com/book/Pragmatismo1@pragmatismo.cloud/">Schedule a demonstration today</a> to see our solutions in action!
                </p>
              </div>
            </div>
              <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Send us a message</p>
                <p className="text-muted-foreground text-sm">
                <p className="text-muted-foreground text-sm">Or send us a message about your software consulting needs via email at <a href="mailto:info@pragmatismo.cloud">info@pragmatismo.cloud</a>. Our team will be glad to assist you with any inquiries you may have.</p>

                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Call now!</p>
                <p className="text-muted-foreground text-sm">Pragmatismo specializes in automation, chatbot development, and system integration leveraging General Bots. Contact us at <a href="tel:+552140402160">+55 21 4040-2160</a> to see our solutions in action!</p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center">
            <div className="rounded-md max-w flex flex-col border p-8 gap-11">
              <p>Schedule here:</p>
              <a href="mailto:sales@pragmatismo.cloud">
                <Button className="gap-4 w-full p-2">
                  Book the meeting <MoveRight className="w-4 h-4 mr-10" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Speak with an expert.
// US toll-free number: 1-844-365-9460
// Email
// Chat
