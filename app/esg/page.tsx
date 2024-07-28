import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        {/* Block 1 - Our Focus */}
        <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Our Focus</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">Corporate Responsibility</h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">As a software and AI company, Pragmatismo is committed to sustainability and corporate responsibility, prioritizing ESG practices across our operations.</p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              {/* Environmental (E) */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Environmental (E)</p>
                  <ul>
                    <li>Waste management: Implementing practices to minimize waste generation, promoting recycling, and reusing materials.</li>
                    <li>Energy efficiency: Reducing energy consumption and adopting renewable energy sources.</li>
                    <li>Natural resources: Protecting and conserving natural resources such as water and soil.</li>
                    <li>Environmental impact: Mitigating environmental impacts like pollution and greenhouse gas emissions.</li>
                  </ul>
                </div>
              </div>
              {/* Social (S) */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Social (S)</p>
                  <ul>
                    <li>Health and safety: Ensuring a safe and healthy work environment, implementing safety measures, and promoting wellness.</li>
                    <li>Human rights: Upholding human rights standards, avoiding forced labor, child labor, and discrimination.</li>
                    <li>Community engagement: Engaging with local communities, fostering partnerships, and contributing to socio-economic development.</li>
                    <li>Diversity and inclusion: Promoting diversity, ensuring equal opportunities for all employees.</li>
                  </ul>
                </div>
              </div>
              {/* Governance (G) */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Governance (G)</p>
                  <ul>
                    <li>Ethics and transparency: Upholding ethical standards and transparency in all operations.</li>
                    <li>Management practices: Implementing responsible management practices, ensuring compliance with laws and regulations.</li>
                    <li>Compensation: Fair and equitable compensation practices.</li>
                    <li>Risk management: Effective risk management systems to identify and mitigate risks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>

        {/* Block 2 - QSMS */}
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge>QSMS</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">Quality, Safety, Environment, and Health</h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">Our commitment to excellence in quality, safety, environment, and health is fundamental to our operations.</p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {/* Features */}
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Efficient and User-Friendly</p>
                  <p className="text-muted-foreground text-sm">We've designed our systems to be efficient and user-friendly, ensuring ease of use and understanding for all stakeholders.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Reliable Performance</p>
                  <p className="text-muted-foreground text-sm">Our systems are built to deliver reliable performance, meeting the highest standards of functionality and stability.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Modern and Intuitive</p>
                  <p className="text-muted-foreground text-sm">We've integrated modern design principles to ensure our systems are intuitive and visually appealing.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Efficient and User-Friendly</p>
                  <p className="text-muted-foreground text-sm">We've designed our systems to be efficient and user-friendly, ensuring ease of use and understanding for all stakeholders.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Reliable Performance</p>
                  <p className="text-muted-foreground text-sm">Our systems are built to deliver reliable performance, meeting the highest standards of functionality and stability.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Modern and Intuitive</p>
                  <p className="text-muted-foreground text-sm">We've integrated modern design principles to ensure our systems are intuitive and visually appealing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
