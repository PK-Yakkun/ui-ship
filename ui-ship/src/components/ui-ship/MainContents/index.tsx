interface MainContentsProps {
  children: React.ReactNode;
}

function MainContents({ children }: MainContentsProps) {
  return <div className="w-full p-6 md:p-12">{children}</div>;
}

export default MainContents;
