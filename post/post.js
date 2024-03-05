
function loadPost(){
    const posts = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayPost(data))
}
loadPost()

function displayPost(data){
    const divId = document.getElementById('post')
    for(const post of data){
        const h2 = document.createElement('h2');
        h2.classList.add('post');
  
        h2.innerText = `
        ${post.userId};
        ${post.id};
        ${post.title};
        ${post.body};
        `;
        
      
        divId.appendChild(h2);
        console.log(post)
    }

}