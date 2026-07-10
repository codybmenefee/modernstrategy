import type { Metadata } from "next"
import {
  Target,
  Dumbbell,
  UtensilsCrossed,
  ShoppingCart,
  Ruler,
  Moon,
  Plane,
  Footprints,
  Clock,
  Flame,
  Beef,
  Salad,
  Bean,
  Ban,
  Check,
  Zap,
  Activity,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Effects from "@/components/vision/Effects"

export const metadata: Metadata = {
  title: "The Sturdy Protocol | A 4-Hour Body Plan",
  description:
    "A minimum-effective-dose plan for a strong, muscular, sturdy physique — built for a founder with two kids, constant travel, and no spare time.",
}

export default function PlanPage() {
  return (
    <main className="min-h-screen text-slate-100">
      <Effects />

      {/* Hero */}
      <section className="relative section-spacing min-h-[70vh] flex items-center">
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="glass p-8 md:p-12 reveal">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              A 4-Hour Body Plan
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-[0.06em] uppercase text-white">
              The Sturdy Protocol
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Strong chest. Good posture. A gut that shrinks. Built around the one
              thing you can&apos;t make more of — time. Minimum effective dose,
              measured, and travel-proof.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
              <span className="glass px-4 py-2">6&apos;0&quot; · 220 lb starting point</span>
              <span className="glass px-4 py-2">2 lifts / week</span>
              <span className="glass px-4 py-2">3–4 repeatable meals</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Goal */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline">
            The One Goal
          </h2>
          <p className="mt-8 text-lg text-slate-300 max-w-3xl mx-auto">
            Ferriss&apos; first rule: pursue <em>one</em> measurable objective, not
            four at once. Yours is body recomposition led by the gut — lose the
            waist while the training builds the chest, back, and shoulders that
            read as strong and sturdy.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <Ruler
                  className="mx-auto h-8 w-8"
                  style={{ color: "var(--accent-primary)" }}
                />
                <div className="mt-4 text-2xl font-bold text-white">−2–3 in</div>
                <p className="mt-2 text-sm text-slate-400">
                  Waist at the navel over 12 weeks — the number that matters most
                </p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <Flame
                  className="mx-auto h-8 w-8"
                  style={{ color: "var(--accent-secondary)" }}
                />
                <div className="mt-4 text-2xl font-bold text-white">~1 lb/wk</div>
                <p className="mt-2 text-sm text-slate-400">
                  Slow fat loss on a weekly average — fast enough to see, slow
                  enough to keep muscle
                </p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <Dumbbell
                  className="mx-auto h-8 w-8"
                  style={{ color: "var(--accent-primary)" }}
                />
                <div className="mt-4 text-2xl font-bold text-white">+ strength</div>
                <p className="mt-2 text-sm text-slate-400">
                  Add weight or a rep on the core lifts almost every week
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The 3 Levers / Principles */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline">
            The Three Levers
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Everything else is noise. Pull these three and the physique follows.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Moon className="h-6 w-6" style={{ color: "var(--accent-primary)" }} />
                </div>
                <p className="font-semibold text-white">Close the kitchen at night</p>
                <p className="mt-2 text-sm text-slate-400">
                  Your late eating window is fine — the night snacking is what
                  undoes it. A hard stop ~3 hours before bed is your biggest fat
                  lever.
                </p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <Dumbbell className="h-6 w-6" style={{ color: "var(--accent-secondary)" }} />
                </div>
                <p className="font-semibold text-white">Two short lifts + swings</p>
                <p className="mt-2 text-sm text-slate-400">
                  Two 35-minute full-body sessions and kettlebell swings build the
                  chest, back, and posterior chain. That&apos;s the whole strength
                  program.
                </p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                  <UtensilsCrossed className="h-6 w-6" style={{ color: "var(--accent-primary)" }} />
                </div>
                <p className="font-semibold text-white">Assembly, not cooking</p>
                <p className="mt-2 text-sm text-slate-400">
                  Buy food that&apos;s 80% done. Rotate 3–4 meals you never have to
                  think about. Stop scrambling at 6pm.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eating Plan */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline">
              Eating Plan
            </h2>
            <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
              Slow-carb, adapted to how you actually live. Six days on, one
              flexible meal a week — not a full binge day.
            </p>
          </div>

          {/* The rules */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="glass reveal">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5" style={{ color: "var(--accent-primary)" }} />
                  Do
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li>Build every meal on protein + legumes/beans + vegetables.</li>
                  <li>Front-load protein at your first meal (40g+), whenever you break the fast — no need to force breakfast.</li>
                  <li>Repeat 3–4 meals. Fewer decisions = fewer failures.</li>
                  <li>Drink water, black coffee, tea, sparkling water.</li>
                  <li>Walk 10 minutes after dinner.</li>
                  <li>Eat until satisfied, then stop — don&apos;t force portions.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass reveal">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Ban className="h-5 w-5" style={{ color: "var(--accent-highlight)" }} />
                  Skip (6 days)
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li>&quot;White&quot; carbs: bread, rice, pasta, potatoes, cereal, tortillas, chips.</li>
                  <li>Calories in liquid form: juice, soda, sweet lattes, most alcohol.</li>
                  <li>Fruit (save it for the flexible meal) — beans do the fiber job.</li>
                  <li>Late-night snacking. Kitchen closes ~3 hrs before bed.</li>
                  <li>Anything after the kitchen-closed line except water or tea.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* A day on the plan */}
          <div className="mt-8">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Clock className="h-5 w-5" style={{ color: "var(--accent-secondary)" }} />
                  A day that fits your clock
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="glass p-5">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Wake–1pm
                    </p>
                    <p className="mt-2 font-semibold text-white">Fast / coffee</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Black coffee or tea. If hungry, a scoop of protein in water.
                      No stress about eating early.
                    </p>
                  </div>
                  <div className="glass p-5">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      ~1–3pm · Meal 1
                    </p>
                    <p className="mt-2 font-semibold text-white">The protein anchor</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Big plate: eggs + black beans + sautéed veg, or leftover
                      chicken/beef + lentils + greens. 40g+ protein.
                    </p>
                  </div>
                  <div className="glass p-5">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      ~6–7pm · Dinner
                    </p>
                    <p className="mt-2 font-semibold text-white">The assembly meal</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Protein + beans/lentils + a big pile of veg. One of your 3–4
                      rotation meals. 10-min walk after.
                    </p>
                  </div>
                  <div className="glass p-5">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      ~8:30pm
                    </p>
                    <p className="mt-2 font-semibold text-white">Kitchen closed</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Sparkling water or herbal tea ritual replaces the snack habit.
                      If truly hungry: cottage cheese, jerky, or edamame only.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-400">
                  <strong className="text-slate-200">Flexible meal:</strong> once a
                  week, eat whatever you want for one meal (pizza, dessert, the
                  works) — then back to normal. One meal, not one day.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* The 3-4 rotation meals */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Beef,
                name: "Chicken + lentils",
                detail: "Rotisserie chicken, pre-cooked lentils, frozen broccoli, olive oil + lemon.",
              },
              {
                icon: Bean,
                name: "Beef + black beans",
                detail: "Ground beef, black beans, salsa, sautéed peppers & onions, big salad.",
              },
              {
                icon: Salad,
                name: "Eggs + beans skillet",
                detail: "3–4 eggs, black beans, spinach, hot sauce. The 5-minute default.",
              },
              {
                icon: Activity,
                name: "Fish + greens",
                detail: "Salmon or canned tuna, white beans, arugula, vinaigrette.",
              },
            ].map((m) => (
              <Card key={m.name} className="glass glass-hover reveal">
                <CardContent className="p-6 text-center">
                  <m.icon
                    className="mx-auto h-7 w-7"
                    style={{ color: "var(--accent-primary)" }}
                  />
                  <p className="mt-3 font-semibold text-white">{m.name}</p>
                  <p className="mt-2 text-sm text-slate-400">{m.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Travel rules */}
          <div className="mt-8">
            <Card className="glass reveal">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Plane className="h-5 w-5" style={{ color: "var(--accent-secondary)" }} />
                  On the road
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
                  <p>• Order any protein + any beans/veg. Skip the bun, fries, rice.</p>
                  <p>• Airport: rotisserie/grilled chicken, jerky, hard-boiled eggs, nuts.</p>
                  <p>• Don&apos;t drink your calories — sparkling water, coffee, tea.</p>
                  <p>• Keep the kitchen-closed rule; hotel minibar is closed too.</p>
                  <p>• Pack a shaker + protein powder for the days you can&apos;t eat.</p>
                  <p>• No gym? Swings, push-ups, and a walk cover it (see below).</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workout Plan */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline">
              Workout Plan
            </h2>
            <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
              Two full-body sessions a week, ~35 minutes each. Stop 1–2 reps short
              of failure. When all sets feel clean, add a little weight or a rep.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                    <span className="font-bold" style={{ color: "var(--accent-primary)" }}>A</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Push / Squat day</h3>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li><strong className="text-white">Goblet squat</strong> — 3 × 6–10</li>
                  <li><strong className="text-white">Dumbbell bench / push-up</strong> — 3 × 6–12 <span className="text-slate-500">(the chest)</span></li>
                  <li><strong className="text-white">One-arm dumbbell row</strong> — 3 × 8–12 <span className="text-slate-500">(posture)</span></li>
                  <li><strong className="text-white">Farmer carry</strong> — 3 heavy walks</li>
                  <li><strong className="text-white">Plank</strong> — 3 × 30–45s</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/80 border border-white/10">
                    <span className="font-bold" style={{ color: "var(--accent-secondary)" }}>B</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Hinge / Pull day</h3>
                </div>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li><strong className="text-white">Romanian deadlift</strong> — 3 × 6–10 <span className="text-slate-500">(posterior chain)</span></li>
                  <li><strong className="text-white">Overhead press</strong> — 3 × 6–10 <span className="text-slate-500">(shoulders)</span></li>
                  <li><strong className="text-white">Pull-up / assisted / pulldown</strong> — 3 × 6–10 <span className="text-slate-500">(back)</span></li>
                  <li><strong className="text-white">Face pull / band pull-apart</strong> — 3 × 15 <span className="text-slate-500">(posture)</span></li>
                  <li><strong className="text-white">Dead bug</strong> — 3 × 8/side</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Swings + walks + posture */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <Zap className="mx-auto h-8 w-8" style={{ color: "var(--accent-highlight)" }} />
                <p className="mt-4 font-semibold text-white">Kettlebell swings</p>
                <p className="mt-2 text-sm text-slate-400">
                  2–3× a week. Work toward 3–5 sets of 15–20. Hip hinge, not a
                  squat — snap the hips, protect the low back. Great for the gut and
                  posterior chain.
                </p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <Footprints className="mx-auto h-8 w-8" style={{ color: "var(--accent-primary)" }} />
                <p className="mt-4 font-semibold text-white">Walk daily</p>
                <p className="mt-2 text-sm text-slate-400">
                  20–30 min total, and a non-negotiable 10 min after dinner. It
                  blunts the glucose spike and closes the snack window at the same
                  time.
                </p>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 text-center">
                <Activity className="mx-auto h-8 w-8" style={{ color: "var(--accent-secondary)" }} />
                <p className="mt-4 font-semibold text-white">2-min posture reset</p>
                <p className="mt-2 text-sm text-slate-400">
                  Daily: 20 band pull-aparts + a 30s doorway chest stretch + 30s
                  wall stand. Undoes the travel-and-laptop hunch that hides a strong
                  chest.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400 max-w-3xl mx-auto">
            <strong className="text-slate-200">The travel fallback</strong> (no gym):
            push-ups, kettlebell or backpack swings, split squats, a plank, and a
            walk. Never zero.
          </p>
        </div>
      </section>

      {/* Shopping List */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline flex-none">
              <span className="inline-flex items-center gap-3">
                <ShoppingCart className="h-8 w-8" style={{ color: "var(--accent-primary)" }} />
                Shopping List
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
              Skewed toward &quot;80% done.&quot; One 30-minute batch on the weekend
              (grill/roast proteins, chop nothing you can buy pre-chopped) and the
              week assembles itself.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Protein",
                items: [
                  "Rotisserie chickens (2)",
                  "Ground beef (90/10)",
                  "Eggs (2 dozen)",
                  "Salmon fillets / canned tuna",
                  "Pre-cooked grilled chicken strips",
                  "Beef or turkey jerky (low-sugar)",
                ],
              },
              {
                title: "Legumes (the engine)",
                items: [
                  "Canned black beans (6)",
                  "Canned pinto / white beans (4)",
                  "Pre-cooked lentils (steamed pouches)",
                  "Frozen edamame",
                  "Lentil / chickpea pasta (optional)",
                ],
              },
              {
                title: "Vegetables",
                items: [
                  "Frozen broccoli, spinach, mixed veg (stock up)",
                  "Bagged salad / arugula",
                  "Pre-chopped peppers & onions",
                  "Cherry tomatoes",
                  "Garlic, lemons",
                ],
              },
              {
                title: "Fats & flavor",
                items: [
                  "Olive oil, avocado oil",
                  "Avocados",
                  "Salsa, hot sauce",
                  "Vinaigrette / balsamic",
                  "Spices, salt, pepper",
                ],
              },
              {
                title: "Snack backups (approved)",
                items: [
                  "Cottage cheese",
                  "Hard-boiled eggs (pre-made)",
                  "Mixed nuts (portioned)",
                  "Edamame",
                ],
              },
              {
                title: "Drinks & travel",
                items: [
                  "Sparkling water (cases)",
                  "Coffee, herbal & green tea",
                  "Whey/plant protein powder + shaker",
                  "Single-serve protein for travel",
                ],
              },
            ].map((group) => (
              <Card key={group.title} className="glass glass-hover reveal">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">{group.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check
                          className="h-4 w-4 mt-0.5 shrink-0"
                          style={{ color: "var(--accent-primary)" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Card className="glass reveal">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Gear (one-time)
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-300">
                  <p>• One kettlebell (35–53 lb / 16–24 kg to start)</p>
                  <p>• Adjustable dumbbells or a pair you can progress</p>
                  <p>• A resistance band (posture work + travel)</p>
                  <p>• Pull-up bar or gym access</p>
                  <p>• A cheap tape measure (waist tracking)</p>
                  <p>• A kitchen scale for the first couple of weeks (optional)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Measurement + Sleep */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline">
              Measure It, Sleep On It
            </h2>
            <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
              Run it as a 4-week experiment. At the end, keep only what clearly
              worked or felt sustainable — then run the next four weeks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Ruler className="h-5 w-5" style={{ color: "var(--accent-primary)" }} />
                  Track
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li><strong className="text-white">Waist at the navel</strong> — weekly, same morning. Your headline metric.</li>
                  <li><strong className="text-white">Morning weight</strong> — 3–4×/week, read as a weekly average, never a single day.</li>
                  <li><strong className="text-white">Photos</strong> — front / side / back, monthly.</li>
                  <li><strong className="text-white">Workout log</strong> — weight × reps, so you can add load.</li>
                  <li><strong className="text-white">Hunger & energy</strong> — quick 1–5 note each night.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass glass-hover reveal">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Moon className="h-5 w-5" style={{ color: "var(--accent-secondary)" }} />
                  Sleep (the foundation)
                </h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li>Anchor a consistent <strong className="text-white">wake time</strong> (~7:30) — matters more than bedtime.</li>
                  <li>Protect an 8-hour sleep opportunity; aim lights-out by ~11:30.</li>
                  <li>Cool, dark room. Dim screens the last hour.</li>
                  <li>Last caffeine ~8 hours before bed.</li>
                  <li>Kitchen-closed doubles as a wind-down cue.</li>
                  <li className="text-slate-500">Skip the polyphasic / ice-bath experiments — not worth the risk here.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to skip */}
      <section className="section-spacing">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white heading-underline">
            Ferriss-Inspired, Not Ferriss-Literal
          </h2>
          <p className="mt-8 text-lg text-slate-300 max-w-3xl mx-auto">
            Keep the measurement, simplicity, protein-forward meals, legumes,
            strength training, and the experiment mindset. Leave behind the
            all-out cheat <em>day</em>, aggressive sleep hacking, cold-exposure-as-fat-loss,
            and the supplement and hormone experiments.
          </p>
          <Card className="mt-10 glass glass-hover max-w-2xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium italic">
                &ldquo;Find the minimum effective dose, measure what happens, and
                avoid unnecessary effort.&rdquo;
              </blockquote>
              <div className="mt-4 flex justify-center">
                <div
                  className="w-12 h-0.5"
                  style={{
                    background:
                      "radial-gradient(closest-side, var(--accent-primary), transparent)",
                  }}
                ></div>
              </div>
            </CardContent>
          </Card>
          <p className="mt-8 text-sm text-slate-500">
            Not medical advice. Check with a clinician before big changes,
            especially around fasting, heavy lifting, or supplements.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-slate-300">The Sturdy Protocol — a 4-Hour Body plan.</p>
          <p className="mt-2 text-xs text-slate-500">
            Minimum effective dose. Measured. Built for a life that doesn&apos;t
            slow down.
          </p>
        </div>
      </footer>
    </main>
  )
}
