import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------- Servis (orbit) ikonları ---------- */

export function PlaneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 3.5 10.8 13.2" />
      <path d="M20.5 3.5 14.3 20.5l-3.5-7.3-7.3-3.5 17-6.2Z" />
    </svg>
  );
}

export function HotelIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20.5V8.2l8-4.7 8 4.7v12.3" />
      <path d="M2.8 20.5h18.4" />
      <path d="M9.6 20.5v-4.3a2.4 2.4 0 0 1 4.8 0v4.3" />
      <path d="M9.4 10.6h1.4M13.2 10.6h1.4" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.2" cy="8.4" r="3.1" />
      <path d="M3.6 19.4c0-2.8 2.5-4.8 5.6-4.8s5.6 2 5.6 4.8" />
      <path d="M16.2 5.7a3.1 3.1 0 0 1 0 5.8" />
      <path d="M17.6 14.9c1.8.6 2.9 2.2 2.9 4.1" />
    </svg>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.2" r="3.4" />
      <path d="M5.4 19.8c0-3.2 2.9-5.4 6.6-5.4s6.6 2.2 6.6 5.4" />
    </svg>
  );
}

export function DiamondIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3.2 8.4 6.1-8.4 11.5L3.6 9.3 12 3.2Z" />
      <path d="M3.6 9.3h16.8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 5 6v5.6c0 4.2 2.8 7.7 7 9.2 4.2-1.5 7-5 7-9.2V6l-7-2.8Z" />
    </svg>
  );
}

/* ---------- Arayüz ikonları ---------- */

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.4v2.2M12 19.4v2.2M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.4 13.9A8.6 8.6 0 0 1 10.1 3.6a8.6 8.6 0 1 0 10.3 10.3Z" />
    </svg>
  );
}

/* ---------- Sosyal medya ---------- */

/* ---------- Diş tedavisi ikonları ---------- */

export function ImplantIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      {/* kron */}
      <path d="M8.3 3.9c1.1-.6 2.4-.8 3.7-.4 1.3-.4 2.6-.2 3.7.4 1 .6 1.4 1.7 1.1 2.7-.2.9-.7 1.6-1.4 2H8.6c-.7-.4-1.2-1.1-1.4-2-.3-1 .1-2.1 1.1-2.7Z" />
      {/* vida dişleri */}
      <path d="M9.7 11.3h4.6M10 13.6h4M10.4 15.9h3.2M10.8 18.2h2.4" />
      <path d="M11.2 20.4h1.6" />
    </svg>
  );
}

export function SmileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9.2h16" />
      <path d="M4.4 9.2c.5 4.8 3.6 8.1 7.6 8.1s7.1-3.3 7.6-8.1" />
      <path d="M8.6 9.2v4.7M12 9.2v5.3M15.4 9.2v4.7" />
    </svg>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.6 12.2c0-3.6 2.9-6.5 6.4-6.5s6.4 2.9 6.4 6.5c0 2-.3 3.6-.8 5.1-.4 1.2-1.9 1.4-2.5.3l-1-1.7c-.9-1.6-3.2-1.6-4.1 0l-1 1.7c-.6 1.1-2.1.9-2.5-.3-.5-1.5-.9-3.1-.9-5.1Z" />
      {/* kaplama katmanı — dişin üst hattını izleyen iç yay */}
      <path d="M8.1 12.4c0-2.2 1.7-3.9 3.9-3.9s3.9 1.7 3.9 3.9" />
    </svg>
  );
}

export function AllOnFourIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      {/* çene kemeri */}
      <path d="M4.2 7.8c0 5.6 3.5 9.6 7.8 9.6s7.8-4 7.8-9.6" />
      {/* dört implant */}
      <circle cx="7" cy="11.4" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="10.3" cy="14.1" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="13.7" cy="14.1" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="17" cy="11.4" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------- İletişim ikonları ---------- */

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 7.3 5.2a2 2 0 0 0 2.4 0L20.5 7" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.3 3.8 9.8 7a1.6 1.6 0 0 1-.4 1.9l-1.2 1a12 12 0 0 0 5.9 5.9l1-1.2a1.6 1.6 0 0 1 1.9-.4l3.2 1.5c.6.3.9 1 .7 1.6l-.6 2a1.8 1.8 0 0 1-1.9 1.3A16.8 16.8 0 0 1 3.4 5.5a1.8 1.8 0 0 1 1.3-1.9l2-.6c.6-.2 1.3.1 1.6.8Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 6.9h.01" strokeWidth={2} />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.5-4.05 4.2v2.2H7.5V13h2.7v8h3.3Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 8.2a2.5 2.5 0 0 0-1.75-1.77C18.3 6 12 6 12 6s-6.3 0-7.85.43A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.75 1.77C5.7 18 12 18 12 18s6.3 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8ZM10.2 14.6V9.4l5 2.6-5 2.6Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 20.5h3.4V9.2H3.3v11.3ZM9.3 9.2h3.26v1.55h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.07 2.27 4.07 5.21v6.31h-3.4v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.3V9.2Z" />
    </svg>
  );
}

/* ---------- İsimle erişim ---------- */

export const treatmentIcons = {
  implant: ImplantIcon,
  smile: SmileIcon,
  crown: CrownIcon,
  allon4: AllOnFourIcon,
} as const;

export const serviceIcons = {
  plane: PlaneIcon,
  hotel: HotelIcon,
  people: PeopleIcon,
  person: PersonIcon,
  diamond: DiamondIcon,
  shield: ShieldIcon,
} as const;
