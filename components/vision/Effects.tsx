"use client"

import { useEffect } from "react"

export default function Effects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-in")
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el))

    const media = document.getElementById("vision-hero-media") as HTMLDivElement | null
    const onScroll = () => {
      if (!media) return
      const y = window.scrollY
      const translate = Math.min(y * 0.2, 80)
      media.style.transform = `translateY(${translate}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      io.disconnect()
    }
  }, [])
  return null
}

