export type Props = {
  text: string;
};

export const Alert: React.FC<Props> = ({ text }) => {
  return (
    <div
      role="alert"
      className="absolute left-0 right-0 top-1 z-10 animate-fadeIn rounded-sm bg-indigo-100 px-4 py-2 font-bold opacity-100 transition-opacity duration-1000"
    >
      {text}
    </div>
  );
};
