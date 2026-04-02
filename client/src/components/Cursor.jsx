import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const rx = useRef(0)
  const ry = useRef(0)
  const mx = useRef(0)
  const my = useRef(0)

  useEffect(() => {
    const move = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }
    document.addEventListener('mousemove', move)

    let raf
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx.current - 18}px, ${ry.current - 18}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const grow = () => { if (ringRef.current) { ringRef.current.style.width = '50px'; ringRef.current.style.height = '50px' } }
    const shrink = () => { if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px' } }
    document.querySelectorAll('a, button, .skill-card, .project-card').forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
