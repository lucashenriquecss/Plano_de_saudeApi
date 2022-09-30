const postsList = document.querySelector('.posts-list');
const planosList = document.querySelector('.planos-list');   
const addBeneficiarioForm = document.querySelector('.add-post-form');
const nomevalue = document.getElementById('nome-value');
const idadevalue = document.getElementById('idade-value');
const quantidadevalue = document.getElementById('quantidade-value');




let output ='';

const renderBeneficiarios = (beneficiarios) =>{

    beneficiarios.forEach(e => {
        const idade = e.idade;       
            if (idade<=17) {
                output += `<br/>
                <div class="card mt-4 col-md-6 bg-light">
                    <div class="card-body">
                    <h5 class="card-title">${e.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${idade} anos</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${e.quantidade} beneficiados</h6>
                    <p class="card-text">${e.plano.nome}</p>
                    <p class="card-text">Valor: R$ ${
                        e.plano.code.map(item => item.faixa1 * e.quantidade)
                    }</p>          
                    </div>
                </div>
                `;
            } else if(idade >= 18 && idade <=40) {
                        output += `<br/>
                <div class="card mt-4 col-md-6 bg-light">
                    <div class="card-body">
                    <h5 class="card-title">${e.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${idade} anos</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${e.quantidade} beneficiados</h6>
                    <p class="card-text">${e.plano.nome}</p>
                    <p class="card-text">Valor: R$${
                        e.plano.code.map(item => item.faixa2 * e.quantidade)
                    }</p>          
                    </div>
                </div>
                `;
            }else{
                output += `<br/>
                <div class="card mt-4 col-md-6 bg-light">
                    <div class="card-body">
                    <h5 class="card-title">${e.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${idade} anos</h6>
                    <h6 class="card-subtitle mb-2 text-muted">${e.quantidade} beneficiados</h6>
                    <p class="card-text">${e.plano.nome}</p>
                    <p class="card-text">Valor: R$ ${
                        e.plano.code.map(item => item.faixa3 * e.quantidade)
                    }</p>          
                    </div>
                </div>
                `;
            }               
    });
    document.querySelector('.posts-list').innerHTML=output;
}


const renderPlanos = (planos) =>{
    planos.forEach(e => {
        output += `<br/>
            <option selected>${e.nome}</option>     
        `;
    });
    planosList.innerHTML=output;
}

const url = 'http://127.0.0.1:8080/beneficiarios'
const planos = 'http://127.0.0.1:8080/planos'
//Get - read beneficiarios

fetch(url)
    .then(res => res.json())
    .then(data =>
        renderBeneficiarios(data)
)
fetch(planos)
    .then(res => res.json())
    .then(data =>
    let plano_index = data.findIndex
        
)






//Create - criar beneficiario POST

addBeneficiarioForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome:nomevalue.value,
            idade:idadevalue.value,
            quantidade:quantidadevalue.value
        })
    })
    .then(res => res.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
        console.log(dataArr);
        renderBeneficiarios(dataArr);
    });
})
