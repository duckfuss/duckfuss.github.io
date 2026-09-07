import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { concatenateResources } from "../util/resources"
// @ts-expect-error - inline script import handled by Quartz bundler
import recentNotesToggle from "./scripts/recentNotesToggle.inline"
// @ts-expect-error - inline script import handled by Quartz bundler
import tocCurrent from "./scripts/tocCurrent.inline"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = concatenateResources(recentNotesToggle, tocCurrent)

export default (() => Body) satisfies QuartzComponentConstructor
