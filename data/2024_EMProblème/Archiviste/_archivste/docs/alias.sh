universmc@Airdeuniversmc .zsh_config % vim aliases.sh 

alias src='cd /Volumes/umc/universmc/src/'  # Répertoire frontend
alias srv='cd /Volumes/umc/universmc/srv/'    # Répertoire backend
alias lab='cd /Volumes/umc/universmc/lab/'  # Répertoire Loratory
alias desk='cd /Users/universmc/Desktop/'  # Répertoire Desktop
alias pi='cd /Volumes/umc/universmc/pi/'    # Répertoire ia
alias data='cd /Volumes/umc/universmc/database/'    # Répertoire data
alias oc='cd /Volumes/umc/universmc/www/'
alias umc='cd /volumes/umc/universmc/'
alias admin='cd /volumes/umc/universmc/dashboard/'
alias test='cd /volumes/umc/universmc/build/_new/_test/'
alias menu='cd /Volumes/umc/universmc/src/html/menu/'

#alias pour la gestion des donée

alias new='mkdir'
alias add='touch'
alias edit='vim'


#alias pour les listes
# Alias pour la liste des fichiers avec des options spécifiques
alias ll='ls -lh'           # Liste les fichiers avec leurs tailles humainement lisibles
alias lt='ls -lt'           # Trie les fichiers par date de modification
alias lr='ls -lR'           # Liste les fichiers récursivement

# Alias pour la liste des fichiers avec du et des options spécifiques
alias dul='du -sh *'        # Liste la taille des fichiers et des répertoires du répertoire courant
alias duh='du -sh'          # Liste la taille du répertoire courant
alias dut='du -sh * | sort -h'  # Liste la taille des fichiers et des répertoires triés par taille

# Alias pour la liste avec l'arborescence (fonctionnalité de tree)
alias tree='tree -C'        # Liste les fichiers avec des couleurs
alias treed='tree -Cd'      # Liste les fichiers et les répertoires avec des couleurs