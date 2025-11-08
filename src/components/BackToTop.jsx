import { useEffect, useState } from "react"

export default function BackToTop(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  if(!show) return null
  return (
    <button
      onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 btn btn-primary shadow-glow"
    >
      ↑ Top
    </button>
  )
}
