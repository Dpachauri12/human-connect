const items = [
  { title: "Film", desc: "Cinematic stories with a design-first approach.", img: "/assets/service-film.jpg"},
  { title: "Brand", desc: "Identity systems and campaigns that scale.", img: "/assets/service-brand.jpg"},
  { title: "Art", desc: "Playful visuals and experimental interactions.", img: "/assets/service-art.jpg"}
]

export default function Services(){
  return (
    <section id="services" className="container-ez py-10 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-white">Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card overflow-hidden hover:scale-[1.01] transition">
            <img src={it.img} alt={it.title} className="w-full aspect-[16/9] object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white/95">{it.title}</h3>
              <p className="mt-2 text-sm text-white/85">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
