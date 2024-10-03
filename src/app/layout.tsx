import '../../node_modules/@psu-flex/wc-styles/dist/psf-styles.css';
import { fetchAllFederatedData, serializeObjects } from '../components/utility';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const federatedData = await fetchAllFederatedData();
  const { brandFooter, brandBar, header } = federatedData;
  // Example usage
  const [serializedBrandFooter, serializedBrandBar, serializedHeader] =
    serializeObjects(brandFooter.linkContentCollection.items, brandBar, header);
  return (
    <html lang="en">
      <body>
        <psf-brand-bar data={serializedBrandBar} />
        <psf-header data={serializedHeader} />
        {children}
        <psf-brand-footer data={serializedBrandFooter} />
      </body>
    </html>
  );
}
