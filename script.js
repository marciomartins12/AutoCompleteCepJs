async function procuraCep(cep){
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");
    const ddd = document.querySelector("#numero");
    const ceperrado = document.querySelector(".cep-errado");
    const logradouro = document.querySelector("#endereco");
    const bairro = document.querySelector("#bairro");
    ceperrado.innerHTML="";
    try{
        const cepbusca = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const cepConvertido= await cepbusca.json();

    
        cidade.value=cepConvertido.localidade;
        estado.value=cepConvertido.uf;
        ddd.value=`(${cepConvertido.ddd})`;
        logradouro.value = cepConvertido.logradouro;
        bairro.value = cepConvertido.bairro;

        if(cepConvertido.erro){
            ceperrado.innerHTML=`<p>Cep inválido. Tente novamente</p>`;
            limpar();

        }
    
        
    }catch(erro){
        ceperrado.innerHTML=`<p>Cep inválido. Tente novamente (exemplo: 65245000)</p>`;
        limpar();
        if(cidade.value==""){
            ceperrado.innerHTML="Exemplo: 65245000";
        }
    }
  
}
const cep = document.querySelector("#cep");
cep.addEventListener("focusout",()=>{
    procuraCep(cep.value)
})
function limpar(){
    cidade.value="";
    ddd.value="";
    estado.value="";
    logradouro.value="";
    bairro.value="";
}