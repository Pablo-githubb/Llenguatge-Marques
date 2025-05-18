// Código para los comentarios - Versión corregida con JavaScript puro
document.addEventListener("DOMContentLoaded", function() {
  // Reemplazar jQuery con JavaScript nativo
  const primaryContainedButtons = document.querySelectorAll(".primaryContained");
  const textareas = document.querySelectorAll("textarea");
  const commentElements = document.querySelectorAll(".comment");
  
  // Añadir event listeners para los botones
  primaryContainedButtons.forEach(button => {
    button.addEventListener('click', function() {
      commentElements.forEach(comment => {
        comment.classList.add("commentClicked");
      });
    });
  });
  
  // Añadir event listeners para los textareas (corregido el evento keyup.enter)
  textareas.forEach(textarea => {
    textarea.addEventListener('keyup', function(event) {
      // Verificar si la tecla presionada es Enter (código 13)
      if (event.keyCode === 13) {
        commentElements.forEach(comment => {
          comment.classList.add("commentClicked");
        });
      }
    });
  });
  
  // Crear una implementación simple de comentarios sin depender de Vue.js
  const appElement = document.getElementById("app");
  
  if (appElement) {
    // Inicializar la aplicación de comentarios
    const commentForm = document.createElement("form");
    const commentInput = document.createElement("textarea");
    const commentButton = document.createElement("button");
    const commentList = document.createElement("ul");
    
    // Configurar elementos
    commentForm.className = "comment-form";
    commentInput.placeholder = "Add a comment";
    commentButton.textContent = "Add Comment";
    commentButton.className = "primaryContained";
    commentButton.type = "button";
    commentList.className = "comment-list";
    
    // Añadir elementos al DOM
    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentButton);
    appElement.appendChild(commentForm);
    appElement.appendChild(commentList);
    
    // Funcionalidad para añadir comentarios
    commentButton.addEventListener("click", function() {
      if (commentInput.value.trim() !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
      }
    });
    
    // Permitir enviar con Enter
    commentInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault();
        commentButton.click();
      }
    });
  }
});

// Código para el burger menu (Este código ya estaba correcto)
document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.getElementById('burger');
  const menu = document.getElementById('menu');
  
  if (burgerMenu && menu) {
    burgerMenu.addEventListener('click', function() {
      burgerMenu.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }
});