const div = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(respond => respond.json())
    .then(res => {
      for(let i=0 ;i<res.length;i++){
        const card = document.createElement('div');
        const userId = document.createElement('p');
        const id = document.createElement('p');
        const title = document.createElement('p');
        const check = document.createElement('input');
        check.type="checkbox";
        userId.innerText ="userId : "+ res[i].userId;
        id.innerText = "id : "+ res[i].id;
        title.innerText = "title : "+ res[i].title;
        if (res[i].completed){
          check.checked=true;
        }
        card.append(userId);
        card.append(id);
        card.append(title);
        card.append(check);
        userId.classList.add('mr-4');
        id.classList.add('mr-4');
        title.classList.add('mr-4');
        check.classList.add('absolute','inset-y-0', 'right-0','w-10','mr-4');
        card.classList.add('flex-col','text-white','p-4','m-6','border-2','border-black','bg-blue-500','relative');
        div.append(card);
      }
    })

function displayTodoTitle(){
  const body = document.querySelector('#myBody');
  body.appendChild(div);
}

displayTodoTitle();