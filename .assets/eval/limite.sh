#!/bin/bash
# Spécifiez les URLs des vidéos YouTube à évaluer
VIDEOS=("https://www.youtube.com/watch?v=VID1" "https://www.youtube.com/watch?v=VID2" ...)

# Diffusion Présentation à 10h
start_hour=$(date -d '10:00' +%s)
while [ $(date +%s) -lt "$start_hour" ]; do
    sleep 1
done

echo "⏱️ Le CTF a commencé! Vous avez jusqu'à 18h pour participer."


# Définissez la date limite en timestamp Unix (1 novembre 2024)
CTF_DEADLINE=$(date -d '2024-11-01 00:00:00' +%s)

# Vérifiez si youtube-dl et ffprobe sont installés
if ! command -v youtube-dl &> /dev/null; then
echo "Erreur: 'youtube-dl' n'est pas installé. Veuillez l'installer pour évaluer les vidéos."
exit 1
fi
if ! command -v ffprobe &> /dev/null; then
echo "Erreur: 'ffprobe' n'est pas installé. Veuillez installer FFmpeg pour évaluer les vidéos."
exit 1
fi
# Évaluez les vidéos
for video in "${VIDEOS[@]}"; do
# Vérifiez si la date limite est passée
current_time=$(date +%s)
    if [ "$current_time" -gt "$CTF_DEADLINE" ]; then
echo "⌛️ La date limite du CTF est passée. L'évaluation est terminée."
exit 0
    fi
# Téléchargez la vidéo
youtube-dl "$video" -o "${video##*/}".mp4

    # Vérifiez la durée de la vidéo
duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${video##*/}".mp4)
    if [ "${duration}" -ne "68" ]; then
echo "La vidéo '$video' a une durée incorrecte (${duration}s, dû être 68s)."
continue
fi
# Effectuez d'autres vérifications ou évaluations personnalisées ici
# ...
done