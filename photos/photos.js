
function loadAlbum(){
    const posts = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbum();

function displayAlbums(data){
    const photoDivId = document.getElementById('photos')
    for(const photos of data){
        const div = document.createElement('div');
        photoDivId.innerHTML = `
            <div class="card card-side mb-8 bg-[#fab1a0] shadow-xl w-[50%] mx-auto">

    <div class="card-body">
        <h2 class="card-title text-center">Photos</h2>
        <h2 class="text-2xl text-center">${photos.userId}</h2>
          <h2 class="text-2xl text-center">${photos.id}</h2>
          <h2 class="text-2xl text-center">${photos.title}</h2>

        </div>
    </div>
    </div>
            <div class="card card-side mb-8 bg-[#fab1a0] shadow-xl w-[50%] mx-auto">

    <div class="card-body">
        <h2 class="card-title text-center">Photos</h2>
        <h2 class="text-2xl text-center">${photos.userId}</h2>
          <h2 class="text-2xl text-center">${photos.id}</h2>
          <h2 class="text-2xl text-center">${photos.title}</h2>

        </div>
    </div>
    </div>
            <div class="card card-side mb-8 bg-[#fab1a0] shadow-xl w-[50%] mx-auto">

    <div class="card-body">
        <h2 class="card-title text-center">Photos</h2>
        <h2 class="text-2xl text-center">${photos.userId}</h2>
          <h2 class="text-2xl text-center">${photos.id}</h2>
          <h2 class="text-2xl text-center">${photos.title}</h2>

        </div>
    </div>
    </div>
            <div class="card card-side mb-8 bg-[#fab1a0] shadow-xl w-[50%] mx-auto">

    <div class="card-body">
        <h2 class="card-title text-center">Photos</h2>
        <h2 class="text-2xl text-center">${photos.userId}</h2>
          <h2 class="text-2xl text-center">${photos.id}</h2>
          <h2 class="text-2xl text-center">${photos.title}</h2>

        </div>
    </div>
    </div>
    
        `;      
        photoDivId.appendChild(div);
        console.log(photos)
    }

}