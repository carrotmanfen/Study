const burger =document.querySelector('#burger');
const menu =document.querySelector('#menu');

burger.addEventListener('click',()=>{
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
  }
  else{
    menu.classList.add('hidden');
  }
})

const mostRecipes = document.querySelector('#most-recipes');
const loadMore = document.querySelector('#load-more');

loadMore.addEventListener('click',()=>{
  if(mostRecipes.classList.contains('hidden')){
    mostRecipes.classList.remove('hidden');
    loadMore.innerHTML = "Show Less";
  }else{
    mostRecipes.classList.add('hidden');
    loadMore.innerHTML = "Load More";
  }
})
