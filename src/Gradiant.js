function Gradiant({ bgcolor, color, isGradiant }) {
  const styles = {
    background: bgcolor,
    background: isGradiant
      ? `linear-gradient(90deg, ${bgcolor} 30%, rgba(255,255,255,1) 60%, ${bgcolor} 90%)`
      : bgcolor,
    color,
    width: "15rem",
    height: "10rem",
    border: "1px solid white",
    borderRadius: "5px",
    margin: "50px",
    transform: "rotate(20deg)",
  };
  const styles2 = { fontSize: "3rem", margin: "2rem 0" };
  return (
    <div style={styles} className="Gradiant">
      <p style={styles2}>DATA</p>
    </div>
  );
}

export default Gradiant;
