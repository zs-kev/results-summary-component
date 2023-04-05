const ENDPOINT = './data.json';

export async function DataApi() {
  try {
    const response = await fetch(ENDPOINT);
    const json = await response.json();
    return { success: true, data: json };
  } catch (error) {
    return { success: false };
  }
}
