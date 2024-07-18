export default function EhMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuáio não é maior de idade')
    }
}
function validaIdade(data){
   const dataAtuial = new Date;
   const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
   
   return dataAtuial >= dataMais18;
}