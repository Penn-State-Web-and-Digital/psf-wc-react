// Import the web component definition to ensure it gets registered
import { FederatedClient } from '../components/FederatedClient';
import { PageDescription } from '../components/PageDescription';

export default function Home() {
  return (
    <main>
      <FederatedClient />
      <PageDescription />
    </main>
  );
}
