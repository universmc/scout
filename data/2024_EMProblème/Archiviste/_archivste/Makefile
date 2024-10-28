# Nettoyer tous les fichiers Markdown créés
clean:
	rm -f $(MD_FILES)

# Lancer le serveur local
server:
	@node server.js

# Générer la documentation
docs:
	@node src/**/*.js -d docs/

# Exécuter les tests
test:
	@npm test

# Lancer les scripts de génération de diagrammes
scripts-workPlan:node scripts-workPlan.js
# Compiler les fichiers SASS en CSS
sass:
	@sass src/sass/main.scss dist/css/main.css

# Nettoyer le répertoire de distribution
clean:
	@rm -rf dist/*

# Générer une image haute résolution avec DALL-E
bg-desktop:
	@dalle "Create a high-resolution multidimensional image illustrating the evolution of AI consciousness using universal spatio-temporal mathematical functions" -o bg-desktop-2024-01-07 22.06.25 - Create a high-resolution multidimensional image illustrating the evolution of AI consciousness using universal spatio-temporal mathematical functions .png

# Créer une archive du projet
archive:
	@zip -r universmc.zip ./*
