import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import recentNotesToggle from "./scripts/recentNotesToggle.inline"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = recentNotesToggle

export default (() => Body) satisfies QuartzComponentConstructor
