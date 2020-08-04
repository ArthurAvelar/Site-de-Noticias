document.getElementById('btn-pesquisa').addEventListener('click',executapesquisa);
function executapesquisa(){
    
    var query = document.getElementById('txtpesquisa').value;
    console.log(query);
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibiNoticias;
    xhr.open('GET',`https://newsapi.org/v2/everything?q=${query}&apiKey=ff2b457f4e63497fa930660c0de4b740`);
    xhr.send();

}
function exibirNoticias() {

    var noticias = request.response;

    console.log(noticias);

    const inserirNoticias = document.getElementById('noticias');
    for (var i = 2; i < 5; i++) {
       inserirNoticias.innerHTML +=



          `   
         
          <div id="jv" class="row" >
             <div class="col-md-13">
                <div class="card">
                      <img id="mg" class="card-img-top" src="${noticias.articles[i].urlToImage}" alt="Card image cap">
                      <h1 id="tt" class="card-title">${noticias.articles[i].title}"</h4>
                      <h5 id="tv" class="card-text">${noticias.articles[i].content}</p>
                      <a  href="${noticias.articles[i].url}" 
                         target="_blank" class="btn btn-primary rounded-0 mb-2">Read More</a>
                </div>
                
             </div>
          </div>
          

       
       `


    }
}
function exibiNoticias () {
    let boxNoticias = document.getElementById('noticias')
    let texto = '';
    boxNoticias.innerHTML = texto;

    let dados =JSON.parse (this.responseText);
    for( i=0; i<5;i++){
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);
        console.log(noticia)
        
        texto = texto + `  
        <div class="row ">
        <div id="jv" class="col-12">
            <div class="box-noticias" id="box-noticias">
                    <img id="mg"class="imagem-noticia" src="${noticia.urlToImage}" alt="">
                    <h1 id="tt" class="titulo-noticia"> ${noticia.title}</h1>
                    <h5 id="tv" class="texto-noticia">${noticia.description}</h5>
                    <a id="lm"class="leiamais"  href="${noticia.url}" target="_blank" >Leia mais..</a>
                    <h6 class="data"> Publicado em:${data.toLocaleDateString()}   </h6>
                        <h6 class="fonte" >Fonte:${noticia.source.name}</h6>
                    
            </div>
        </div>        
    </div>     
    

    <div class="row linha ">
        <div class="col-10">
        
        </div>
     </div>
    
        `;
    };
    
    boxNoticias.innerHTML = texto;
}

function menu(texto){
    console.log(texto);
    let xhr = new XMLHttpRequest ();
    
    xhr.open('GET',`https://newsapi.org/v2/everything?q=${texto}&apiKey=ff2b457f4e63497fa930660c0de4b740`);
    xhr.onload = exibiNoticias;
    xhr.send();
     
    


    
    
    
}



document.getElementById('btn-salvar').addEventListener('click', addpesquisa);
function addpesquisa(){
    alert("ITEM SALVO COM SUCESSO")
    let valor = document.getElementById('txtpesquisa').value;
    let pesquisasfeitas =[];

    let db_pesquisas = localStorage.getItem('db_pesquisas');
    if(db_pesquisas){
        pesquisasfeitas = JSON.parse(db_pesquisas);
    }

    let novapesquisa ={"pesquisa":valor};
    pesquisasfeitas.push(novapesquisa);
    localStorage.setItem('db_pesquisas' , JSON.stringify(pesquisasfeitas))
      salvar();
      
    
  };
  function salvar(){

    let textoHTML='';
    let tela = document.getElementById('elementos');

    let pesquisasfeitas = [];
    let db_pesquisas = localStorage.getItem('db_pesquisas');
    if(db_pesquisas){
        pesquisasfeitas = JSON.parse(db_pesquisas)
    }

    for(i=0 ; i<pesquisasfeitas.length;i++){
        var texto=pesquisasfeitas[i];
        textoHTML+=` <button id="pb" class="btn btn-outline-success my-2 my-sm-o" onclick= "menu('${pesquisasfeitas[i].pesquisa}')">${pesquisasfeitas[i].pesquisa}</button>`;
        
    
    }
    

    tela.innerHTML = textoHTML
    document.getElementById("btn-salvar").addEventListener("click",function(){
        var lista=document.getElementById("elementos");
        var texto=document.getElementById("txtpesquisa"),value;
         var li=document.createElement("button");~
         console.log(texto.value);
        });
        



}

salvar();
