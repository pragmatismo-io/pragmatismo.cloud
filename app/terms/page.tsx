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
<div className="w-full py-40 lg:py-40">
  <div className="container max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div>
            <Badge>Legal</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">Terms of Service</h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">By using our LLM Bot SaaS platform, you agree to these terms. Please read them carefully.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>Acceptance of Terms</p>
            <p className="text-muted-foreground text-sm">By accessing or using the Service, you agree to be bound by these Terms of Service.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>User Accounts</p>
            <p className="text-muted-foreground text-sm">You are responsible for maintaining the confidentiality of your account and password.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>Subscription and Payments</p>
            <p className="text-muted-foreground text-sm">Service is offered on a subscription basis. Fees are non-refundable except as required by law.</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>LLM Credits</p>
            <p className="text-muted-foreground text-sm">Certain plans include predetermined LLM credits. Additional credits can be purchased separately.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>Use of the Service</p>
            <p className="text-muted-foreground text-sm">You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the Service.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>Content and Data</p>
            <p className="text-muted-foreground text-sm">You retain all rights to the content you upload, create, or share through the Service.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>Intellectual Property</p>
            <p className="text-muted-foreground text-sm">We retain all rights to our Service's intellectual property, regardless of user customizations.</p>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start text-left">
          <Check className="w-4 h-4 mt-2 text-primary" />
          <div className="flex flex-col gap-1">
            <p>Termination</p>
            <p className="text-muted-foreground text-sm">We reserve the right to terminate or suspend access to our Service immediately, without prior notice or liability.</p>
          </div>
        </div>
      </div>


    </div>


  </div>

  <div className="container max-w-6xl mx-auto text-sm lg:py-40">
    <div className="grid lg:grid-cols-1 gap-10">

        <h1>Terms of Use</h1>
        <p>The online service is a copyrighted work belonging to Pragmatismo. By accessing or using the Site, you agree to comply with these legally binding Terms of Use.</p>

        <h2>1. Access to the Site</h2>
        <p>Subject to these Terms, the Company grants you a non-transferable, non-exclusive, revocable, limited license to access and use the Site solely for your own personal, noncommercial use.</p>

        <h2>2. Certain Restrictions</h2>
        <p>Your rights under these Terms are subject to the following restrictions:</p>
        <ul>
            <li>You shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site.</li>
            <li>You shall not change, make derivative works of, disassemble, reverse compile, or reverse engineer any part of the Site.</li>
            <li>You shall not access the Site to build a similar or competitive website.</li>
            <li>No part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means, except as expressly stated herein.</li>
        </ul>

        <h2>3. Intellectual Property Rights</h2>
        <p>All intellectual property rights in the Site and its content are owned by the Company or the Company’s suppliers. These Terms do not give you any rights, title, or interest in any intellectual property rights, except for the limited access rights granted in Section 1.</p>

        <h2>4. User Content</h2>
        <p>"User Content" refers to any information and content that a user submits to the Site. You are solely responsible for your User Content and for any consequences that may result from your use of it.</p>
        <p>By submitting User Content, you grant the Company a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, display, and perform the User Content for the purposes of operating the Site.</p>

        <h2>5. Acceptable Use Policy</h2>
        <p>You agree not to use the Site to:</p>
        <ul>
            <li>Upload or distribute any content that infringes on the rights of others, is unlawful, harassing, or harmful.</li>
            <li>Transmit any software intended to damage or alter a computer system or data.</li>
            <li>Send unsolicited or unauthorized advertising, junk mail, spam, or other forms of solicitation.</li>
            <li>Attempt to gain unauthorized access to the Site.</li>
        </ul>

        <h2>6. Third-Party Links & Ads</h2>
        <p>The Site may contain links to third-party websites and services. These links are provided solely for your convenience, and the Company is not responsible for the content or actions of these third-party sites.</p>

        <h2>7. Disclaimer</h2>
        <p>The Site is provided on an "as-is" and "as available" basis. The Company makes no warranties or guarantees regarding the availability, reliability, or accuracy of the Site.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, the Company shall not be liable for any indirect, consequential, or incidental damages arising out of or relating to your use of the Site.</p>

        <h2>9. Termination</h2>
        <p>The Company reserves the right to suspend or terminate your access to the Site at any time, for any reason, without notice.</p>

        <h2>10. Arbitration Agreement</h2>
        <p>All disputes arising out of or relating to these Terms or your use of the Site shall be resolved through binding arbitration on an individual basis. You waive any right to participate in a class action or class-wide arbitration.</p>

        <h2>11. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@pragmatismo.com.br">info@pragmatismo.com.br</a>.</p>
    </div>
    </div>

</div>  );
}
