import React from 'react';
import { flexRender } from '@tanstack/react-table';
import useSazuTable from '@/hooks/use-sazu-table';
import type { SajuRowData } from '@/data/data';

export interface RowCellProps {
  row: SajuRowData;
}

export default function SajuTable() {
  const table = useSazuTable();

  return (
    <div className="px-6 h-fit">
      <table className="border-collapse w-full max-w-2xl mx-auto" style={{ tableLayout: 'fixed' }}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  style={{ width: '20%' }}
                  className={`
                    border-r-2 border-b-2 border-black py-3 text-center font-bold 
                  `}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className={`
                    border-2 border-gray-300 first:border-l-0 first:border-r-black border-b-black
                    last:border-black
                    first:bg-amber-50
                    bg-white
                    p-1
                  `}
                  style={{ width: '20%' }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
