export const CallGPT = async () => {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      input: [{ role: "user", content: "안녕" }],
    }),
  });

  const responseData = await response.json();
  return responseData.output[0].content[0].text;
};
