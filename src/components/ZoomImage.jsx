import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

export default function ZoomImage({ src, alt }) {
  const [open, setOpen] = useState(false);
  const resolvedSrc = useBaseUrl(src);

  return (
    <>
      <img
        src={resolvedSrc}
        alt={alt}
        onClick={() => setOpen(true)}
        style={{ cursor: 'zoom-in', width: '100%' }}
        title="Click to enlarge"
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: resolvedSrc, alt }]}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 5, zoomInMultiplier: 2 }}
      />
    </>
  );
}