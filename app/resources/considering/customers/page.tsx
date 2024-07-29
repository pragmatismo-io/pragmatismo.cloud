import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ClientSection = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col items-start">
        {/* Badge and Title */}
        <div>
          <Badge>Our Clients</Badge>
        </div>
        <div className="flex gap-2 flex-col mt-4">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Our platform is designed to meet the diverse needs of industry leaders. Discover how we support these key clients:
          </p>
        </div>

        {/* Client List */}
        <div className="flex flex-col gap-6 pt-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Opportunity</p>
                <p className="text-muted-foreground text-sm">
                  Revolutionizing strategic growth with data-driven insights.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Microsoft</p>
                <p className="text-muted-foreground text-sm">
                  Enhancing productivity and innovation with seamless integration.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Arte Bazar</p>
                <p className="text-muted-foreground text-sm">
                  Streamlining art material sales and customer interactions with automation.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Módulo Security</p>
                <p className="text-muted-foreground text-sm">
                  Securing operations with advanced solutions and seamless integration.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Tooda</p>
                <p className="text-muted-foreground text-sm">
                  Transforming digital experiences with innovative technology.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Venha Pra Nuvem</p>
                <p className="text-muted-foreground text-sm">
                  Revolutionizing cloud solutions with cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ClientSection;
