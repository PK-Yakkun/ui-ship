import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => {
  return (
    <Highlight theme={themes.vsDark} code={code} language="tsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={style}
          className="max-w-[1080px] px-4 rounded-xl overflow-scroll"
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
