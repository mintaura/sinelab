import Link from "next/link";
import { footerLinks, socialLinks } from "./Helper";
import Paragraph from "./Paragraph";
import { DevHubLogo } from "./Icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="section-x-gap relative bg-lily-white pt-[170px] custom-sm:pt-[180px] sm:pt-[210px] md:pt-[240px] lg:pt-[265px]">
      <div className="custom-container relative z-20">
        <div className="flex max-lg:flex-col justify-between gap-8 mb-8 sm:mb-12 md:mb-14 lg:mb-20">
          <div className="max-w-[850px] lg:max-w-[325px] w-full">
            <DevHubLogo className="cursor-pointer" />
            <Paragraph className="mt-3.5 text-start">
              DevHub Pro Platform simplifies team collaboration and project
              management with powerful tools, seamless integrations, and
              real‑time updates to boost your productivity.
            </Paragraph>
          </div>
          <div className="flex max-w-[500px] md:max-w-[650px] max-sm:flex-wrap lg:max-w-[461px] w-full justify-between gap-10">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="font-bold text-jaguar-black text-nowrap text-lg !leading-[140%] mb-3.5">
                  {section.title}
                </h3>
                <ul className="space-y-3.5">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        data-text={link.label}
                        href={link.href}
                        className="footer-links duration-300 transition-all font-normal text-base !leading-[150%] tracking-normal !text-davy-gray"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-gradient-line w-full h-0.5"></div>
        <div className="pt-6 pb-5 flex max-md:flex-col items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} DevHub Pro Platform All rights reserved
          </p>{" "}
          <div className="flex gap-3 xs:gap-4 max-xs:px-8 custom-sm:gap-5 flex-wrap max-md:justify-center items-center">
            {socialLinks.map((social, idx) => (
              <Link
                target="_blank"
                key={idx}
                href={social.href}
                className="duration-300 transition-all hover:-translate-y-1.5"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/webp/curve-layer.webp"
        alt="layer"
        width={1502}
        height={329}
        className="w-full h-[200px] z-0 sm:h-[329px] lg:object-cover 2xl:object-tops absolute -top-16 sm:-top-[88px] left-1/2 -translate-x-1/2"
        unoptimized
      />
    </footer>
  );
};

export default Footer;
