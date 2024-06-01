import { LuConstruction } from "react-icons/lu";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white m-48">
    <LuConstruction className="inline-block m-4 w-12" />
    &nbsp;This page is being built. Please check back soon.
    </div>
  )
}
          {/* ChatGPT is a great tool for answering general questions, but it falls short when it comes to answering domain-specific questions as it often makes up answers to fill its knowledge gaps and doesn't cite sources. To solve this issue, this starter app uses embeddings coupled with vector search. This app shows how OpenAI's GPT-3 API can be used to create conversational interfaces for domain-specific knowledge.

Embeddings are vectors of floating-point numbers that represent the "relatedness" of text strings. They are very useful for tasks like ranking search results, clustering, and classification. In text embeddings, a high cosine similarity between two embedding vectors indicates that the corresponding text strings are highly related.

This app uses embeddings to generate a vector representation of a document and then uses vector search to find the most similar documents to the query. The results of the vector search are then used to construct a prompt for GPT-3, which generates a response. The response is then streamed back to the user.*/}

          {/* Writing GPT Tools in Word */}
