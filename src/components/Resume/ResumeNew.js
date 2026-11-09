import React, { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Rahul_Verma_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResumeNew() {
  const viewer = useRef(null);
  const [width, setWidth] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const element = viewer.current;
    const measure = () => setWidth(element.clientWidth);
    const observer = new ResizeObserver(measure);
    measure();
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="site-shell inner-page">
      <div className="page-heading">
        <p className="eyebrow"><span className="index-mark" /> Curriculum vitae</p>
        <h1>My <em>resume.</em></h1>
        <p>Work experience, selected projects, education, and technical skills.</p>
        <a className="pill-button pill-dark" href={pdf} download="Rahul_Verma_Resume.pdf">
          Download CV <FiDownload aria-hidden="true" />
        </a>
      </div>
      <div ref={viewer} className="resume-viewer">
        <Document
          file={pdf}
          onLoadSuccess={({ numPages }) => setPageCount(numPages)}
          error={<p>The preview couldn’t load. <a href={pdf}>Open the PDF</a>.</p>}
        >
          {width > 0 && Array.from({ length: pageCount }, (_, index) => (
            <Page key={index + 1} pageNumber={index + 1} width={width} />
          ))}
        </Document>
      </div>
    </section>
  );
}

export default ResumeNew;
