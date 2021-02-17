// witness and attorney toggler
function toggler(divId, element) {
    document.getElementById(divId).style.display = element.value == 1 ? 'flex' : 'none';
}

const addForm = (ev) => {
    ev.preventDefault();
    let inquiryForm = {
        salutation: document.getElementById('salutation').value,
        firstName: document.getElementById('first').value,
        lastName: document.getElementById('last').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        who: document.getElementById('who').value,
        what: document.getElementById('what').value,
        where: document.getElementById('where').value,
        when: document.getElementById('when').value,
        witness: document.getElementById('witness').value,
        witnessFirstName: document.getElementById('witnessFirstName').value,
        witnessLastName: document.getElementById('witnessLastName').value,
        witnessPhone: document.getElementById('witnessPhone').value,
        attorney: document.getElementById('attorney').value,
        attorneyName: document.getElementById('attorneyName').value,
        practiceName: document.getElementById('practiceName').value,
        website: document.getElementById('website').value
    }
    document.getElementById('form').reset();
    let pre = document.getElementById('form-data');
    pre.textContent = '\n' + JSON.stringify(inquiryForm, '\t', 2)
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', addForm)
})