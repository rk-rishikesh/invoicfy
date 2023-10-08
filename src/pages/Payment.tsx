import type { NextPage } from 'next';

import { TipCard } from '../components/tip/TipCard';
import { TransferTokenCard } from '../features/transfer/TransferTokenCard';

const Payment: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-2">
        <TipCard />
        <TransferTokenCard />
      </div>
    </div>
  );
};

export default Payment;
