import { sajuData } from '@/data/data';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { columns } from '@/lib/columns';

export default function useSazuTable() {
  return useReactTable({
    data: sajuData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
}
