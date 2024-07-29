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

export default function Page() {
  return (
    <div className="w-full py-12 lg:py-12">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">Prices that make sense!</h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">Managing a small business today is already tough.</p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Open source</span>
                </CardTitle>
                <CardDescription>Do your self.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$0</span>
                    <span className="text-sm text-muted-foreground"> / month</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Optional paid support</p>
                        <p className="text-muted-foreground text-sm">We have paid support if you need.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>You own the platform</p>
                        <p className="text-muted-foreground text-sm">Control everything on your host.</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-4">
                    Download <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">FREE</span>
                </CardTitle>
                <CardDescription>A basic non-LLM bot, faster than ever for everyone and everywhere via web.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row  items-center gap-2 text-xl">
                    <span className="text-4xl">$0</span>
                    <span className="text-sm text-muted-foreground"> / month</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Train data</p>
                        <p className="text-muted-foreground text-sm">10 MB of Bot Storage.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Web channel</p>
                        <p className="text-muted-foreground text-sm">1.000 free messages in gb.pragmatismo.cloud/yourbothere.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>WhatsApp</p>
                        <p className="text-muted-foreground text-sm">FREE 30 WhatsApp Notifications.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Publishing</p>
                        <p className="text-muted-foreground text-sm">Publish Dialogs, Documents and Spreadsheets (3 publishs a day).</p>
                      </div>
                    </div>
                  </div>
                  <a href="https://gb.pragmatismo.cloud/PROD-GeneralBots006?p=FREE">
                    <Button className="gap-4">
                      Create Bot <MoveRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Personal</span>
                </CardTitle>
                <CardDescription>You can have your own bot.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$19</span>
                    <span className="text-sm text-muted-foreground"> / month</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Web channel</p>
                        <p className="text-muted-foreground text-sm">Access up to 5000 messages on gb.pragmatismo.cloud/yourbothere.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>WhatsApp Messages</p>
                        <p className="text-muted-foreground text-sm">Share up to 1000 conversations via WhatsApp.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>100 MB of Bot Storage</p>
                        <p className="text-muted-foreground text-sm">Store data with 100 MB of bot storage.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Publishing</p>
                        <p className="text-muted-foreground text-sm">Ability to publish dialogs, documents, and spreadsheets.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Custom WhatsApp Number (optional)</p>
                        <p className="text-muted-foreground text-sm">Option to use a custom WhatsApp number.</p>
                      </div>
                    </div>
                  </div>
                  <a href="https://gb.pragmatismo.cloud/PROD-GeneralBots006?p=Personal">
                    <Button className="gap-4">
                      Create Bot <MoveRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">SMB Plan</span>
                </CardTitle>
                <CardDescription>Streamlined for small and medium businesses, making trade easier and faster.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$200.00</span>
                    <span className="text-sm text-muted-foreground"> (once) + $99.90 / month (Seats &lt; 120)</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>50000 Messages</p>
                        <p className="text-muted-foreground text-sm">Access up to 50000 messages on cloud or Microsoft Teams.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>5000 Shared WhatsApp</p>
                        <p className="text-muted-foreground text-sm">Share up to 5000 messages via WhatsApp.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>500 MB Bot Storage</p>
                        <p className="text-muted-foreground text-sm">Store data with 500 MB of bot storage.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Publish Dialogs, Docs, Sheets</p>
                        <p className="text-muted-foreground text-sm">Publish dialogs, documents, and spreadsheets.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>[Opt.] +10000 messages - $5 / month</p>
                        <p className="text-muted-foreground text-sm">Additional 10000 messages for $5 per month.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>[Opt.] Custom WhatsApp - Contact Us</p>
                        <p className="text-muted-foreground text-sm">Custom WhatsApp number available upon request.</p>
                      </div>
                    </div>
                  </div>
                  <a href="https://gb.pragmatismo.cloud/PROD-GeneralBots006?p=SMB">
                    <Button className="gap-4">
                      Create Bot <MoveRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Corporate Plan</span>
                </CardTitle>
                <CardDescription>Optimized for enterprise needs, enhancing efficiency and collaboration.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">$600.00</span>
                    <span className="text-sm text-muted-foreground"> (once) + $1.00 / seat (120+)</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>100000 Messages</p>
                        <p className="text-muted-foreground text-sm">Access up to 100000 messages on cloud or Microsoft Teams.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>90000 Shared WhatsApp</p>
                        <p className="text-muted-foreground text-sm">Share up to 90000 messages via WhatsApp.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>1 TB Bot Storage</p>
                        <p className="text-muted-foreground text-sm">Store data with 1 TB of bot storage.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Publish Dialogs, Docs, Sheets</p>
                        <p className="text-muted-foreground text-sm">Publish dialogs, documents, and spreadsheets.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>[Opt.] +10000 messages - $5 / month</p>
                        <p className="text-muted-foreground text-sm">Additional 10000 messages for $5 per month.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>[Opt.] Custom WhatsApp - Contact Us</p>
                        <p className="text-muted-foreground text-sm">Custom WhatsApp number available upon request.</p>
                      </div>
                    </div>
                  </div>
                  <a href="https://gb.pragmatismo.cloud/PROD-GeneralBots006?p=Corporate">
                    <Button className="gap-4">
                      Create Bot <MoveRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Enterprise</span>
                </CardTitle>
                <CardDescription>Designed for large enterprises, focusing on scalability and comprehensive support.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">Contact Us</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited Messages</p>
                        <p className="text-muted-foreground text-sm">Access to unlimited messaging capabilities.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>A Lot of Custom AI Models</p>
                        <p className="text-muted-foreground text-sm">Utilize numerous custom AI models tailored to your needs.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Official WhatsApp Number</p>
                        <p className="text-muted-foreground text-sm">Includes an official WhatsApp number for business use.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Integration of IT Teams</p>
                        <p className="text-muted-foreground text-sm">Seamless integration with your IT teams and infrastructure.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>24x7 Admin Support</p>
                        <p className="text-muted-foreground text-sm">Round-the-clock administrative support for your operations.</p>
                      </div>
                    </div>
                  </div>
                  <a href="/contact">
                    <Button variant="outline" className="gap-4">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
