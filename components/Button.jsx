const Button = ({ text, isPrimary = false }) => {
  const btnStyles = isPrimary
    ? "bg-primary text-white"
    : "bg-secondary-light text-secondary";

  return (
    <button
      className={`inline-block p-5 text-base tracking-widest uppercase rounded-lg hover:opacity-70 ${btnStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
