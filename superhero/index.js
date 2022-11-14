const fetchCharacterApi="http://gateway.marvel.com/v1/public/characters"
// ?ts=1&apikey=a7e13f2741b35c439f5cf20bf426db3a&hash=b50a58578c0730f0d5fd64731ce4be7e
const ts=1;
const publicKey = "a7e13f2741b35c439f5cf20bf426db3a";
const hash = "b50a58578c0730f0d5fd64731ce4be7e";

var superheroArrayList=[];

const superheroList= document.getElementById("superhero-list");
const searchKey= document.getElementById("searchKey");


async function fetchAllSuperhero(){
    var resp= await fetch(`${fetchCharacterApi}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    var data= await resp.json();
    var results= data.data.results;

    superheroArrayList=results;

    addToList(results);
}
async function fetchsuperheroWithName(name){
    var resp= await fetch(`${fetchCharacterApi}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${name}`);
    var data= await resp.json();
    var results= data.data.results;
    superheroArrayList=results;
    
    addToList(results);
}

function addToList(results){
    superheroList.innerHTML= "";
    console.log(results);
    results.map((item)=>{
        const li =document.createElement('li'); 
        li.innerHTML=`<div>
                        <p> Name : ${item.name}</p> 
                            <img height="100" width="100" src="${item.thumbnail.path}.${item.thumbnail.extension}"/>
                            <a href="detail.html?id=${item.id}" target="_blank"><button>Click for Details</button></a>
                            <button onclick ="addItemToLS(${item.id})">Add to Favourite</button> 
                    </div>`
            superheroList.append(li);
    });
}
searchKey.addEventListener('keyup',()=>{
    const searchKeyVal= searchKey.value.trim();   //trim=for remove spacing in starting word
    if(searchKeyVal.length<2){
       return
    }

    fetchsuperheroWithName(searchKeyVal)
})
fetchAllSuperhero();

