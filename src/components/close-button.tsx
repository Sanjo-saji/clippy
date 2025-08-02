interface closeProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: closeProps) => {
  return (
    <div
      className="h-8 flex justify-end items-center px-2 select-none fixed top-0 right-0 left-0 z-50 "
      style={{ WebkitAppRegion: "drag", backgroundColor: "#161618" }}
    >
      <button
        onClick={onClick}
        className="text-sm px-2 py-1 hover:bg-red-500 rounded cursor-pointer"
        style={{
          WebkitAppRegion: "no-drag",
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default CloseButton;
