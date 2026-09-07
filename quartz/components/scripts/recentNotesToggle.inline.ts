function initRecentNotesToggle() {
  document.querySelectorAll<HTMLElement>(".recent-notes").forEach((section) => {
    const heading = section.querySelector<HTMLElement>(":scope > h3")
    const list = section.querySelector<HTMLElement>(":scope > .recent-ul")

    if (!heading || !list || heading.dataset.toggleReady) return

    heading.dataset.toggleReady = "true"
    heading.setAttribute("role", "button")
    heading.setAttribute("tabindex", "0")
    heading.setAttribute("aria-expanded", "true")

    const toggle = () => {
      const collapsed = section.classList.toggle("is-collapsed")
      heading.setAttribute("aria-expanded", String(!collapsed))
    }

    heading.addEventListener("click", toggle)
    heading.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        toggle()
      }
    })
  })
}

document.addEventListener("nav", initRecentNotesToggle)
document.addEventListener("render", initRecentNotesToggle)
initRecentNotesToggle()