"use client"

import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
})

export default function LandingNavbar() {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
                <div className="relative h-8 w-8 mr-4">
                    <Image src="/logo.png" fill alt="Logo" />
                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>
                    PolyGen AI
                </h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
                    <Button variant={"outline"}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}