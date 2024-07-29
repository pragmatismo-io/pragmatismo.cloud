import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


const EssentialResourcesPage = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center">
        <Badge>Essential Resources</Badge>
        <h1 className="text-5xl md:text-7xl font-regular max-w-4xl tracking-tighter">
          Essential Resources for Onboarding in General Bots Development
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground mt-4 max-w-2xl">
          Welcome to your journey into General Bots development! Here, you’ll find all the essential resources, guides, and tools you need to get started and build powerful virtual assistants using the General Bots platform.
        </p>
      </div>

      {/* Resources Table */}
      <div className="py-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Key Resources
          </h2>
          <table>
            <thead>
              <tr>
                <th>Resource</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BotBook</td>
                <td>A guide about building virtual assistants using General Bots.</td>
                <td><a href="https://github.com/GeneralBots/BotBook" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">BotBook on GitHub</a></td>
              </tr>
              <tr>
                <td>API Documentation</td>
                <td>Comprehensive API documentation for General Bots.</td>
                <td><a href="https://gb.pragmatismo.cloud/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">API Documentation</a></td>
              </tr>
              <tr>
                <td>BotServer</td>
                <td>LLM Orchestrator powered by Langchain and Bot Framework V4. Includes features such as WhatsApp integration.</td>
                <td><a href="https://www.npmjs.com/package/botserver" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">BotServer on NPM</a></td>
              </tr>
              <tr>
                <td>AzureADPasswordReset.gbapp</td>
                <td>Custom General Bot App for resetting user passwords in Azure AD, Office 365, Dynamics 365, etc.</td>
                <td><a href="https://github.com/GeneralBots/BotServer" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">AzureADPasswordReset on GitHub</a></td>
              </tr>
              <tr>
                <td>GBWord</td>
                <td>A General Bots package related to word processing.</td>
                <td><a href="https://github.com/GeneralBots/GBWord" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GBWord on GitHub</a></td>
              </tr>
              <tr>
                <td>GeneralBots</td>
                <td>General repository for General Bots platform.</td>
                <td><a href="https://github.com/GeneralBots/GeneralBots" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GeneralBots on GitHub</a></td>
              </tr>
              <tr>
                <td>BotModels</td>
                <td>Models in Python for General Bots AI demands.</td>
                <td><a href="https://github.com/GeneralBots/BotModels" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">BotModels on GitHub</a></td>
              </tr>
              <tr>
                <td>BotLib</td>
                <td>General Bots base library for building Node.js TypeScript Apps packages.</td>
                <td><a href="https://github.com/GeneralBots/BotLib" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">BotLib on GitHub</a></td>
              </tr>
              <tr>
                <td>BotApp</td>
                <td>General Bots mobile application repository.</td>
                <td><a href="https://github.com/GeneralBots/BotApp" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">BotApp on GitHub</a></td>
              </tr>
              <tr>
                <td>Broadcaster.gbapp</td>
                <td>Broadcaster for proactive bot messages.</td>
                <td><a href="https://github.com/GeneralBots/Broadcaster" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Broadcaster on GitHub</a></td>
              </tr>
              <tr>
                <td>msft-csw-prd.gbai</td>
                <td>Cognitive Search Tutorial Bot.</td>
                <td><a href="https://github.com/GeneralBots/msft-csw-prd" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">msft-csw-prd on GitHub</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gray-100">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to Dive Deeper?
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4 max-w-xl">
            Explore these resources to kickstart your development with General Bots. Whether you’re looking to build virtual assistants, integrate with Azure, or leverage powerful open-source models, we have the tools and documentation to support your journey.
          </p>
          <div className="flex gap-4 mt-8">
            <Button size="lg">Explore More</Button>
            <Button size="lg" variant="outline">Contact Support</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EssentialResourcesPage;
