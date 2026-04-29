"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FinalCta() {
  const { t } = useTranslation("services");

  return (
    <div className="cta-wrap">
      <div className="cta-inner">
        <p className="cta-eyebrow">
          {t("bookkeeping.finalCta.eyebrow")}
        </p>
        <h2 className="cta-h">{t("bookkeeping.finalCta.title")}</h2>
        <p className="cta-p">
          {t("bookkeeping.finalCta.desc")}
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-cta-primary">
            {t("bookkeeping.finalCta.btnPrimary")}
            <ArrowRight size={16} />
          </Link>
          <a href="#demo" className="btn-cta-ghost">
            {t("bookkeeping.finalCta.btnGhost")}
          </a>
        </div>
        <p className="cta-sub">
          {t("bookkeeping.finalCta.eyebrow")}
        </p>
      </div>
    </div>
  );
}
