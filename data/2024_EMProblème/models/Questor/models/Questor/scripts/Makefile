# Makefile

COMMANDE1_MSG="✨ Menu ✨"
COMMANDE1_MSG="✨ Lancement de l'application✨"
COMMANDE2_MSG="✨ Initialisation de la session de Brainstormoming✨ "
COMMANDE3_MSG="✨ brainstorming generation d idées ✨"
economy_MSG="✨ Generation De l'étude d'impact sur l'economy✨"
eduction_MSG="✨ Generation De l'étude d'impact sur l'eduction✨"
environment_MSG="✨ Generation De l'étude d'impact sur environment✨"
marketplace_MSG="✨ Generation De l'étude d'impact sur Commerce✨"
algo_MSG="✨ Generation De l'étude d'impact sur L'algorithme✨"
COMMANDE3marketplace_MSG="✨ brainstorming generation d idées ✨"

# Variables pour les scripts et répertoires
SCRIPTS_DIR := ./scripts
BUILD_DIR := ./build

gpt-wallet:
	@echo "${gptwallet_MSG}"
	@npm run start

update:
	@echo "✨ Mise en état du dossier sur github✨"
	@git add .
	@git commit -m "test"
	@git push
	@echo "✨ Mise à jour terminée✨"

marketplace:
	@echo "${marketplace_MSG}"
	@node execute.js marketplace

education:
	@echo "${education_MSG}"
	@node execute.js education

economy:
	@echo "${economy_MSG}"
	@node execute.js economy

environment:
	@echo "${environment_MSG}"
	@node execute.js environment
algo:
	@echo "${algo_MSG}"
	@node execute.js algo

# Par défaut : créer le répertoire build si non présent
.PHONY: all
all: init

# Créer le répertoire de build s'il n'existe pas
init:
	mkdir -p $(BUILD_DIR)

# Générer l'image et la documentation pour un sujet
.PHONY: generate
generate:
	@read -p "Enter subject (education, economy, environment, marketplace, algo): " subject; \
	node $(SCRIPTS_DIR)/execute.js $$subject

# Nettoyer les fichiers générés
.PHONY: clean
clean:
	rm -rf $(BUILD_DIR)

# Créer les alias pour les commandes dans le shell (via aliases.sh)
.PHONY: setup-aliases
setup-aliases:
	./aliases.sh

# Exécuter l'image et la documentation pour un sujet depuis une commande Makefile
run:
	@$(MAKE) generate

# Afficher l'aide
.PHONY: help
help:
	@echo "Commands:"
	@echo "  make init             - Créer le répertoire build"
	@echo "  make generate         - Générer une image et une documentation pour un sujet"
	@echo "  make clean            - Supprimer les fichiers générés"
	@echo "  make setup-aliases    - Installer les alias pour exécuter les scripts facilement"
	@echo "  make run              - Exécuter les scripts avec un sujet"
