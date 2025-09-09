import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DrillIcon as Drone,
  Zap,
  BarChart3,
  Leaf,
  Users,
  Linkedin,
  Youtube,
  Twitter,
  Target,
  TrendingUp,
  Layers,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-100">Modern Generation</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-300 hover:text-slate-100 transition-colors">
                How It Works
              </a>
              <a href="#mission" className="text-slate-300 hover:text-slate-100 transition-colors">
                Our Mission
              </a>
              <a href="#why-it-matters" className="text-slate-300 hover:text-slate-100 transition-colors">
                Why It Matters
              </a>
              <a href="#pilot" className="text-slate-300 hover:text-slate-100 transition-colors">
                Pilot Program
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 min-h-[80vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-pastureland.png"
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Hour%20Serenity-VpCbkkDZuhELNhN41QUM4lXpa5mu73.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              src="/images/hero-pastureland.png"
              alt="Aerial view of rolling pastureland at sunrise"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Modern Generation</h1>
              <p className="text-lg md:text-xl text-slate-200 font-medium">Autonomous Tools for Regenerative Farmers</p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Autonomy for the land. Scale for the farmer. A future beyond confinement and monocrops.
              </h2>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                Our platform helps regenerative livestock operations compete at scale—using drones, AI, and fully
                autonomous land management tools.
              </p>
            </div>

            <div className="pt-8">
              <Button size="lg" className="bg-green-800 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Join the Pilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm">
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-14 h-14 bg-slate-700 border border-slate-600 rounded-sm flex items-center justify-center mx-auto">
                  <Drone className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Autonomous Drones</h3>
                <p className="text-slate-300 leading-relaxed">Schedule and fly without manual input.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm">
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-14 h-14 bg-slate-700 border border-slate-600 rounded-sm flex items-center justify-center mx-auto">
                  <BarChart3 className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Daily Land Insights</h3>
                <p className="text-slate-300 leading-relaxed">Visual data + AI-generated summaries.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm">
              <CardContent className="p-10 text-center space-y-6">
                <div className="w-14 h-14 bg-slate-700 border border-slate-600 rounded-sm flex items-center justify-center mx-auto">
                  <Zap className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">Zero Infrastructure Required</h3>
                <p className="text-slate-300 leading-relaxed">No towers, no fences, just data and decisions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">The Challenge in Regenerative Grazing</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto">
                    <Users className="w-7 h-7 text-slate-400" />
                  </div>
                  <p className="text-slate-300">Labor-intensive movement</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto">
                    <BarChart3 className="w-7 h-7 text-slate-400" />
                  </div>
                  <p className="text-slate-300">Uncertainty about forage recovery</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto">
                    <Leaf className="w-7 h-7 text-slate-400" />
                  </div>
                  <p className="text-slate-300">Inefficiency in paddock rotation</p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Our Solution</h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Our platform uses daily drone imagery and AI to help you know when to move your animals. No guessing. No
                boots on the ground. Better soil. Faster growth. Less stress.
              </p>
              <div className="mt-12">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/biodiverse-pasture.png"
                    alt="Biodiverse regenerative pasture with clover, wildflowers, and healthy soil"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Thriving regenerative pasture with diverse plant species</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Built for Land, Not Screens</h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/agricultural-drone.png"
                    alt="Professional agricultural drone in flight over misty pasture"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40"></div>
                </div>
                <div className="w-16 h-16 bg-green-800 border border-green-700 flex items-center justify-center mx-auto">
                  <span className="text-xl font-semibold text-green-100">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">Daily Drone Flights</h3>
                <p className="text-slate-300 leading-relaxed">
                  Schedule once, then fly daily. Data is uploaded automatically.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-800 border border-green-700 flex items-center justify-center mx-auto">
                  <span className="text-xl font-semibold text-green-100">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">Pasture Analysis</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our software processes imagery and combines it with your grazing records to assess rest cycles, grass
                  growth, and drought pressure.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/images/drone-dashboard.png"
                    alt="Clean dashboard interface showing drone imagery and pasture health data"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/20"></div>
                </div>
                <div className="w-16 h-16 bg-green-800 border border-green-700 flex items-center justify-center mx-auto">
                  <span className="text-xl font-semibold text-green-100">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">Actionable Recommendations</h3>
                <p className="text-slate-300 leading-relaxed">
                  Get AI-generated guidance on paddock moves, animal density, or rest time—straight to your phone or
                  inbox.
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-xl md:text-2xl text-slate-200 font-medium">
                A ranch manager, soil scientist, and systems thinker—on autopilot.
              </p>
              <p className="text-lg text-slate-300">
                Built for farms that stack species, cycle nutrients, and outcompete conventional models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Completely Rewritten */}
      <section id="mission" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Regenerative Livestock at Scale</h2>

            <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
              <p>
                We envision a future where rotationally grazed livestock replace confinement barns, where multi-species
                systems restore soil rather than deplete it, and where automation enables farmers to manage entire
                ecosystems—not just animals.
              </p>
              <p className="text-slate-200 font-medium">Modern Generation exists to accelerate that future.</p>
              <p>
                Our platform combines autonomous drones, AI-driven pasture insights, and integrations with GPS fencing
                and mobile infrastructure to make regenerative livestock management scalable, repeatable, and
                economically competitive with industrial agriculture.
              </p>
              <p>
                By stacking cows, sheep, broilers, layers, and turkeys across smart pastures, a single farmer could
                manage five enterprises—without boots on the ground.
              </p>
              <p className="text-slate-200 font-medium">
                This isn't just a tool. It's a framework for replacing the dominant model of agriculture.
              </p>
            </div>

            <Card className="bg-slate-800/60 border-slate-600 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-10">
                <div className="space-y-6">
                  <p className="text-xl text-slate-200 leading-relaxed">We're not building for hobby farms.</p>
                  <p className="text-xl text-slate-200 leading-relaxed">
                    We're building for the next generation of commercial-scale, regenerative land stewards.
                  </p>
                </div>
                <footer className="mt-6 text-slate-400">— Cody Menefee, Founder</footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters - New Section */}
      <section id="why-it-matters" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Why It Matters</h2>

            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
              Regenerative grazing works. But it doesn't scale easily—yet.
            </p>

            <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
              <p>Our tools are built to unlock scale. We see a future where:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-slate-800/60 border-slate-600 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-green-800 border border-green-700 rounded-sm flex items-center justify-center mx-auto">
                    <Layers className="w-6 h-6 text-green-100" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Farmers raise five species, across one ecosystem, without five full-time crews.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border-slate-600 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-green-800 border border-green-700 rounded-sm flex items-center justify-center mx-auto">
                    <TrendingUp className="w-6 h-6 text-green-100" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Pastures regrow stronger every year—not despite profit, but because of it.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border-slate-600 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-green-800 border border-green-700 rounded-sm flex items-center justify-center mx-auto">
                    <Target className="w-6 h-6 text-green-100" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Landowners choose grass over gravel because it's the smarter investment.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-xl md:text-2xl text-slate-200 font-medium">
                We're not here to supplement the current system.
              </p>
              <p className="text-xl md:text-2xl text-slate-200 font-medium">We're here to help farmers replace it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program */}
      <section id="pilot" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Be First to Fly</h2>

            <div className="space-y-6">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {
                  "We're launching pilot programs in 2025 across Middle Tennessee. If you own land or livestock and want to partner, we'd love to hear from you."
                }
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <h4 className="font-semibold text-slate-200">Custom onboarding</h4>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-200">First access to AI features</h4>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-200">Long-term discounted access</h4>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/60 border-slate-600 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-200">
                        Name
                      </Label>
                      <Input id="name" className="bg-slate-700 border-slate-600 text-slate-100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-200">
                        Email
                      </Label>
                      <Input id="email" type="email" className="bg-slate-700 border-slate-600 text-slate-100" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-slate-200">
                      Are you a landowner / farmer / advisor?
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-100">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="landowner">Landowner</SelectItem>
                        <SelectItem value="farmer">Farmer</SelectItem>
                        <SelectItem value="advisor">Advisor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="acres" className="text-slate-200">
                      Acres under management?
                    </Label>
                    <Input
                      id="acres"
                      className="bg-slate-700 border-slate-600 text-slate-100"
                      placeholder="e.g., 500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-200">
                      Additional Information
                    </Label>
                    <Textarea id="message" className="bg-slate-700 border-slate-600 text-slate-100" rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-green-800 hover:bg-green-700 text-white">
                    Join the Pilot Program
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Modern Generation</h3>
              <p className="text-slate-300 font-medium">Regenerative livestock. Commercial scale. Autonomous tools.</p>
              <p className="text-slate-400 text-sm">
                Modern Generation is advancing the infrastructure of the next agricultural era.
              </p>
              <p className="text-slate-400">
                Email:{" "}
                <a href="mailto:codybmenefee@gmail.com" className="text-green-600 hover:text-green-500">
                  codybmenefee@gmail.com
                </a>
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-100 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
              Modern Generation is currently in research and pilot phase. This site reflects our direction, not current
              product availability.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
