interface UiBlockProps {
  ui: React.ReactNode;
}

function UiBlock({ ui }: UiBlockProps) {
  return (
    <div className="max-w-[1080px] p-8 border border-primary rounded-xl">
      {ui}
    </div>
  );
}

export default UiBlock;
