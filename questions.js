//Creating an array, where we are passing numbers, questions, options and answers...

let questions = [
    {
        number: 1,
        question: "What is Persephone's most damaging non-ultimate ability?",
        answer: "Bone Rush",
        options: [
            "Pomegranate Seeds",
            "Harvest",
            "Flourish",
            "Bone Rush"
        ]
    },
    {
        number: 2,
        question: "What was the setup that won the last match of the SWC 2021?",
        answer: "Cthulhu, Camazotz, Morrigan, Kuzenbo & Cupid",
        options: [
            "Cthulhu, Camazotz, Morrigan, Kuzenbo & Cupid",
            "Cu Chulainn, Nemesis, Scylla, Sobek & Apollo",
            "Guan Yu, Tsukuyomi, Scylla, Ymir & Hachiman",
            "Achilles, Tsukuyomi, Morrigan, Sobek & Cupid"
        ]
    },
    {
        number: 3,
        question: "What was the most banned magical God in the SWC 2021?",
        answer: "Yemoja",
        options: [
            "Hel",
            "Yemoja",
            "Persephone",
            "Ra"
        ]
    },
    {
        number: 4,
        question: "What was the most banned physical God in the SWC 2021?",
        answer: "Set",
        options: [
            "Set",
            "Guan Yu",
            "Cupid",
            "Ravana"
        ]
    },
    {
        number: 5,
        question: "Who was, according to the poll, the MVP in the last match of the SWC 2021?",
        answer: "Paul",
        options: [
            "ScaryD",
            "Zapman",
            "Paul",
            "Neilmah"
        ]
    },
    // {
    //     number: 6,
    //     question: "Who was top damage in the last match between PK and Ghost Gaming (SWC 2020)?",
    //     answer: "Zapman (Cupid)",
    //     options: [
    //         "Zapman (Cupid)",
    //         "QvoFred (Camazotz)",
    //         "ScaryD (Cthulhu)",
    //         "Paul (The Morrigan)"
    //     ]
    // },
    // {
    //     number: 7,
    //     question: "Which of these gods are going to be reworked sometime during Season 8?",
    //     answer: "Persephone",
    //     options: [
    //         "Janus",
    //         "Vulcan",
    //         "Persephone",
    //         "Chronos"
    //     ]
    // },
    // {
    //     number: 8,
    //     question: "What was the most popular Hunter during Season 7?",
    //     answer: "Heimdallr",
    //     options: [
    //         "Rama",
    //         "Xbalanque",
    //         "Heimdallr",
    //         "Apollo"
    //     ]
    // },
    // {
    //     number: 9,
    //     question: "Which were Dardez's (SSG's Mid Laner) most used picks during the SPL?",
    //     answer: "Aphrodite, Hera & The Morrigan",
    //     options: [
    //         "Hel, Persephone & Chang'e",
    //         "Aphrodite, Hera & Chang'e",
    //         "Aphrodite, The Morrigan & Chang'e",
    //         "Aphrodite, Hera & The Morrigan"
    //     ]
    // },
    // {
    //     number: 10,
    //     question: "Who is, according to polls, the most obnoxious mage healer?",
    //     answer: "Aphrodite",
    //     options: [
    //         "Aphrodite",
    //         "Chang'e",
    //         "Hel",
    //         "Ra"
    //     ]
    // },
    // {
    //     number: 11,
    //     question: "What were the last 5 Warriors released up until 2020?",
    //     answer: "Cu Chulainn, Achilles, King Arthur, Horus & Mulan",
    //     options: [
    //         "Cu Chulainn, Achilles, King Arthur, Horus & Mulan",
    //         "Nike, Cu Chulainn, Horus, King Arthur & Mulan",
    //         "Cu Chulainn, Achilles, Horus, King Arthur & Mulan",
    //         "Nike, Cu Chulainn, Horus, King Arthur & Mulan"
    //     ]
    // },
    // {
    //     number: 12,
    //     question: "What is the name of Tsukuyomi's second ability?",
    //     answer: "Kusarigama",
    //     options: [
    //         "Piercing Moonlight",
    //         "Shingetsu & Mangetsu",
    //         "Dark Shuriken",
    //         "Kusarigama"
    //     ]
    // },
    // {
    //     number: 13,
    //     question: "Which of the following gods apply Madness CC with their kits?",
    //     answer: "Serqet, Cthulhu, Hun Batz & Discordia",
    //     options: [
    //         "Serqet, Hades, Danzaburou & Discordia",
    //         "Serqet, Cabrakan, Hun Batz & Discordia",
    //         "Serqet, Cthulhu, Hun Batz & Discordia",
    //         "Serqet, Cthulhu, Danzaburou & Discordia"
    //     ]
    // },
    // {
    //     number: 14,
    //     question: "Which of the following gods have a slow of 90%?",
    //     answer: "Yemoja",
    //     options: [
    //         "Arachne",
    //         "Yemoja",
    //         "Ymir",
    //         "Baron Samedi"
    //     ]
    // },
    // {
    //     number: 15,
    //     question: "What was fineok's (Ghost Gaming's Solo Laner) pick in the last match of the SWC?",
    //     answer: "Cu Chulainn",
    //     options: [
    //         "Cthulhu",
    //         "Guan Yu",
    //         "Cu Chulainn",
    //         "Osiris"
    //     ]
    // },
    // {
    //     number: 16,
    //     question: "Which of the following abilities deal the most damage at level 1?",
    //     answer: "Celestial Beam (Ra's First Ability)",
    //     options: [
    //         "Crush (Scylla's Second Ability)", //100 +90%
    //         "Back Off! (Aphrodite's Second Ability)", //80 +70%
    //         "Wild Witchcraft (Baba Yaga's First Ability)", //100 +70%
    //         "Celestial Beam (Ra's First Ability)" //95 +100%
    //     ]
    // },
    // {
    //     number: 17,
    //     question: "Which of the following gods have the longest stun?",
    //     answer: "Amaterasu",
    //     options: [
    //         "Amaterasu", //2s
    //         "Anhur", //1.5s
    //         "Aphrodite", //1s
    //         "Ah Puch" //1.5s
    //     ]
    // },
    // {
    //     number: 18,
    //     question: "What was the most banned Mage in the SWC 2021?",
    //     answer: "Hel",
    //     options: [
    //         "Aphrodite",
    //         "Ra",
    //         "Hel",
    //         "Persephone"
    //     ]
    // },
    // {
    //     number: 19,
    //     question: "What was the most banned Warrior in the SWC 2021?",
    //     answer: "Guan Yu",
    //     options: [
    //         "Cu Chulainn",
    //         "Guan Yu",
    //         "Achilles",
    //         "Amaterasu"
    //     ]
    // },
    // {
    //     number: 20,
    //     question: "Which of these gods have the longest Taunt at max rank?",
    //     answer: "Athena",
    //     options: [
    //         "Erlang Shen", //1.2s
    //         "Serqet", //1.4s
    //         "Danzaburou", //1s
    //         "Athena" //2s
    //     ]
    // },
];