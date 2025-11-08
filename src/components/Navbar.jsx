export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur">
      <nav className="container-ez py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 grid place-items-center rounded-xl bg-accent-500 font-bold">EZ</div>
          <div>
            <p className="font-semibold leading-none text-white">EZ Labs</p>
            <p className="text-xs text-white/70 -mt-0.5">Home • Contact</p>
          </div>
        </div>
        <div className="hidden sm:flex gap-2">
          <a href="#home" className="badge">Home</a>
          <a href="#services" className="badge">Services</a>
          <a href="#portfolio" className="badge">Portfolio</a>
          <a href="#contact" className="badge">Contact</a>
        </div>
      </nav>
    </header>
  )
}
