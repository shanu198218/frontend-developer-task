import BorrowerDetail from '../../components/dashboard/borrower-details';
import BorrowerPipeline from '../../components/dashboard/borrower-pipeline';
import BrokerOverview from '../../components/dashboard/broker-overview';

export default function Dashboard() {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-[360px,1fr,360px]">
      <BorrowerPipeline />
      <BorrowerDetail borrowerId={'1'} />
      <BrokerOverview />
    </div>
  );
}
