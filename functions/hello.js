export async function handler(event, context) {
  console.log("handler has been called");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}
