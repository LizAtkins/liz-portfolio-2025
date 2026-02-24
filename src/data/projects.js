import evChargingMap from '../assets/img/ev_charging_map.png';
import ucWebsite from '../assets/img/uc_website.jpeg';
import wamsWebsite from '../assets/img/wams_website.png';
import windowsWebsite from '../assets/img/windows_website.jpeg';
import clarionWebsite from '../assets/img/clarion_website.jpeg';
import etsyShop from '../assets/img/etsy_shop.jpeg';
import iiomCampaign from '../assets/img/iiom_campaign.jpeg';
import emailBlastsCard from '../assets/img/email_blasts_card.png';

export const projects = {
  web: [
    {
      title: "PI Portal",
      description: "PI Portal for research program management (Mile Two). Built React components, admin dashboard, documentation, and accessibility improvements. Repository and application are not publicly available.",
      image: null,
      category: "web",
      tags: ["React", "Go", "TypeScript", "Accessibility", "Chart.js", "Documentation"],
      link: "/afosr-platform"
    },
    {
      title: "EV Charging Station Map",
      description: "An interactive map showing electric vehicle charging stations in Dayton, Ohio and surrounding cities. Features real-time data from OpenChargeMap API with filters, detailed station information, and nearby amenities.",
      image: evChargingMap,
      category: "web",
      tags: ["Leaflet.js", "OpenStreetMap", "OpenChargeMap API", "Vanilla JavaScript", "HTML5", "CSS3"],
      link: "/ev-charging-map"
    },
    {
      title: "University Connect Platform",
      description: "Contributed to front-end development of this university platform, specifically implementing the home page and My Resources page using Angular and Tailwind CSS. Created responsive layouts and interactive components for an enhanced user experience.",
      image: ucWebsite,
      category: "web",
      tags: ["Angular", "Tailwind CSS", "TypeScript", "Prisma"],
      link: "/university-connect"
    },
    {
      title: "NA-WAMS Symposium Website",
      description: "A comprehensive conference platform for the North American WAMS Workshop, featuring agenda management, registration system, and training session coordination for advanced materials and manufacturing technologies.",
      image: wamsWebsite,
      category: "web",
      tags: ["HTML5", "Bootstrap CSS", "JavaScript", "Responsive Design"],
      link: "/na-wams"
    },
    {
      title: "Windows Desktop Portfolio",
      description: "A nostalgic Windows XP-inspired portfolio website that recreates the classic desktop experience from the early 2000s. Features interactive desktop icons, window management, and authentic XP-style UI elements.",
      image: windowsWebsite,
      category: "web",
      tags: ["HTML5", "JavaScript", "Tailwind CSS"],
      link: "https://lizatkins.github.io/frutiger-aero-portfolio/"
    },
    {
      title: "The Clarion Magazine",
      description: "Developed and maintained the official website for Sinclair Community College's student magazine. Enhanced user engagement through WordPress widget integrations including Spotify podcast embeds, video content, and social media feeds. Implemented responsive design and article management system.",
      image: clarionWebsite,
      category: "web",
      tags: ["WordPress", "HTML5", "CSS", "Responsive Design"],
      link: "https://www.sinclairclarion.com/"
    }
  ],
  visual: [
    {
      title: "Email Marketing",
      description: "Coded and designed HTML email campaigns for event marketing. Built responsive, on-brand templates and custom graphics for conference and event campaigns.",
      image: emailBlastsCard,
      category: "visual",
      tags: ["HTML Email", "Responsive Design", "Graphic Design", "Email Marketing"],
      link: "/email-blasts"
    },
    {
      title: "Etsy Digital Print Shop",
      description: "Created and sold digital art prints through an Etsy shop, building a brand around minimalist and modern designs. Developed a strong Instagram presence showcasing digital art creation process and engaging with a community of art enthusiasts.",
      image: etsyShop,
      category: "visual",
      tags: ["Digital Art", "Brand Identity", "Social Media Marketing", "E-commerce", "SEO"],
      link: "https://www.etsy.com/shop/MCSPrintables"
    },
    {
      title: "Social Media Campaign",
      description: "Managed social media platforms (Twitter and LinkedIn) for over 10 different Arctos Meetings Management conferences. Created engaging graphics and content that increased engagement by over 100% across platforms.",
      image: iiomCampaign,
      category: "visual",
      tags: ["Social Media", "Graphic Design", "Content Strategy", "Conference Marketing"],
      link: "/social-media-campaign"
    }
  ]
}; 