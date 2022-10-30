import "./Alert.css";

export type Props = {
  text: string;
};

export const Alert: React.FC<Props> = ({ text }) => {
  return (
    <div role="alert" className="alert">
      {text}
    </div>
  );
};
