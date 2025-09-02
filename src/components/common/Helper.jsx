const {
  Facebook,
  Twitter,
  Telegram,
  Youtube,
  Instagram,
  Linkedin,
  TikTok,
  BlueAmazonIcon,
  BlueKalaIcon,
  BlueNvidiaIcon,
  BlueBenrinerIcon,
  OpenBook,
  OnBulb,
  Rating,
  Plugin,
  Updates,
  Extension,
  DashboardIcon,
  DeliveryIcon,
  DownloadIcon,
  LicenseIcon,
  LogoutIcon,
  MobileIcon,
  OrderIcon,
  SubscriptionIcon,
  SupportIcon,
} = require("./Icons");

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Products", href: "#" },
      { label: "Services", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Support Links",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Log In", href: "#" },
      { label: "Register", href: "#" },
    ],
  },
];

export const socialLinks = [
  { icon: <Facebook />, href: "#" },
  { icon: <Twitter />, href: "#" },
  { icon: <Telegram />, href: "#" },
  { icon: <Youtube />, href: "#" },
  { icon: <Instagram />, href: "#" },
  { icon: <Linkedin />, href: "#" },
  { icon: <TikTok />, href: "#" },
];
export const partnersSliderData = [
  <BlueAmazonIcon className="min-h-[70px] min-w-[70px]" />,
  <BlueNvidiaIcon className="min-h-[100px] min-w-[100px]" />,
  <BlueBenrinerIcon className="min-h-[70px] min-w-[70px]" />,
  <BlueKalaIcon className="min-h-[70px] min-w-[70px]" />,
];

export const reviewSliderData = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    name: "James Elijah",
    role: "CEO Design",
    img: "/assets/images/webp/james.webp",
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    name: "Aria Abigail",
    role: "CEO Design",
    img: "/assets/images/webp/aria.webp",
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    name: "Mia Evelyn",
    role: "CEO Design",
    img: "/assets/images/webp/mia.webp",
  },
];

export const servicesData = [
  {
    icon: <OpenBook className="w-8 h-8" />,
    title: "We Are Open Source",
    desc: "Accessible, transparent, for everyone.",
  },
  {
    icon: <OnBulb className="w-8 h-8" />,
    title: "Problem Solvers",
    desc: "Innovative solutions for challenges.",
  },
  {
    icon: <Rating className="w-8 h-8" />,
    title: "Highly-Rated Support",
    desc: "Always here to help you",
  },
  {
    icon: <Plugin className="w-8 h-8" />,
    title: "Feature-Rich Free & Pro Plugins",
    desc: "Powerful tools for every need.",
  },
  {
    icon: <Updates className="w-8 h-8" />,
    title: "Regular Updates & Bug Fixes",
    desc: "Reliable performance, always improving.",
  },
  {
    icon: <Extension className="w-8 h-8" />,
    title: "Extensions To Step-Up Your Game",
    desc: "Boost functionality with add-ons.",
  },
];
export const productServicesData = [
  {
    icon: <OpenBook className="w-8 h-8" />,
    title: "Vendor Mangement",
    desc: "Complete  Vendor registration and Management system",
  },
  {
    icon: <OnBulb className="w-8 h-8" />,
    title: "Commission System",
    desc: "Flexible commission structures and automatic payout",
  },
  {
    icon: <Rating className="w-8 h-8" />,
    title: "WP ERP",
    desc: "Detailed reporting for vendors and administrators ",
  },
  {
    icon: <Plugin className="w-8 h-8" />,
    title: "Coversion Tracking",
    desc: "Advanced Product and inventory management tools",
  },
  {
    icon: <Updates className="w-8 h-8" />,
    title: "Review & Rating",
    desc: "Product and vendor feedback system.",
  },
  {
    icon: <Extension className="w-8 h-8" />,
    title: "Tax Management",
    desc: "Automatic tax calculation tools.",
  },
];
export const productData = [
  {
    img: "/assets/images/svg/wp.svg",
    title: "WP User Frontend",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/dokan.svg",
    title: "Dokan",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/wp-project.svg",
    title: "WP Project Manager",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/wp-erp.svg",
    title: "WP ERP",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/appsero.svg",
    title: "Appsero",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/conversion.svg",
    title: "Coversion Tracking",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/we-mail.svg",
    title: "WeMail",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/we-docs.svg",
    title: "weDOCS",
    desc: "Branded apparels, shoes & bags.",
  },
  {
    img: "/assets/images/svg/fly-wp.svg",
    title: "FLY Wp",
    desc: "Branded apparels, shoes & bags",
  },
  {
    img: "/assets/images/svg/inbox-wp.svg",
    title: "Inbox Wp",
    desc: "Branded apparels, shoes & bags",
  },
];
export const partnersLogoSliderData = [
  "/assets/images/svg/slider-logo-1.svg",
  "/assets/images/svg/slider-logo-2.svg",
  "/assets/images/svg/slider-logo-3.svg",
  "/assets/images/svg/slider-logo-4.svg",
  "/assets/images/svg/slider-logo-5.svg",
  "/assets/images/svg/slider-logo-6.svg",
  "/assets/images/svg/slider-logo-7.svg",
  "/assets/images/svg/slider-logo-8.svg",
  "/assets/images/svg/slider-logo-9.svg",
];

