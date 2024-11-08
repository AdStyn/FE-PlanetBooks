import React from 'react';
import PaymentHistoryTable from '../Components/Section/SectionHistori';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-black mt-12 flex-1 flex flex-col transition-all">
      <h1>Histori Pembayaran Buku</h1>
      <PaymentHistoryTable />
    </div>
  );
};

export default Home;
