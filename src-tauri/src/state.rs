use arboard::Clipboard;
use std::sync::Mutex;

pub struct AppState {
    pub clipboard: Mutex<Clipboard>,
}

impl AppState {
    #[allow(dead_code)]
    pub fn new() -> Self {
        Self {
            clipboard: Mutex::new(Clipboard::new().unwrap()),
        }
    }
}
