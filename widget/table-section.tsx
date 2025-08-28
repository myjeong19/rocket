import { Table } from '@tanstack/react-table';

interface TableSectionProps {
  table: Table<any>;
}

export default function TableSection({ table }: TableSectionProps) {
  return (
    <section>
      <header>OO님의 사주</header>
    </section>
  );
}
