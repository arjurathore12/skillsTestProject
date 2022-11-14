const SUPERHERO_KEY = 'superhero';

function addItemToLS(item){
	//item --> string 
	console.log(item)
	var favSuperHeroArray = getItemFromLS();
	//validation if item is present or not
	// console.log(favSuperHeroArray)
	var isPresent = false;
	favSuperHeroArray.map((tempItem)=>{
		if(item == tempItem ){
			isPresent = true;
		}
	});
	
	if(isPresent){
		return;
	}

	favSuperHeroArray = [item,...favSuperHeroArray];
	
	localStorage.setItem(SUPERHERO_KEY,JSON.stringify(favSuperHeroArray));
}

 function getItemFromLS(){
	var favSuperHeroArray = JSON.parse(localStorage.getItem(SUPERHERO_KEY));
	if(!favSuperHeroArray){
		favSuperHeroArray = [];
	}
	return favSuperHeroArray;
}


function removeItemFromLS(item){
	var favSuperHeroArray = getItemFromLS();
	favSuperHeroArray = favSuperHeroArray.filter((tempItem)=>{
		return item != tempItem;
	});
	localStorage.setItem(SUPERHERO_KEY,JSON.stringify(favSuperHeroArray));
}







