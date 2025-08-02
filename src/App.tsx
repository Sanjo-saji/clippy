// import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { listen } from "@tauri-apps/api/event";
import CloseButton from "./components/close-button";
import ClipContainer from "./components/clip-container";
import { useEffect, useState } from "react";

const App = () => {
  const appWindow = getCurrentWindow();
  const [clipboardHistory, setClipboardHistory] = useState<string[]>([]);

  useEffect(() => {
    const unlisten = listen<string>("clipboard-changed", (event) => {
      setClipboardHistory((prev) => [event.payload, ...prev]);
    });
    return () => {
      unlisten.then((f) => f());
    };
  }, []);

  return (
    <div className="h-full w-screen flex flex-col bg-[#212124] text-white ">
      {/* close button */}
      <CloseButton onClick={() => appWindow.close()} />
      {/* content */}
      <div className="flex flex-col items-center p-3.5 space-y-2 mt-8 ">
        {clipboardHistory.length === 0 ? (
          <p className="text-gray-400">No clipboard items yet</p>
        ) : (
          clipboardHistory.map((text, idx) => (
            <ClipContainer key={idx} text={text} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
