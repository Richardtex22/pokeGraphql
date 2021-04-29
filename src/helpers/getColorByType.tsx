const ColorType = {
  Fire: "firebrick",
  Water: "blue",
  Poison: "violet",
  Ghost: "black",
  Flying: "lightskyblue",
  Grass: "green",
  Electric: "khaki",
  Psychic: "indigo",
  Bug: "limegreen",
  Ground: "darkgoldenrod",
  Normal: "silver",
  Fairy: "lightpink",
  Fighting: "lightsalmon",
  Rock: "darkslategrey",
  Ice: "aqua",
  Dragon: "geekblue",
  Steel: "dimgray",
};

export const typeColor = (type: string) => {
  let bgColor = "";
  Object.entries(ColorType).forEach(([key, value]) => {
    if (type === key) {
      bgColor = value;
    } else return "";
  });
  return bgColor;
};
