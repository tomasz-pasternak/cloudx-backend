import data from "./productList.json";

export const handler = async (event) => {
  const productId = event?.pathParameters?.productId;
  const results = data.filter((item) => item.id === productId);
  const respone = results.length >= 1 ? results[0] : {};

  return {
    statusCode: 200,
    body: JSON.stringify(respone, null, 2),
  };
};
