import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react'
import { LayoutDashboard, PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
    await checkUser();

    return (
        <div className="fixed top-0 w-full backdrop-blur-sm z-50 ">
            <nav className="container mx-auto px-3 py-2 flex items-center justify-between">
                <Link href="/">
                    <Image

                        src={"/logo.png"}
                        alt="finwise logo"
                        height={70}
                        width={200}
                        className="h-20 w-30" />
                </Link>
                <div className="flex item-center space-x-4">
                    <SignedIn>
                        <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex item-center gap-2">
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">Dashboard</span>
                            </Button>
                        </Link>

                        <Link href={"/transaction/create"}>
                            <Button className="flex item-center gap-2">
                                <PenBox size={18} />
                                <span className="hidden md:inline">Transaction</span>
                            </Button>
                        </Link>

                    </SignedIn>

                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="default">login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{ element: { avatarBox: "w-10 h-10" } }} />
                    </SignedIn>
                </div>
            </nav>
        </div>
    )
}

export default Header;