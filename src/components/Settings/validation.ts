import { Errors, FormValues } from "./types";

export default async (values: FormValues) => {
  const errors: Errors = {};
  if (!values.api_key) {
    errors.api_key = "API key is required";
  } else if (values.api_key.length < 40) {
    errors.api_key = "API Key length needs to be 40 character long";
  }

  return errors;
};
