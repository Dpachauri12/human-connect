export default function Hero() {
  return (
    <section
      id="home"
      className="container-ez grid md:grid-cols-2 gap-10 items-center py-20 fade-in"
    >
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white/95">
          Let’s Connect
        </h1>

        <p className="mt-5 text-lg max-w-xl text-white/85 leading-relaxed">
          A place where design meets connection — built to feel simple, fast,
          and human. Crafted with care, this page brings people closer through
          seamless communication.
        </p>

        {/* Realistic Modern Buttons for Recruiter Context */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="px-6 py-2.5 rounded-lg bg-white/15 text-white/90 text-sm font-medium backdrop-blur-md border border-white/20 shadow-md hover:bg-white/25 transition-all duration-300">
            💬 Let’s Work Together
          </button>

          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-400/80 to-pink-500/80 text-white text-sm font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300">
            🚀 View My Projects
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative">
        <img
          src="/assets/hero-workspace.jpg"
          alt="Creative workspace setup"
          className="rounded-2xl shadow-xl w-full h-56 md:h-72 object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
      </div>
    </section>
  );
}
