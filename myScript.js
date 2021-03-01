const onClick = document.querySelector(".button")

const jokes = [
    "What's the best thing about Switzerland? I don't know, but their flag is a huge plus.",
    "Where do you find a cow with no legs? Right where you left it.",
    "Why aren't koalas actual bears? They don't meet the koalafications.",
    "What's the difference between a hippo and a zippo? One is really heavy, and the other is a little lighter.",
    "What do Alexander the Great and Winnie the Pooh have in common? Same middle name.",
    "What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing.",
    "I used to be addicted to soap. But I'm clean now.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
    "How many apples grow on a tree? All of them!",
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    "I like telling Dad jokes. Sometimes he laughs!",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "They all laughed when I said I wanted to be a comedian. Well, they're not laughing now!"
]

function getJoke() {
    let randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('displayJoke').innerHTML = jokes[randomNumber];
}

onClick.addEventListener("click", getJoke);