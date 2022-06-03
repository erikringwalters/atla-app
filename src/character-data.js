let characters = [
  {
    id: 1,
    name: "Aang",
    element: "Air",
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
    element: "Water",
    photo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png",
    descritpion:
      "Katara is a waterbending master, born in the Southern Water Tribe to Chief Hakoda and his wife Kya. During her childhood, she was the only" +
      "waterbender living in the Southern Water Tribe. After losing her mother in a Fire Nation raid and her father left to battle against the Fire Nation in the " +
      "Hundred Year War, she was raised by her paternal grandmother Kanna alongside her older brother Sokka. As a teenager, Katara and her brother discovered the " +
      "young Air Nomad Avatar, Aang, who had been frozen in an iceberg with his bison, Appa, for one hundred years. In need of a waterbending master, the siblings and " +
      "Aang left the South Pole on a journey toward the Northern Water Tribe.",
  },
  {
    id: 3,
    name: "Sokka",
    element: "None",
    photo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Sokka.png",
    description: "Sokka was a Water Tribe warrior of the Southern Water Tribe and the son of Chief Hakoda and Kya. Following the death of his mother and his father's " + 
    "departure for war, Sokka was raised by his grandmother Kanna along with his younger sister Katara.",
  },
  {
    id: 4,
    name: "Zuko",
    element: "Fire",
    photo: "https://cdn.quotesgram.com/img/8/79/1872916203-5149850917_prince_zuko_xlarge.png",
    description: "Zuko is a Fire Nation royal and firebending master who reigned as Fire Lord from 100 AG until his abdication in 167 AG. He is" +
     " the eldest child and only son of Princess Ursa and Fire Lord Ozai. Originally the primary enemy of Team Avatar, Zuko devoted three years to" +
      " trying to capture the long-lost Avatar to end his banishment and regain his honor as Crown Prince of the Fire Nation. He is recognizable " +
       "by the distinctive burn scar on the left side of his face, which was given to him by his father, Ozai, shortly before his banishment as a" + 
       " result of an incident in which he unintentionally disrespected his father by speaking out of turn and refusing to duel him.",
  },
  {
    id: 5,
    name: "Toph",
    element: "Earth",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Toph_Beifong.png/220px-Toph_Beifong.png",
    description: "Toph Beifong is an earthbending master, one of the most powerful of her time, and the discoverer of metalbending. Blind since " + 
    "birth, Toph was constantly treated condescendingly because of her visual impairment, particularly by her overprotective parents, Lao and Poppy " + 
    "Beifong. Upon discovering badgermoles, earthbending animals who are also blind, she learned how to use earthbending as an extension of her senses." + 
    " This gave her the ability to \"see\" every vibration that passes through the ground.",
  },
];

export function getCharacters() {
  return characters;
}

export function getCharacter(id) {
  return characters.find((character) => character.id === id);
}

