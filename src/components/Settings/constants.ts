import { Model } from "@domain/Model";

export const MODELS: Model[] = [
  Model.small,
  Model.medium,
  Model.large,
  Model.xlarge,
];

export const SETTINGS_KEYS = [
  "api_key",
  "model",
  "tokens",
  "temperature",
  "stop_sequences",
  "top_k",
  "top_p",
  "frequency_penalty",
  "presence_penalty",
];

export const initialValues = {
  api_key: "",
  model: Model.xlarge,
  tokens: 20,
  temperature: 0.7,
  stop_sequences: "--",
  top_k: 0,
  top_p: 0.75,
  frequency_penalty: 0,
  presence_penalty: 0,
};
