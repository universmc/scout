document.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('.draggable');
    const dropArea = document.getElementById('drop-area');
  
    // Fonction pour gérer le drag
    draggables.forEach(item => {
      item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text', e.target.id);
      });
    });
  
    // Prévenir le comportement par défaut
    dropArea.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
  
    // Gestion du drop
    dropArea.addEventListener('drop', function(e) {
      e.preventDefault();
      const id = e.dataTransfer.getData('text');
      const draggedElement = document.getElementById(id);
      dropArea.appendChild(draggedElement);
      dropArea.innerHTML = `<p>Vous avez déposé ${draggedElement.textContent}</p>`;
    });
  });
  