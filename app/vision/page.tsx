import type { Metadata } from "next"
import Image from "next/image"
import {
  ChevronDown,
  Fence,
  Leaf,
  Linkedin,
  Github,
  Mail,
  Map,
  Bot,
  Sparkles,
  Users,
  Sprout,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Effects from "@/components/vision/Effects"
import ContactForm from "@/components/vision/ContactForm"

export const metadata: Metadata = {
  title: "Modern Generation | Vision for Regenerative Agriculture at Scale",
  description:
    "Exploring how drones, AI, and virtual fencing can unlock regenerative livestock farming at scale.",
  openGraph: {
    title: "Modern Generation | Vision for Regenerative Agriculture at Scale",
    description:
      "Exploring how drones, AI, and virtual fencing can unlock regenerative livestock farming at scale.",
    images: [
      {
        url: "/images/hero-pastureland.png",
        width: 1200,
        height: 630,
        alt: "Aerial view of pastureland with sunrise gradient",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Generation | Vision for Regenerative Agriculture at Scale",
    description:
      "Exploring how drones, AI, and virtual fencing can unlock regenerative livestock farming at scale.",
    images: ["/images/hero-pastureland.png"],
  },
}


export default function VisionPage() {
  return (
    <main className="min-h-screen text-slate-100">
      <Effects />
      {/* Hero (match homepage: video bg, height, brighter overlay) */}
      <section className="relative py-24 px-6 min-h-[80vh] flex items-center">
        {/* Background Video */}
        <div id="vision-hero-media" className="parallax absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-pastureland.png"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Hour%20Serenity-VpCbkkDZuhELNhN41QUM4lXpa5mu73.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="glass p-8 md:p-12 reveal">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-[0.12em] uppercase text-white">Scaling Access to Regenerative Meat</h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Drones, AI, and virtual fencing to unlock regenerative farming at commercial scale. A future we can build together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a href="#problem"><Button className="btn-neon px-6 py-5 text-base font-medium">Explore the Vision</Button></a>
              <a href="#contact"><Button variant="outline" className="glass px-6 py-5 text-base">Start the Conversation</Button></a>
            </div>
            <div className="mt-8 flex justify-center text-slate-300">
              <ChevronDown />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="problem" className="section-spacing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white heading-underline">The Problem — Why Now</h2>
          <p className="mt-6 text-center text-lg text-slate-300 max-w-3xl mx-auto">
            Here are the current bottlenecks in regenerative agriculture — the reasons this vision isn&apos;t mainstream yet.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Users className="h-6 w-6 text-slate-200" />
                </div>
                <p className="font-semibold">Labor-intensive movement</p>
                <p className="mt-1 text-sm text-slate-400">Daily moves demand time, coordination, and crews.</p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Sprout className="h-6 w-6" style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <p className="font-semibold">Uncertain pasture recovery</p>
                <p className="mt-1 text-sm text-slate-400">Hard to see rest cycles and forage resilience.</p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Fence className="h-6 w-6" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <p className="font-semibold">Infrastructure bottlenecks</p>
                <p className="mt-1 text-sm text-slate-400">Fences and capital constrain flexible operations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Moment in Time */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline">Why This Moment in Time</h2>
          <div className="mt-12 space-y-8 text-lg text-slate-300">
            <p>
              Global demand for protein is rising as the world&apos;s population grows, but conventional agriculture is destroying our soil and accelerating climate change.
            </p>
            <p>
              Regenerative practices have been proven to rebuild healthy ecosystems, but they&apos;ve been bottlenecked by labor costs and operational complexity.
            </p>
            <p>
              Now, AI, drones, sensors, and virtual fencing have finally matured to unblock scale. This decade represents the inflection point where technology makes regenerative livestock farming commercially viable.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="glass glass-hover">
              <CardContent className="p-6">
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>9B+</div>
                <p className="text-sm text-slate-400">People worldwide by 2050</p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover">
              <CardContent className="p-6">
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>$1.5T</div>
                <p className="text-sm text-slate-400">Global livestock market</p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover">
              <CardContent className="p-6">
                <div className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>50M+</div>
                <p className="text-sm text-slate-400">Small & mid-scale farmers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white heading-underline">The Future</h2>
          <p className="mt-6 text-center text-slate-300">
            Imagine a world where livestock management is regenerative, autonomous, and scalable.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Map className="h-6 w-6" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <p className="font-semibold">Drones → daily pasture insights</p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Bot className="h-6 w-6" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <p className="font-semibold">AI → predictive recommendations</p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Leaf className="h-6 w-6" style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <p className="font-semibold">Virtual fencing → no physical barriers</p>
              </CardContent>
            </Card>
          </div>

          {/* Before/After visual */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="image-frame">
              <Image src="/images/agricultural-drone.png" alt="Before: manual, fragmented" width={1200} height={800} className="h-64 w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-sm text-slate-200">Before: fragmented operations, manual observation, fixed fencing</p>
              </div>
            </div>
            <div className="image-frame">
              <Image src="/images/drone-dashboard.png" alt="After: autonomous, regenerative" width={1200} height={800} className="h-64 w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-sm text-slate-200">After: autonomous insights, adaptive movement, virtual paddocks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The World We're Building Toward */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white heading-underline">The World We’re Building Toward</h2>
          <div className="mt-12 space-y-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full glass">
                  <Bot className="h-8 w-8" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Autonomous Livestock Management</h3>
                <p className="text-slate-300">
                  Imagine livestock that manage themselves, adapting paddock sizes in real time based on forage growth, weather patterns, and nutritional needs.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full glass">
                  <Leaf className="h-8 w-8" style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Healing Landscapes</h3>
                <p className="text-slate-300">
                  Imagine landscapes healing themselves — carbon sequestered in soil, biodiversity rebounding, watersheds restored, all while producing premium food.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full glass">
                  <Sparkles className="h-8 w-8" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Regenerative at Scale</h3>
                <p className="text-slate-300">
                  Imagine regeneratively raised meat becoming cheaper than factory meat, creating a flywheel where healthy land produces abundant, affordable food.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Card className="glass glass-hover max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <blockquote className="text-xl text-slate-200 leading-relaxed font-medium italic">
                    "This isn&apos;t just about better farming. It&apos;s about reimagining how humanity feeds itself — creating abundance through regeneration, not depletion."
                  </blockquote>
                  <div className="mt-4 flex justify-center"><div className="w-12 h-0.5" style={{ background: 'radial-gradient(closest-side, var(--accent-primary), transparent)' }}></div></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white heading-underline">How We Get There</h2>
          <p className="mt-6 text-center text-lg text-slate-300 max-w-3xl mx-auto">
            Here&apos;s how we can get there, if the right people, tools, and resources come together.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Card className="glass reveal">
              <CardContent className="p-6 text-center">
                <p className="text-sm uppercase tracking-wide text-slate-400">Now</p>
                <p className="mt-2 font-semibold">Drone imaging + AI prototypes</p>
              </CardContent>
            </Card>
            <Card className="glass reveal">
              <CardContent className="p-6 text-center">
                <p className="text-sm uppercase tracking-wide text-slate-400">Next</p>
                <p className="mt-2 font-semibold">Integrate with virtual fencing</p>
              </CardContent>
            </Card>
            <Card className="glass reveal">
              <CardContent className="p-6 text-center">
                <p className="text-sm uppercase tracking-wide text-slate-400">Later</p>
                <p className="mt-2 font-semibold">Fully autonomous regenerative management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Thesis */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white heading-underline">Why It Matters</h2>
          <div className="mt-8 text-center text-lg text-slate-300 max-w-3xl mx-auto">
            <p>Farmers should prosper, land should heal, and society should access affordable regenerative meat at scale.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="glass text-center reveal">
              <CardContent className="p-6">
                <Users className="mx-auto h-8 w-8" style={{ color: 'var(--accent-primary)' }} />
                <p className="mt-4 font-semibold text-white">Families</p>
                <p className="mt-2 text-sm text-slate-400">Eating healthier food grown in harmony with nature</p>
              </CardContent>
            </Card>
            <Card className="glass text-center reveal">
              <CardContent className="p-6">
                <Map className="mx-auto h-8 w-8" style={{ color: 'var(--accent-secondary)' }} />
                <p className="mt-4 font-semibold text-white">Communities</p>
                <p className="mt-2 text-sm text-slate-400">Rural economies gaining new income and opportunity</p>
              </CardContent>
            </Card>
            <Card className="glass text-center reveal">
              <CardContent className="p-6">
                <Leaf className="mx-auto h-8 w-8" style={{ color: 'var(--accent-primary)' }} />
                <p className="mt-4 font-semibold text-white">Future Generations</p>
                <p className="mt-2 text-sm text-slate-400">Inheriting fertile land and stable climate systems</p>
              </CardContent>
            </Card>
            <Card className="glass text-center reveal">
              <CardContent className="p-6">
                <Sparkles className="mx-auto h-8 w-8" style={{ color: 'var(--accent-secondary)' }} />
                <p className="mt-4 font-semibold text-white">Our Planet</p>
                <p className="mt-2 text-sm text-slate-400">Carbon stored, biodiversity protected, water renewed</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Card className="glass max-w-2xl mx-auto">
              <CardContent className="p-8">
                <blockquote className="text-lg text-slate-200 leading-relaxed italic">
                  "Every meal tells a story. With regenerative agriculture, that story becomes one of healing, not harm — for our bodies, our communities, and our planet."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white heading-underline">Our Approach</h2>
          <div className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto">
            <p>Combining deep expertise in technology and agriculture.</p>
            <p>Building solutions that scale regenerative farming practices.</p>
            <p>Creating a network of collaborators to accelerate progress.</p>
          </div>
          <Card className="mt-10 glass glass-hover max-w-2xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium italic">
                “We’re not building for hobby farms. We’re building for the next generation of commercial-scale regenerative livestock.”
              </blockquote>
              <footer className="mt-4 text-slate-400 text-sm">— Cody Menefee, Founder</footer>
              <div className="mt-4 flex justify-center"><div className="w-12 h-0.5" style={{ background: 'radial-gradient(closest-side, var(--accent-secondary), transparent)' }}></div></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Us */}
      <section id="contact" className="section-spacing">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white heading-underline">Join Us</h2>
          <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto">
            I’m looking for collaborators, thinkers, and builders who share this vision. If that’s you — let’s talk.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3 text-left">
            <div className="glass p-4">
              <h3 className="font-semibold text-white mb-2">For Farmers</h3>
              <p className="text-sm text-slate-400">Scale regenerative practices with AI-powered insights and automation.</p>
            </div>
            <div className="glass p-4">
              <h3 className="font-semibold text-white mb-2">For Builders</h3>
              <p className="text-sm text-slate-400">Create the next generation of ag-tech that matters.</p>
            </div>
            <div className="glass p-4">
              <h3 className="font-semibold text-white mb-2">For Visionaries</h3>
              <p className="text-sm text-slate-400">Shape how humanity feeds itself sustainably.</p>
            </div>
          </div>

        <Card className="mt-10 glass text-left">
          <CardContent className="p-6">
            <ContactForm />
          </CardContent>
        </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-4 text-center">
          <p className="text-slate-300">Modern Generation — Vision for the Future of Regenerative Agriculture.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="https://github.com/" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="mailto:codybmenefee@gmail.com" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Modern Generation</p>
        </div>
      </footer>
    </main>
  )
}
