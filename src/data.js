const menu = [
  {
    id: 1,
    title: "Eternals",
    category: "Fantasy",
    tktprice: 150,
    year: 2021,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZBNOF324-MHMcNrSD8mFRBD3eEfj5lfVT69NMC16cFxLH0iku",
    desc: `The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.`,
  },
  {
    id: 2,
    title: "Black Panther: Wakanda Forever",
    category: "Adventure",
    tktprice: 160,
    year: 2022,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3flh7H9slGqX_PluFfob3askiehn2iRkzzUP8IkF&usqp=CAE&s",
    desc: `Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom. `,
  },
  {
    id: 3,
    title: "Shang-Chi and the Legend of the Ten Rings",
    category: "Adventure",
    tktprice: 269,
    year: 2021,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZgQVsb25OubguJ-x_ZwTFjI1VKxpLg0nc9EZ2T88&usqp=CAE&s",
    desc: `Shang-Chi, a martial artist, lives a quiet life after he leaves his father and the shadowy Ten Rings organisation behind. Years later, he is forced to confront his past when the Ten Rings attack him.`,
  },
  {
    id: 4,
    title: "Doctor Strange in the Multiverse of Madness",
    category: "Adventure",
    tktprice: 799,
    year: 2022,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5IuxfEt-WmUIrpJldszdRJFfTubSEeQVMVNuv63Z0PNfvbWV",
    desc: `Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.`,
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    category: "Action",
    tktprice: 169,
    year: 2021,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlaSA0HT1cdGVParO9Ixaq-w6Hu2u1mAWSh9IGeV48&usqp=CAE&s",
    desc: `With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.`,
  },
  {
    id: 6,
    title: "Venom: Let There Be Carnage",
    category: "Sci-fi",
    tktprice: 999,
    year: 2021,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwv-tIaNSf3BW3wGfvG8TvpHmt92aObz9MxxROvVgsW8mlmQw",
    desc: `Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.`,
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    category: "Action/Sci-fi ",
    tktprice: 179,
    year: 2019,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIAHMwLj-HBbf9hQSu9FNQfI0IW_p8gHWkcbPs8OwGg&s",
    desc: `Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe..`,
  },
  {
    id: 8,
    title: "Iron Man 3",
    category: "Adventure",
    tktprice: 999,
    year: 2013,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3qJgYSVCFRB4XHojaNbMwMSBXV1zjxjl-1vq6LWZTg&s",
    desc: `Plagued with worry and insomnia since saving New York from destruction, Tony Stark (Robert Downey Jr.), now, is more dependent on the suits that give him his Iron Man persona -- so much so that every aspect of his life is affected, including his relationship with Pepper (Gwyneth Paltrow). After a malevolent enemy known as the Mandarin (Ben Kingsley) reduces his personal world to rubble, Tony must rely solely on instinct and ingenuity to avenge his losses and protect the people he loves.`,
  },
  {
    id: 9,
    title: "Thor",
    category: "Fantasy",
    tktprice: 199,
    year: 2011,
    img: "http://www.movienewsletters.net/photos/113522R1.jpg",
    desc: `As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat.`,
  },
  {
    id: 10,
    title: "The Incredible Hulk",
    category: "Sci-fi",
    tktprice: 999,
    year: 2008,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fowkYthnyxU9HCHPV8ET5GED82j-16B8ETtlG3KZ&usqp=CAE&s",
    desc: `Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).`,
  },
];

export default menu;
