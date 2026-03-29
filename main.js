//HAMBUGER MENU
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})




let filterInput = document.getElementById('table-input');
filterInput.addEventListener('keyup', filterProducts);
const login = document.getElementById('login').addEventListener('click', function(){
    window.open('login.html','popup','width=801,height=800');
    return false;
});

function filterProducts(){
    let filterValue = document.getElementById('table-input').value.toUpperCase();
    let tableData = document.getElementById('tables');
    let data = tableData.querySelectorAll('table');
    for(let i = 0; i < data.length; i++){
        let a = data[i].getElementsByTagName('caption')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            data[i].style.display = '';

        } else{
            data[i].style.display = 'none';
        }
    }
    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');
    for(let j = 0; j < tr.length; j++){
        let td = tr[j].getElementsByTagName('td')[0];
        if(td){
            let textValue = td.innerHTML || td.textContent;
            if(textValue.toUpperCase().indexOf(filterValue) > -1){
                tr[j].style.display = '';
            }else{
                tr[j].style.display = 'none';
            }
        }
    }
}
