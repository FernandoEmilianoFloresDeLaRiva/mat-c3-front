export const postApi = async (url: string, data: unknown) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const res = await fetch(url, body);
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
