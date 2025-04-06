import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";

function Navbar() {
    return (
        <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-primary font-mono tracking-wider"
                        >
                            Sudoku
                        </Link>
                    </div>
                    <div className="ml-auto flex items-center space-x-4 justify-end">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button>Sign In</Button>
                            </SignInButton>
                            <SignUpButton mode="modal" />
                        </SignedOut>
                        <SignedIn>
                            <UserButton userProfileMode="modal" />
                        </SignedIn>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
