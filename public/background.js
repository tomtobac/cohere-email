const getSettings = async () => {
  const settings = await chrome.storage.sync.get([
    "api_key",
    "model",
    "tokens",
    "temperature",
    "stop_sequences",
    "top_k",
    "top_p",
    "frequency_penalty",
    "presence_penalty",
    "samples",
  ]);
  return settings;
};

const generate = async (input) => {
  const { api_key, samples, ...rest } = await getSettings();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cohere-Version": "2021-11-08",
      Authorization: "Bearer " + api_key,
    },
    body: JSON.stringify({
      prompt: samples + "Command: " + input + "\nEmail: ",
      ...rest,
      stop_sequences: [rest.stop_sequences],
    }),
  };
  const response = await fetch("https://api.cohere.ai/generate", options);
  const data = await response.json();
  if (!response.ok) return "Error: " + data.message;
  return data.generations[0].text;
};

chrome.runtime.onMessage.addListener(async (request, sender) => {
  if (!request.content) return;

  const message = {
    id: request.id,
    response: await generate(request.content),
  };

  chrome.tabs.sendMessage(sender.tab.id, message);
});
