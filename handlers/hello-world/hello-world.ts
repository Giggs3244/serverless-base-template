export const handler = async () => {
  const body = {
    message: "Hello World!",
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
