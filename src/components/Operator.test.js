function Operator({ children }) {
  return (
    <button onClick={() => handleOperatorClick(children)} className="operator">
      {children}
    </button>
  );
}
