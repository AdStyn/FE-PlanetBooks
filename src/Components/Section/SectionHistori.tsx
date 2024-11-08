import React from 'react';
import { Table, TableHeader, TableColumn, TableBody,TableRow,TableCell} from '@nextui-org/react';

type PaymentRecord = {
  id: number;
  judulBuku: string;
  hargaBuku: number;
  kategoriBuku: string;
  tanggalPembayaran: string;
};

const data: PaymentRecord[] = [
  {
    id: 1,
    judulBuku: "Pemrograman JavaScript",
    hargaBuku: 150000,
    kategoriBuku: "Teknologi",
    tanggalPembayaran: "2024-10-20",
  },
  {
    id: 2,
    judulBuku: "Belajar TypeScript",
    hargaBuku: 175000,
    kategoriBuku: "Teknologi",
    tanggalPembayaran: "2024-10-21",
  },
  {
    id: 3,
    judulBuku: "Psikologi Modern",
    hargaBuku: 125000,
    kategoriBuku: "Psikologi",
    tanggalPembayaran: "2024-10-22",
  },
];

const PaymentHistoryTable: React.FC = () => {
  return (
    <Table
      aria-label="Tabel Histori Pembayaran Buku"
      style={{ height: "auto", minWidth: "100%" }}
    >
      <TableHeader>
        <TableColumn>Judul Buku</TableColumn>
        <TableColumn>Harga Buku</TableColumn>
        <TableColumn>Kategori Buku</TableColumn>
        <TableColumn>Tanggal Pembayaran</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((record) => (
          <TableRow key={record.id}>
            <TableCell>
              <h1>{record.judulBuku}</h1>
            </TableCell>
            <TableCell>
              <h1>Rp {record.hargaBuku.toLocaleString()}</h1>
            </TableCell>
            <TableCell>
              <h1>{record.kategoriBuku}</h1>
            </TableCell>
            <TableCell>
              <h1>{record.tanggalPembayaran}</h1>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PaymentHistoryTable;