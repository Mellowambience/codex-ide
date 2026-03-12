# Codex IDE — Phase 2 Roadmap (Shipping “All”)

## 1) Production Packaging (Electron)
Goal: offline desktop app, stable runtime, virtual camera output.
- Add Electron shell that loads `codex-ide.html` and bundles assets.
- Implement native virtual camera on Windows (Softcam / OBS Virtual Cam bridge).
- Provide a simple installer and auto-update stub.

## 2) Safety + Audio Fidelity
Goal: true loudness metering and limiter, less clipping.
- Replace LUFS proxy with short‑term loudness (AudioWorklet).
- Hard limiter with true peak protection.
- Per‑track gain staging and safe defaults.

## 3) Creator Ecosystem
Goal: easy modding and community sharing.
- Preset registry: JSON index hosted on GitHub Pages.
- Plugin manifest loader: safe read‑only panels, no arbitrary script.
- Signatures/allow‑list for shared manifests.

## 4) Collaboration
Goal: synchronized ritual sessions.
- Add Yjs or Socket.io for live session sync.
- Record shared session history.

## 5) Automation + Exports
Goal: production‑ready content pipeline.
- Export project bundles (ZIP).
- Export audio stems and MP4 with overlays.
- Capture to file with metadata.

