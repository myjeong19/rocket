import type { SajuRowData, SajuItem } from '@/data/data';
import RowCard from './row-card';
import { getCardStyles } from '@/lib/row-item-style';

const renderSajuItem = (item: SajuItem, index: number, isRowCard: boolean = false) => {
  if (isRowCard && item.title && item.description && item.subTitle) {
    return (
      <RowCard
        key={`${item.title}-${index}`}
        text={item.title}
        cardStyles="bg-blue-50 border border-blue-200"
      />
    );
  }

  return (
    <div key={`${item.title}-${index}`} className="w-full h-full p-1">
      <p className="text-sm font-bold">{item.title}</p>
      {item.description && <p className="text-xs text-gray-600">{item.description}</p>}
    </div>
  );
};

const renderSpecialCategory = (
  row: SajuRowData,
  field: keyof Pick<SajuRowData, 'si' | 'il' | 'wol' | 'nyeon'>
) => {
  if (
    (row.categoryTitle.includes('천간') || row.categoryTitle.includes('지지')) &&
    'subTitle' in row[field]
  ) {
    return (
      <RowCard
        text={row[field].subTitle ?? ''}
        cardStyles={`${getCardStyles(row[field].subTitle ?? '')} text-xl font-bold`}
      />
    );
  }
  return null;
};

const renderColumn = (
  row: SajuRowData,
  field: keyof Pick<SajuRowData, 'si' | 'il' | 'wol' | 'nyeon'>,
  isRowCard: boolean = false
) => {
  const specialRender = renderSpecialCategory(row, field);
  if (specialRender) return specialRender;

  const data = row[field];

  if (Array.isArray(data)) {
    return (
      <div className="flex flex-col w-full h-full">
        {data.map((item, index) => renderSajuItem(item, index, isRowCard))}
      </div>
    );
  }

  if (isRowCard && data.title && data.description && data.subTitle) {
    return <RowCard text={data.title} cardStyles="bg-blue-50 border border-blue-200" />;
  }

  return (
    <div className="w-full h-full p-1">
      <p className="text-sm font-bold">{data.title}</p>
      {data.description && <p className="text-xs text-gray-600">{data.description}</p>}
    </div>
  );
};

export const renderSiColumn = (row: SajuRowData) => renderColumn(row, 'si');
export const renderIlColumn = (row: SajuRowData) => renderColumn(row, 'il');
export const renderWolColumn = (row: SajuRowData) => renderColumn(row, 'wol');
export const renderNyeonColumn = (row: SajuRowData) => renderColumn(row, 'nyeon');
