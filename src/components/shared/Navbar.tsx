"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const navLinks = [
    { href: "/", label: "#home" },
    { href: "/course", label: "#course" },
    { href: "/about", label: "#about" },
]

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
            <nav aria-label="Main Navigation" className="sticky top-0 z-50 bg-[#0a0d18]/85 backdrop-blur-[6px] border-b-2 border-[#2a3358]">
                <div className="relative z-50 max-w-[1120px] mx-auto px-6 flex items-center justify-between h-[68px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-[10px]">
                        <div className="w-[28px] h-[28px] bg-[#52e0a8] [clip-path:polygon(0%_20%,20%_0%,80%_0%,100%_20%,100%_80%,80%_100%,20%_100%,0%_80%)] shadow-[0_0_0_2px_#000,0_0_14px_rgba(82,224,168,0.6)]"></div>
                        <div className="font-pixel text-[11px] text-[#dfe3f5]">
                            teman<span className="text-[#52e0a8]">ngoding</span>.id
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden min-[860px]:flex items-center gap-[28px] text-[14px] text-[#8891b8]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-1 transition-colors hover:text-[#52e0a8] before:content-['>\\00a0'] before:text-[#52e0a8] before:transition-opacity ${isActive(link.href)
                                        ? "text-[#52e0a8] before:opacity-100"
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
                            className="hidden min-[860px]:inline-flex font-mono text-[13px] font-semibold bg-[#ffc857] text-[#1a1300] px-[18px] py-[10px] shadow-[4px_4px_0_#000] border-2 border-black transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
                        >
                            START_QUEST
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            className="min-[860px]:hidden w-[44px] h-[44px] flex flex-col items-center justify-center gap-[5px] bg-[#12172a] border border-[#4a5694] cursor-pointer transition-colors hover:border-[#52e0a8]"
                        >
                            <span className={`block w-[18px] h-[2px] bg-[#dfe3f5] transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                            <span className={`block w-[18px] h-[2px] bg-[#dfe3f5] transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                            <span className={`block w-[18px] h-[2px] bg-[#dfe3f5] transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                        </button>
                    </div>
                </div>
            </nav>



            {/* Mobile menu panel */}
            <div
                id="mobile-menu"
                className={`fixed inset-x-0 top-[68px] z-50 bg-[#0a0d18]/95 border-b border-[#2a3358] transition-all duration-300 min-[860px]:hidden ${isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className={`flex flex-col p-6 gap-[2px] transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-4"}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`font-mono text-[15px] px-[20px] py-[16px] border border-[#2a3358] transition-colors ${isActive(link.href)
                                    ? "bg-[#181f38] border-[#52e0a8] text-[#52e0a8]"
                                    : "bg-[#12172a] text-[#8891b8] hover:border-[#4a5694] hover:bg-[#181f38] hover:text-[#dfe3f5]"
                                }`}
                        >
                            <span className="text-[#52e0a8] mr-2">&gt;</span>
                            {link.label}
                        </Link>
                    ))}

                    <div className="mt-[16px]">
                        <Link
                            href="/course"
                            onClick={() => setIsOpen(false)}
                            className="flex justify-center font-mono font-semibold text-[14px] px-[24px] py-[14px] border-2 border-black shadow-[4px_4px_0_#000] bg-[#ffc857] text-[#1a1300] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] w-full"
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