export const navLinks = [
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const dashboardProducts = [
  { name: "Dokan", logo: "/assets/images/svg/product-dokan.svg" },
  { name: "WP User Frontend", logo: "/assets/images/svg/product-wp-user.svg" },
  {
    name: "WP Project Manager",
    logo: "/assets/images/svg/product-wp-project.svg",
  },
  { name: "WP ERP", logo: "/assets/images/svg/product-wp-erp.svg" },
  { name: "Appsero", logo: "/assets/images/svg/product-appsero.svg" },
  {
    name: "Coversion Tracking",
    logo: "/assets/images/svg/product-conversion.svg",
  },
  { name: "WeMail", logo: "/assets/images/svg/product-we-mail.svg" },
  { name: "Inbox Wp", logo: "/assets/images/svg/product-inbox-wp.svg" },
  { name: "weDOCS", logo: "/assets/images/svg/product-we-docs.svg" },
  { name: "FLY Wp", logo: "/assets/images/svg/product-fly-wp.svg" },
];

export const profileMenuItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_251)]",
      bg: "!fill-white",
    },
  },
  {
    name: "Orders",
    icon: OrderIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_254)]",
      bg: "!fill-white",
    },
  },
  {
    name: "Subscriptions",
    icon: SubscriptionIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_257)]",
      bg: "!fill-white",
    },
  },
  {
    name: "Downloads",
    icon: DownloadIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_260)] stroke-[url(#paint0_linear_142_260)]",
      bg: "!fill-white",
    },
  },
  {
    name: "My Licenses",
    icon: LicenseIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_263)]",
      bg: "!fill-white",
    },
  },
  {
    name: "Support",
    icon: SupportIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_266)]",
      bg: "!fill-white",
    },
  },
  {
    name: "Mobile App",
    icon: MobileIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_269)]",
      bg: "!fill-white",
    },
  },
  {
    name: "Delivery Driver App",
    icon: DeliveryIcon,
    activeStyles: {
      path: "fill-[url(#paint0_linear_142_272)]",
      bg: "!fill-white",
    },
  },
];

export const cardOnePoints = [
  "Multi-Vendor Registration & Approval",
  "Commission Management System",
  "Review And Rating System",
  "Tax Calculation And Management",
  "Mobile Responsive Design",
];

export const cardTwoPoints = [
  "Advanced Analytics Dashboard",
  "Automated Payout System",
  "Inventory & Stock Management",
  "Coupon & Discount Engine",
  "Customer Support Integration",
];

export const animatedHeroFloatingItems = [
    {
      src: "/assets/images/svg/hero-icon-1.svg",
      className:
        "absolute top-[20%] xs:top-[15%] left-[10%] xs:left-[15%] custom-sm:top-[15%] custom-sm:left-[20%] sm:left-[12%]",
      bgColor: "bg-teal-blue",
      padding: "p-3 custom-sm:p-3.5 sm:p-4",
      iconSize: "w-4 h-5 custom-sm:w-5 sm:w-6 custom-sm:h-6 sm:h-7",
    },
    {
      src: "/assets/images/svg/hero-icon-2.svg",
      className:
        "absolute top-[19%] xs:top-[13%] left-[33%] xs:left-[37%] custom-sm:top-[10%] custom-sm:left-1/2 transform custom-sm:-translate-x-1/2 rotate-[20deg]",
      bgColor: "bg-teal-blue",
      padding: "p-2.5 custom-sm:p-3",
      iconSize: "w-6 h-6 custom-sm:w-7 sm:w-9 custom-sm:h-7 sm:h-9",
    },
    {
      src: "/assets/images/svg/hero-icon-3.svg",
      className:
        "absolute top-[15%] xs:top-[11%] right-[25%] custom-sm:top-[5%] sm:right-[12%] rotate-30",
      bgColor: "bg-pale-sky",
      padding: "px-3 sm:px-4 py-2.5 sm:py-5",
      iconSize: "w-6 h-8 sm:w-12 sm:h-9",
    },
    {
      src: "/assets/images/svg/hero-icon-4.svg",
      className:
        "absolute right-[15%] custom-sm:right-[10%] sm:right-[6%] transform top-1/3 -translate-y-1/3 rotate-30",
      bgColor: "bg-teal-blue",
      padding: "p-2.5 sm:p-3",
      iconSize: "w-5 h-5 custom-sm:w-[25px] custom-sm:h-7",
    },
    {
      src: "/assets/images/svg/hero-icon-5.svg",
      className:
        "absolute right-[14%] transform custom-sm:right-[20%] bottom-[15%] custom-sm:bottom-1/7 custom-sm:-translate-y-1/7 sm:bottom-1/6 sm:-translate-y-1/6 rotate-[20deg]",
      bgColor: "bg-bubble-gum",
      padding: "px-3.5 sm:px-[18px] py-2.5 sm:py-3.5",
      iconSize: "w-5 h-6 sm:w-[25px] sm:h-[30px]",
    },
    {
      src: "/assets/images/svg/hero-icon-6.svg",
      className:
        "absolute bottom-[8%] xs:bottom-[5%] custom-sm:bottom-[2%] left-1/2 -translate-x-1/2 -rotate-30",
      bgColor: "bg-teal-blue",
      padding: "py-3.5 px-2 sm:py-5 sm:px-3.5",
      iconSize: "w-[30px] h-5 sm:w-[50px] sm:h-10",
    },
    {
      src: "/assets/images/svg/hero-icon-7.svg",
      className:
        "absolute bottom-[20%] xs:bottom-[18%] custom-sm:bottom-[18%] left-1/4 -translate-x-1/4 rotate-[20deg]",
      bgColor: "bg-teal-blue",
      padding: "p-2.5",
      iconSize: "w-6 h-6 sm:w-7 sm:h-7",
    },
    {
      src: "/assets/images/svg/hero-icon-8.svg",
      className:
        "absolute top-1/2 -translate-y-1/2 left-[2%] xs:left-[3%] custom-sm:left-[10%] sm:left-[1%] -rotate-30",
      padding: "p-2.5 custom-sm:p-3 sm:p-5",
      iconSize: "w-7 h-7 sm:w-10 sm:h-10",
      bgColor: "bg-teal-blue",
    },
  ];
