import cs from "classnames";
import "./Button.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <button className={cs("button", className)} {...props}>
      {children}
    </button>
  );
};
