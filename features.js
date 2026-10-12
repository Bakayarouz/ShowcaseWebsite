/* =========================================================
   EDIT THIS FILE TO PUBLISH FEATURES
   ---------------------------------------------------------
   1. Change the SITE settings below to match your project.
   2. Add a new object to FEATURES for every feature you ship.
      The site sorts by date (newest first) automatically.
   3. Commit & push — GitHub Pages updates automatically.

   Feature fields:
     title       (required)  Name of the feature
     date        (required)  "YYYY-MM-DD"
     category    (required)  Any word, e.g. "Chat", "Gameplay"
                             New categories become filter buttons
                             automatically.
     version     (optional)  e.g. "1.2.0"
     status      (optional)  "released" | "beta" | "planned"
     summary     (required)  One or two sentences
     details     (optional)  Array of bullet points
     image       (optional)  Path like "images/my-feature.png"
                             or a full URL. Leave "" for none.
     video       (optional)  Path to an .mp4, e.g. "images/my-feature.mp4".
                             Plays in the pop-up with controls.
     poster      (optional)  Still image shown on the card for a video
     loop        (optional)  true = short clip that plays silently on a
                             loop right on the card (for 1–5 second clips)
     icon        (optional)  An emoji shown when there's no image
   ========================================================= */

const SITE = {
  name: "Kudosaki's Plugins",
  // Your Minecraft skin, shown in the header. uuid keeps it working if you rename.
  player: {
    name: "Kudosaki",
    uuid: "d943f52c25c84a4a9215ce2981413711"
  },
  tagline: "Custom Paper plugins for a medieval fantasy Minecraft server: menus, chat, dungeons, cosmetics and more.",
  platform: "Paper 1.21",
  // Buttons in the hero. Leave a link "" to hide its button.
  links: {
    download: "", // e.g. your Modrinth/CurseForge store page
    discord: ""
  },
  footer: "Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft."
};

const FEATURES = [
  {
    title: "RealmMenu",
    date: "2026-10-12",
    category: "Menus",
    version: "1.0.0",
    status: "released",
    summary: "A cinematic main menu that greets players when they join, with a locked camera, a sliding logo and an \"Entering the realm…\" transition.",
    details: [
      "Welcome / welcome-back intro titles over a black screen",
      "Your character stands in a 3D scene you build, filmed by a fixed camera",
      "Navigate with W/S and select with Space",
      "Options can enter the world, run a command or open a link (store, Discord, rules)",
      "Locked options show a native dialog for players without permission",
      "Starter weapon picker for first-time players",
      "All text is configurable with MiniMessage and ready for resource-pack glyphs"
    ],
    image: "images/realm-menu.jpg",
    icon: "🏰"
  },
  {
    title: "ChatHeadTooltip",
    date: "2026-10-12",
    category: "Chat",
    version: "2.0.0",
    status: "released",
    summary: "A full chat system built around a player-head tooltip on every name, plus channels, filters, social commands and staff moderation.",
    details: [
      "Hover a name in chat to see the player's head, title and lore",
      "Per-rank chat styles with PlaceholderAPI support",
      "Channels (global, local, world, staff) with quick prefixes",
      "@mentions with sound, [item] to show your held item, emoji shortcuts and clickable links",
      "Spam, caps, advertising, word and unicode-glyph filters with escalating punishments",
      "/msg, /reply, /ignore, offline /mail, /nick, /seen and /report",
      "Mutes, warns, kicks and bans with durations, stored in SQLite"
    ],
    image: "images/chat-head-tooltip.png",
    icon: "💬"
  },
  {
    title: "DungeonTimer",
    date: "2026-10-11",
    category: "Gameplay",
    version: "2.7",
    status: "released",
    summary: "Times dungeon runs across multiple dungeons and keeps each player's best and last clear times, even if they disconnect mid-run.",
    details: [
      "Several parties can run the same dungeon at once, tracked by group",
      "Timers survive disconnects, so offline players still get their record",
      "Failed runs (party wipe or dungeon ended) are saved separately from clears",
      "/dungeon best to compare times",
      "PlaceholderAPI placeholders for scoreboards and holograms",
      "Configurable titles, messages and event commands"
    ],
    image: "",
    icon: "⏱️"
  },
  {
    title: "Player Aura",
    date: "2026-10-11",
    category: "Cosmetics",
    version: "1.0.0",
    status: "released",
    summary: "Cosmetic auras that float around players, built on 1.21 display entities and custom item models.",
    details: [
      "Static auras (like a halo) or animated multi-frame auras",
      "Adjustable size, position and facing for each aura",
      "Per-aura permissions and temporary auras",
      "/aura equip, unequip and toggle",
      "Optional messages, action bars and titles when an aura is applied",
      "PlaceholderAPI support"
    ],
    image: "",
    video: "images/player-aura.mp4?v=2",
    poster: "images/player-aura-poster.jpg?v=2",
    icon: "✨"
  },
  {
    title: "Multi Page Lore",
    date: "2026-09-22",
    category: "Items",
    version: "1.0.0",
    status: "released",
    summary: "Splits long item lore into pages that players flip through, instead of one giant tooltip.",
    details: [
      "Add ---page--- to an item's lore to start a new page",
      "Flip pages with the offhand-swap key (or drop, right-click, etc.)",
      "Page indicator dots and a page-turn sound",
      "Avoids conflicts with other plugins' menus"
    ],
    image: "",
    video: "images/multi-page-lore.mp4",
    poster: "images/multi-page-lore-poster.jpg",
    loop: true,
    icon: "📜"
  },
  {
    title: "Potion Display",
    date: "2026-09-19",
    category: "UI",
    version: "1.0.0",
    status: "released",
    summary: "Shows a player's active potion effects as custom resource-pack icons, sorted and wrapped into neat rows — above their name or in any HUD.",
    details: [
      "Every effect maps to its own custom glyph and colour",
      "Wraps onto new lines after a set number of effects",
      "Exposed through PlaceholderAPI for scoreboards, action bars and holograms"
    ],
    image: "images/potion-display.png",
    icon: "🧪"
  }
];
