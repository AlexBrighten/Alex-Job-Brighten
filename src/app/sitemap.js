import { siteConfig } from "./siteConfig";

export default function sitemap() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
