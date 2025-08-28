export const getCardStyles = (text: string) => {
  switch (text) {
    case '임':
    case '계':
    case '해':
    case '경':
      return 'bg-neutral-800 text-white';

    case '인':
      return 'bg-teal-500 text-white';

    case '유':
      return 'border-2 border-neutral-800 text-black';

    case '정':
    case '사':
      return 'bg-red-500 text-white';
    default:
      return 'bg-white';
  }
};
