mod commands;
mod state;
mod watcher;

use arboard::Clipboard;
use commands::*;
use state::AppState;
use std::sync::Mutex;
use watcher::clipboard_watcher;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .manage(AppState {
            clipboard: Mutex::new(Clipboard::new().unwrap()),
        })
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .setup(|app| {
            clipboard_watcher(app.handle().clone());
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![set_clipboard_text])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
