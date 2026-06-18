import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MessageCircle, MapPin, Mail, Menu, X, ArrowUp, Star,
  Facebook, Instagram, Send, Sparkles, ChevronRight, Quote,
} from "lucide-react";

import hero from "@/assets/hero-boutique.jpg";
import colMen from "@/assets/col-men.jpg";
import colWomen from "@/assets/col-women.jpg";
import colKids from "@/assets/col-kids.jpg";
import colSaree from "@/assets/col-saree.jpg";
import colParty from "@/assets/col-party.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dress Shop — Exclusive Fashion Offers for Every Occasion" },
      { name: "description", content: "Boutique dress shop offering Men's, Women's, Kids, Sarees and Party Wear. Premium collections with exclusive offers, in-store styling and easy WhatsApp ordering." },
      { property: "og:title", content: "Dress Shop — Luxury Boutique Collections" },
      { property: "og:description", content: "Discover handpicked fashion collections crafted for every occasion." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Home,
});

const PHONE = "+919876543210";
const WHATSAPP = "919876543210";
const WA_URL = `https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27m%20interested%20in%20your%20collections`;
const TEL_URL = `tel:${PHONE}`;

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Collections", id: "collections" },
  { label: "Gallery", id: "gallery" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const COLLECTIONS = [
  { name: "Men's Wear", desc: "Tailored suits, sherwanis and smart casuals.", img: colMen, tag: "120+ styles" },
  { name: "Women's Wear", desc: "Designer gowns, kurtis and contemporary fits.", img: colWomen, tag: "200+ styles" },
  { name: "Kids Wear", desc: "Festive and party outfits for little stars.", img: colKids, tag: "80+ styles" },
  { name: "Sarees", desc: "Silk, Banarasi and handwoven heritage drapes.", img: colSaree, tag: "150+ styles" },
  { name: "Party Wear", desc: "Statement pieces for unforgettable evenings.", img: colParty, tag: "90+ styles" },
];

const GALLERY = [colWomen, colSaree, colParty, colMen, colKids, hero, colSaree, colWomen, colParty, colMen, colKids, colWomen];

const STATS = [
  { value: 12, suffix: "+", label: "Years of craft" },
  { value: 8500, suffix: "+", label: "Happy customers" },
  { value: 600, suffix: "+", label: "Curated designs" },
  { value: 50, suffix: "+", label: "Designer brands" },
];

const TESTIMONIALS = [
  { name: "Anjali Sharma", role: "Bride, 2024", text: "Found my dream bridal saree here. The styling team is incredibly patient and the fabrics are unmatched." },
  { name: "Rohan Mehta", role: "Groom, 2025", text: "Picked up a navy sherwani that fit like it was made for me. Truly a luxury boutique experience." },
  { name: "Kavya Iyer", role: "Repeat customer", text: "Every festival begins with a visit here. The collections always feel fresh and beautifully curated." },
];

const PRICING = [
  { name: "Style Visit", price: "Free", features: ["Walk-in consultation", "Outfit recommendations", "Fabric guidance"], cta: "Book a visit" },
  { name: "Signature Styling", price: "₹1,499", features: ["1-hour personal session", "Full look styling", "Tailoring consult"], featured: true, cta: "Start styling" },
  { name: "Occasion Couture", price: "₹4,999", features: ["End-to-end occasion wear", "Bespoke fittings", "Home delivery"], cta: "Plan my look" },
];

const PARTICLES = Array.from({ length: 35 }, (_, i) => {
  const seed = (i + 1) * 12.9898;
  const rand = (offset: number) => {
    const value = Math.sin(seed + offset) * 43758.5453;
    return value - Math.floor(value);
  };

  return {
    left: rand(1) * 100,
    size: 2 + rand(2) * 5,
    dur: 8 + rand(3) * 14,
    delay: rand(4) * 12,
    shimmer: 2 + rand(5) * 3,
    opacity: 0.3 + rand(6) * 0.4,
  };
});

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((particle, i) => {
        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${particle.left}%`,
              width: particle.size,
              height: particle.size,
              animationDuration: `${particle.dur}s, ${particle.shimmer}s`,
              animationDelay: `${particle.delay}s, 0s`,
              opacity: particle.opacity,
            }}
          />
        );
      })}
    </div>
  );
}

function useCounter(target: number, start: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function StatCard({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCounter(value, active);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card-luxe">
      <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [statsIn, setStatsIn] = useState(false);
  const [tIdx, setTIdx] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animationDelay = `${(e.target as HTMLElement).dataset.delay ?? "0"}ms`;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Stats counter trigger
  useEffect(() => {
    if (!statsRef.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStatsIn(true), { threshold: 0.3 });
    io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);


  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div ref={cursorDot} className="cursor-dot" />
      <div ref={cursorRing} className="cursor-ring" />

      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-xl shadow-sm" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-ocean shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight">Maison Vélour</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Dress Boutique</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="group relative text-sm font-medium text-foreground/80 transition hover:text-primary">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={TEL_URL} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary">
              <Phone className="h-4 w-4" /> Call
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-4 py-2 text-sm font-semibold text-white shadow-card-luxe transition hover:opacity-95">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <button onClick={() => setNavOpen((v) => !v)} className="rounded-md p-2 lg:hidden" aria-label="Toggle menu">
            {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {navOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
            <div className="space-y-1 px-5 py-4">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-secondary">
                  {n.label}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a href={TEL_URL} className="flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm"><Phone className="h-4 w-4" /> Call</a>
                <a href={WA_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-gradient-ocean px-4 py-2 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate min-h-screen overflow-hidden">
        <img src={hero} alt="Luxury dress boutique interior" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <Particles />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white backdrop-blur">
              <Sparkles className="h-3 w-3" /> New Season Drop
            </span>
            <h1 className="reveal mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl" data-delay="120">
              Exclusive Fashion Offers <br />
              <span className="italic text-[oklch(0.95_0.08_85)]">for Every Occasion</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg text-white/85" data-delay="240">
              Handpicked couture, heritage sarees and modern silhouettes — styled by experts, tailored to you.
            </p>

            <div className="reveal mt-10 flex flex-wrap gap-3" data-delay="360">
              <a href={TEL_URL} className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--navy)] shadow-luxe transition hover:scale-[1.03]">
                <Phone className="h-4 w-4" /> Call Now
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <button onClick={() => scrollTo("collections")} className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-white/90 hover:text-white">
                Explore Collections <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="reveal mt-14 grid max-w-xl grid-cols-3 gap-6" data-delay="480">
              {[
                ["12+", "Years"],
                ["8.5K", "Customers"],
                ["4.9★", "Rated"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-white">{v}</div>
                  <div className="text-xs uppercase tracking-widest text-white/70">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/10 bg-[var(--navy)]/40 py-4 backdrop-blur">
          <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {["Bridal Couture", "Banarasi Silk", "Designer Sherwanis", "Festive Edit", "Party Wear", "Tailoring Included", "Free Styling"].map((t) => (
                  <span key={t} className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                    <Sparkles className="h-3 w-3" /> {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-luxe">
              <img src={colSaree} alt="Owner curating saree" width={800} height={1000} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-ocean p-6 text-white shadow-luxe sm:block">
              <div className="font-display text-4xl font-bold">12+</div>
              <div className="text-xs uppercase tracking-[0.2em]">Years of craft</div>
            </div>
          </div>

          <div className="reveal" data-delay="150">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About the boutique</span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight lg:text-5xl">
              A house of <span className="text-gradient">curated couture</span>, since 2013.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Born from a love of fabric and craft, Maison Vélour is a boutique where heritage textiles meet contemporary cuts. Every piece on our floor is hand-selected — from Banarasi silks woven by master artisans to modern eveningwear from emerging designers.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founded by stylist Aarti Desai, our atelier offers personal styling, in-house tailoring and end-to-end occasion planning. We believe shopping should feel like an experience, not a transaction.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Personal styling", "Free with every visit"],
                ["In-house tailoring", "Same-week alterations"],
                ["Heritage curation", "150+ saree designs"],
                ["Trusted by 8,500+", "Customers since 2013"],
              ].map(([h, s]) => (
                <div key={h} className="rounded-xl border border-border bg-card p-4">
                  <div className="font-semibold">{h}</div>
                  <div className="text-sm text-muted-foreground">{s}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-6 py-3 text-sm font-semibold text-white shadow-card-luxe">
                <MessageCircle className="h-4 w-4" /> Book a visit
              </a>
              <button onClick={() => scrollTo("collections")} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
                View collections <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="bg-gradient-to-b from-secondary/40 to-background py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} active={statsIn} />
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Collections</span>
            <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
              Five curated <span className="text-gradient">worlds of style</span>
            </h2>
            <p className="mt-4 text-muted-foreground">From everyday elegance to occasion couture — find your moment.</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((c, i) => (
              <article
                key={c.name}
                className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card-luxe transition-all hover:-translate-y-2 hover:shadow-luxe"
                data-delay={`${i * 80}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={c.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/85 via-[var(--navy)]/10 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--navy)]">{c.tag}</span>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold">{c.name}</h3>
                    <p className="mt-1 text-sm text-white/85">{c.desc}</p>
                    <a href={WA_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                      Enquire now <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Inside the atelier</span>
            <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">A peek at our <span className="text-gradient">latest looks</span></h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((src, i) => (
              <div
                key={i}
                className={`reveal group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
                data-delay={`${(i % 6) * 60}`}
              >
                <img src={src} alt={`Look ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[var(--navy)]/0 transition group-hover:bg-[var(--navy)]/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Loved by our clients</span>
          <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">Words from our <span className="text-gradient">visitors</span></h2>

          <div className="relative mt-12 rounded-3xl border border-border bg-card p-10 shadow-card-luxe">
            <Quote className="mx-auto h-10 w-10 text-primary/40" />
            <p className="mt-6 font-display text-xl italic leading-relaxed text-foreground/90 lg:text-2xl">
              "{TESTIMONIALS[tIdx].text}"
            </p>
            <div className="mt-6">
              <div className="font-semibold">{TESTIMONIALS[tIdx].name}</div>
              <div className="text-sm text-muted-foreground">{TESTIMONIALS[tIdx].role}</div>
            </div>
            <div className="mt-1 flex justify-center gap-1 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setTIdx(i)} aria-label={`Show ${i + 1}`} className={`h-2 rounded-full transition-all ${i === tIdx ? "w-8 bg-primary" : "w-2 bg-border"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Styling services</span>
            <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">Choose your <span className="text-gradient">style experience</span></h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PRICING.map((p, i) => (
              <div
                key={p.name}
                className={`reveal relative rounded-3xl border p-8 transition hover:-translate-y-1 ${p.featured ? "border-primary bg-gradient-ocean text-white shadow-luxe" : "border-border bg-card shadow-card-luxe"}`}
                data-delay={`${i * 100}`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--navy)]">Most loved</span>
                )}
                <div className="font-display text-xl font-bold">{p.name}</div>
                <div className="mt-4 font-display text-5xl font-bold">{p.price}</div>
                <ul className={`mt-6 space-y-3 text-sm ${p.featured ? "text-white/90" : "text-muted-foreground"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Sparkles className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-[var(--gold)]" : "text-primary"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_URL}
                  target="_blank" rel="noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${p.featured ? "bg-white text-[var(--navy)] hover:bg-white/90" : "bg-gradient-ocean text-white"}`}
                >
                  {p.cta} <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="reveal overflow-hidden rounded-3xl bg-gradient-ocean p-10 text-white shadow-luxe lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-3xl font-bold lg:text-4xl">Be first to the new collection</h3>
                <p className="mt-3 text-white/85">Subscribe for early access to drops, exclusive offers and styling notes.</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks — you're on the list!"); }} className="flex flex-col gap-3 sm:flex-row">
                <input type="email" required placeholder="your@email.com" className="flex-1 rounded-full bg-white/15 px-5 py-3 text-sm text-white placeholder:text-white/60 backdrop-blur outline-none focus:bg-white/25" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--navy)] hover:bg-white/90">
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Visit us</span>
            <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">Step into the <span className="text-gradient">atelier</span></h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Address", lines: ["12, Linking Road, Bandra West", "Mumbai, Maharashtra 400050"] },
                { icon: Phone, title: "Phone", lines: [PHONE], href: TEL_URL },
                { icon: MessageCircle, title: "WhatsApp", lines: ["Chat with our stylist anytime"], href: WA_URL },
                { icon: Mail, title: "Email", lines: ["hello@maisonvelour.in"], href: "mailto:hello@maisonvelour.in" },
              ].map((c) => {
                const Inner = (
                  <>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-ocean text-white">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold">{c.title}</div>
                      {c.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-card-luxe">{Inner}</a>
                ) : (
                  <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">{Inner}</div>
                );
              })}

              <div className="overflow-hidden rounded-2xl border border-border shadow-card-luxe">
                <iframe
                  title="Boutique location"
                  src="https://www.google.com/maps?q=Linking+Road+Bandra+West+Mumbai&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch shortly."); }}
              className="rounded-3xl border border-border bg-card p-8 shadow-card-luxe"
            >
              <h3 className="font-display text-2xl font-bold">Send us a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">We respond within a few hours during shop time.</p>

              <div className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-medium">Name</span>
                    <input required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your name" />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium">Phone</span>
                    <input required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="+91" />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="font-medium">Email</span>
                  <input type="email" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="you@email.com" />
                </label>
                <label className="block text-sm">
                  <span className="font-medium">Looking for</span>
                  <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                    {COLLECTIONS.map((c) => <option key={c.name}>{c.name}</option>)}
                    <option>Personal styling</option>
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="font-medium">Message</span>
                  <textarea rows={4} className="mt-1 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us about your occasion..." />
                </label>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-ocean px-6 py-3.5 text-sm font-semibold text-white shadow-card-luxe transition hover:opacity-95">
                  Send enquiry <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[var(--navy)] py-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm sm:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--gold)]" />
            <span>© {new Date().getFullYear()} Maison Vélour. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"><Facebook className="h-4 w-4" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
            <a href={WA_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>

      {/* Floating actions */}
      <a href={WA_URL} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-ocean text-white shadow-luxe transition hover:scale-110" aria-label="Chat on WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-card-luxe transition-all hover:border-primary hover:text-primary ${showTop ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
