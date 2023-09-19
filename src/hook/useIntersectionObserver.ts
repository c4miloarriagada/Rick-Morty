import { createSignal } from 'solid-js'

export const useIntersectionObserver = (id: string) => {
  const [isIntersecting, setIsIntersecting] = createSignal(false)

  window.addEventListener(
    'click',
    () => {
      const domElement = document.querySelector(id)
      createObserver(domElement)
    },
    false
  )
  const createObserver = (element: Element | null) => {
    const observer = new IntersectionObserver(handleIntersect)
    if (element) {
      observer.observe(element)
    }
  }

  const handleIntersect = (
    entries: IntersectionObserverEntry[]
    // observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (isIntersecting()) {
        setIsIntersecting(false)
        return
      }

      if (entry.isIntersecting && isIntersecting() === false) {
        setIsIntersecting(true)
      }
    })
  }

  return isIntersecting
}
