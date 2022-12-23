const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

/* show input error message */
function showError(input,message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

/* show input success message */
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

/* check email */
function checkEmail(input){
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(regex.test(input.value.trim())){
    showSuccess(input)
  }
  else{
    showError(input,'email is not valid')
  }
}

/* check require field */
function checkRequire(inputArr){
  inputArr.forEach((input) => {
    if (input.value.trim()==='') {
      showError(input,`${getFieldName(input)} is require`)
    }
    else{
      showSuccess(input);
    }
  });
}

/* check input length */
function checkLength(input,min,max){
  if(input.value.length < min){
    showError(input,`${getFieldName(input)} must be at least ${min} characters`)
  }
  else if (input.value.length>max){
    showError(input,`${getFieldName(input)} must be less than ${min} characters`)
  }
  else{
    showSuccess(input);
  }
}

/* get field name */
function getFieldName(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

/* check password match */
function checkPasswordConfirm(input1,input2){
  if(input1.value !== input2.value){
    showError(input2,'password do not match')
  }
}

/* even listener */
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  checkRequire([username,email,password,confirmPassword]);
  checkLength(username,4,16);
  checkLength(password,6,24);
  checkEmail(email);
  checkPasswordConfirm(password,confirmPassword);
})