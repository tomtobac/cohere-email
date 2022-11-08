type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Slider: React.FC<Props> = (props) => {
  return (
    <div className="flex gap-1 align-middle">
      <input className="flex-grow" {...props} />
      <output className="w-[4ch]">{props.value}</output>
    </div>
  );
};
