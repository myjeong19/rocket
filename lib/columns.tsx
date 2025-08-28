import type { SajuRowData } from '@/data/data';
import { createColumnHelper } from '@tanstack/react-table';

import RowCell from '@/components/table/row-cell';
import {
  renderSiColumn,
  renderIlColumn,
  renderWolColumn,
  renderNyeonColumn,
} from '@/components/table/row-items';

const columnHelper = createColumnHelper<SajuRowData>();

export const columns = [
  columnHelper.accessor('categoryTitle', {
    header: '',
    size: 100,
    minSize: 100,
    maxSize: 100,
    cell: ({ row }) => {
      return <RowCell row={row.original} />;
    },
  }),

  columnHelper.accessor('si', {
    header: '시',
    size: 100,
    minSize: 100,
    maxSize: 100,
    cell: ({ row }) => {
      return renderSiColumn(row.original);
    },
  }),

  columnHelper.accessor('il', {
    header: '일',
    size: 100,
    minSize: 100,
    maxSize: 100,
    cell: ({ row }) => {
      return renderIlColumn(row.original);
    },
  }),

  columnHelper.accessor('wol', {
    header: '월',
    size: 100,
    minSize: 100,
    maxSize: 100,
    cell: ({ row }) => {
      return renderWolColumn(row.original);
    },
  }),

  columnHelper.accessor('nyeon', {
    header: '년',
    size: 100,
    minSize: 100,
    maxSize: 100,
    cell: ({ row }) => {
      return renderNyeonColumn(row.original);
    },
  }),
];
