import type { RowCellProps } from './saju-table';

export default function RowCell({ row }: RowCellProps) {
  return (
    <div className="flex flex-col w-full h-full text-center font-bold">
      <span className="text-sm">{row.categoryTitle}</span>
      <span className="text-xs">({row.categoryDescription})</span>
    </div>
  );
}
