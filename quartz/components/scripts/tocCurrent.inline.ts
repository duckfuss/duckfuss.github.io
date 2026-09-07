function updateCurrentTocEntry() {
  const headings = Array.from(
    document.querySelectorAll<HTMLElement>("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),
  )
  const links = document.querySelectorAll<HTMLAnchorElement>(".toc-content a[data-for]")

  links.forEach((link) => link.classList.remove("toc-current"))
  if (!headings.length || !links.length) return

  const viewportCenter = window.innerHeight / 2
  const currentHeading = headings.reduce((closest, heading) => {
    const closestDistance = Math.abs(closest.getBoundingClientRect().top - viewportCenter)
    const headingDistance = Math.abs(heading.getBoundingClientRect().top - viewportCenter)
    return headingDistance < closestDistance ? heading : closest
  })

  document
    .querySelector(`.toc-content a[data-for="${CSS.escape(currentHeading.id)}"]`)
    ?.classList.add("toc-current")
}

const updateCurrentTocEntrySoon = () => requestAnimationFrame(updateCurrentTocEntry)

document.addEventListener("nav", updateCurrentTocEntrySoon)
document.addEventListener("render", updateCurrentTocEntrySoon)
window.addEventListener("scroll", updateCurrentTocEntrySoon, { passive: true })
window.addEventListener("resize", updateCurrentTocEntrySoon)
updateCurrentTocEntrySoon()

if (window.addCleanup) {
  window.addCleanup(() => {
    document.removeEventListener("nav", updateCurrentTocEntrySoon)
    document.removeEventListener("render", updateCurrentTocEntrySoon)
    window.removeEventListener("scroll", updateCurrentTocEntrySoon)
    window.removeEventListener("resize", updateCurrentTocEntrySoon)
  })
}
