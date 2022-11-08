import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import cs from "classnames";

import { Alert } from "@components/Alert";
import { Button } from "@components/Button";
import Storage from "@utils/index";

import { initialValues, SAMPLES_KEY } from "./constants";
import validation from "./validation";
import { FormValues } from "./types";

export type Props = {};

export const Samples: React.FC<Props> = () => {
  const timeoutRef = useRef<number>();
  const [hasSuccess, setHasSuccess] = useState(false);
  const [initialState, setInitialState] = useState(initialValues);
  useEffect(() => {
    const getInitialSamples = async () => {
      const storedSamples = (await Storage.get([SAMPLES_KEY])) as FormValues;
      setInitialState((prev) => ({ ...prev, ...storedSamples }));
    };
    getInitialSamples();
    () => clearTimeout(timeoutRef.current);
  }, []);
  const setDefaultSamples = () => {
    formik.setFieldValue("samples", initialValues.samples);
  };
  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: true,
    validate: validation,
    onSubmit: async (values) => {
      await Storage.set(values);
      setHasSuccess(true);
      timeoutRef.current = setTimeout(() => setHasSuccess(false), 3 * 1000);
    },
  });
  return (
    <section className="relative">
      {hasSuccess && <Alert text="Samples saved successfully" />}
      <form className="flex flex-col gap-2 py-2" onSubmit={formik.handleSubmit}>
        <div
          className={cs("flex flex-col gap-1", {
            "text-red-400": formik.errors.samples,
          })}
        >
          <label htmlFor="samples">Samples:</label>
          <textarea
            className="rounded-sm border border-solid border-slate-300 px-2 py-1 font-mono text-sm"
            id="samples"
            name="samples"
            rows={20}
            onChange={formik.handleChange}
            value={formik.values.samples}
          />
          {formik.errors.samples && <small>{formik.errors.samples}</small>}
        </div>
        <section className="flex justify-center gap-2">
          <Button className="w-full" type="submit">
            Save
          </Button>
          <Button className="w-full" type="button" onClick={setDefaultSamples}>
            Set default
          </Button>
        </section>
      </form>
    </section>
  );
};
