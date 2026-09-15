import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"

export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some((e) => e.name === "CustomOgImages")
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    const coreStylesheet = css[0]?.content
    const coreScript = js.find(
      (r) => r.loadTime === "beforeDOMReady" && r.contentType === "external",
    )

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {coreStylesheet && <link rel="preload" href={coreStylesheet} as="style" />}
        {coreScript && coreScript.contentType === "external" && (
          <link rel="preload" href={coreScript.src} as="script" />
        )}
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
        <script dangerouslySetInnerHTML={{ __html: `
(function(){
  var log=[],strokeCalls=0,clearCalls=0,canvasFound=false,webglInfo='pending';
  function addLog(m){log.push('['+new Date().toLocaleTimeString()+'] '+m);if(log.length>80)log.shift();}
  function makeBtn(){
    var b=document.createElement('button');b.textContent='DBG';b.style.cssText='position:fixed;bottom:10px;right:10px;z-index:100000;background:#222;color:#0f0;border:1px solid #0f0;padding:4px 8px;font:10px monospace;border-radius:4px;cursor:pointer;';
    var o=document.createElement('div');o.id='gdbg';o.style.cssText='position:fixed;bottom:36px;right:10px;z-index:99999;background:rgba(0,0,0,0.92);color:#0f0;font:11px/1.4 monospace;padding:10px;border-radius:6px;max-width:440px;max-height:400px;overflow:auto;display:none;white-space:pre-wrap;';
    b.onclick=function(){o.style.display=o.style.display==='none'?'block':'none';};
    document.body.appendChild(o);document.body.appendChild(b);
    return o;
  }
  function render(o){
    var s=['=== GRAPH DEBUG ===','PIXI loaded: '+(typeof PIXI!=='undefined'),'D3 loaded: '+(typeof d3!=='undefined'),'Canvas found: '+canvasFound,'WebGL: '+webglInfo,'stroke() total: '+strokeCalls,'clear() total: '+clearCalls,'','--- Log ---'];
    s=s.concat(log.slice(-30));
    o.textContent=s.join('\\n');
  }
  var patched=false;
  function patch(){
    if(patched)return;
    if(!window.PIXI||!PIXI.Graphics){setTimeout(patch,300);return;}
    patched=true;
    addLog('PIXI.Graphics found, patching...');
    var origStroke=PIXI.Graphics.prototype.stroke;
    PIXI.Graphics.prototype.stroke=function(st){
      strokeCalls++;
      if(strokeCalls<=15){addLog('stroke#'+strokeCalls+': '+JSON.stringify(st));}
      return origStroke.call(this,st);
    };
    if(PIXI.GraphicsContext&&PIXI.GraphicsContext.prototype){
      var origClear=PIXI.GraphicsContext.prototype.clear;
      PIXI.GraphicsContext.prototype.clear=function(){
        clearCalls++;
        return origClear.call(this);
      };
    }
    addLog('patched OK');
  }
  function checkCanvas(){
    var c=document.querySelectorAll('canvas');
    if(c.length>0){
      canvasFound=true;
      var cv=c[0];addLog('Canvas: '+cv.width+'x'+cv.height+', dpr='+window.devicePixelRatio);
      var gc=cv.closest('.graph-container');
      if(gc){var r=gc.getBoundingClientRect();addLog('Container: '+Math.round(r.width)+'x'+Math.round(r.height)+' overflow='+getComputedStyle(gc).overflow);}
    }
  }
  try{
    var testCanvas=document.createElement('canvas');
    var gl=testCanvas.getContext('webgl2')||testCanvas.getContext('webgl');
    if(gl){webglInfo=gl.getParameter(gl.RENDERER)+' | '+gl.getParameter(gl.VERSION);gl.getExtension('WEBGL_lose_context')&&gl.getExtension('WEBGL_lose_context').loseContext();}
    else{webglInfo='UNAVAILABLE';}
  }catch(e){webglInfo='err:'+e.message;}
  patch();
  document.addEventListener('DOMContentLoaded',function(){
    var o=makeBtn();
    setTimeout(function(){patch();checkCanvas();render(o);},3000);
    setTimeout(function(){patch();checkCanvas();addLog('Final: strokes='+strokeCalls+' clears='+clearCalls);render(o);},8000);
  });
})();
` }} />
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
