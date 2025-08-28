import Image from 'next/image';
import Bubble from './bubble';

interface BubbleImageProps {
  src: string;
  alt: string;
  text: string;
  position: 'top' | 'bottom';
}

export default function BubbleImage({ src, alt, text, position }: BubbleImageProps) {
  return (
    <article className="w-full h-full max-h-[752px] relative">
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          width={375}
          height={652}
          quality={100}
          className="w-full h-full max-h-[652px] object-cover "
          loading="eager"
        />
        <div className="absolute z-10 bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
      </div>
      <Bubble text={text} position={position} />
    </article>
  );
}
