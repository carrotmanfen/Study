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
        userId.innerText = res[i].userId;
        id.innerText = res[i].id;
        title.innerText = res[i].title;
        card.append(userId);
        card.append(id);
        card.append(title);
        card.append(check);
        div.append(card);
      }
    })

function displayTodoTitle(){
  const body = document.querySelector('#myBody');
  body.appendChild(div);
}

displayTodoTitle();