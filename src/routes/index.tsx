import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  MessageCircle,
  ArrowUpRight,
  Truck,
  ShieldCheck,
  Globe2,
  Sparkles,
  RotateCcw,
  Headphones,
  Star,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import catKanjivaram from "@/assets/cat-kanjivaram.jpg";
import catBanarasi from "@/assets/cat-banarasi.jpg";
import catOrganza from "@/assets/cat-organza.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import heritage from "@/assets/heritage.jpg";
import weddingBanner from "@/assets/wedding-banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VASTRIKA — Timeless Elegance | Luxury Handloom Sarees" },
      {
        name: "description",
        content:
          "Discover VASTRIKA's luxury saree atelier — Banarasi, Kanjivaram, Organza & bridal heirlooms handwoven by India's master artisans.",
      },
      { property: "og:title", content: "VASTRIKA — Timeless Elegance" },
      {
        property: "og:description",
        content: "Heirloom sarees handwoven by India's master artisans.",
      },
      { property: "og:image", content: hero },
      { property: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const NAV = [
  "Shop",
  "Collections",
  "Wedding",
  "Festive",
  "New Arrivals",
  "Our Craft",
  "About",
  "Journal",
];

const CATEGORIES = [
  { name: "Banarasi", tag: "Heirloom Silk", img: catBanarasi },
  { name: "Kanjivaram", tag: "Temple Borders", img: catKanjivaram },
  { name: "Organza", tag: "Whisper Light", img: catOrganza },
  { name: "Bridal Atelier", tag: "Bespoke", img: catBridal },
];

const PRODUCTS = [
  {
    name: "Rani Banarasi",
    sub: "Pure Katan Silk · Zari",
    price: "₹ 48,500",
    img: p1,
    tag: "Bestseller",
  },
  {
    name: "Mayura Kanjivaram",
    sub: "Mulberry Silk · Temple Border",
    price: "₹ 62,000",
    img: p2,
    tag: "New",
  },
  {
    name: "Chandni Organza",
    sub: "Hand Embroidered · Zardozi",
    price: "₹ 36,800",
    img: p3,
  },
  {
    name: "Shyama Heirloom",
    sub: "Black Silk · Antique Zari",
    price: "₹ 74,200",
    img: p4,
    tag: "Limited",
  },
];

const WHY = [
  { icon: Sparkles, t: "Authentic Handloom", d: "Woven on traditional looms." },
  { icon: ShieldCheck, t: "Atelier Quality", d: "Inspected thread by thread." },
  { icon: Globe2, t: "Worldwide Shipping", d: "Delivered to 60+ countries." },
  { icon: Truck, t: "Complimentary Delivery", d: "On orders above ₹15,000." },
  { icon: RotateCcw, t: "Easy Returns", d: "7-day hassle-free returns." },
  { icon: Headphones, t: "Concierge Support", d: "Personal styling, every day." },
];

const REVIEWS = [
  {
    name: "Ananya Rao",
    city: "Bengaluru",
    text: "My Vastrika Banarasi was the centerpiece of my wedding. The craftsmanship felt heirloom — passed from another century.",
  },
  {
    name: "Meera Iyengar",
    city: "London",
    text: "Every drape feels personal. The gold work is immaculate and the ivory packaging arrives like a love letter.",
  },
  {
    name: "Priya Kapoor",
    city: "Mumbai",
    text: "I have collected sarees for twenty years. Vastrika sits beside the very best — quietly luxurious.",
  },
];

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = (msg: string) =>
    `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-[11px] tracking-[0.3em] uppercase">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-center gap-2 overflow-hidden">
          <span className="opacity-90">
            Complimentary worldwide shipping on orders above ₹15,000
          </span>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
            : "bg-background/0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-3 items-center">
          <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.18em] uppercase text-foreground/70">
            {NAV.slice(0, 4).map((n) => (
              <a key={n} href="#" className="hover:text-primary transition-colors">
                {n}
              </a>
            ))}
          </nav>
          <button className="lg:hidden justify-self-start text-foreground/80">
            <Menu className="size-5" />
          </button>

          <a
            href="#"
            className="justify-self-center font-display text-2xl md:text-3xl tracking-[0.35em] text-primary"
          >
            VASTRIKA
          </a>

          <div className="justify-self-end flex items-center gap-5 text-foreground/70">
            <button className="hidden md:inline-flex hover:text-primary transition-colors" aria-label="Search">
              <Search className="size-[18px]" />
            </button>
            <button className="hidden md:inline-flex hover:text-primary transition-colors" aria-label="Account">
              <User className="size-[18px]" />
            </button>
            <button className="hover:text-primary transition-colors" aria-label="Wishlist">
              <Heart className="size-[18px]" />
            </button>
            <button className="relative hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag className="size-[18px]" />
              <span className="absolute -top-2 -right-2 size-4 grid place-items-center rounded-full bg-primary text-primary-foreground text-[10px]">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="grid lg:grid-cols-12 min-h-[92vh]">
          <div className="lg:col-span-6 relative flex items-center px-6 md:px-12 lg:px-20 py-20">
            <div className="max-w-xl animate-fade-up">
              <span className="divider-gold">
                <span className="divider-gold-line" /> The Heritage House
              </span>
              <h1 className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] text-primary">
                Timeless<br />
                <span className="italic font-normal">Elegance,</span><br />
                Woven by Hand.
              </h1>
              <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                Every thread tells a story of heritage, craftsmanship and quiet
                luxury — sarees shaped on wooden looms across centuries-old
                ateliers of India.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#shop"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-primary-foreground text-[12px] tracking-[0.25em] uppercase shadow-luxe hover:bg-primary/90 transition"
                >
                  Explore Collection
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#shop"
                  className="inline-flex items-center gap-2 px-2 py-4 text-[12px] tracking-[0.25em] uppercase border-b border-foreground/30 hover:border-primary hover:text-primary transition"
                >
                  Shop Now
                </a>
              </div>
              <div className="mt-14 flex items-center gap-10">
                <Stat n="120+" l="Master Artisans" />
                <span className="h-10 w-px bg-border" />
                <Stat n="40 yrs" l="Of Craft" />
                <span className="h-10 w-px bg-border" />
                <Stat n="60+" l="Countries" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[60vh] lg:min-h-full">
            <div className="absolute inset-0 overflow-hidden lg:rounded-bl-[3rem]">
              <img
                src={hero}
                alt="Model in a maroon Banarasi silk saree inside a heritage palace"
                width={1600}
                height={1920}
                fetchPriority="high"
                className="h-full w-full object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="hidden lg:block absolute bottom-8 left-8 right-8">
              <div className="rounded-2xl bg-background/70 backdrop-blur-md border border-border/70 p-5 flex items-center gap-4 shadow-soft">
                <div className="size-12 rounded-xl overflow-hidden">
                  <img src={p1} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                    Now Showcasing
                  </p>
                  <p className="font-display text-lg text-primary leading-tight">
                    The Royal Banarasi Edit
                  </p>
                </div>
                <a
                  href="#shop"
                  className="text-[11px] tracking-[0.25em] uppercase text-primary hover:text-gold transition"
                >
                  View →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border/60 bg-ivory/60 overflow-hidden">
        <div className="flex gap-16 py-5 animate-marquee whitespace-nowrap text-[11px] tracking-[0.4em] uppercase text-foreground/55">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Banarasi", "Kanjivaram", "Organza", "Chanderi", "Bandhani", "Patola", "Tussar", "Linen"].map((w) => (
              <span key={`${k}-${w}`} className="flex items-center gap-16">
                {w}
                <span className="text-gold">✦</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="divider-gold">
              <span className="divider-gold-line" /> The Atelier
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary max-w-xl">
              Curated by weave, chosen by heart.
            </h2>
          </div>
          <a href="#" className="text-[12px] tracking-[0.25em] uppercase text-primary hover:text-gold transition">
            View all collections →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {CATEGORIES.map((c, i) => (
            <a
              key={c.name}
              href="#"
              className={`group relative overflow-hidden rounded-2xl bg-card aspect-[4/5] ${
                i === 1 ? "lg:translate-y-6" : ""
              } ${i === 3 ? "lg:translate-y-6" : ""}`}
            >
              <img
                src={c.img}
                alt={c.name}
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-ivory">
                <p className="text-[10px] tracking-[0.35em] uppercase text-gold/90">
                  {c.tag}
                </p>
                <div className="mt-1 flex items-end justify-between">
                  <h3 className="font-display text-2xl md:text-3xl">{c.name}</h3>
                  <ArrowUpRight className="size-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section id="shop" className="bg-ivory/70 border-y border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="divider-gold">
                <span className="divider-gold-line" /> Bestsellers
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary max-w-xl">
                Drapes the world is wearing.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              An ever-evolving edit of our most coveted weaves — selected by stylists,
              chosen by you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PRODUCTS.map((p) => (
              <article key={p.name} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-card aspect-[4/5]">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  {p.tag && (
                    <span className="absolute top-4 left-4 bg-background/85 backdrop-blur-sm text-[10px] tracking-[0.25em] uppercase text-primary px-3 py-1.5 rounded-full">
                      {p.tag}
                    </span>
                  )}
                  <button
                    className="absolute top-4 right-4 size-9 grid place-items-center rounded-full bg-background/80 backdrop-blur-sm text-foreground/70 hover:text-primary hover:bg-background transition"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="size-4" />
                  </button>
                  <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                    <button className="flex-1 rounded-full bg-primary text-primary-foreground text-[11px] tracking-[0.25em] uppercase py-3 hover:bg-primary/90">
                      Add to Bag
                    </button>
                    <a
                      href={wa(`Hello, I'm interested in the ${p.name}. Please share more details.`)}
                      target="_blank"
                      rel="noreferrer"
                      className="size-11 grid place-items-center rounded-full bg-background text-emerald-brand hover:bg-emerald-brand hover:text-ivory transition"
                      aria-label="Enquire on WhatsApp"
                    >
                      <MessageCircle className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl text-primary leading-tight">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground tracking-wide">
                      {p.sub}
                    </p>
                  </div>
                  <p className="text-sm tracking-wider text-foreground/85 whitespace-nowrap">
                    {p.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding banner */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img
          src={weddingBanner}
          alt="Bride in candle-lit haveli wearing a Vastrika bridal saree"
          width={1808}
          height={1104}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative h-full mx-auto max-w-7xl px-6 flex items-center">
          <div className="max-w-xl text-ivory">
            <span className="divider-gold">
              <span className="divider-gold-line bg-gold" /> The Wedding House
            </span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
              For the day you've<br /> imagined a thousand times.
            </h2>
            <p className="mt-6 text-ivory/80 max-w-md">
              A bespoke bridal atelier — one-of-one drapes designed with you,
              draped only by you.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-ivory text-primary px-7 py-4 text-[12px] tracking-[0.25em] uppercase hover:bg-gold hover:text-gold-foreground transition"
            >
              Discover Bridal <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={heritage}
              alt="Master artisan weaving on a traditional handloom"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-6 bg-background rounded-2xl border border-border p-6 max-w-[240px] shadow-luxe">
            <p className="font-display text-4xl text-primary">120<span className="text-gold">+</span></p>
            <p className="mt-1 text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
              Master Weavers
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <span className="divider-gold">
            <span className="divider-gold-line" /> Our Craft
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-[1.05]">
            A century of looms, a lifetime of devotion.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our artisans have preserved India's weaving traditions for generations —
            in Varanasi, Kanchipuram, Maheshwar and beyond. Every Vastrika saree
            takes between fourteen days and seven months to bring to life, woven
            entirely by hand.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.25em] uppercase text-primary border-b border-primary/30 pb-1 hover:text-gold hover:border-gold transition"
          >
            Meet the Artisans <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Why Vastrika */}
      <section className="bg-ivory/70 border-y border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="divider-gold">
              <span className="divider-gold-line" /> The Vastrika Promise
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">
              Quiet luxury, in every detail.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
            {WHY.map(({ icon: Icon, t, d }) => (
              <div key={t} className="text-center group">
                <div className="mx-auto size-14 rounded-full grid place-items-center bg-background border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
                  <Icon className="size-5" />
                </div>
                <p className="mt-4 font-display text-base text-primary">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="divider-gold">
            <span className="divider-gold-line" /> The House Whispers
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">
            Heirlooms, in the words of our patrons.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-luxe transition"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-relaxed text-foreground/85 italic">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-display text-base text-primary">{r.name}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
                  {r.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="divider-gold">
              <span className="divider-gold-line" /> @vastrika
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary">
              From the world of Vastrika.
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-[12px] tracking-[0.25em] uppercase text-primary hover:text-gold transition">
            Follow on Instagram →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[hero, p1, catKanjivaram, p2, catOrganza, weddingBanner].map((src, i) => (
            <a
              key={i}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition grid place-items-center">
                <Instagram className="size-5 text-ivory opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-br from-primary to-[oklch(0.30_0.11_16)] text-ivory px-8 md:px-16 py-16 md:py-20 text-center">
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
                 style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 1px, transparent 1px), radial-gradient(circle at 80% 60%, var(--gold) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <span className="divider-gold relative">
              <span className="divider-gold-line bg-gold" /> The House Letter
            </span>
            <h2 className="relative mt-5 font-display text-4xl md:text-5xl max-w-2xl mx-auto">
              Receive private previews, before the world does.
            </h2>
            <p className="relative mt-5 text-ivory/75 max-w-md mx-auto">
              Quiet stories from the loom, first looks at new collections, and
              invitations to our atelier.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-full bg-ivory/10 border border-ivory/25 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/55 backdrop-blur focus:outline-none focus:border-gold transition"
              />
              <button className="rounded-full bg-gold text-gold-foreground px-7 py-3.5 text-[11px] tracking-[0.3em] uppercase hover:bg-ivory hover:text-primary transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.22_0.012_30)] text-ivory/80">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl tracking-[0.35em] text-ivory">VASTRIKA</p>
            <p className="mt-1 text-[11px] tracking-[0.4em] uppercase text-gold">
              Timeless Elegance
            </p>
            <p className="mt-6 text-sm text-ivory/65 leading-relaxed max-w-sm">
              A heritage house of handwoven sarees, crafted across the ateliers of
              India for the modern woman who collects beauty.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-10 grid place-items-center rounded-full border border-ivory/15 hover:border-gold hover:text-gold transition"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { h: "Atelier", l: ["Shop All", "New Arrivals", "Bestsellers", "Wedding", "Festive"] },
            { h: "House", l: ["Our Craft", "About", "Journal", "Press", "Stores"] },
            { h: "Care", l: ["Contact", "Shipping", "Returns", "Saree Care", "FAQ"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="text-[11px] tracking-[0.35em] uppercase text-gold">{col.h}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {col.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-ivory transition">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-ivory/10">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.25em] uppercase text-ivory/50">
            <p>© {new Date().getFullYear()} Vastrika Heritage House</p>
            <p>Handcrafted in India · Worn around the world</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={wa("Hello VASTRIKA Team, I'm interested in your sarees.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-brand/30 animate-ping" />
        <span className="relative grid place-items-center size-14 rounded-full bg-emerald-brand text-ivory shadow-luxe hover:scale-105 transition">
          <MessageCircle className="size-6" />
        </span>
      </a>

      {/* Hidden mobile nav placeholder for completeness */}
      <nav className="sr-only">
        {NAV.map((n) => <a key={n} href="#">{n}</a>)}
      </nav>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-primary">{n}</p>
      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
        {l}
      </p>
    </div>
  );
}
