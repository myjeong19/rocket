interface RowCardProps {
  text: string;
  cardStyles?: string;
}

export default function RowCard({ text, cardStyles = '' }: RowCardProps) {
  return (
    <div className={`${cardStyles} w-full h-full rounded-2xl p-1`}>
      <p className="text-center text-xs">{text}</p>
      <h3 className="text-center text-base font-bold">{text}</h3>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
}
