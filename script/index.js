document.querySelector('#form').addEventListener('submit', formSubmit);
let contactsArr = JSON.parse(localStorage.getItem('contactList'))|| [];

function formSubmit(event) {
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let number = document.querySelector('#number').value;
    let type = document.querySelector('#type').value;

    let contactsObj = {
        contactName : name,
        mobileNumber : number,
        selectType : type,
    };

    contactsArr.push(contactsObj);
    localStorage.setItem('contactList', JSON.stringify(contactsArr));
    document.querySelector('#name').value = '';
    document.querySelector('#number').value = '';
    document.querySelector('#type').value = '';

    alert("Your Contact is Saved")
}