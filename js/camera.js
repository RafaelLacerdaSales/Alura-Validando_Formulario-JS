const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const enviarFoto = document.querySelector('[data-enviar]');

let imagemURL = '';


// Não tenho webCam
botaoIniciarCamera.addEventListener('click', async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio: false})
    
    botaoIniciarCamera.style.display = 'none';
    campoCamera.style.display = 'block';

    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawimage(video, 0, 0, canvas.width, canvas.height);


    imagemURL = canvas.toDataURL('image/jpeg');

    campoCamera.style.display = 'none';
    mensagem.style.display = 'block';
})

enviarFoto.addEventListener('click', () =>{
    const recebendoDadosExistetes = localStorage.getItem('cadastro');
    const consverteRetorno = JSON.parse(recebendoDadosExistetes);

    consverteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(consverteRetorno));

    window.location.href = './abrir-conta-form-3.html';
})
 
