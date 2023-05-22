function Dock() {
  const buttonLabelList = ["A", "B", "C", "D", "E", "F"];
  return (
    <div className="flex gap-5">
      {buttonLabelList.map((label, index) => (
        <button key={index} className="bg-primary w-16 h-16 rounded-xl">
          {label}
        </button>
      ))}
    </div>
  );
}

export const codeList = [
  `
function Dock() {
  return (
    sample
  );
}

export default Dock;
`,
];

export default Dock;
