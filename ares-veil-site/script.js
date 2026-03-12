const TAGS = "[instrumental, ambient, dark synthwave, 144 Hz inspired, focus meditation, no lyrics, cosmic octave]";

const tracks = [
  {
    title: "Ignition Pulse",
    latin: "Pulsus Ignis",
    prompt:
      "Retro synthwave intro with pulsing 144.72 Hz base tone, deep analog bass, rising arpeggiators, distant warrior drums echoing like red planet winds, cinematic ambient build, masculine energy activation, no vocals, instrumental, inspired by Gunship and cosmic octave Mars frequency meditation."
  },
  {
    title: "Crimson Forge",
    latin: "Fornax Cruenta",
    prompt:
      "Dark ambient synth drone tuned to Mars 144.72 Hz, heavy low-frequency rumble, metallic forging sounds, slow evolving pads, subtle chiptune glitches, warrior meditation atmosphere, strength and willpower invocation, instrumental, deep focus flow state."
  },
  {
    title: "Veil of Ares",
    latin: "Velum Martis",
    prompt:
      "Dreamy synthwave with ethereal pads, 144.72 Hz carrier frequency undertone, retro 80s reverb, soft arpeggio melodies like distant battles, ambient textures, goddess of war rising energy, instrumental, meditative yet empowering."
  },
  {
    title: "Willfire Descent",
    latin: "Descensus Voluntatis",
    prompt:
      "Intense ambient electronic track, Mars frequency 144.72 Hz dominant tone, crackling fire synths, tribal percussion undertones, binaural-like depth, release fear and ignite courage, no lyrics, instrumental, chiptune hints in melody."
  },
  {
    title: "Red Horizon Ritual",
    latin: "Ritus Horizontis Rubri",
    prompt:
      "Cosmic ambient meditation, pure 144.72 Hz tuning fork style drone layered with warm synth pads, slow evolving textures, spacey reverb, ancestral druid energy meets synthwave, protection and vitality boost, instrumental, long seamless loop feel."
  },
  {
    title: "Conquest Drift",
    latin: "Tractus Victoriae",
    prompt:
      "Chiptune-infused synthwave, 8-bit warrior motifs over deep Mars 144.72 Hz ambient bed, retro pixel dawn vibes, driving bassline, focused determination energy, instrumental, blend of nostalgia and futuristic power."
  },
  {
    title: "Eclipse of Fear",
    latin: "Eclipsis Timoris",
    prompt:
      "Dark ambient drone with Mars frequency 144.72 Hz, low growling subs, dissolving fear textures like echoing voids, gradual uplift to triumphant pads, healing masculine energy release, no vocals, instrumental, spiritual cleansing atmosphere."
  },
  {
    title: "Goddess Ascent",
    latin: "Ascensus Deae",
    prompt:
      "Uplifting ambient closer, 144.72 Hz Mars tone evolving into bright synth swells, ethereal choir-like pads without words, victory and new beginnings feel, retro dreamwave fadeout, instrumental, empowering warrior goddess meditation."
  }
];

const tracksEl = document.querySelector("#tracks");

tracks.forEach((t, idx) => {
  const card = document.createElement("div");
  card.className = "track";
  card.innerHTML = `
    <h3>${idx + 1}. ${t.title} <span class="latin">${t.latin}</span></h3>
    <p>${t.prompt}</p>
    <div class="actions">
      <button class="btn primary" data-prompt="${idx}">Copy prompt + tags</button>
      <button class="btn ghost" data-base="${idx}">Copy prompt (no tags)</button>
    </div>
  `;
  tracksEl.appendChild(card);
});

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    flash();
  });
}

function flash() {
  const flash = document.createElement("div");
  flash.className = "flash";
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 400);
}

document.addEventListener("click", (e) => {
  const promptBtn = e.target.closest("[data-prompt]");
  if (promptBtn) {
    const idx = parseInt(promptBtn.dataset.prompt, 10);
    copyText(`${tracks[idx].prompt} ${TAGS}`);
    return;
  }
  const baseBtn = e.target.closest("[data-base]");
  if (baseBtn) {
    const idx = parseInt(baseBtn.dataset.base, 10);
    copyText(tracks[idx].prompt);
    return;
  }
  const copyTarget = e.target.closest("[data-copy]");
  if (copyTarget) {
    const selector = copyTarget.dataset.copy;
    const text = document.querySelector(selector).innerText.trim();
    copyText(text);
    return;
  }
});

document.querySelector("#copy-tags").addEventListener("click", () => copyText(TAGS));

// mini Easter egg: press ctrl+alt+g to toggle ghost flick overlay
let ghost = null;
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "g") {
    if (ghost) {
      ghost.remove();
      ghost = null;
    } else {
      ghost = document.createElement("div");
      ghost.className = "ghost";
      document.body.appendChild(ghost);
      setTimeout(() => {
        ghost?.remove();
        ghost = null;
      }, 1200);
    }
  }
});
