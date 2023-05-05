interface MainContentsProps {
  children: React.ReactNode;
}

function MainContents({ children }: MainContentsProps) {
  return <div className="w-full p-10">{children}</div>;
}

export default MainContents;
