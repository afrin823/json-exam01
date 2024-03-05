function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}
loadData()

function displayData(data){
   const sectionId = document.getElementById('user');
   for(const users of data){
    const div = document.createElement('div');
    div.classList.add('users');
    div.innerHTML = `
        <h3 class="text-2xl	text-center">${users.name}</h3>
        <h5 class="text-center">${users.username}</h5>
        <h4 class="text-center" >${users.email}</h4>
        <h2 class="text-center">${users.address.street}</h2>
        <h4 class="text-center">${users.phone}</h4>
        
        <a class="text-center" href='${users.website}'>website</a>
    `;
    sectionId.appendChild(div)
   }
}