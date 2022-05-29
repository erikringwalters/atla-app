let characters = [
  {
    id: 1,
    name: "Aang",
    photo: "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png",
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
    descritpion:
      "Katara is a waterbending master, born in the Southern Water Tribe to Chief Hakoda and his wife Kya. During her childhood, she was the only" +
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
  },
];

export function getCharacters() {
  return characters;
}

export function getCharacter(id) {
  return characters.find((character) => character.id === id);
}
