import { format } from 'date-fns';
import Image from 'next/image';

export default function SajuHeader() {
  const date = format(new Date(), 'yyyy년 MM월 dd일 HH:mm');

  return (
    <header className="py-4 px-5 relative ">
      <Image
        src="/images/left-cloud.png"
        alt="header"
        width={76}
        height={58}
        className="absolute top-1/2 left-2 -translate-y-1/2"
      />
      <Image
        src="/images/right-cloud.png"
        alt="header"
        width={76}
        height={58}
        className="absolute top-1/5 right-2 -translate-y-1/3"
      />
      <p className="text-xl">OO님의 사주</p>
      <strong className="text-2xl">{date}</strong>
    </header>
  );
}
