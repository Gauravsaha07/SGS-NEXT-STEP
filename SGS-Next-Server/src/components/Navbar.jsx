export default function Navbar({ activePage = 'dashboard' }) {
  return (
    <header class="w-full bg-parchment-card border-b-4 border-navy px-4 lg:px-8 py-3 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div class="flex items-center space-x-3">
          <a href="#" class="flex items-center space-x-2 group">
            <div class="w-10 h-10 bg-yellow border-3 border-navy shadow-pop flex items-center justify-center font-grotesk font-extrabold text-xl text-navy">
              CB
            </div>
            <div class="flex flex-col">
              <span class="font-grotesk font-extrabold text-xl tracking-tight text-navy leading-none">
                CAREER<span class="text-rust">BRIDGE</span>
              </span>
              <span class="font-mono text-[10px] font-bold text-navy-muted tracking-wider uppercase">
                India Platform v2.4
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav class="hidden md:flex items-center space-x-2 font-grotesk font-bold text-sm">
          <a
            href="#"
            class={`px-4 py-2 rounded-full border-2 border-navy transition-all ${
              activePage === 'dashboard'
                ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                : 'bg-parchment text-navy hover:bg-parchment-dim'
            }`}
          >
            Dashboard
          </a>
          <a
            href="#"
            class={`px-4 py-2 rounded-full border-2 border-navy transition-all ${
              activePage === 'explorer'
                ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                : 'bg-parchment text-navy hover:bg-parchment-dim'
            }`}
          >
            Explore Careers
          </a>
          <a
            href="#"
            class={`px-4 py-2 rounded-full border-2 border-navy transition-all ${
              activePage === 'counselors'
                ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                : 'bg-parchment text-navy hover:bg-parchment-dim'
            }`}
          >
            Find Counselor
          </a>
          <a
            href="#"
            class={`px-4 py-2 rounded-full border-2 border-navy transition-all ${
              activePage === 'roadmap'
                ? 'bg-yellow text-navy shadow-pop-sm font-extrabold'
                : 'bg-parchment text-navy hover:bg-parchment-dim'
            }`}
          >
            AI Roadmap Generator
          </a>
        </nav>

        {/* Right Widgets: Credits & Profile */}
        <div class="flex items-center space-x-3">
          {/* Credits Badge */}
          <a
            href="#"
            class="flex items-center space-x-2 bg-rust-container border-2 border-navy px-3 py-1.5 rounded-full shadow-pop-sm hover:bg-rust-container/80 transition-all"
          >
            <span class="w-3 h-3 rounded-full bg-rust animate-pulse"></span>
            <span class="font-mono text-xs font-bold text-navy">120 Credits</span>
            <span class="bg-navy text-yellow text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full">
              + Top-up
            </span>
          </a>

          {/* User Profile Avatar */}
          <a
            href="#"
            class="flex items-center space-x-2 bg-sky/30 border-2 border-navy px-2.5 py-1 rounded-full shadow-pop-sm hover:bg-sky/50"
          >
            <div class="w-7 h-7 rounded-full bg-sky border border-navy flex items-center justify-center font-grotesk font-bold text-xs text-navy">
              AS
            </div>
            <span class="hidden sm:inline font-grotesk font-bold text-xs text-navy">
              Aarav S.
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
