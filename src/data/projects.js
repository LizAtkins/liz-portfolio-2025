import ucWebsite from '../assets/img/uc_website.jpeg';
import wamsWebsite from '../assets/img/wams_website.png';
import windowsWebsite from '../assets/img/windows_website.jpeg';
import clarionWebsite from '../assets/img/clarion_website.jpeg';
import etsyShop from '../assets/img/etsy_shop.jpeg';
import iiomCampaign from '../assets/img/iiom_campaign.jpeg';
import webTutorial from '../assets/img/web_tutorial.jpg';

export const projects = {
  web: [
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
      link: "https://www.wamsymposium.com/"
    },
    {
      title: "Frutiger Aero Portfolio",
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
  ],
  written: [
    {
      title: "Technical Writing: Web Development Tutorial",
      description: "Created a comprehensive tutorial series on web development fundamentals, covering HTML, CSS, and JavaScript basics. The series was published on Medium and received positive feedback for its clear explanations and practical examples.",
      image: webTutorial,
      category: "written",
      tags: ["Technical Writing", "Web Development", "Tutorial", "Documentation"],
      link: "https://medium.com/@lizatkins"
    },
    {
      title: "Should College Students Use Chat GPT?",
      description: "An in-depth analysis of the impact of AI technology on education, exploring both the benefits and challenges of using ChatGPT in academic settings.",
      quote: "Is this moment more like the invention of the calculator, saving me from the tedium of long division, or more like the invention of the player piano, robbing us of what can be communicated only through human emotion? - Daniel Herman",
      category: "written",
      tags: ["Technology", "Education", "AI", "Opinion"],
      link: "https://www.sinclairclarion.com/home/technology/2023/05/20/should-college-students-use-chat-gpt/"
    },
    {
      title: "The Barbie Movie: A Deep Dive into Corporations, Nostalgia, and Feminism",
      description: "A comprehensive analysis of the Barbie movie's impact on corporate strategy, cultural nostalgia, and feminist discourse in modern cinema.",
      quote: "The movie shows that women can embrace their femininity without compromising their feminist beliefs. By presenting characters who are hyper-feminine and strong, intelligent, and ambitious, it challenges the stereotype that femininity and feminism are mutually exclusive.",
      category: "written",
      tags: ["Film Analysis", "Feminism", "Corporate Strategy", "Cultural Impact"],
      link: "https://www.sinclairclarion.com/home/entertainment/2023/09/10/the-barbie-movie-a-deep-dive-into-corporations-nostalgia-and-feminism/"
    }
  ]
}; 