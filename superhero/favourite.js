
var list = document.getElementById('list');

async function getAllSuperhero(){
	var favouriteSuperHeroArray = await getItemFromLS();
	favouriteSuperHeroArray.map(async (item)=>{
		let resp = await fetch(`https://gateway.marvel.com/v1/public/characters/${item}?ts=${ts}&apikey=${publicKey}&hash=${hashKey}`);
		let data = await resp.json();
		data = data.data.results[0];
		var li = document.createElement('li');
        li.innerHTML = `<div data-id=${data.id} class="abc"><p>${data.name}</p>
		<img height="100" width="100" src="${data.thumbnail.path}.${data.thumbnail.extension}"/>
		<button class='removeFromFav'>Click for remove</button>
		</div>`; 


        list.append(li);
        li.getElementsByClassName('removeFromFav')[0].addEventListener('click',function (){
            removeItemFromLS(data.id);
			window.location.reload();
        });
	})
}

getAllSuperhero();