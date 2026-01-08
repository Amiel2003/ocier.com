"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavBar() {
    const isMobile = useIsMobile()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="absolute top-0 left-0 w-full  z-50 rounded-b-2xl">
            <div className="max-w-full mx-auto flex items-center justify-between py-4 px-9">
                {/* Logo */}
                <div style={{ fontFamily: 'var(--font-ronzino)' }} className="tracking-[-1.1px] flex items-center justify-center gap-1 text-2xl font-semibold transition text-background duration-300">
                    <span className="mt-1"> ©</span>

                    amielfolio
                </div>

                {/* Desktop Navigation */}
                {!isMobile && (
                    <NavigationMenu className="w-full">
                        <NavigationMenuList className="flex-wrap gap-10">
                            <NavigationMenuItem asChild>
                                <Link
                                    href="/"
                                    className="relative inline-block px-4 py-0.5 dark:text-zinc-50 font-poppins rounded-sm font-medium transform hover:-translate-y-0.5 transition duration-300 text-sm overflow-hidden group before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out text-background"
                                >
                                    Home
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem asChild>
                                <Link
                                    href="/about"
                                    className="relative inline-block px-4 py-0.5 dark:text-zinc-50 font-poppins rounded-sm font-medium transform hover:-translate-y-0.5 transition duration-300 text-sm overflow-hidden group before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out text-background"
                                >
                                    About
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem asChild>
                                <Link
                                    href="/projects"
                                    className="relative inline-block px-4 py-0.5 dark:text-zinc-50 font-poppins rounded-sm font-medium transform hover:-translate-y-0.5 transition duration-300 text-sm overflow-hidden group before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out text-background"
                                >
                                    Projects
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem asChild>
                                <Link
                                    href="/contact"
                                    className="relative inline-block px-4 py-0.5 dark:text-zinc-50 font-poppins rounded-sm font-medium transform hover:-translate-y-0.5 transition duration-300 text-sm overflow-hidden group before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:translate-x-0 before:transition-transform before:duration-500 before:ease-in-out text-background"
                                >
                                    Contact
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                )}

                {/* Mobile Menu Button & Dark Mode Toggle */}
                <div className="flex items-center gap-4">
                    {isMobile && (
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-foreground"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobile && mobileMenuOpen && (
                <div className="px-6 pb-6 backdrop-blur-md">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-2 font-poppins font-medium text-sm dark:text-zinc-50"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-2 font-poppins font-medium text-sm dark:text-zinc-50"
                        >
                            About
                        </Link>
                        <Link
                            href="/projects"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-2 font-poppins font-medium text-sm dark:text-zinc-50"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-2 font-poppins font-medium text-sm dark:text-zinc-50"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}