import Image from 'next/image';

interface BottomBubbleProps {
  text: string;
}

export default function BottomBubble({ text }: BottomBubbleProps) {
  return (
    <div
      className="absolute xs:-bottom-4/12 xs:left-1/3 xs:-translate-x-1/2 xs:-translate-y-1/2 w-full h-[200px] z-10 
xxs:-bottom-1/3 xxs:left-1/3 xxs:-translate-x-1/3 xxs:-translate-y-1/6

"
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/top-bubble.png"
          alt="header-image"
          width={215}
          height={139}
          quality={100}
          className="w-full h-full object-contain"
          loading="eager"
        />
        <div
          className="absolute xs:top-1/2 xs:left-1/2 transform xs:-translate-x-1/2 xs:-translate-y-1/2
      xxs:top-1/2 xxs:left-1/2 xxs:-translate-x-1/2 xxs:-translate-y-1/2
      text-center text-black xxs:text-sm xs:text-base leading-tight line-clamp-3
      w-full h-fit  max-h-[90px] xxs:px-10 xs:px-26 sm:px-36 pt-5 whitespace-pre-wrap
      overflow-hidden z-30
      "
        >
          <p className="w-full h-full"> {text}</p>
        </div>
      </div>
    </div>
  );
}
