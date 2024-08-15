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
    <div className="w-full py-40 lg:py-50">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-8 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">Prices that make sense!</h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">Here you can see the gears.</p>
          </div>
          <div className="grid pt-30 text-left grid-cols-1 lg:grid-cols-3 w-full gap-9">

          <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Open source</span>
                </CardTitle>
                <CardDescription>Do your self.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-9 justify-start">
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
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">FREE</span>
                </CardTitle>
                <CardDescription>A basic non-LLM bot, faster than ever for everyone and everywhere via web (will send Ads).</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-9 justify-start">
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
                        <p className="text-muted-foreground text-sm">FREE One daily WPP Notification to one number.</p>
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
                <CardDescription>You can have your own private LLM bot to call yours.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-9 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">USD $10</span>
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
                        <p>LLM Enabled</p>
                        <p className="text-muted-foreground text-sm">Chat to documents and data in ChatGPT style.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>100 MB of Bot Storage</p>
                        <p className="text-muted-foreground text-sm">Store data with 10 MB of bot storage (it can access your cloud drive).</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Train LLM bot with Dialogs, Docs, Sheets and more</p>
                        <p className="text-muted-foreground text-sm">Train the using all General Bots BASIC keywords and features.</p>
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
                        <p>(Optional) WhatsApp Offical</p>
                        <p className="text-muted-foreground text-sm">Custom Number and FREE up to 1000 conversations.</p>
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
            <Card className="w-full shadow-2xl rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">Professional</span>
                </CardTitle>
                <CardDescription>Streamlined for small and medium businesses, making trade easier and faster.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-9 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">USD $30</span>
                    <span className="text-sm text-muted-foreground"> Up to 50 seats</span>
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
                        <p>LLM Enabled</p>
                        <p className="text-muted-foreground text-sm">Chat to documents and data in ChatGPT style.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>500 MB Bot Storage</p>
                        <p className="text-muted-foreground text-sm">Store data with 500 MB of bot storage and your own Cloud drive.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Train LLM bot with Dialogs, Docs, Sheets and more</p>
                        <p className="text-muted-foreground text-sm">Train the using all General Bots BASIC keywords and features.</p>
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
                  <span className="flex flex-row gap-4 items-center font-normal">Enterprise</span>
                </CardTitle>
                <CardDescription>Designed for large enterprises, focusing on scalability and comprehensive support.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-9 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl">Contact Us</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Unlimited Messages</p>
                        <p className="text-muted-foreground text-sm">Access to unlimited LLM & messaging capabilities.</p>
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
                        <p className="text-muted-foreground text-sm">Seamless integration with your multicloud IT teams and infrastructure.</p>
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
          <div className="text-left text-xs">
            <ol className="list-decimal list-inside">
              <li>Créditos LLM: 3 USD em créditos LLM incluídos em cada plano pago. Créditos adicionais devem ser adquiridos separadamente;</li>
              <li>Política de uso justo: Reservamo-nos o direito de limitar ou suspender contas com padrões de uso excessivo ou abusivo;</li>
              <li>Responsabilidade de conteúdo: Usuários são responsáveis pelo conteúdo que criam, compartilham ou armazenam usando nossos serviços;</li>
              <li>Disponibilidade: Embora busquemos 99,9% de uptime, não garantimos serviço ininterrupto;</li>
              <li>Retenção de dados: Reservamo-nos o direito de excluir dados de contas inativas após 90 dias sem uso;</li>
              <li>Limites de API: Para garantir uso justo, chamadas de API podem ser limitadas com base no nível do plano;</li>
              <li>Alterações nos planos: Reservamo-nos o direito de modificar, suspender ou descontinuar recursos dos planos mediante aviso prévio;</li>
              <li>Política de reembolso: Não há reembolsos para períodos de serviço parcialmente utilizados ou créditos LLM não utilizados;</li>
              <li>Uso do WhatsApp: A integração com WhatsApp está sujeita aos termos de serviço do WhatsApp e pode ser modificada ou revogada a qualquer momento;</li>
              <li>Limites de armazenamento: Exceder os limites de armazenamento pode resultar em cobranças adicionais ou funcionalidade limitada até a resolução;</li>
              <li>SLAs de suporte: Tempos de resposta para solicitações de suporte variam por nível de plano e não são garantidos;</li>
              <li>Integrações de terceiros: Não nos responsabilizamos pela funcionalidade ou segurança de integrações de terceiros;</li>
              <li>Conformidade: Usuários são responsáveis por garantir que seu uso de nossos serviços cumpra todas as leis e regulamentos aplicáveis;</li>
              <li>Propriedade intelectual: Mantemos todos os direitos sobre a propriedade intelectual dos produtos Pragmatismo, fora do núcleo open-source licenciado de outro modo.</li>
              <li>Usos proibidos: Nossos serviços não podem ser usados para atividades ilegais, spam ou qualquer fim que viole nossos termos de serviço;</li>            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
