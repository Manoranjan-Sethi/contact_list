let contactsArr = JSON.parse(localStorage.getItem('contactList'));
let favorites = JSON.parse(localStorage.getItem('favourites'))
 || [];

 contactsArr.map(function (ele, index) {
     let row = document.createElement('tr');

     let col1 = document.createElement('td');
    col1.innerText = ele.contactName

     let col2 = document.createElement('td');
     col2.innerText = ele.mobileNumber

     let col3 = document.createElement('td');
    col3.innerText = ele.selectType;
    let col4 = document.createElement('td');

    let btn = document.createElement("button");
    btn.innerText ="Add to Fav";
    btn.addEventListener("click", function(){
        addFav(ele)
    })
    col4.appendChild(btn);
    row.append(col1, col2, col3, col4);

    document.querySelector('#body').append(row);
 })

 function addFav(ele){
     alert("Your Favourite Contact is Saved")
     favorites.push(ele);
    localStorage.setItem('favourites', JSON.stringify(favorites))
 }