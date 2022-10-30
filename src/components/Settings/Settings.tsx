import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import cs from "classnames";

import Storage from "@utils/index";
import { Button } from "@components/Button";
import { Slider } from "@components/Slider";
import { Alert } from "@components/Alert";

import { initialValues, SETTINGS_KEYS, MODELS } from "./constants";
import { FormValues } from "./types";
import validation from "./validation";
import "./Settings.css";

export const Settings = () => {
  const timeoutRef = useRef<number>();
  const [hasSuccess, setHasSuccess] = useState(false);
  const [initialState, setInitialState] = useState(initialValues);
  useEffect(() => {
    const getInitialSettings = async () => {
      const settings = (await Storage.get(SETTINGS_KEYS)) as FormValues;
      setInitialState((prev) => ({ ...prev, ...settings }));
    };
    getInitialSettings();
    () => clearTimeout(timeoutRef.current);
  }, []);
  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: true,
    validateOnChange: false,
    validate: validation,
    onSubmit: async (values) => {
      await Storage.set(values);
      setHasSuccess(true);
      timeoutRef.current = setTimeout(() => setHasSuccess(false), 3 * 1000);
    },
  });
  return (
    <section className="settings">
      {hasSuccess && <Alert text="Settings saved successfully" />}
      <form onSubmit={formik.handleSubmit}>
        <div
          className={cs("form-control", {
            "form-control--has-error": formik.errors.api_key,
          })}
        >
          <label htmlFor="api_key">API key</label>
          <input
            id="api_key"
            name="api_key"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.api_key}
          />
          {formik.errors.api_key && <small>{formik.errors.api_key}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="model">Model</label>
          <select
            id="model"
            name="model"
            onChange={formik.handleChange}
            value={formik.values.model}
          >
            {MODELS.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="tokens">Number of Tokens</label>
          <input
            id="tokens"
            name="tokens"
            type="number"
            min="1"
            onChange={formik.handleChange}
            value={formik.values.tokens}
          />
        </div>
        <div className="form-control">
          <label htmlFor="temperature">Temperature</label>
          <Slider
            id="temperature"
            name="temperature"
            type="range"
            min={0}
            max={2}
            step={0.1}
            onChange={formik.handleChange}
            value={formik.values.temperature}
          />
        </div>
        <div
          className={cs("form-control", {
            "form-control--has-error": formik.errors.stop_sequences,
          })}
        >
          <label htmlFor="stop_sequences">Stop Sequence</label>
          <input
            id="stop_sequences"
            name="stop_sequences"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.stop_sequences}
          />
          {formik.errors.stop_sequences && (
            <small>{formik.errors.stop_sequences}</small>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="top_k">top-k</label>
          <input
            id="top_k"
            name="top_k"
            type="number"
            min="0"
            onChange={formik.handleChange}
            value={formik.values.top_k}
          />
        </div>
        <div className="form-control">
          <label htmlFor="top_p">top-p</label>
          <Slider
            id="top_p"
            name="top_p"
            type="range"
            min={0.0}
            max={1}
            step={0.01}
            onChange={formik.handleChange}
            value={formik.values.top_p}
          />
        </div>
        <div className="form-control">
          <label htmlFor="frequency_penalty">Frequency Penalty</label>
          <Slider
            id="frequency_penalty"
            name="frequency_penalty"
            type="range"
            min={0.0}
            max={1}
            step={0.01}
            onChange={formik.handleChange}
            value={formik.values.frequency_penalty}
          />
        </div>
        <div className="form-control">
          <label htmlFor="presence_penalty">Presence Penalty</label>
          <Slider
            id="presence_penalty"
            name="presence_penalty"
            type="range"
            min={0.0}
            max={1}
            step={0.01}
            onChange={formik.handleChange}
            value={formik.values.presence_penalty}
          />
        </div>
        <Button className="save" type="submit">
          Save
        </Button>
      </form>
    </section>
  );
};
