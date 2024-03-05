
function loadAlbum(){
    const posts = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbum();

function displayAlbums(data){
    const todosDivId = document.getElementById('todos')
    for(const todos of data){
        const div = document.createElement('div');
        todosDivId.innerHTML = `
        <div class="card w-96 bg-[#ffeaa7] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center">Todos</h2>
          <h2 class="text-4xl text-center rounded-full bg-[#81ecec] w-24 h-24 todos-align">${todos.userId}</h2>
          <h2 class="text-2xl text-center">${todos.id}</h2>
          <h2 class="text-2xl text-center">${todos.title}</h2>
          </div>
        </div>
        <div class="card w-96 bg-[#ffeaa7] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center rounded-full bg-[#81ecec] w-24 h-24 todos-align">Todos</h2>
          <h2 class="text-2xl text-center">${todos.userId}</h2>
          <h2 class="text-2xl text-center">${todos.id}</h2>
          <h2 class="text-2xl text-center">${todos.title}</h2>
          </div>
        </div>
        <div class="card w-96 bg-[#ffeaa7] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center rounded-full bg-[#81ecec] w-24 h-24 todos-align">Todos</h2>
          <h2 class="text-2xl text-center">${todos.userId}</h2>
          <h2 class="text-2xl text-center">${todos.id}</h2>
          <h2 class="text-2xl text-center">${todos.title}</h2>
          </div>
        </div>
        <div class="card w-96 bg-[#ffeaa7] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center rounded-full bg-[#81ecec] w-24 h-24 todos-align">Todos</h2>
          <h2 class="text-2xl text-center">${todos.userId}</h2>
          <h2 class="text-2xl text-center">${todos.id}</h2>
          <h2 class="text-2xl text-center">${todos.title}</h2>
          </div>
        </div>

     
        `;      
        todosDivId.appendChild(h1);
        console.log(albums)
    }

}