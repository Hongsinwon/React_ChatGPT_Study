export const CallGPT = async () => {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      input: "Write a one-sentence bedtime story about a unicorn.",
    }),
  });

  const responseData = await response.json();
  console.log(responseData);
};
