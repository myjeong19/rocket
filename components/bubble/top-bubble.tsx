import Image from 'next/image';

interface TopBubbleProps {
  text: string;
}

export default function TopBubble({ text }: TopBubbleProps) {
  return (
    <div
      className="absolute xs:-top-1/3 xs:left-1/4 xs:-translate-x-1/3 xs:-translate-y-1/6 w-full h-[200px] z-10 
xxs:-top-1/2 xxs:left-1/3 xxs:-translate-x-1/3 xxs:-translate-y-1/3
"
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
          className="w-full h-full object-contain"
          loading="eager"
        />
        <div
          className="absolute xs:top-1/3 xs:left-1/2 xs:-translate-x-1/2 xs:-translate-y-1/2
      xxs:top-1/3 xxs:left-1/2 xxs:-translate-x-1/2 xxs:-translate-y-1/3
      text-center text-black  xxs:text-sm sm:text-base leading-tight line-clamp-3 whitespace-pre-wrap
      w-full h-fit  max-h-[90px] xxs:px-10 xs:px-24 sm:px-36 xxs:pt-7 xs:pt-10
      overflow-hidden  z-30
      "
        >
          <p className="w-full h-full"> {text}</p>
        </div>
      </div>
    </div>
  );
}
