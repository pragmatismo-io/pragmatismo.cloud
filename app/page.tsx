"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  BufferLoginButton,
  TelegramLoginButton,
  AppleLoginButton,
  DiscordLoginButton,
  SlackLoginButton,
  OktaLoginButton,
  YahooLoginButton,
  ZaloLoginButton,
  GitlabLoginButton,
  MetamaskLoginButton,
  TikTokLoginButton,
  XLoginButton,
} from "react-social-login-buttons";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";



export default function Page() {
  function handleClick() {
    alert("Thank you for using React Social Login Buttons!");
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl mt-20 py-84 sm:px-6 sm:py-32 lg:px-8 relative">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
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
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Do automation the self way. Do your work from your WhatsApp or any channel.
            </p>
            <div>
            <a href="https://gb.pragmatismo.cloud/PROD-GeneralBots006" className="text-sm font-semibold leading-6 text-white nowrap">
              Create Bot <span aria-hidden="true">→</span>
            </a>
              
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          </div>
        </div>

        <img
          className="w-[calc(100%-400px)] absolute -right-[110px] top-[60px] w-[70rem]"
          src="/pragma-engine-transparent-compressed.png"
          alt="Pragmatismo Engine"
          width={2000}
          height={1457}
        />


      </div>


    </div>
  )
}
