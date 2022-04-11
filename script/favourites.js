let complete = JSON.parse(localStorage.getItem('favourites'));

complete.map(function(ele){
    let row = document.createElement('tr');

    let col1 = document.createElement('td');
    col1.innerText = ele.contactName

     let col2 = document.createElement('td');
     col2.innerText = ele.mobileNumber

     let col3 = document.createElement('td');
    col3.innerText = ele.selectType;

    row.append(col1, col2, col3);

    document.getElementById("body").append(row);
});