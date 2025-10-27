
'use client';

export default function LogoCarousel() {
  return (
    <>
      <style>
        {`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 50s linear infinite;
        }
        .marquee-track-right {
          animation: marquee-right 50s linear infinite;
        }
      `}
      </style>

      <div className="py-7 flex flex-col gap-3">
        <div className="relative overflow-hidden">
          <div className="marquee-track-left inline-flex gap-8 whitespace-nowrap opacity-15 text-[40px] font-extrabold tracking-[0.12em] select-none">
            <span>GOOGLE CALENDAR</span>
            <span className="opacity-60">•</span>
            <span>JUSBRASIL</span>
            <span className="opacity-60">•</span>
            <span>CRM INTEGRADO</span>
            <span className="opacity-60">•</span>
            <span>CHATBOT</span>
            <span className="opacity-60">•</span>
            <span>AGENTE CONVERSACIONAL</span>
            <span className="opacity-60">•</span>
            <span>GOOGLE CALENDAR</span>
            <span className="opacity-60">•</span>
            <span>JUSBRASIL</span>
            <span className="opacity-60">•</span>
            <span>CRM INTEGRADO</span>
            <span className="opacity-60">•</span>
            <span>CHATBOT</span>
            <span className="opacity-60">•</span>
            <span>AGENTE CONVERSACIONAL</span>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="marquee-track-right inline-flex gap-8 whitespace-nowrap opacity-15 text-[40px] font-extrabold tracking-[0.12em] select-none">
            <span>GOOGLE CALENDAR</span>
            <span className="opacity-60">•</span>
            <span>JUSBRASIL</span>
            <span className="opacity-60">•</span>
            <span>CRM INTEGRADO</span>
            <span className="opacity-60">•</span>
            <span>CHATBOT</span>
            <span className="opacity-60">•</span>
            <span>AGENTE CONVERSACIONAL</span>
            <span className="opacity-60">•</span>
            <span>GOOGLE CALENDAR</span>
            <span className="opacity-60">•</span>
            <span>JUSBRASIL</span>
            <span className="opacity-60">•</span>
            <span>CRM INTEGRADO</span>
            <span className="opacity-60">•</span>
            <span>CHATBOT</span>
            <span className="opacity-60">•</span>
            <span>AGENTE CONVERSACIONAL</span>
          </div>
        </div>
      </div>
    </>
  );
}
