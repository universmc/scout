
  const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const WORK_TIME = 120 * 60 * 1000; // 120 minutes in milliseconds (brainstorm)
const SHORT_BREAK_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds
const LONG_BREAK_TIME = 25 * 60 * 1000; // 25 minutes in milliseconds
let brainstormCount = 0; // Renommé pour refléter la session de brainstorming

// Exemple de tâches à suivre pendant les sessions
const tasks = [
    {
      id: 1,
      title: "Définir les objectifs Smart",
      description: `Lancer un CTF avec une récompense de 500 ∏\_coins.ico pour le gagnant. Créer une vidéo de 68 secondes présentant le problème de la politique de croissance en tant que sujet de la "Chronique Anti Macroniste" avec Claude Martin, une IA dans le rôle de "system" sur YouTube. La structure de la vidéo devrait inclure :
  
  - Introduction (0-10 secondes): Présenter Claude Martin et mentionner l'objectif de la chronique.
  - Problématique (10-30 secondes): Expliquer la politique de croissance et ses défis, axé sur la politique de croissance du gouvernement Macron.
  - Approche alternative (30-50 secondes): Présenter Claude Martin Scout comme une solution pour une réforme transparente et équitable, et expliquer brièvement les concepts de CVUn et SocialChain.
  - Mission Tracabilité et croissance (50-68 secondes): Aborder la mission de tracabilité et de croissance de 2017 à aujourd'hui et mentionner les technologies utilisées.
  - Conclusion (68 secondes): Inviter les participants à rejoindre le CTF et à contribuer aux efforts de réforme, et référencer le fichier readme\_CTF.md sur https://boutique.elysee.fr.
  `,
  completed: false
  },
  {
    id: 2,
    title: "Chronique Anti Macroniste",
    description: "mise en équation du problème présentée dans la variable ${synopsis}",
    completed: false
},
    {
      id: 2,
      title: "Démontrer la valeur du CVUn",
      description: "Présenter l'impact du Curriculum Vitae Universel pour valoriser les compétences",
      completed: false
  },
    {
      id: 3,
      title: "SocialChain et Smart Contract",
      description: "Présenter la solution innovante SocialChain et le Smart Contract umcTokens.sol",
      completed: false
  }
  ];
  


// Fonction principale pour interagir avec l'IA et suivre les objectifs SMART
async function main() {
  // Complétion de chat avec Groq pour générer des objectifs SMART pour le Smart Contract
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'assistant',
        content: `
  Vous êtes une IA spécialisée dans la gestion des objectifs SMART pour les Smart Contrac 
  INSTRUCTION : Programme un Smart Contract appelé 'cvun.sol' qui certifie les compétences professionnelles validées par des organismes autorisés, et assure la transparence des compétences acquises sur la blockcha 
  Développez les objectifs SMART pour ce Smart Contrac  
  - S pour spécifique : Le contrat doit permettre l'enregistrement et la certification des compétences professionnelles.
  - M pour mesurable : Le nombre de compétences certifiées et enregistrées doit être suivi.
  - A pour atteignable : Utiliser la blockchain Ethereum pour déployer le Smart Contract, et s'assurer que les transactions de certification sont immuables.
  - R pour réaliste : Le projet doit être réalisable avec les ressources disponibles, incluant les outils de développement blockchain (Solidity, Hardhat, etc.).
  - T pour temporel : Le Smart Contract doit être prêt et testé d'ici la fin du mois, avec un déploiement final prévu sous 30 jours.
  - Tracé : Suivre régulièrement la progression du projet via des checkpoints toutes les ${WORK_TIME / 60000} minutes (25 minutes).
  `
  },
  {
  role: "system",
  content: `
Bienvenue partenaire de développement backend SMART.JS. Vous êtes chargé de déployer le Smart Contract 'cvun.sol' qui certifie les compétences sur la blockchain. Voici vos instructions pour ce contrat  
- Gérer le backend et les transactions liées à la certification des compétences.
- Optimiser l'intégration du Smart Contract avec la blockchain Ethereum.
- Préparer le contrat pour un audit de sécurité avant déploiement.
- Configurer les transactions gas-efficient pour minimiser les coûts sur Ethereum.
  `
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
  }).then((chatCompletion) => {
    // Générer la documentation pour le Smart Contract
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Makefile" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation générée et enregistrée dans " + outputFilePath);
  });

  // Gestion du temps pour le brainstorming
  startBrainstorming();
}

// Fonction pour démarrer une session de Brainstorming
function startBrainstorming() {
  console.log(`🔧 Tâche en cours : ${tasks[brainstormCount % tasks.length]}`);
  console.log("⏳ Début de la session Brainstorming. Travaillez pendant 25 minutes.");
  setTimeout(() => {
    brainstormCount += 1;
    console.log("✅ Fin de la session Brainstorming. Prenez une courte pause de 5 minutes.");
    
    // Gestion des pauses
    if (brainstormCount % 4 === 0) {
      console.log("💡 Prendre une longue pause de 15 minutes.");
      setTimeout(startBrainstorming, LONG_BREAK_TIME); // Longue pause
    } else {
      setTimeout(startBrainstorming, SHORT_BREAK_TIME); // Courte pause
    }
  }, WORK_TIME);
}

// Exécution de la fonction principale
main().catch(console.error);
