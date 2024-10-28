#!/bin/bash

# Fonction pour générer un nombre aléatoire de 75 chiffres
# Affichage de l'heure et du mode de développement
echo "💻$(date "+%H:%M:%S") /dev mode"
titre() {  
    echo "                               ╔═══════════════════════════════════════════════════════════╗";
    echo "                               ║               _                                           ║";
    echo "                               ║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___   ║";
    echo "                               ║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|  ║";
    echo "                               ║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__   ║";
    echo "                               ║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║";
    echo "                               ║                                                           ║";
    echo "                               ╚═══════════════════════════════════════════════════════════╝";
    echo ""; 

# Définition de la fonction 'menu' pour afficher le menu avec les options:

menu() {
    echo ""
    echo "   ╔════════════════════════════════════════╗    ╔══════════════════════════════════════════════════════════════════════════════════════════╗";
    echo "   ╠────────{ ✨ ASSISTANT✨ }──────────────╣    ║ [📗 📕 📒]                      🔷 Console -_ gpt-wallet _-  🔷                       [💫] ║";
    echo "   ║[IA]                                    ║    ╠──────────────────────────────────────────────────────────────────────────────────────────╣";
    echo "   ║                      💠                ║    ║                                                                                          ║";
    echo "   ║             ╲┈┈┈┈╱                     ║    ║                                                                                          ║";      
    echo "   ║             ╱▔▔▔▔╲                     ║    ║                                                                                          ║";
    echo "   ║            ┃┈▇┈┈▇┈┃                    ║    ║                                                                                          ║";
    echo "   ║          ╭╮┣━━━━━━┫╭╮                  ║    ║                                                                                          ║";
    echo "   ║          ┃┃┃┈┈┈┈┈┈┃┃┃                  ║    ║                                                                                          ║";
    echo "   ║          ╰╯┃┈┈┈┈┈┈┃╰╯                  ║    ║                                                                                          ║";
    echo "   ║            ╰┓┏━━┓┏╯                    ║    ║                                                                                          ║";
    echo "   ║             ╰╯  ╰╯                     ║    ║                                                                                          ║";
    echo "   ║    ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈         ║    ║                                                                                          ║";
    echo "   ║                                        ║    ║                                                                                          ║";
    echo "   ║ [>] Menu                               ║    ║                                                                                          ║";
    echo "   ║                                        ║    ║                                                                                          ║";
    echo "   ║        [Re] Check_News                 ║    ║                                                                                          ║";
    echo "   ║        [Q]  Questor                    ║    ║                                                                                          ║";
    echo "   ║        [C]  Chronique                  ║    ║                                                                                          ║";
    echo "   ║                                        ║    ║                                                                                          ║";
    echo "   ║        [GJ]  Gillet_Jaune              ║    ║                                                                                          ║";
    echo "   ║        [431] Repression                ║    ║                                                                                          ║";
    echo "   ║        [313] Escrow                    ║    ║                                                                                          ║";
    echo "   ║        [12]  Fraudes                   ║    ║                                                                                          ║";
    echo "   ║        [49]  Abuses_de_Pouvoir         ║    ║                                                                                          ║";
    echo "   ║                                        ║    ║                                                                                          ║";
    echo "   ║        [X]   cnccfp                    ║    ║                                                                                          ║";
    echo "   ║        [910] LREM                      ║    ║                                                                                          ║";
    echo "   ║                                        ║    ║                                                                                 [q] exit ║";
    echo "   ╠════════════════════════════════════════╣    ╠══════════════════════════════════════════════════════════════════════════════════════════╣";
    echo "   ║ [📱] [📷] [🎹] [🤖] [🗂️] [📊] [💰] [_]  ║    ║[🌴.📡]:<                                                                             [🛰] ║";
    echo "   ╚════════════════════════════════════════╝    ╚══════════════════════════════════════════════════════════════════════════════════════════╝"; 
    echo ""

read -p "Entrez votre choix : " commande

case $commande in

        Re)
            make checknews
            ;;
        Q)
            make questor
            ;;
        C)
            make chronique
            ;;
        GJ)
            make gilletjaune
            ;;
        313)
            make escrow
            ;;
        431)
            make repression
            ;;
        12)
            make dissolution
            ;;
        49)
            make constitution
            ;;

        exit)
            make exit
            ;;
        update)
            make update
            ;;

        Mandatory)
        make MandatoryAI_bot
            ;;
        gen)
            make generate
            ;;
        help)
            make hellp
            ;;
        menu)
            make menu
            ;;
        worker)
            make worker
            ;;
        groK)
            make groK
            ;;
        rm)
            clear
            menu
            ;;

        # Règle par défaut en cas d'entrée invalide
        *)
            echo "Entrée invalide"
            ;;
    esac
}
}
titre
menu  # Appel de la fonction pour afficher le menu: