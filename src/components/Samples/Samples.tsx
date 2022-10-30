import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import cs from "classnames";

import { Alert } from "@components/Alert";
import { Button } from "@components/Button";
import Storage from "@utils/index";

import { initialValues, SAMPLES_KEY } from "./constants";
import validation from "./validation";
import { FormValues } from "./types";
import "./Samples.css";

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
    <section className="samples">
      {hasSuccess && <Alert text="Samples saved successfully" />}
      <form onSubmit={formik.handleSubmit}>
        <div
          className={cs("form-control", {
            "form-control--has-error": formik.errors.samples,
          })}
        >
          <label htmlFor="samples">Samples:</label>
          <textarea
            id="samples"
            name="samples"
            rows={25}
            onChange={formik.handleChange}
            value={formik.values.samples}
          />
          {formik.errors.samples && <small>{formik.errors.samples}</small>}
        </div>
        <section className="actions">
          <Button type="submit">Save</Button>
          <Button type="button" onClick={setDefaultSamples}>
            Set default
          </Button>
        </section>
      </form>
    </section>
  );
};
