import { siteConfig } from "@/content/site";
import { siteUrl } from "@/lib/metadata";

/**
 * Build the `EducationalOrganization` structured-data object from
 * `siteConfig`. Kept as a plain function so it can be unit-tested or reused.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: siteConfig.fullName,
    description: siteConfig.longDescription,
    url: siteUrl,
    // TODO: Add the real logo URL once brand assets are finalised.
    // logo: `${siteUrl}/logo.png`,
    foundingDate: String(siteConfig.foundedYear),
    sameAs: [siteConfig.socials.instagramUrl],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressCountry: "ID",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${siteConfig.contact.whatsappIntl}`,
        email: siteConfig.contact.email,
        availableLanguage: ["Indonesian"],
      },
    ],
  };
}

/**
 * Render the organization JSON-LD as a `<script type="application/ld+json">`.
 * Drop this once in the root layout.
 */
export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe structured data built from siteConfig.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getOrganizationJsonLd()),
      }}
    />
  );
}
