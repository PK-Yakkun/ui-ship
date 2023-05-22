function ScrollLine() {
  return (
    <div className="w-[2px] h-28 overflow-hidden before:content-'' before:block before:w-[2px] before:h-28 before:bg-primary before:animate-[scroll_1.4s_infinite]" />
  );
}

export const codeList = [
  `
function ScrollLine() {
  return (
    <div className="w-[2px] h-28 overflow-hidden before:content-'' before:block before:w-[2px] before:h-28 before:bg-primary before:animate-[scroll_1.4s_infinite]" />
  );
}

export default ScrollLine;
`,
  `
/* tailwind.config.js */

keyframes: {
  scroll: {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(100%)" },
  },
},
`,
];

export default ScrollLine;
