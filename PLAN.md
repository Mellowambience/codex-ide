# Codex IDE — All-in-One Plan

## Scope
Codex IDE turns the Ares Veil companion into a ritual-inspired IDE with live Hydra visuals, Strudel audio, LLM assistance, recording, and gamified surprises. Safety, determinism, and offline-first are required.

## MVP Targets
1) Audio safety: Start/Stop gate, master limiter, LUFS meter, HPF@40 Hz.
2) Editors: Monaco panes for Hydra, Strudel, and prompt/LLM output with save/load.
3) Persistence: deterministic session JSON; quest/XP storage.
4) LLM guardrails: sanitize outputs; auto-exec behind a toggle.

## Tasks
- Audio safety: add AudioWorklet limiter (rkam/audio-limiter) + LUFS meter; Stop All calls `silence()` + `hydra.eval("solid().out()")`.
- Editors: embed Monaco (CDN) with three panes; eval buttons to Strudel/Hydra; auto-save via localStorage.
- LLM guardrails: sanitize generated code; default auto-exec off; UI toggle to enable.
- Persistence: define `session.json` {hydraCode, strudelCode, prompts[], sliders, surprises, version, updatedAt} and `quest.json` {xp, badges[], dailySeed}; store via localForage.
- Gamification: XP/quests UI, unlockable themes/brushes/grains.
- Docs: update README with safety notes, .env for keys.

## GitHub Components
- Editors: microsoft/monaco-editor
- Audio limiter: rkam/audio-limiter (AudioWorklet)
- LUFS meter reference: kaitai-lufs-meter
- Encoding: ffmpegwasm/ffmpeg.wasm (exports)
- Live code: strudel.cc, hydra-synth
- Optional collab: socketio/socket.io or yjs/y-websocket

## Milestones
- M1 (Week 1): Audio safety + Start/Stop All; session schema + local save/load.
- M2 (Week 2): Monaco editors wired to Strudel/Hydra; LLM toggle + sanitization.
- M3 (Week 3): LUFS meter UI; quest/XP UI; README/docs.

## Safety / Permissions
- Require user gesture for audio start.
- Stop All must silence audio and clear Hydra.
- Sanitize LLM output before eval; auto-exec off by default.
- Graceful fallbacks when mic/cam permissions are denied.
