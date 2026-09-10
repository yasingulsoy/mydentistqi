import { Logo } from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./icons";
import Link from "next/link";
import { brand, sectionHref, type Dict } from "@/data/content";
import { legalPath } from "@/data/legal";

const socials = [
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "YouTube", Icon: YoutubeIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedinIcon, href: "#" },
];

const headingClass = "text-[13px] font-semibold uppercase tracking-[0.08em] text-white";
const linkClass = "text-[14px] leading-[1.5] text-white/60 transition-colors hover:text-white";

export function Footer({ dict }: { dict: Dict }) {
  const t = dict.footer;

  return (
    <footer id="iletisim" className="bg-navy-900">
      <div className="section-x py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-8">
          {/* Marka */}
          <div className="sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-[260px] text-[14px] leading-[1.6] text-white/60">{t.description}</p>
            <ul className="mt-7 flex gap-3">
              {socials.map(({ label, Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link sütunları */}
          {t.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className={headingClass}>{column.title}</h2>
              <ul className="mt-5 flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={sectionHref(dict.locale, link.href)} className={linkClass}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* İletişim */}
          <div>
            <h2 className={headingClass}>{t.contactTitle}</h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {brand.phones.map((phone, i) => (
                <li key={`${phone}-${i}`}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className={linkClass}>{phone}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${brand.email}`} className={linkClass}>{brand.email}</a>
              </li>
              <li className="text-[14px] leading-[1.5] text-white/60">
                <address className="not-italic">
                  {t.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {brand.name}. {t.legal}</p>
            <div className="flex gap-8">
              <Link href={legalPath(dict.locale, "privacy")} className="transition-colors hover:text-white">
                {t.privacy}
              </Link>
              <Link href={legalPath(dict.locale, "terms")} className="transition-colors hover:text-white">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
