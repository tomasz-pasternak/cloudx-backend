import data from "./productList.json";

export const getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data, null, 2),
  };
};

export const getProductsById = async (event) => {
  const productId = event?.pathParameters?.productId;

  console.log("byid", productId);

  const results = data.filter((item) => item.id === productId);
  const respone = results.length >= 1 ? results[0] : {};

  return {
    statusCode: 200,
    body: JSON.stringify(respone, null, 2),
  };
};
