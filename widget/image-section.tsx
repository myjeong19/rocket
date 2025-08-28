import BubbleImage from '@/components/bubble';
import Image from 'next/image';

export default function ImageSection() {
  return (
    <section>
      <BubbleImage
        position="bottom"
        src="/images/top.png"
        alt="이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요."
        text="이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요."
      />
      <article className="mt-28 mb-14">
        <Image
          src="/images/middle.png"
          alt="header-image"
          width={375}
          height={652}
          quality={100}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </article>
      <BubbleImage
        position="top"
        src="/images/bottom.png"
        alt="제가 oo님의 사주를 보기 쉽게 표로 정리했어요"
        text="제가 oo님의 사주를 보기 쉽게 표로 정리했어요"
      />
    </section>
  );
}
