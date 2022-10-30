import "./Slider.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Slider: React.FC<Props> = (props) => {
  return (
    <div className="Slider">
      <input {...props} />
      <output>{props.value}</output>
    </div>
  );
};
