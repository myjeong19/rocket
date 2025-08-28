import Image from 'next/image';

interface TopBubbleProps {
  text: string;
}

export default function TopBubble({ text }: TopBubbleProps) {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] z-10
                 xs:-top-1/3 xs:left-1/4 xs:-translate-x-1/3 xs:-translate-y-1/6
                 xxs:-top-1/2 xxs:left-1/3 xxs:-translate-x-1/3 xxs:-translate-y-1/3"
    >
      <div
        className="relative w-full h-full
       flex items-center justify-center"
      >
        <Image
          src="/images/bottom-bubble.png"
          alt="header-image"
          width={239}
          height={138}
          quality={100}
          className="w-full h-full object-contain z-0"
          loading="eager"
        />
        <p
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-center text-black text-sm leading-tight line-clamp-3 whitespace-pre-wrap
                     w-full h-fit max-h-[120px] px-4 pt-7 overflow-hidden z-50
                     xs:text-base xs:px-24 xs:pt-5
                     xxs:text-sm xxs:px-10 xxs:pt-7 xxs:line-clamp-2 xxs:mt-3
                     "
        >
          {text}
        </p>
      </div>
    </div>
  );
}
