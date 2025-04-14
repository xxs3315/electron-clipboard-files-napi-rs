#![deny(clippy::all)]
use clipboard_rs::{Clipboard, ClipboardContext, ContentFormat};

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn has_files() -> bool {
  let ctx = ClipboardContext::new().unwrap();
  let has = ctx.has(ContentFormat::Files);
  // println!("has_files={}", has);
  has
}

#[napi]
pub fn get_files() -> Vec<String> {
  let ctx = ClipboardContext::new().unwrap();
  let files = ctx.get_files().unwrap_or_default();
  // println!("{:?}", files);
  files
}
