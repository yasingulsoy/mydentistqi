import { SectionHeading } from "./SectionHeading";
import { ArrowRightIcon, serviceIcons } from "./icons";
import { services } from "@/data/site";

/** Altıgen yerleşim: üstten başlayıp saat yönünde 60'ar derece. */
const ANGLES = [90, 30, 330, 270, 210, 150];

/** 560px'lik kare kutuya göre yüzdeler (yarıçap 214). */
const BOX = 560;
const RADIUS = 214;

function nodePosition(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = BOX / 2 + RADIUS * Math.cos(rad);
  const y = BOX / 2 - RADIUS * Math.sin(rad);
  return { left: `${(x / BOX) * 100}%`, top: `${(y / BOX) * 100}%` };
}

export function ServiceOrbit() {
  return (
    <section className="bg-[linear-gradient(150deg,#2b3f52_0%,#33475b_50%,#3a5771_100%)] py-16 sm:py-24 lg:py-[100px]">
      <div className="section-x lg:grid lg:grid-cols-[minmax(0,1fr)_630px] lg:items-center lg:gap-10">
        <div>
          <SectionHeading
            eyebrow="TAM HİZMET DESTEĞİ"
            title="Seyahatinizin Her Adımında Yanınızdayız"
            description="Tedaviniz boyunca ihtiyaç duyacağınız tüm hizmetleri tek noktadan sunuyoruz. Konforunuz ve güvenliğiniz bizim önceliğimizdir."
            tone="light"
            titleClassName="lg:max-w-[400px]"
            descClassName="lg:max-w-[430px]"
          />
          <a
            href="#tedaviler"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-4 text-[15px] text-white transition-colors hover:bg-white/10"
          >
            Hizmetlerimizi Keşfedin
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Yörünge diyagramı */}
        <div className="mt-14 flex justify-center lg:mt-0">
          <div className="relative aspect-square w-full max-w-[630px]">
            {/* Kesikli yörüngeler */}
            <span className="absolute left-1/2 top-1/2 h-[76.43%] w-[76.43%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
            <span className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />

            {/* Merkez küre */}
            <span className="absolute left-1/2 top-1/2 h-[17.5%] w-[17.5%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,#6fa8d8,#3b6d9e_70%)] shadow-[0_0_50px_-10px_rgba(90,150,205,0.8)]" />

            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              const pos = nodePosition(ANGLES[i]);
              return (
                <div
                  key={service.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={pos}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="absolute left-1/2 top-full mt-2 w-[150px] -translate-x-1/2 whitespace-pre-line text-center text-[11px] leading-[1.35] text-white sm:text-[13px]">
                    {service.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
