$(document).ready(function() {
  const forms = $('.needs-validation')
  $("#form").hide()
  $("#loading").hide()

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
});
// função para mostrar formulario e apresentar tela de loading
function showForm() {
  $("#table").hide()
  $("#loading").show()

  setTimeout(() => {
    $("#form").show();
    $("#loading").hide();
  }, 1000);
}
// função para esconder formulario e apresentar tela de loading
function hideForm() {
  $("#form").hide()
  $("#loading").show()

  setTimeout(() => {
    $("#table").show();
    $("#loading").hide();
  }, 1000);
}