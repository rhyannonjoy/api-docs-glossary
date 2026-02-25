import React, { useState, useRef, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import MermaidComponent from '@theme/Mermaid';

export default function ZoomMermaid({ chart }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [svgDataUrl, setSvgDataUrl] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const captureSvg = () => {
      const svg = container.querySelector('svg');
      if (!svg) return;
      const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
      const clone = svg.cloneNode(true);
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.removeAttribute('width');
      clone.removeAttribute('height');
      clone.setAttribute('width', '1200');
      clone.setAttribute('height', '800');
      clone.style.background = isDarkMode ? '#000000' : '#fafbfc';
      const blob = new Blob([clone.outerHTML], { type: 'image/svg+xml' });
      setSvgDataUrl(URL.createObjectURL(blob));
    };

    // Watch for Mermaid rendering the SVG
    const svgObserver = new MutationObserver(() => {
      if (container.querySelector('svg')) {
        svgObserver.disconnect();
        captureSvg();
      }
    });
    svgObserver.observe(container, { childList: true, subtree: true });

    // Watch for theme changes on <html>
    const themeObserver = new MutationObserver(() => captureSvg());
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      svgObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        onClick={() => svgDataUrl && setOpen(true)}
        style={{ cursor: svgDataUrl ? 'zoom-in' : 'default' }}
        title={svgDataUrl ? 'Click to enlarge' : ''}
      >
        <MermaidComponent value={chart} />
      </div>

      {svgDataUrl && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: svgDataUrl, alt: 'Sequence diagram' }]}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 5,
            zoomInMultiplier: 2,
          }}
        />
      )}
    </>
  );
}
