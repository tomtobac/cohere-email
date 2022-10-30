import { Errors, FormValues } from "./types";

export default async (values: FormValues) => {
  const errors: Errors = {};
  console.log(values);
  if (!values.samples) {
    errors.samples = "Samples are required";
  }
  return errors;
};
