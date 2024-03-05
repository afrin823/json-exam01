function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}


function displayComments(data){
   const sectionId = document.getElementById('comments');
   for(const comments of data){
    const div = document.createElement('div');
    div.classList.add('comments');
    div.innerHTML = `
        <h3 class="text-2xl	text-center">${comments.postId}</h3>
        <h5 class="text-center">${comments.id}</h5>
        <h4 class="text-center" >${comments.name}</h4>
        <h2 class="text-center">${comments.email}</h2>
        <h4 class="text-center">${comments.body}</h4>
    `;
    sectionId.appendChild(div)
   }
}