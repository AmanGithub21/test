function Gradiant({ bgcolor, color }) {
  const styles = {
    backgroundColor: bgcolor,
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
