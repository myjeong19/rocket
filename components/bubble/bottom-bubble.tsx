import Image from 'next/image';

interface BottomBubbleProps {
  text: string;
}

export default function BottomBubble({ text }: BottomBubbleProps) {
  return (
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] z-10 
                 xs:-bottom-4/12 xs:left-1/3 xs:-translate-x-1/2 xs:-translate-y-1/2
                 xxs:-bottom-1/3 xxs:left-1/3 xxs:-translate-x-1/3 xxs:-translate-y-1/6"
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/top-bubble.png"
          alt="header-image"
          width={215}
          height={139}
          quality={100}
          className="w-full h-full object-contain z-0"
          loading="eager"
        />
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-center text-black text-sm leading-tight line-clamp-3
                     w-full h-fit max-h-[120px] px-4 pt-5 whitespace-pre-wrap
                     overflow-hidden z-50
                     xxs:text-sm xxs:px-10 xxs:pt-5 xxs:line-clamp-2
                     xs:text-base xs:px-28 xs:pt-5"
        >
          {text}
        </p>
      </div>
    </div>
  );
}
