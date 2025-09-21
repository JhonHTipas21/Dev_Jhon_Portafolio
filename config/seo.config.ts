import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | Jhon Tipas",
  defaultTitle: "Jhon Tipas — Portafolio",
  openGraph: { type: "website", locale: "es_CO" },
  twitter: { cardType: "summary_large_image" }
};
