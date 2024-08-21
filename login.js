let loginForm = document.getElementById('login');
let signupForm = document.getElementById('signup');
let loginLink = document.getElementById('login-link');
let signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'flex';

  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  }, 8);
});

signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'flex';

  setTimeout(() => {
    loginForm.style.opacity = 0;
    signupForm.style.opacity = 1;
  }, 8);
});


/*JS Switch FORM to Spanish*/
let inicioForm = document.getElementById('iniciosesion');
let registroForm = document.getElementById('registro');
let loginToSpanish = document.getElementById('loginSp');
let signupToSpanish = document.getElementById('signupSp');

loginToSpanish.addEventListener('click', (event) =>
  {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'none';
  registroForm.style.display = 'none';
  inicioForm.style.display = 'flex';
  
  setTimeout(() => {
    registroForm.style.opacity = 0;
    inicioForm.style.opacity = 1;
  }, 8);
  });
  
  signupToSpanish.addEventListener('click', (event) =>
   {
   event.preventDefault();
   loginForm.style.display = 'none';
   signupForm.style.display = 'none';
   inicioForm.style.display = 'none';
   registroForm.style.display= 'flex';
   
   setTimeout(() => {
    inicioForm.style.opacity = 0;
    registroForm.style.opacity = 1;
  }, 8);
  });


/*Switch Reistrate <-> Inicia sesion*/
let inicioLink = document.getElementById('inicio-link');
let registroLink = document.getElementById('registro-link');


  inicioLink.addEventListener('click', (event) => {
    event.preventDefault();
    inicioForm.style.display = 'flex';
    registroForm.style.display= 'none';
    signupForm.style.display = 'none';
    loginForm.style.display = 'none';
  
    setTimeout(() => {
      registroForm.style.opacity = 0;
      inicioForm.style.opacity = 1;
    }, 8);
  });
  
  registroLink.addEventListener('click', (event) => {
    event.preventDefault();
    inicioForm.style.display = 'none';
    registroForm.style.display= 'flex';
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
  
    setTimeout(() => {
      inicioForm.style.opacity = 0;
      registroForm.style.opacity = 1;
    }, 8);
  });


  /*Back to english*/
let engLogin = document.getElementById('eng-login');
let engSignup = document.getElementById('eng-signup');

  engLogin.addEventListener('click', (event) => {
    event.preventDefault();
    inicioForm.style.display = 'none';
    registroForm.style.display= 'none';
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
  
    setTimeout(() => {
      signupForm.style.opacity = 0;
      loginForm.style.opacity = 1;
    }, 8);
  });
  
  engSignup.addEventListener('click', (event) => {
    event.preventDefault();
    inicioForm.style.display = 'none';
    registroForm.style.display= 'none';
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
  
    setTimeout(() => {
      loginForm.style.opacity = 0;
      signupForm.style.opacity = 1;
    }, 8);
  });
