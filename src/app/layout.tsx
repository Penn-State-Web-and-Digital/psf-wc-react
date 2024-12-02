import dynamic from 'next/dynamic';
import React from 'react';
import '../../node_modules/@psu-flex/wc-styles/dist/psf-styles.css';
import { fetchAllFederatedData, serializeObjects } from '../components/utility';
// Dynamically import the Client component, preventing it from being server-side rendered
const FederatedClient = dynamic(() => import('../components/FederatedClient'), {
  ssr: false,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const federatedData = await fetchAllFederatedData();
  const { brandFooter, brandBar, header, footer } = federatedData;
  const extraSearchOptions = [
    {
      label: 'News Archive',
      value: 'news archive',
      slug: '/news/search/archive',
    },
  ];
  // Example usage
  const [
    serializedBrandFooter,
    serializedBrandBar,
    serializedHeader,
    serializedFooter,
  ] = serializeObjects(
    brandFooter.linkContentCollection.items,
    brandBar,
    header,
    footer
  );

  const serializedExtraSearchOptions = JSON.stringify(extraSearchOptions);

  return (
    <html lang="en">
      <body>
        <FederatedClient />
        <psf-brand-bar
          searchoptions={serializedExtraSearchOptions}
          data={serializedBrandBar}
        />
        <psf-header data={serializedHeader} />
        {children}
        <psf-footer data={serializedFooter} />
        <psf-brand-footer data={serializedBrandFooter} />
      </body>
    </html>
  );
}
