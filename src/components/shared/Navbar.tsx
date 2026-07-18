"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"

const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setIsOpen(false)
        setOpenDropdown(null)
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    // Close dropdown on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(null)
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, [])

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/"
        if (href === "#") return false
        return pathname.startsWith(href)
    }

    const isDropdownActive = (children: { href: string }[]) => {
        return children.some(c => pathname.startsWith(c.href))
    }

    return (
        <>
            <nav aria-label="Main Navigation" className="sticky top-0 z-50 bg-bg-deep/85 backdrop-blur-[6px] border-b-2 border-line">
                <div ref={dropdownRef} className="relative z-50 max-w-[1120px] mx-auto px-6 flex items-center justify-between h-[68px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-[10px]">
                        <Image src="/assets/images/icons/text-icon.svg" width={120} height={120} alt="Teman Ngoding" />
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden min-[860px]:flex items-center gap-[28px] text-[14px] text-text-dim">
                        {NAV_LINKS.map((link) => {
                            if (link.children && link.children.length > 0) {
                                const active = isDropdownActive(link.children)
                                const isThisOpen = openDropdown === link.label
                                return (
                                    <div key={link.label} className="relative">
                                        <button
                                            onClick={() => setOpenDropdown(isThisOpen ? null : link.label)}
                                            className={`relative py-1 flex items-center gap-[5px] transition-colors hover:text-xp before:content-['>\\00a0'] before:text-xp before:transition-opacity ${active || isThisOpen
                                                ? "text-xp before:opacity-100"
                                                : "before:opacity-0 hover:before:opacity-100"
                                                }`}
                                        >
                                            {link.label}
                                            <span className={`font-mono text-[10px] transition-transform duration-200 ${isThisOpen ? "rotate-180" : ""}`}>▾</span>
                                        </button>
                                        {/* Dropdown panel */}
                                        <div className={`absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[200px] bg-bg-panel border-2 border-line shadow-[4px_4px_0_#000] transition-all duration-200 ${isThisOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                                            {/* Arrow */}
                                            <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-bg-panel border-l-2 border-t-2 border-line rotate-45" />
                                            <div className="flex flex-col p-[6px] gap-[2px]">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        onClick={() => setOpenDropdown(null)}
                                                        className={`font-mono text-[12px] px-[14px] py-[10px] transition-colors ${isActive(child.href)
                                                            ? "bg-bg-panel-2 text-xp border-l-2 border-xp"
                                                            : "text-text-dim hover:bg-bg-panel-2 hover:text-text-main"
                                                            }`}
                                                    >
                                                        <span className="text-xp mr-2 text-[10px]">▸</span>
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            return (
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
                            )
                        })}
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
                    {NAV_LINKS.map((link) => {
                        if (link.children && link.children.length > 0) {
                            const isThisOpen = openDropdown === link.label
                            return (
                                <div key={link.label}>
                                    <button
                                        onClick={() => setOpenDropdown(isThisOpen ? null : link.label)}
                                        className="w-full font-mono text-[15px] px-[20px] py-[16px] border border-line bg-bg-panel text-text-dim hover:border-line-bright hover:bg-bg-panel-2 hover:text-text-main transition-colors flex items-center justify-between"
                                    >
                                        <span><span className="text-xp mr-2">&gt;</span>{link.label}</span>
                                        <span className={`text-[12px] text-xp transition-transform duration-200 ${isThisOpen ? "rotate-180" : ""}`}>▾</span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${isThisOpen ? "max-h-[200px]" : "max-h-0"}`}>
                                        <div className="flex flex-col gap-[2px] ml-[12px] mt-[2px]">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`font-mono text-[13px] px-[20px] py-[12px] border border-line transition-colors ${isActive(child.href)
                                                        ? "bg-bg-panel-2 border-xp text-xp"
                                                        : "bg-bg-panel text-text-dim hover:border-line-bright hover:bg-bg-panel-2 hover:text-text-main"
                                                        }`}
                                                >
                                                    <span className="text-xp mr-2">▸</span>{child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        return (
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
                        )
                    })}

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