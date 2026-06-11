import { Instagram } from "lucide-react";
import img1 from "@/assets/hero-rooftop.jpg";
import img2 from "@/assets/ambience.jpg";
import img3 from "@/assets/experience.jpg";
import img4 from "@/assets/signature-dish.jpg";

const tiles = [
  { src: img1, span: "md:row-span-2", alt: "Rooftop neon mural" },
  { src: img2, span: "", alt: "Aerial rooftop ambience" },
  { src: img4, span: "", alt: "Signature sizzling dessert" },
  { src: img3, span: "md:col-span-2", alt: "Lantern-lit dining" },
];

export function InstagramGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="flex items-end justify-between mb-10 reveal">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">@downtown_cafe_jhansi</div>
          <h2 className="text-4xl sm:text-5xl">Moments From <span className="text-gold">Downtown</span></h2>
        </div>
        <a href="https://www.instagram.com/downtown_cafe_jhansi/" target="_blank" rel="noreferrer"
           className="hidden sm:inline-flex items-center gap-2 btn-ghost-gold rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em]">
          <Instagram size={14} /> Follow
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {tiles.map((t, i) => (
          <a key={i} href="https://www.instagram.com/downtown_cafe_jhansi/" target="_blank" rel="noreferrer"
             className={`group relative overflow-hidden rounded-2xl glass lift-3d aspect-square ${t.span} reveal`}>
            <img src={t.src} alt={t.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs text-fg/90 opacity-0 group-hover:opacity-100 transition">
              <Instagram size={14} className="text-gold" /> View on Instagram
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center sm:hidden">
        <a href="https://www.instagram.com/downtown_cafe_jhansi/" target="_blank" rel="noreferrer" className="btn-ghost-gold rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2">
          <Instagram size={14} /> Follow Us On Instagram
        </a>
      </div>
    </section>
  );
}
