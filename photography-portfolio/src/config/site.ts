export const siteConfig = {
  photographerName: "CHIRAG SHARMA",
  tagline: "Stories, framed with intention.",
  location: "Jaipur, India",
  email: "chiragclicksss027@gmail.com",
  // Use country code + number, digits only. Example India: 919876543210
  whatsappNumber: "8094960826",
  instagramUsername: "_chirag_sharma27",
  siteUrl: "https://example.com",
};

export function getWhatsAppUrl(message = "Hi! I'd like to enquire about a photoshoot.") {
  const phone = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getInstagramUrl() {
  return `https://instagram.com/${siteConfig.instagramUsername.replace(/^@/, "")}`;
}

export function getEmailUrl(subject = "Photography enquiry") {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
}
