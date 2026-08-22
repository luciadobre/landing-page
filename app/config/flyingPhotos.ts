export type PhotoOrientation = "landscape" | "portrait" | "square";

export type FlyingPhoto = {
  photoSource: string;
  caption: string;
  orientation: PhotoOrientation;
};

export const FLYING_PHOTOS: FlyingPhoto[] = [
  {
    photoSource: "/assets/photos/berlin-portrait.jpg",
    caption: "Learning german to work on amazing projects.",
    orientation: "portrait",
  },
  {
    photoSource: "/assets/photos/books-landscape.jpg",
    caption: "Having so many books I want to read.",
    orientation: "landscape",
  },
  {
    photoSource: "/assets/photos/code-portrait.jpg",
    caption: "On my way to become an amazing programmer.",
    orientation: "portrait",
  },
  {
    photoSource: "/assets/photos/hamster-landscape.png",
    caption: "Dreaming of making a game. I already designed my main character!",
    orientation: "portrait",
  },
  {
    photoSource: "/assets/photos/draw-portrait.jpg",
    caption: "Making more of my goofy drawings.",
    orientation: "portrait",
  },
  {
    photoSource: "/assets/photos/onepiece-portrait.jpg",
    caption: "Finding out what the One piece is.",
    orientation: "portrait",
  },
  {
    photoSource: "/assets/photos/piano-portrait.jpg",
    caption:
      "Getting good at playing the piano like the artist I admire, Bo Burnham.",
    orientation: "portrait",
  },
  {
    photoSource: "/assets/photos/silly-portrait.jpg",
    caption: "Never stopping being silly.",
    orientation: "portrait",
  },
];
