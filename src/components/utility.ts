export async function fetchAllFederatedData() {
  try {
    const response = await fetch(
      'https://psu-flex-endpoints.vercel.app/api/fetchAllFederatedData'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch federated data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching federated data:', error);
    return null;
  }
}

export function serializeObjects(...objects: any[]): string[] {
  return objects.map((obj) => JSON.stringify(obj));
}
