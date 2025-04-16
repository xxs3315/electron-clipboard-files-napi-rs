#![deny(clippy::all)]
use clipboard_rs::{Clipboard, ClipboardContext, ContentFormat};

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn has_files() -> bool {
  let ctx = ClipboardContext::new().unwrap();
  ctx.has(ContentFormat::Files)
}

#[napi]
pub fn get_files() -> Vec<String> {
  let ctx = ClipboardContext::new().unwrap();
  ctx.get_files().unwrap_or_default()
}

#[napi]
pub fn has_image() -> bool {
  let ctx = ClipboardContext::new().unwrap();
  ctx.has(ContentFormat::Image)
}

#[napi]
pub fn has_html() -> bool {
  let ctx = ClipboardContext::new().unwrap();
  ctx.has(ContentFormat::Html)
}

#[napi]
pub fn has_rtf() -> bool {
  let ctx = ClipboardContext::new().unwrap();
  ctx.has(ContentFormat::Rtf)
}

#[napi]
pub fn has_text() -> bool {
  let ctx = ClipboardContext::new().unwrap();
  ctx.has(ContentFormat::Text)
}
