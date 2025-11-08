const shots = [
  { name: "AMAN DWIVEDI", img: "/assets/portfolio1.jpg" },
  { name: "DEEPAK KUMAR", img: "/assets/portfolio2.jpg" },
  { name: "TEAM FRAME", img: "/assets/portfolio3.jpg" },
  { name: "STILL • 04", img: "/assets/portfolio4.jpg" }
]

export default function Portfolio(){
  return (
    <section id="portfolio" className="container-ez py-10 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-white">Portfolio</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shots.map((s, i) => (
          <figure key={i} className="card overflow-hidden zoom">
            <img src={s.img} alt={s.name} className="w-full aspect-[16/10] object-cover"/>
            <figcaption className="p-4 text-sm flex items-center justify-between">
              <span className="font-medium text-white/90">{s.name}</span>
              <span className="badge">989×603</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
