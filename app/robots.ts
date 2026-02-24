import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/connexion", "/dashboard", "/admin"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/connexion", "/dashboard", "/admin"],
      },
    ],
    sitemap: "https://www.gdevis.fr/sitemap.xml",
  };
}
