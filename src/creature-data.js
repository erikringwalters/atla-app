let creatures = [
  {
    id: 1,
    name: "Winged Lemur",
    photo:
      "https://i.pinimg.com/564x/d4/cf/6c/d4cf6c79ae6eac443745d7e1e135a080--the-last-avatar-avatar-the-last-airbender.jpg",
    description:
      "The winged lemur is a small, energetic animal that is critically endangered. Momo is the only known survivor of winged lemurs that survived" +
      " the Air Nomad Genocide, though the ring-tailed winged lemur, a closely related species, was discovered after the end of the Hundred Year War.",
  },
  {
    id: 2,
    name: "Flying Bison",
    photo:
      "https://cdn11.bigcommerce.com/s-5242sis1by/images/stencil/1280x1280/products/281/1039/Appa__66472.1595902694.png?c=2",
    description:
      "The flying bison, also known as sky bison and air bison, lived in the air temples along with the Air Nomads. The most notable flying " +
      "bison was Appa, Avatar Aang's animal guide and Team Avatar's primary means of long-distance transportation. Some bison also live in the Fire Nation, " +
      "tended to on an island by the Bhanti.",
  },
  {
    id: 3,
    name: "Turtle Duck",
    photo: "https://nhmu.utah.edu/sites/default/files/Turtleduck.png",
    description:
      "The turtle duck is a creature that lives in ponds throughout the world. It has an inclination for the warm weather of the Fire Nation, " +
      "but can also be found in the Earth Kingdom, as well as Avatar Korra Park in Republic City. At least two kinds of turtle ducks are known, with one group " +
      "lacking wings while the other has them.",
  },
  {
    id: 0,
    name: "",
    photo: "",
    description: "",
  },
];

export function getCreatures() {
  return creatures;
}

export function getCreature(id) {
  return creatures.find((creature) => creature.id === id);
}
