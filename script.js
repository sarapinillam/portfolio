let menuopen = 'false';

function openmenu(value) {

    if (menuopen=='false'){
        document.getElementById('dropdownMenu').style.display = 'grid';
        menuopen = 'true';
    }

    else{
        document.getElementById('dropdownMenu').style.display = 'none';
        menuopen = 'false';
    }
}

function closemenu(){
    if (menuopen=='true'){
        document.getElementById('dropdownMenu').style.display = 'none';
        menuopen = 'false';
    }
}