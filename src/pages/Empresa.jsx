import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

const Empresa = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars = {};

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

        if (item.transform) vars.transform = item.transform;

        tl.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef} className="py-24 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Empresas</h2>

      <div className="wrapper relative mb-20">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={`${item.id} absolute`}
            alt={item.alt || `Performance Image #${index + 1}`}
          />
        ))}
      </div>
      <div className="content text-center max-w-3xl mx-auto mb-20">
        <p className="text-xl leading-relaxed">
          Byjen!{" "}
          <span className="text-purple-300 font-semibold">
            Futuro y tecnología
          </span>{" "}
          accesible para todos!
        </p>
        <p className="mt-4 opacity-60">
          Mi empresa se centró en impulsar marcas, creadores y negocios a través de soluciones inteligentes en marketing y tecnología digital.
        </p>
      </div>

      {/* Mini Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
        {["Marketing", "Influencers", "Branding", "Tecnología"].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition"
          >
            <p className="text-center text-xl font-medium">{item}</p>
          </div>
        ))}
      </div>

      {/* Sessão adicional pra “encher linguiça” */}
      <div className="max-w-4xl mx-auto text-center opacity-80">
        <h3 className="text-2xl font-semibold mb-4">Soluciones a medida</h3>
        <p className="mb-4">
          Cada asociación se construye entendiendo cuál es realmente su marca
          necesidad — ya sea alcance, estética, identidad o automatización digital.
        </p>
        <p>
          Nuestro trabajo une creatividad, análisis y tecnología para ofrecer
          resultados consistentes y crecer contigo.
        </p>
      </div>
    </section>
  );
};

export default Empresa;
