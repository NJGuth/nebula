"use client";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { Ripple } from "@/components/magicui/ripple";
import { motion } from "motion/react";
import AiirLogo from "@/components/agent/icons/aiir-logo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div className="flex-1 hidden sm:block relative bg-gradient-to-br overflow-hidden from-brand-5  via-[#006297] to-brand-1">
        <Ripple />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 1, delay: 1 },

            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <div className="absolute top-1/2 animate-ripple duration-1000 ease-in-out left-1/2 ">
            <Image
              src="/aiiron-animated.gif"
              alt="Aiiron"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
      <div
        className={cn(
          "flex-1 flex px-6",
          "bg-brand-5",
          "justify-center",
          "items-center relative isolate"
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <SignedIn>
            <Link href="/">
              <Button variant="outline">Go to Demo</Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignIn
              appearance={{
                elements: {
                  footerAction: { display: "none" },
                },
              }}
            />
          </SignedOut>
          <div className="w-full flex items-center mt-2 rounded-2xl  justify-between p-4  px-4">
            <span className="text-base text-slate-500">Powered by</span>
            <Link href="https://aiirconsulting.com">
              <AiirLogo className=" bottom-4  h-10" />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
