import { mount, StartClient } from "solid-start/entry-client";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
  })
}

mount(() => <StartClient />, document);
