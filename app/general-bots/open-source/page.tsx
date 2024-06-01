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