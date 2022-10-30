import { initialValues } from "./constants";

export type FormValues = typeof initialValues;

export type Errors = Partial<Record<keyof FormValues, string>>;
