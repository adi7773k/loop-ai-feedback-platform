"use client";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "@/data/contactData";

const icons = [
  Linkedin,
  Github,
  Twitter,
  Instagram,
];

export default function SocialLinks() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Follow Us
      </h2>

      <div className="space-y-4">

        {socialLinks.map((item, index) => {

          const Icon = icons[index];

          return (

            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-indigo-500"
            >

              <Icon
                size={24}
                className="text-indigo-600"
              />

              <span>{item.name}</span>

            </a>

          );

        })}

      </div>

    </div>
  );
}