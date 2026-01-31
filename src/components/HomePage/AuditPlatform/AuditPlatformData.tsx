import React from "react";

export interface FeatureItem {
  src: string;
  alt: string;
  Text: React.ReactNode;
  className: string;
  imgClass: string;
}

export const features: FeatureItem[] = [
  {
    src: "/sec-2/magic-wand_3672676.png",
    alt: "Auto Classification",
    Text: (
      <p className="md:text-xs text-[8px] text-center text-gray-600 font-medium">
        Auto
        <br /> Classification
      </p>
    ),
    className:
      "md:top-20 md:left-10 top-10 left-10 max-xs:top-4 max-xs:left-4 shadow-lg bg-white",
    imgClass: "scale-x-[-1] md:h-6 h-4",
  },
  {
    src: "/sec-2/bookmark_12318485 (1).png",
    alt: "Cross Referencing",
    Text: (
      <p className="md:text-xs text-[8px] text-center text-gray-600 font-medium">
        Cross <br /> Referencing
      </p>
    ),
    className:
      "md:top-28 md:right-0 top-20 right-0 max-xs:top-20 max-xs:-right-5 py-1.5 px-3 shadow-lg bg-white",
    imgClass: "md:h-6 h-4",
  },
  {
    src: "",
    alt: "Audit",
    Text: (
      <p className="md:text-sm text-[8px] text-gray-600 font-medium">Audit</p>
    ),
    className:
      "md:bottom-3 md:-left-10 bottom-2 -left-10 max-xs:bottom-2 max-xs:-left-10 px-4 shadow-lg bg-white",
    imgClass: "md:h-6 h-4",
  },
  {
    src: "/sec-2/text-editor_8099665.png",
    alt: "Document Extraction",
    Text: (
      <p className="md:text-xs text-[8px] text-center text-gray-600 font-medium">
        Document <br /> Extraction
      </p>
    ),
    className:
      "md:bottom-10 md:left-20 bottom-10 left-10 max-xs:bottom-14 max-xs:-left-2 px-3 py-2 shadow-lg bg-white",
    imgClass: "md:h-6 h-4",
  },
  {
    src: "/sec-2/artificial-intelligence_3315017.png",
    alt: "Industry Expert AI",
    Text: (
      <p className="md:text-xs text-[8px] text-center text-gray-600 font-medium ">
        Industry Expert
        <br />
        <span className="text-primary font-bold">AI</span>
      </p>
    ),
    className:
      "md:-bottom-10 md:right-20 -bottom-8 right-15 px-3 py-2 shadow-lg bg-white",
    imgClass: "md:h-6 h-4",
  },
  {
    src: "/sec-2/paper-plane_1012351.png",
    alt: "Audit",
    Text: "",
    className:
      "md:-top-10 md:left-[30%] -top-12 left-[40%] p-2 shadow-lg bg-white",
    imgClass: "md:h-6 h-6 max-xs:h-4",
  },
  {
    src: "/sec-2/pdf_4726010.png",
    alt: "PDF",
    Text: "",
    className:
      "md:-top-10 md:left-[75%] -top-8 left-[80%] max-xs:-top-7 max-xs:left-[80%]",
    imgClass: "md:h-12 h-10 max-xs:h-8 shadow-lg",
  },
  {
    src: "/sec-2/word_4726038.png",
    alt: "Doc",
    Text: "",
    className:
      "left-0 top-[45%] max-xs:-left-12 max-xs:top-[30%] bg-transparent shadow-none",
    imgClass: "md:h-12 h-9 max-xs:h-8 shadow-lg",
  },
  {
    src: "/sec-2/xls_4726040.png",
    alt: "XLS",
    Text: "",
    className: "right-28 top-[72%] max-xs:right-16 bg-transparent shadow-none",
    imgClass: "md:h-12 h-9 max-xs:h-8 shadow-lg",
  },
  {
    src: "/sec-2/chat_769236.png",
    alt: "Chat",
    Text: "",
    className:
      "md:-right-10 md:top-[65%] -right-14 top-[60%] max-xs:-right-10 p-2 shadow-lg bg-white",
    imgClass: "md:h-8 h-6 max-xs:h-5",
  },
];
