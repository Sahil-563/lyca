"use client";
import React from "react";
import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    "Join Lyca Mobile": [
      "Pay as you go SIM",
      "Pay monthly SIM",
      "eSIM",
      "Free SIM",
      "Lunar New Year Offer",
      "Student discounts",
      "West Ham Plan",
      "Registration",
    ],
    "Quick links": [
      "Activate SIM",
      "Rates",
      "Quick top up",
      "EU Roaming",
      "Login to My Lyca Mobile",
      "Coverage checker",
      "Bring your own number",
      "3G switch off",
    ],
    "Help & support": [
      "FAQs",
      "Contact us",
      "Security",
      "Privacy notice",
      "Code of practice",
      "Cookie policy",
      "Accessibility",
    ],
    "Lyca Mobile UK": [
      "About us",
      "Blog",
      "Privacy policy",
      "Terms and conditions",
      "Modern slavery",
      "International Airtime Transfer",
      "Get even more",
    ],
  };

  const imageData = [
    {
      src: "/icons/googleplay_1.webp",
      alt: "Get it on Google Play",
      href: "#",
    },
    {
      src: "/icons/apple_0.webp",
      alt: "Download on App Store",
      href: "#",
    },
    {
      src: "/icons/Store.webp",
      alt: "Store",
      href: "#",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#21254f] text-white pt-10 pb-8">
      <div className="container">
        <div className="flex justify-between max-lg:flex-wrap max-sm:grid gap-8 mb-8 pb-2 px-4 max-w-screen-xl w-full mx-auto">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4 text-lg text-white">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li
                    className="leading-loose tracking-[-0.5px] text-white text-base"
                    key={link}
                  >
                    <Link href="#" className="text-sm hover:text-gray-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold mb-4 text-lg text-white">
              Lyca on the go
            </h3>
            <div className="space-y-5">
              {imageData.map(({ src, alt, href }, index) => (
                <Link href={href} key={index} className="block">
                  <Image
                    src={src}
                    alt={alt}
                    width={135}
                    height={40}
                    className="mb-2"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="bg-[#bec6d5] color-[#bec6d5]"></hr>
        <div className="mt-8 pt-2 flex flex-col md:flex-row justify-between items-center px-4 max-w-7xl w-full mx-auto">
          <div className="mb-4 md:mb-0">
            <Image
              src="/icons/logo_new1.webp"
              alt="Lyca Mobile"
              width={93}
              height={36}
              className="mb-2"
            />
          </div>
          <div>
            <p className="text-base text-white">
              © 2024 Lyca Mobile. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
