import { invoke } from "@tauri-apps/api/core";

interface ClipContainerProps {
  text: string;
}

const ClipContainer = ({ text }: ClipContainerProps) => {
  // Click time copy to clipboard text
  const handlClick = () => {
    invoke("set_clipboard_text", { text })
      .then(() => {
        console.log(`Copied: ${text}`);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div
      className="h-20 w-full bg-[#313136] rounded-xl px-4 my-1.5 flex items-center hover:bg-[#38383b] cursor-pointer"
      onClick={handlClick}
    >
      <p className="text-white text-sm line-clamp-3">{text}</p>
    </div>
  );
};

export default ClipContainer;
