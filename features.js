/* =========================================================
   EDIT THIS FILE TO PUBLISH FEATURES
   ---------------------------------------------------------
   1. Change the SITE settings below to match your project.
   2. Add a new object to the top of FEATURES for every
      feature you ship. Newest first is recommended, but the
      site sorts by date anyway.
   3. Commit & push — GitHub Pages updates automatically.

   Feature fields:
     title       (required)  Name of the feature
     date        (required)  "YYYY-MM-DD"
     category    (required)  Any word, e.g. "Gameplay", "Blocks"
                             New categories become filter buttons
                             automatically.
     version     (optional)  e.g. "1.2.0"
     status      (optional)  "released" | "beta" | "planned"
     summary     (required)  One or two sentences
     details     (optional)  Array of bullet points
     image       (optional)  Path like "images/my-feature.png"
                             or a full URL. Leave "" for none.
     icon        (optional)  An emoji shown when there's no image
   ========================================================= */

const SITE = {
  name: "My Minecraft Project",
  tagline: "A survival-friendly mod that adds new worlds, mobs and mechanics.",
  // Buttons in the header & hero. Remove any you don't need.
  links: {
    download: "", // e.g. your Modrinth/CurseForge/GitHub releases page
    source: "https://github.com/Bakayarouz",
    discord: "" // leave empty to hide
  },
  footer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft."
};

const FEATURES = [
  {
    title: "Crystal Caverns Biome",
    date: "2026-10-05",
    category: "World",
    version: "1.3.0",
    status: "released",
    summary: "A new underground biome filled with glowing amethyst pillars and rare ore veins.",
    details: [
      "Generates below Y=0 in mountain regions",
      "New light-emitting Crystal Lantern block",
      "Custom ambient sounds"
    ],
    image: "",
    icon: "💎"
  },
  {
    title: "Ember Golem",
    date: "2026-09-21",
    category: "Mobs",
    version: "1.2.0",
    status: "released",
    summary: "A fiery guardian that patrols Nether fortresses and drops Ember Cores.",
    details: [
      "Immune to fire and lava",
      "Ember Cores craft into heat-resistant armor"
    ],
    image: "",
    icon: "🔥"
  },
  {
    title: "Sprint-Jump Stamina",
    date: "2026-09-02",
    category: "Gameplay",
    version: "1.1.0",
    status: "released",
    summary: "An optional stamina bar that makes long-distance travel a little more strategic.",
    details: [
      "Toggle in config",
      "Stamina regenerates faster while standing still"
    ],
    image: "",
    icon: "⚡"
  },
  {
    title: "Copper Pipes",
    date: "2026-08-14",
    category: "Blocks",
    version: "1.0.0",
    status: "released",
    summary: "Move items between containers with oxidizing copper pipes — waxed pipes keep their speed.",
    details: [],
    image: "",
    icon: "🧱"
  },
  {
    title: "Sky Islands Dimension",
    date: "2026-11-01",
    category: "World",
    version: "1.4.0",
    status: "beta",
    summary: "Floating islands above the clouds, reachable through a new portal frame.",
    details: ["Currently in beta testing — feedback welcome!"],
    image: "",
    icon: "☁️"
  }
];
