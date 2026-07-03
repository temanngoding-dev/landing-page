"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        return pathname.startsWith(href)
    }

    return (
        <>
            <nav aria-label="Main Navigation" className="sticky top-0 z-50 bg-bg-deep/85 backdrop-blur-[6px] border-b-2 border-line">
                <div className="relative z-50 max-w-[1120px] mx-auto px-6 flex items-center justify-between h-[68px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-[10px]">
                        <div className="w-[28px] h-[28px] bg-xp [clip-path:polygon(0%_20%,20%_0%,80%_0%,100%_20%,100%_80%,80%_100%,20%_100%,0%_80%)] shadow-[0_0_0_2px_#000,0_0_14px_rgba(82,224,168,0.6)]"></div>
                        <div className="font-pixel text-[11px] text-text-main">
                            teman<span className="text-xp">ngoding</span>.id
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden min-[860px]:flex items-center gap-[28px] text-[14px] text-text-dim">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-1 transition-colors hover:text-xp before:content-['>\\00a0'] before:text-xp before:transition-opacity ${isActive(link.href)
                                    ? "text-xp before:opacity-100"
                                    : "before:opacity-0 hover:before:opacity-100"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-[12px]">
                        {/* CTA button — visible on desktop */}
                        <Link
                            href="/course"
                            className="hidden min-[860px]:inline-flex font-mono text-[13px] font-semibold bg-gold text-[#1a1300] px-[18px] py-[10px] shadow-[4px_4px_0_#000] border-2 border-black transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
                        >
                            START_QUEST
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            className="min-[860px]:hidden w-[44px] h-[44px] flex flex-col items-center justify-center gap-[5px] bg-bg-panel border border-line-bright cursor-pointer transition-colors hover:border-xp"
                        >
                            <span className={`block w-[18px] h-[2px] bg-text-main transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                            <span className={`block w-[18px] h-[2px] bg-text-main transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                            <span className={`block w-[18px] h-[2px] bg-text-main transition-all duration-300 ${isOpen ? "translate-y-[-7px] -rotate-45" : ""}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu panel */}
            <div
                id="mobile-menu"
                className={`fixed inset-x-0 top-[68px] z-50 bg-bg-deep/95 border-b border-line transition-all duration-300 min-[860px]:hidden ${isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className={`flex flex-col p-6 gap-[2px] transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-4"}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`font-mono text-[15px] px-[20px] py-[16px] border border-line transition-colors ${isActive(link.href)
                                ? "bg-bg-panel-2 border-xp text-xp"
                                : "bg-bg-panel text-text-dim hover:border-line-bright hover:bg-bg-panel-2 hover:text-text-main"
                                }`}
                        >
                            <span className="text-xp mr-2">&gt;</span>
                            {link.label}
                        </Link>
                    ))}

                    <div className="mt-[16px]">
                        <Link
                            href="/course"
                            onClick={() => setIsOpen(false)}
                            className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] bg-gold text-[#1a1300] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full"
                        >
                            ▶ START_QUEST
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar