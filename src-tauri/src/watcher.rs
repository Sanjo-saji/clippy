use arboard::Clipboard;
use std::thread;
use std::time::Duration;
use tauri::{AppHandle, Emitter};

pub fn clipboard_watcher(app: AppHandle) {
    thread::spawn(move || {
        let mut clipboard = Clipboard::new().unwrap();
        let mut last_text = String::new();
        loop {
            if let Ok(text) = clipboard.get_text() {
                if text != last_text {
                    last_text = text.clone();
                    let _ = app.emit("clipboard-changed", text);
                }
            }
            thread::sleep(Duration::from_millis(500));
        }
    });
}
