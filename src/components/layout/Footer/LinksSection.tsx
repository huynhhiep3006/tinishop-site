import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ACCOUNT_URL } from '@/lib/constants';
const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about",
        url: "/About",
      },
      {
        id: 12,
        label: "features",
        url: "/Features",
      },
      {
        id: 13,
        label: "Mission",
        url: "/Mission",
      },
      
    ],
  },
  {
    id: 2,
    title: "help",
    children: [
      {
        id: 21,
        label: "Customer Support",
        url: "/CustomerSupport",
      },
      {
        id: 22,
        label: "Downloads & Access",
        url: "DownloadsAccess",
      },
      {
        id: 23,
        label: "Shipping & Delivery",
        url: "ShippingDelivery",
      },
      {
        id: 24,
        label: "Payment Methods",
        url: "HelpPayment",
      },
    ],
  },
  {
    id: 3,
    title: "faq",
    children: [
      {
        id: 31,
        label: "Digital Downloads",
        url: "DigitalDownloads",
      },
      {
        id: 32,
        label: "Printing",
        url: "#",
      },
      {
        id: 33,
        label: "Orders & Payments",
        url: "#",
      },
      {
        id: 34,
        label: "Technical & Apps",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "resources",
    children: [
      {
        id: 41,
        label: "Free eBooks",
        url: "#",
      },
      {
        id: 42,
        label: "development tutorial",
        url: "#",
      },
      {
        id: 43,
        label: "How to - Blog",
        url: "#",
      },
      {
        id: 44,
        label: "youtube playlist",
        url: "#",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
