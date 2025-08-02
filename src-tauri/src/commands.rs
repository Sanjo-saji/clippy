use crate::state::AppState;

#[tauri::command]
pub fn set_clipboard_text(state: tauri::State<AppState>, text: String) -> Result<(), String> {
    let mut cb = state.clipboard.lock().unwrap();
    cb.set_text(text)
        .map_err(|_| "Failed to set clipboard".to_string())
}
