
function loadAlbum(){
    const posts = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbum();

function displayAlbums(data){
    const mainId = document.getElementById('albums')
    for(const albums of data){
        const div = document.createElement('div');
        mainId.innerHTML = `
        <div class="card w-96 bg-[#55efc4] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center">Albums</h2>
          <h2 class="text-2xl text-center">${albums.userId}</h2>
          <h2 class="text-2xl text-center">${albums.id}</h2>
          <h2 class="text-2xl text-center">${albums.title}</h2>
          </div>
        </div>
        <div class="card w-96 bg-[#55efc4] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center">Albums</h2>
          <h2 class="text-2xl text-center">${albums.userId}</h2>
          <h2 class="text-2xl text-center">${albums.id}</h2>
          <h2 class="text-2xl text-center">${albums.title}</h2>
          </div>
        </div>
        <div class="card w-96 bg-[#55efc4] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center">Albums</h2>
          <h2 class="text-2xl text-center">${albums.userId}</h2>
          <h2 class="text-2xl text-center">${albums.id}</h2>
          <h2 class="text-2xl text-center">${albums.title}</h2>
          </div>
        </div>
        <div class="card w-96 bg-[#55efc4] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center">Albums</h2>
          <h2 class="text-2xl text-center">${albums.userId}</h2>
          <h2 class="text-2xl text-center">${albums.id}</h2>
          <h2 class="text-2xl text-center">${albums.title}</h2>
          </div>
        </div>
        <div class="card w-96 bg-[#55efc4] mb-8 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="card-title text-center">Albums</h2>
          <h2 class="text-2xl text-center">${albums.userId}</h2>
          <h2 class="text-2xl text-center">${albums.id}</h2>
          <h2 class="text-2xl text-center">${albums.title}</h2>
          </div>
        </div>
      </div>
 
        `;      
        mainId.appendChild(h1);
        console.log(albums)
    }

}