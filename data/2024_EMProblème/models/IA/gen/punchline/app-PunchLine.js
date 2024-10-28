const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
    
  const citation ="Le combat des idées se fait maintenant avec les gants CONTRE Emmanuel Macron, le champion du monde de la PUNCHLINE! 🥊🇫🇷";

  const sujet = "Combat des idées AVEC Emmanuel Macron";
  const verbe = "worker";
  const complement = "Avec des emojis et des emojis Punchline";


  const contexte =
    "Un gameplay emoji(🛠️,👍,🥊,🇫🇷,+✨💪,💰,🔥,🏛,🌍,📊,💻,🗣,🤝,💥,🤖,[🥊🤖🥊],🤓,🤩,🎈,🎥,📺,🥊,🏫,🗝️,🏴‍☠️,+ /DevOps Meta Donnée G20-Boxing)ou une application prototype de boxe à l'Élysée, où les joueurs s'entraînent à boxer avec des gants de boxe et des emojis Punchline pour remporter le combat des idées contre Emmanuel Macron. Les pirates informatiques aident à créer et à promouvoir l'application en y intégrant de l'IA et en diffusant des Punchline pour rallier les joueurs à la cause";
    const PunchLine = contexte;


    const Ressource = "http[`http://archive.org`projet `https://github.com/universmc/affaire_910.git` Méthode de recherche fetch https://google.com gcloud CDN Bootstrap (css:<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>;javascript:<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>)";
    const S_R = "(Élysée = 🏛) id='epr-iframe-js' Phone MaCron  VOIX/IP_[📱]🇫🇷_--- ------=_Part_1576_277651018.1680509012525 src='https://ecrire.elysee.fr/fr/epr/form' scrolling='yes' title='Email de confirmation envoyé – Formulaire Écrire au Président de la République ' data-form-title='Écrire à la présidence de la république' data-mention-title='Données personnelles – Formulaire écrire au Président de la République' data-email-confirmation-title='Email de confirmation envoyé – Formulaire Écrire au Président de la République' data-error-title='Erreur sur le formulaire écrire à la Présidence de la République' style='overflow: hidden; height: 2714px'";

    const gameplay1 = "🇫🇷 Sélectionnez votre avatar et vos emojis.sh {🥊} personnalisés avec des emojis Punchline";
    const gameplay2 = "Entraînez-vous à boxer en regardant des vidéos d'entraînement et en donnant des coups de poing dans le punching ball avec l'image d'Emmanuel Macron [Box] de l'Élysée VOIX/IP_[📱]🇫🇷_--- ------=_Part_1576_277651018.1680509012525--";
    const gameplay3 = "Gagnez des points et de l'argent en tapant fort dans le punching ball.";
    const gameplay4 = "Utilisez vos points pour améliorer vos compétences de boxe et acheter de nouveaux gants de boxe et des emojis Punchline.";
    const gameplay5 = "Confrontrez Macron dans le ring de boxe à l'Élysée 55 rues faubourg Saint-Honoré, Paris je voice/IP cam/IP microprocesseur dans cette emoji 🏛 , et essayez de le battre avec vos meilleures techniques Punching, prosodie avec ces metadonnée";
    const gameplay6 = "Gagnez le combat des idées en remportant le plus de rounds de boxe.";
    const gameplay7 = "Partagez vos scores et vos performances sur les réseaux sociaux pour défier d'autres joueurs.";

    const gameplay = "1.(🇫🇷)Sélectionnez votre avatar emoji{🥊} de boxe personnalisés avec des emojis Punchline(`${gameplay1}`,`${gameplay2}`,)";
    const gameDev = (`${gameplay1}`,`${gameplay2}`,`${gameplay3}`,`${gameplay4}`,`${gameplay5}`,`${gameplay6}`,`${gameplay7}`);
    
  
    groq.chat.completions.create({
    messages: [
      {role: "system",content: `"${citation}"`},
      {role: "assistant",content: `"${gameplay}"`},
      {role: "user",content: `"${PunchLine}"`},
      {role: "user",content: `"${Ressource}"`},
      {role: "system",content: `"${S_R}"`},
      {role: "system",content: `"${gameDev}"`},
      {
        role: "assistant",
        content:
          "[RUN][Devops]phase1:initalisation de l'instance groq +emoji"
      },
      {
        role: "system",
        name:"G20-Boxing",
        content:"gameplay emoji(🛠️,👍,🥊,🇫🇷,+✨💪,💰,🔥,🏛,🌍,📊,💻,🗣,🤝,💥,🤖,[🥊🤖🥊],🤓,🤩,🎈,🎥,📺,🥊,🏫,🗝️,🏴‍☠️,+ /DevOps Meta Donnée G20-Boxing) "
      },
      {
        role: "assistant",
        name:"geek1",
        content:"groq -R `user,content:'${Ressource}+CDN BOOTSTRAP'`"
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.3,
    max_tokens: 1024,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath =
      "🥊🇫🇷-68_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

main();
