type StickyContactBarProps = {
  phoneHref: string;
  phoneLabel: string;
  whatsappHref: string;
};

export default function StickyContactBar({
  phoneHref,
  phoneLabel,
  whatsappHref,
}: StickyContactBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b0f14]/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
        <a
          href={phoneHref}
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#3ac6cd] text-sm font-semibold text-[#061014] transition hover:bg-[#4ad3d8]"
        >
          Anrufen
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 flex-1 items-center justify-center rounded-full border border-[#3ac6cd]/40 bg-[#0c1419] text-sm font-semibold text-white transition hover:border-[#3ac6cd]/70 hover:bg-[#0f1a20]"
        >
          WhatsApp
        </a>
      </div>
      <p className="px-4 pb-3 text-center text-[11px] text-white/50">
        {phoneLabel}
      </p>
    </div>
  );
}
