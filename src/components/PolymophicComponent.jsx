const styles = {
  backgroundColor: "#346ffa",
  color: "#ffffff",
  padding: "12px 20px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
};

export const PolymophicComponent = ({ as, text, onClick, ...props }) => {
  const Comp = as ?? "button";

  return (
    <Comp onClick={onClick} style={styles} {...props}>
      {text}
    </Comp>
  );
};
