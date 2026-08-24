export type ShowcasePhoto = {
  photoSource: string;
  caption: string;
};

export type ShowcaseLink = {
  label: string;
  href: string;
};

export type ShowcaseChapter = {
  id: string;
  category: string;
  title: string;
  tags: string[];
  link?: ShowcaseLink;
  photos: ShowcasePhoto[];
};

export const SHOWCASE_CHAPTERS: ShowcaseChapter[] = [
  {
    id: "social-media",
    category: "Social Media",
    title: "Social Media Manager",
    tags: ["Photoshop", "Premiere", "Source Filmmaker"],
    link: { label: "Vikin.gg Page", href: "https://x.com/GGVikin" },
    photos: [
      { photoSource: "/assets/showcase/social-media/ti-upper-bracket-qualifier.jpg", caption: "The International Upper Bracket Qualifier" },
      { photoSource: "/assets/showcase/social-media/esl-one-summer-playoffs.jpg", caption: "ESL One Summer 2021 Playoffs" },
      { photoSource: "/assets/showcase/social-media/vikin-community-highlights.png", caption: "Community Highlights" },
      { photoSource: "/assets/showcase/social-media/5000-followers-milestone.png", caption: "5000 Followers Milestone" },
      { photoSource: "/assets/showcase/social-media/discord-launch.jpg", caption: "Vikin.gg Now on Discord" },
      { photoSource: "/assets/showcase/social-media/romania-national-day.jpg", caption: "Happy Romania National Day" },
    ],
  },
];
