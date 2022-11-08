import cs from "classnames";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <button
      className={cs(
        "rounded-3xl bg-indigo-500 px-1 py-2 font-bold text-white focus:ring",
        "hover:bg-indigo-400",
        "shadow transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
