let number = 10;
let url = `https://randomuser.me/api/?results=${number}`;
requestUsers();

const button = document.querySelector('.request');
button.addEventListener('click', function() {
    number = number + 10;
    url = `https://randomuser.me/api/?results=${number}`;
    requestUsers();
});


function requestUsers() {
    axios.get(url)
        .then(function (response) { 
            debugger;
            const user = response.data.results;
            const list = document.querySelector('.list');
            list.innerHTML = '';
            user.forEach(function (user, number) {
                list.innerHTML = list.innerHTML + `
                <div class="padre"> 
                    <div class="cards">
                    <img class="image" src="${user.picture.large}">
                     <h1>${user.name.first} ${user.name.last}</h1>
                        <p>${user.email}</p>
                     
                     </div>
               </div>
            `;
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}


    