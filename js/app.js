function campoRequerido(){
    let input = document.getElementById('nombre');
    if (input.value === '' ){
        input.className = 'form-control is-invalid';
    }else{
        input.className = 'form-control is-valid';
    }
}