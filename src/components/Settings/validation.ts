import { Errors, FormValues } from "./types";

export default async (settings: FormValues) => {
  const errors: Errors = {};
  if (!settings.api_key) {
    errors.api_key = "API key is required";
  } else if (settings.api_key.length < 40) {
    errors.api_key = "API Key length needs to be 40 character long";
  }

  if (!settings.stop_sequences) {
    errors.stop_sequences = "Stop sequences is required";
  }

  return errors;
};
