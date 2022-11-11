const fetchCharacterApi="http://gateway.marvel.com/v1/public/characters"
ts=1;
const publicKey = "a7e13f2741b35c439f5cf20bf426db3a";
const hash = "b50a58578c0730f0d5fd64731ce4be7e";

const mainContainer=document.getElementById("main-container")

    
    var getParams=function(url){
        var queryParameters=url.split("?")[1];
       queryParameters= queryParameters.split("&");
        var resp={};
        queryParameters.forEach((item)=>{
            var temp=item.split("=");   
            resp[temp[0]]=temp[1];
        })
        return resp;
    }
    // var c= getParams(a);
    // console.log(c)
    async function fetchsuperheroWithId(id){
        var resp= await fetch(`${fetchCharacterApi}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
        var data= await resp.json();
        var results=data.data.results
            console.log(results)
        addToList(results)
    }
    function addToList(results){
        if(!results || results.length<1){
            return;
        }
        mainContainer.innerHTML= "";
        const item=results[0];  

            mainContainer.innerHTML=`<div>
                            <p> Name : ${item.name}</p> 
                                <img height="100" width="100" src="${item.thumbnail.path}.${item.thumbnail.extension}"/>
                                 <h1 >${item.description}</h1>  
                            
                        </div>`
            
    }