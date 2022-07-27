import { getProductById } from "./services/productService";

export const handler = async (event) => {
  const productId = event?.pathParameters?.productId;

  const results = await getProductById(productId);
  const response = results.length >= 1 ? results[0] : {};

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response, null, 2),
  };
};
