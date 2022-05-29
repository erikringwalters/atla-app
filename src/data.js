let characters = [
  {
    id: 1,
    name: "Aang",
    photo: "https://en.wikipedia.org/wiki/Aang#/media/File:Avatar_Aang.png",
    description:
      "Aang was a male Air Nomad born in 12 BG and the Avatar during the Hundred Year War, succeeding" +
      " Avatar Roku and preceding Avatar Korra. As the Avatar of his time, he was the only person capable of using all" +
      " four bending arts: airbending, waterbending, earthbending, and firebending. He was also one of a select few Avatars" +
      " and one of the first in many cycles to learn the ancient art of energybending and the first Avatar known to have actively used the technique.",
  },
  {
    id: 2,
    name: "Katara",
    photo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png",
    descritpion: "Katara is a waterbending master, born in the Southern Water Tribe to Chief Hakoda and his wife Kya. During her childhood, she was the only" + 
    "waterbender living in the Southern Water Tribe. After losing her mother in a Fire Nation raid and her father left to battle against the Fire Nation in the " +
    "Hundred Year War, she was raised by her paternal grandmother Kanna alongside her older brother Sokka. As a teenager, Katara and her brother discovered the " + 
    "young Air Nomad Avatar, Aang, who had been frozen in an iceberg with his bison, Appa, for one hundred years. In need of a waterbending master, the siblings and " + 
    "Aang left the South Pole on a journey toward the Northern Water Tribe.",
  },
  {
    id: 0,
    name: "",
    photo: "",
    description: "",
}
];

let creatures = [
  {
    id: 1,
    name: "Winged Lemur",
    photo:
      "https://static.wikia.nocookie.net/p__/images/5/54/Tumblr_p3utnb393U1tyjd90o1_400.png/revision/latest?cb=20210227080156&path-prefix=protagonist",
    description:
      "The winged lemur is a small, energetic animal that is critically endangered. Momo is the only known survivor of winged lemurs that survived" +
      " the Air Nomad Genocide, though the ring-tailed winged lemur, a closely related species, was discovered after the end of the Hundred Year War.",
  },
  {
    id: 2,
    name: "Flying Bison",
    photo:
      "https://static.wikia.nocookie.net/p__/images/0/06/Appa.png/revision/latest?cb=20180813222453&path-prefix=protagonist",
    description:
      "The flying bison, also known as sky bison and air bison, lived in the air temples along with the Air Nomads. The most notable flying " +
      "bison was Appa, Avatar Aang's animal guide and Team Avatar's primary means of long-distance transportation. Some bison also live in the Fire Nation, " +
      "tended to on an island by the Bhanti.",
  },
  {
      id: 3,
      name: "Turtle Duck",
      photo: "https://nhmu.utah.edu/sites/default/files/Turtleduck.png",
      description: "The turtle duck is a creature that lives in ponds throughout the world. It has an inclination for the warm weather of the Fire Nation, " + 
      "but can also be found in the Earth Kingdom, as well as Avatar Korra Park in Republic City. At least two kinds of turtle ducks are known, with one group " +
       "lacking wings while the other has them.",
  },
  {
      id: 0,
      name: "",
      photo: "",
      description: "",
  }
];

export function getCharacters() {
    return characters;
  }

  export function getCharacter(id) {
    return characters.find(
        (character) => character.id === id
    );
}

export function getCreatures() {
    return creatures;
  }

  export function getCreature(id) {
    return creatures.find(
        (creature) => creature.id === id
    );
}
