function valid (form) {
    var check = false;
    var name = form.usernames.value;
    var password = form.password.value;
    var state = form.state.value;
    if(name == "" || name ==" "){
        check = "Введіть своє ім'я";
    }
    else if(password== "" || password ==" "){
        check = "Введіть свій пароль";
    }
    else if(password.length<6){
        check = "Пароль менше 6 символів";
    }
    else if(state==""){
        check = "Вкажіть стать";
    }
    if(check)
        alert(check);    
}