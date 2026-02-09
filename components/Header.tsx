import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[var(--header-orange)] shadow-md text-white">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="relative w-8 h-8 bg-white rounded-full overflow-hidden flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="PES University Logo"
                                fill
                                className="object-contain p-0.5"
                            />
                        </div>
                        <span>Event Manager</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/events" className="hover:opacity-80 transition-opacity">
                            Events
                        </Link>
                        <Link href="/dashboard" className="hover:opacity-80 transition-opacity">
                            Dashboard
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <SignedOut>
                        <div className="flex gap-2">
                            <SignInButton mode="modal">
                                <button className="px-3 py-1.5 bg-white text-[var(--header-orange)] rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="px-3 py-1.5 bg-transparent border border-white text-white rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>
            </div>
        </header>
    );
}
