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
  tagline: "Plugins and features I've built for Minecraft.",
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
    title: "Realm Menu",
    date: "2026-10-12",
    category: "Menus",
    version: "",
    status: "released",
    summary: "A menu for browsing and jumping between realms.",
    details: [],
    image: "",
    icon: "🌍"
  },
  {
    title: "DungeonTimer",
    date: "2026-10-12",
    category: "Gameplay",
    version: "",
    status: "released",
    summary: "Times dungeon runs so players can track how long each run takes.",
    details: [],
    image: "",
    icon: "⏱️"
  },
  {
    title: "ChatToolTip Plugin",
    date: "2026-10-12",
    category: "Chat",
    version: "",
    status: "released",
    summary: "Adds hoverable tooltips to chat messages.",
    details: [],
    image: "",
    icon: "💬"
  },
  {
    title: "Player Aura",
    date: "2026-10-12",
    category: "Cosmetics",
    version: "",
    status: "released",
    summary: "Visual aura effects that surround players.",
    details: [],
    image: "",
    icon: "✨"
  },
  {
    title: "Multi Page Lores",
    date: "2026-10-12",
    category: "Items",
    version: "",
    status: "released",
    summary: "Lets item lore span multiple pages instead of one long tooltip.",
    details: [],
    image: "",
    icon: "📜"
  },
  {
    title: "Potion Display",
    date: "2026-10-12",
    category: "UI",
    version: "",
    status: "released",
    summary: "Shows players their active potion effects at a glance.",
    details: [],
    image: "",
    icon: "🧪"
  }
];
