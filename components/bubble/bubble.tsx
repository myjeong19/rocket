import BottomBubble from './bottom-bubble';
import TopBubble from './top-bubble';

interface BubbleProps {
  position: 'top' | 'bottom';
  text: string;
}

export default function Bubble({ position, text }: BubbleProps) {
  switch (position) {
    case 'top':
      return <TopBubble text={text} />;

    case 'bottom':
      return <BottomBubble text={text} />;
  }
}
