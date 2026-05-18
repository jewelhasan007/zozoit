import { Service, Project, BlogPost, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with modern frameworks like React and Next.js.',
    icon: 'Code2',
    slug: 'web-development',
    packages: [
  {
    name: "Basic",
    price: "$199",
    features: [
      "1–3 Page Website",
      "Responsive Design (Mobile Friendly)",
      "Basic UI Design",
      "Contact Form",
      "Basic SEO Setup",
      "3–5 Days Delivery",
      "1 Revision"
    ]
  },
  {
    name: "Premium",
    price: "$499",
    features: [
      "Up to 8 Pages Website",
      "Custom UI/UX Design",
      "Responsive Design",
      "SEO Optimization",
      "Speed Optimization",
      "Blog Integration",
      "Admin Dashboard (Basic)",
      "7–10 Days Delivery",
      "3 Revisions"
    ]
  },
  {
    name: "Unlimited",
    price: "$999+",
    features: [
      "Unlimited Pages",
      "Fully Custom Web Application",
      "Advanced UI/UX Design",
      "Authentication System",
      "Database Integration",
      "API Integration",
      "Performance Optimization",
      "Full SEO Setup",
      "Priority Support",
      "Unlimited Revisions"
    ]
  }
]
  },
  {
    id: '2',
    title: 'E-commerce Solutions',
    description: 'Custom online stores designed to convert visitors into loyal customers with seamless checkout experiences.',
    icon: 'ShoppingBag',
    slug: 'ecommerce',
   packages: [
  {
    name: "Basic",
    price: "$299",
    features: [
      "E-commerce Website Setup",
      "Up to 20 Products",
      "Responsive Design",
      "Product Categories",
      "Shopping Cart",
      "Basic Payment Integration",
      "Basic SEO Setup",
      "5–7 Days Delivery",
      "1 Revision"
    ]
  },
  {
    name: "Premium",
    price: "$699",
    features: [
      "Custom E-commerce Website",
      "Up to 100 Products",
      "Advanced UI/UX Design",
      "Secure Payment Gateway",
      "Order Management System",
      "Inventory Management",
      "Discount & Coupon System",
      "SEO Optimization",
      "Speed Optimization",
      "10–14 Days Delivery",
      "3 Revisions"
    ]
  },
  {
    name: "Unlimited",
    price: "$1299+",
    features: [
      "Fully Custom E-commerce Platform",
      "Unlimited Products",
      "Custom UI/UX Design",
      "Multiple Payment Gateways",
      "Advanced Inventory System",
      "Customer Accounts & Dashboard",
      "Analytics & Sales Reports",
      "Email Notifications System",
      "API Integrations",
      "Performance Optimization",
      "Priority Support",
      "Unlimited Revisions"
    ]
  }
]
  },
  {
    id: '3',
    title: 'SEO & Digital Marketing',
    description: 'Data-driven strategies to boost your online visibility and drive organic growth through search engines.',
    icon: 'TrendingUp',
    slug: 'seo-marketing',
  packages: [
  {
    name: "Basic",
    price: "$199 / month",
    features: [
      "Website SEO Audit",
      "Keyword Research (10 Keywords)",
      "On-Page SEO Optimization",
      "Meta Tags & Image Optimization",
      "Google Search Console Setup",
      "Basic Analytics Setup",
      "Monthly SEO Report"
    ]
  },
  {
    name: "Premium",
    price: "$499 / month",
    features: [
      "Complete SEO Strategy",
      "Keyword Research (30 Keywords)",
      "On-Page & Technical SEO",
      "Content Optimization",
      "Competitor Analysis",
      "Backlink Building",
      "Local SEO Optimization",
      "Google Analytics & Search Console",
      "Bi-Weekly Performance Report"
    ]
  },
  {
    name: "Unlimited",
    price: "$999+ / month",
    features: [
      "Full Digital Marketing Strategy",
      "Unlimited Keyword Targeting",
      "Advanced Technical SEO",
      "Content Marketing Strategy",
      "High Authority Backlink Building",
      "Local & International SEO",
      "Conversion Rate Optimization",
      "Paid Ads Strategy (Google/Facebook)",
      "Weekly Performance Reports",
      "Priority Support"
    ]
  }
]
  },
  {
    id: '4',
    title: 'UI/UX Design',
    description: 'User-centric designs that blend aesthetics with functionality to provide intuitive digital experiences.',
    icon: 'Palette',
    slug: 'ui-ux-design',
  packages: [
  {
    name: "Basic",
    price: "$149",
    features: [
      "UI Design for 1–2 Screens",
      "Basic Wireframe",
      "Modern & Clean Layout",
      "Mobile Responsive Design",
      "Figma Design File",
      "2 Revisions",
      "3–5 Days Delivery"
    ]
  },
  {
    name: "Premium",
    price: "$399",
    features: [
      "UI/UX Design for up to 8 Screens",
      "User Flow & Wireframing",
      "High-Fidelity UI Design",
      "Interactive Prototype (Figma)",
      "Mobile & Tablet Responsive Layout",
      "Design System Basics",
      "5 Revisions",
      "7–10 Days Delivery"
    ]
  },
  {
    name: "Unlimited",
    price: "$799+",
    features: [
      "Complete Product UI/UX Design",
      "User Research & Competitor Analysis",
      "Full Design System",
      "Unlimited Screens",
      "Advanced Interactive Prototypes",
      "Developer Handoff (Figma Specs)",
      "Usability Improvements",
      "Priority Support",
      "Unlimited Revisions"
    ]
  }
]
  },
  {
    id: '5',
    title: 'Branding & Identity',
    description: 'Crafting unique brand stories and visual identities that resonate with your target audience.',
    icon: 'Zap',
    slug: 'branding',
  packages: [
  {
    name: "Basic",
    price: "$199",
    features: [
      "2 Logo Concepts",
      "Basic Brand Color Palette",
      "Typography Selection",
      "High Resolution Logo Files",
      "PNG, JPG, SVG Formats",
      "3 Revisions",
      "3–5 Days Delivery"
    ]
  },
  {
    name: "Premium",
    price: "$499",
    features: [
      "4 Logo Concepts",
      "Complete Brand Color Palette",
      "Typography System",
      "Business Card Design",
      "Social Media Profile Graphics",
      "Brand Style Guide (Mini)",
      "Source Files Included",
      "5 Revisions",
      "7–10 Days Delivery"
    ]
  },
  {
    name: "Unlimited",
    price: "$899+",
    features: [
      "Full Brand Identity Design",
      "6+ Logo Concepts",
      "Complete Brand Guidelines",
      "Logo Variations & Icons",
      "Stationery Design (Card, Letterhead)",
      "Social Media Brand Kit",
      "Marketing Asset Templates",
      "Brand Strategy Consultation",
      "Priority Support",
      "Unlimited Revisions"
    ]
  }
]
  },
  {
    id: '6',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional performance on all devices.',
    icon: 'Smartphone',
    slug: 'mobile-apps',
   packages: [
  {
    name: "Basic",
    price: "$499",
    features: [
      "Simple Mobile App",
      "Up to 5 Screens",
      "Basic UI Design",
      "Android or iOS (Single Platform)",
      "API Integration (Basic)",
      "App Testing",
      "7–10 Days Delivery",
      "2 Revisions"
    ]
  },
  {
    name: "Premium",
    price: "$999",
    features: [
      "Custom Mobile App",
      "Up to 12 Screens",
      "Advanced UI/UX Design",
      "Android & iOS (Cross Platform)",
      "Backend Integration",
      "User Authentication System",
      "Push Notifications",
      "App Performance Optimization",
      "14–21 Days Delivery",
      "4 Revisions"
    ]
  },
  {
    name: "Unlimited",
    price: "$1999+",
    features: [
      "Full-Scale Mobile Application",
      "Unlimited Screens",
      "Custom UI/UX Design",
      "Advanced Backend System",
      "API & Third-Party Integrations",
      "Real-Time Features (Chat, Notifications)",
      "Admin Dashboard",
      "App Store & Play Store Deployment",
      "Performance Optimization",
      "Priority Support",
      "Unlimited Revisions"
    ]
  }
]
  },
  {
    id: '7',
    title: 'Logo Design',
    description: 'Professional logo designs that capture your brand’s essence and make it memorable.',
    icon: 'Image',
    slug: 'logo-design',
    packages: [
      {
        name: "Basic",
        price: "$99",
        features: [
          "1 Logo Concept",
          "PNG & JPG Files",
          "2 Revisions",
          "3–5 Days Delivery"
        ]
      },
      {
        name: "Premium",
        price: "$199",
        features: [
          "3 Logo Concepts",
          "PNG, JPG & SVG Files",
          "Brand Color Suggestions",
          "Typography Suggestions",
          "5 Revisions",
          "5–7 Days Delivery"
        ]
      },
      {
        name: "Unlimited",
        price: "$399+",
        features: [
          "5+ Logo Concepts",
          "Full Brand Color Palette",
          "Typography & Icon Set",
          "Source Files Included",
          "Unlimited Revisions",
          "Priority Support",
          "7–10 Days Delivery"
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Amazon FBA Consultation',
    description: 'Expert guidance to launch, optimize, and scale your Amazon FBA business for maximum profit.',
    icon: 'ShoppingCart',
    slug: 'amazon-fba-consultation',
    packages: [
      {
        name: "Basic",
        price: "$199",
        features: [
          "FBA Business Audit",
          "Product Selection Advice",
          "Listing Optimization Tips",
          "1 Consultation Call",
          "Email Support",
          "3–5 Days Delivery"
        ]
      },
      {
        name: "Premium",
        price: "$499",
        features: [
          "Full Product Research & Analysis",
          "Listing Optimization",
          "Pricing & Profit Strategy",
          "2–3 Consultation Calls",
          "Email Support",
          "7–10 Days Delivery"
        ]
      },
      {
        name: "Unlimited",
        price: "$999+",
        features: [
          "Comprehensive FBA Business Plan",
          "Advanced Listing & SEO Strategy",
          "Competitor Analysis",
          "Supply Chain & Inventory Guidance",
          "Unlimited Consultation Calls",
          "Priority Support",
          "14–21 Days Delivery"
        ]
      }
    ]
  },
 {
    id: '9',
    title: 'Landing Page Design',
    description: 'High-converting, visually appealing landing pages designed to capture leads and drive sales.',
    icon: 'Window',
    slug: 'landing-page',
    packages: [
      {
        name: "Basic",
        price: "$149",
        features: [
          "Single Landing Page",
          "Responsive Design (Mobile & Tablet)",
          "Basic UI Design",
          "Contact/Lead Form Integration",
          "2 Revisions",
          "3–5 Days Delivery"
        ]
      },
      {
        name: "Premium",
        price: "$349",
        features: [
          "Up to 3 Landing Pages",
          "Custom UI/UX Design",
          "Responsive & Mobile-Friendly",
          "Lead Capture & Email Integration",
          "SEO Basics",
          "5 Revisions",
          "5–7 Days Delivery"
        ]
      },
      {
        name: "Unlimited",
        price: "$699+",
        features: [
          "Unlimited Landing Pages",
          "Custom Interactive Design",
          "Advanced UI/UX & Animations",
          "Conversion Rate Optimization",
          "SEO Optimization",
          "Integration with CRM/Email Tools",
          "Priority Support",
          "Unlimited Revisions",
          "7–10 Days Delivery"
        ]
      }
    ]
  } 

];

// export const PROJECTS: Project[] = [
//   {
//     id: '1',
//     title: 'Lumina SaaS Platform',
//     category: 'Web Development',
//     image: 'https://picsum.photos/seed/lumina/800/600',
//     description: 'A comprehensive analytics dashboard for enterprise teams.',
//     client: 'Lumina Tech',
//     year: '2024'
//   },
//   {
//     id: '2',
//     title: 'EcoStore E-commerce',
//     category: 'E-commerce',
//     image: 'https://picsum.photos/seed/ecostore/800/600',
//     description: 'Sustainable fashion marketplace with integrated carbon tracking.',
//     client: 'EcoCollective',
//     year: '2023'
//   },
//   {
//     id: '3',
//     title: 'Pulse Fitness App',
//     category: 'Mobile Design',
//     image: 'https://picsum.photos/seed/pulse/800/600',
//     description: 'AI-powered personal trainer and nutrition tracker.',
//     client: 'Pulse Global',
//     year: '2024'
//   },
//   {
//     id: '4',
//     title: 'Zenith Branding',
//     category: 'Branding',
//     image: 'https://picsum.photos/seed/zenith/800/600',
//     description: 'Complete visual identity overhaul for a luxury watchmaker.',
//     client: 'Zenith Horology',
//     year: '2023'
//   }
// ];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Website Design & Development',
    category: 'Web Development',
    // image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    // image: "https://static.vecteezy.com/system/resources/previews/007/559/613/original/a-children-learning-coding-or-computer-programming-flat-illustration-coding-for-kids-basic-computer-programing-can-be-used-for-web-landing-page-social-media-promotion-etc-vector.jpg",
    image: "https://static.vecteezy.com/system/resources/previews/034/342/883/non_2x/html-css-programming-data-analysis-concept-flat-illustration-vector.jpg",
    description: 'Modern, responsive, and high-performance websites built for businesses and startups.',
    client: 'Various Clients',
    year: '2024',
    features: [
  "Responsive design for mobile, tablet, and desktop devices",
  "Fast-loading and performance optimized websites",
  "SEO-friendly structure and clean code",
  "Modern UI/UX design for better user experience",
  "Secure and scalable development with latest technologies"
]
  },
  {
    id: '2',
    title: 'Landing Page Design',
    category: 'UI/UX Design',
    // image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
    image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/04/Landing-Page-Examples.png",
    description: 'High-converting landing pages optimized for marketing campaigns and lead generation.',
    client: 'Marketing Agencies',
    year: '2024',
    features: [
  "Conversion-focused layout to maximize leads and sales",
  "Modern and visually engaging UI/UX design",
  "Mobile-first and fully responsive design",
  "Fast-loading and performance optimized pages",
  "Integration with forms, analytics, and marketing tools"
]
  },
  {
    id: '3',
    title: 'Logo Design',
    category: 'Branding',
    // image: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=800",
    // image: "https://www.designfreelogoonline.com/wp-content/uploads/2025/03/Best-AI-Logo-Makers-Where-to-Create-a-Logo-Fast-And-Easy.webp",
    image: "https://optimusclick.com.au/wp-content/uploads/2020/03/Logo-Design-OptimusClick.jpg",
    description: 'Unique and professional logo designs that represent your brand identity.',
    client: 'Startup Brands',
    year: '2024',
    features: [
  "Unique and custom logo concepts tailored to your brand",
  "Professional and modern design that reflects brand identity",
  "High-resolution files suitable for web and print",
  "Multiple file formats (PNG, SVG, AI, PDF)",
  "Scalable vector design for any size without quality loss"
]
  },
  {
    id: '4',
    title: 'Digital Marketing & SEO',
    category: 'Marketing',
    // image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    image: "https://cms-media.bartleby.com/wp-content/uploads/sites/2/2022/04/08102245/image-54.png",
    description: 'Data-driven digital marketing and SEO strategies to grow traffic and sales.',
    client: 'Online Businesses',
    year: '2024',
    features: [
  "Comprehensive SEO optimization for higher search rankings",
  "Keyword research and competitor analysis",
  "On-page and technical SEO improvements",
  "Social media and digital marketing campaign management",
  "Performance tracking with analytics and reporting"
]
  },
  {
    id: '5',
    title: 'Shopify Store Development',
    category: 'E-commerce',
    // image: "https://logo.svgcdn.com/logos/shopify.png",
    image: "https://cdn.shopify.com/s/files/1/0070/7032/files/Blog_-_1848x970_433f73d9-ad0f-46fa-8475-6fe0ec1abb74.png?format=jpg&quality=90&v=1674559633&width=1024",
    // image: "https://softpulseinfotech.com/blogs/wp-content/uploads/2022/10/Why-hire-a-Shopify-expert-1024x576.png",
    description: 'Custom Shopify store design, setup, and optimization for online businesses.',
    client: 'E-commerce Brands',
    year: '2024',
    features: [
  "Custom Shopify store design tailored to your brand",
  "Responsive and mobile-friendly ecommerce layout",
  "Secure payment gateway and checkout setup",
  "Product upload, collection setup, and store configuration",
  "Shopify app integration and performance optimization"
]
  },
  {
    id: '6',
    title: 'Amazon FBA',
    category: 'E-commerce',
    // image: "https://www.trecebits.com/wp-content/uploads/2023/02/Amazon-FBA.webp",
    // image: "https://businessinspection.com.bd/wp-content/uploads/2023/04/amazon-fba.jpg",
    image: "https://i.pinimg.com/736x/2c/d5/f0/2cd5f0b64c42a4daef66e72b168dbf6f.jpg",
    description: "Comprehensive Amazon FBA product research and market analysis to identify high-demand, profitable products and optimize your listings for maximum sales.",
    client: 'Amazon Sellers',
    year: '2024',
    features: [
  "In-depth market research to identify profitable products",
  "Competitor analysis and pricing strategy",
  "Trend analysis to spot high-demand opportunities",
  "Evaluation of product viability and sales potential",
  "Recommendations for sourcing and listing optimization"
]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2025',
    excerpt1: 'Exploring how AI and edge computing are reshaping the way we build for the web.',
    excerpt2: 'Exploring how AI and edge computing are reshaping the way we build for the web.',
    date: 'March 15, 2024',
    author: 'Alex Rivers',
    image: 'https://picsum.photos/seed/future/800/500',
    category: 'Technology',
    features: [
  "In-depth market research to identify profitable products",
  "Competitor analysis and pricing strategy",
  "Trend analysis to spot high-demand opportunities",
  "Evaluation of product viability and sales potential",
  "Recommendations for sourcing and listing optimization"
]
  },
  {
    id: '2',
    title: 'Mastering SEO: Beyond Keywords',
    excerpt1: 'Why user intent and semantic search are the new pillars of digital visibility.',
    excerpt2: 'Why user intent and semantic search are the new pillars of digital visibility.',
    date: 'March 10, 2024',
    author: 'Sarah Chen',
    image: 'https://picsum.photos/seed/seo/800/500',
    category: 'Marketing',
    features: [
  "In-depth market research to identify profitable products",
  "Competitor analysis and pricing strategy",
  "Trend analysis to spot high-demand opportunities",
  "Evaluation of product viability and sales potential",
  "Recommendations for sourcing and listing optimization"
]
  },
  {
    id: '3',
    title: 'Designing for Accessibility',
    excerpt1: 'How to create inclusive digital products that everyone can use effectively.',
    excerpt2: 'How to create inclusive digital products that everyone can use effectively.',
    date: 'March 5, 2024',
    author: 'Marcus Thorne',
    image: 'https://picsum.photos/seed/design/800/500',
    category: 'Design',
    features: [
  "In-depth market research to identify profitable products",
  "Competitor analysis and pricing strategy",
  "Trend analysis to spot high-demand opportunities",
  "Evaluation of product viability and sales potential",
  "Recommendations for sourcing and listing optimization"
]
  },
  {
    id: '4',
    title: 'People Don’t Buy Websites — They Buy Trust',
    excerpt1: 'A typical freelancer sells a website. A strong digital agency sells trust, professionalism, strategy, and brand value. When clients choose a premium agency, they are not just paying for code.',
    excerpt2: 'A typical freelancer sells a website. A strong digital agency sells trust, professionalism, strategy, and brand value. When clients choose a premium agency, they are not just paying for code.',
    date: 'May 18, 2026',
    author: 'Jewel Hasan',
    image: 'https://picsum.photos/seed/design/800/500',
    category: 'Design',
    features: [
 "Professional client communication",
  "Clean presentations and branding",
  "SEO optimization",
  "Fast support & maintenance",
  "Premium UI/UX experience",
  "Digital marketing strategy",
  "Business growth consultation",
  "Long-term reliability"
]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jonathan Wright',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'Nexus Digital transformed our online presence. Our conversion rate increased by 45% within the first three months of the new site launch.',
    avatar: 'https://i.pravatar.cc/150?u=jonathan'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'GreenLife Co.',
    content: 'The level of creativity and technical expertise the team brought to our project was exceptional. They truly understood our brand vision.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];
