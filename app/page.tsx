// @ts-nocheck
"use client";

import content from "../data/content.json";
import { MinimalNav } from "@/components/ui/minimal-nav";
import { HeroImageBg } from "@/components/ui/hero-image-bg";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccentLine } from "@/components/ui/accent-line";
import { StatsSection } from "@/components/ui/stats-section";
import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { MenuCard } from "@/components/ui/menu-card";
import { HoursTable } from "@/components/ui/hours-table";
import { MapEmbed } from "@/components/ui/map-embed";
import { BookingPrompt } from "@/components/ui/booking-prompt";
import { FooterGradient } from "@/components/ui/footer-gradient";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

const testimonials = content.reviews.map((r: any) => ({
  quote: r.text,
  author: r.name,
  rating: r.rating,
}));

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <MinimalNav
        logo={<span style={{ color: "var(--theme-accent)" }}>Yassou</span>}
        items={navItems}
        ctaText="Call Us"
        ctaHref="tel:9099990088"
      />

      {/* Hero */}
      <HeroImageBg
        heading={content.hero.heading}
        subheading={content.hero.subheading}
        ctaText={content.hero.ctaText}
        ctaHref={content.hero.ctaLink}
        imageSrc={content.hero.backgroundImage}
        overlayOpacity={0.5}
      />

      {/* Stats */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <StatsSection stats={content.stats} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Who We Are"
            title={content.about.heading}
            subtitle="A weekend destination for Mediterranean flavors done right."
          />
          <AccentLine align="center" width="80px" className="mb-10" />
          <div className="max-w-3xl mx-auto space-y-6">
            {content.about.paragraphs.map((p: string, i: number) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Our Menu"
            title="Mediterranean Favorites"
            subtitle="Made from scratch with the freshest ingredients."
          />
          <AccentLine align="center" width="80px" className="mb-12" />
          <MenuCard categories={content.services} />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="What People Say"
            title="Loved by Our Guests"
            subtitle="Don't just take our word for it."
          />
          <AccentLine align="center" width="80px" className="mb-12" />
          <TestimonialGrid testimonials={testimonials} columns={2} />
        </div>
      </section>

      {/* Hours & Map */}
      <section id="hours" className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            label="Visit Us"
            title="Hours & Location"
            subtitle="We're open Friday through Sunday evenings."
          />
          <AccentLine align="center" width="80px" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoursTable hours={content.contact.hours} />
            <MapEmbed query={content.contact.mapEmbedQuery} />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">Follow us for updates and specials</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href={content.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--theme-accent)" }}
            >
              Instagram
            </a>
            <a
              href={content.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--theme-accent)" }}
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <BookingPrompt
            heading="Ready for a Mediterranean Feast?"
            description="Call us to reserve your table or just walk in. We can't wait to serve you."
            phone={content.contact.phone}
            ctaText="Call (909) 999-0088"
          />
        </div>
      </section>

      {/* Footer */}
      <FooterGradient
        businessName={content.businessName}
        tagline={content.tagline}
        phone={content.contact.phone}
        email={content.contact.email}
        address={content.contact.address}
      />
    </main>
  );
}