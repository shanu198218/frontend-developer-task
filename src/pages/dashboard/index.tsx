import { useState } from 'react';
import BorrowerDetail from '../../components/dashboard/borrower-details';
import BorrowerPipeline from '../../components/dashboard/borrower-pipeline';
import BrokerOverview from '../../components/dashboard/broker-overview';

export default function Dashboard() {
  const [activeBorrowerId, setActiveBorrowerId] = useState<string | null>(null);
  console.log(activeBorrowerId);
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-[360px,1fr,360px]">
      <BorrowerPipeline onSelectBorrower={id => setActiveBorrowerId(id)} />
      {activeBorrowerId ? (
        <BorrowerDetail borrowerId={activeBorrowerId} />
      ) : (
        <div className="text-center text-3xl py-20 dark:text-gray-300 text-gray-500">
          Select a borrower to view details
        </div>
      )}
      <BrokerOverview />
    </div>
  );
}
