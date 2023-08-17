let addContact = document.getElementById('add-contact');
let formTBody = document.querySelector('tbody');
let showForm = document.getElementById('show-form');
let camposFormulario = addContact.querySelectorAll('input');
let formIsEnable = true;
let novoContato = '';


showForm.addEventListener('click', function (e) {



    function closeForm() {

        if (formIsEnable == true) {
            showForm.innerHTML = '-'
            addContact.style.display = 'flex';
            formIsEnable = false;
        } else {
            showForm.innerHTML = '+'
            addContact.style.display = 'none';
            formIsEnable = true;
        }
    }

    closeForm();
})

addContact.addEventListener('submit', function (e) {

    let texto = `<tr><td>${camposFormulario[0].value}</td><td>${camposFormulario[1].value}</td><td>${camposFormulario[2].value}</td></tr>`
    novoContato += texto;
    formTBody.innerHTML = novoContato;

})




