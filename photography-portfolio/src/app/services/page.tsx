
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Photography services for events, products, food, travel and automotive projects.",
};

// Replace with your actual WordPress contact page URL.
const WORDPRESS_CONTACT_URL =
  "https://your-wordpress-site.com/contact/";

const services = [
  {
    number: "01",
    title: "Event / Concert",
    category: "Event / Concert",
    description:
      "Live shows, college festivals, cultural events and behind-the-scenes moments.",
    message:
      "Hi, I am interested in booking you for event or concert photography. Please share your availability and pricing.",
  },
  {
    number: "02",
    title: "Product",
    category: "Product",
    description:
      "Product images for brands, launches, catalogues and social media.",
    message:
      "Hi, I need a product photoshoot for my brand. I would love to discuss the requirements and pricing.",
  },
  {
    number: "03",
    title: "Food / Cafe",
    category: "Food / Cafe",
    description:
      "Menu photography, cafe interiors, food stories and brand content.",
    message:
      "Hi, I am looking for food or cafe photography for my business. Please share your packages and availability.",
  },
  {
    number: "04",
    title: "Travel / Architecture",
    category: "Travel / Architecture",
    description:
      "Places, architecture, interiors and visual stories from the road.",
    message:
      "Hi, I am interested in a travel or architecture photography shoot. Let's discuss the project details.",
  },
  {
    number: "05",
    title: "Automotive",
    category: "Automotive",
    description:
      "Vehicle portraits, details, lifestyle frames and campaign imagery.",
    message:
      "Hi, I am interested in an automotive photoshoot. Please share your availability and pricing.",
  },
];

export default function ServicesPage() {
  return (
    <section className="section-shell page-section">
      <div className="page-intro">
        <p className="eyebrow">WAYS WE CAN WORK TOGETHER</p>

        <h1>
          Photography
          <br />
          <em>with purpose.</em>
        </h1>

        <p className="intro-copy">
          Every project is different. Explore my work or
          get in touch to plan your next shoot.
        </p>
      </div>

      <div className="service-list">
        {services.map((service) => {
          const bookingUrl = new URL(WORDPRESS_CONTACT_URL);

          bookingUrl.searchParams.set("service", service.title);
          bookingUrl.searchParams.set("message", service.message);

          return (
            <div className="service-row" key={service.number}>
              <span>{service.number}</span>

              <div className="service-info">
                <Link
                  className="service-title-link"
                  href={`/portfolio?category=${encodeURIComponent(
                    service.category
                  )}`}
                >
                  <h2>{service.title} ↗</h2>
                </Link>

                <p>{service.description}</p>

 
<a
  className="text-link service-book-link"
  href={`${WORDPRESS_CONTACT_URL}?service=${encodeURIComponent(
    service.title
  )}&message=${encodeURIComponent(service.message)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Shoot for this service ↗
</a>

              </div>
            </div>
          );
        })}
      </div>

      <div className="service-bottom">
        <p>
          Have an idea that doesn't fit neatly into a category?
        </p>

        <a className="text-link" href={WORDPRESS_CONTACT_URL}>
          Let's talk about it ↗
        </a>
      </div>
    </section>
  );
}
