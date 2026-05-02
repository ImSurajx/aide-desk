const ProductHero = () => (
  <section className="max-w-[1280px] mx-auto px-[24px] pt-[64px] pb-[48px]">
    <div className="text-center max-w-3xl mx-auto mb-[48px]">
      <h1 className="text-[48px] font-semibold tracking-tight leading-[1.1] text-primary mb-[16px] md:text-[56px]">
        Engineered for resolution.
      </h1>
      <p className="text-[16px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        AideDesk is the structural foundation for modern customer support. We
        combined deterministic routing with generative AI to create a console
        that resolves issues before they escalate.
      </p>
    </div>
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-lg border border-surface-variant bg-surface-container-low overflow-hidden">
      <img
        alt="Dashboard preview"
        className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE7Tiv5cVNhqzKNNt1V4_wLzv4MUdgYPhqTCR4EqhypNnPTVGI4lgX7P5JETSvZTtBYWYz4xv4nlRScNVpSzgUMC6R1u4zj1OFqJch7cPsserZEPBGAInO36AniHOJrzH9TvQcVDKoKpAvLTRDkhkA5AtIb3HA9wPeTjwhxwFS1TKl1TDOGz6lEaYkPVkupOp72WpD263yGqSidp2haAUYOiwd5VLBiuV9GOc8UoIyPOkc3LXOjZHtpGdxf5RPQa7YFNeiG7FsRBDs"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
    </div>
  </section>
);
export default ProductHero;
