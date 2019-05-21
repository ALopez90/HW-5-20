// CRUD - Create, Read, Update, Delete.
// Cloud - Essentially someone else's computer, not a magical place I go to eat fairy dust and everything is rainbows :( bubble is bursted.

var rootDiv = document.getElementById('root');
var container = document.createElement('div');
    

var logo = document.createElement('img');
    logo.src = 'multy-user.png';
    logo.style.display = 'block';
    logo.style.marginLeft = 'auto';
    logo.style.marginRight = 'auto';
    logo.classList.add('w3-hover-shadow','w3-animate-zoom');

var title = document.createElement('h1');
    title.innerHTML = 'USERS';
    title.style.textAlign = 'center';
    title.classList.add('w3-opacity','w3-blue','w3-round-large','w3-padding','w3-margin','w3-border','w3-border-indigo','w3-animate-zoom');

rootDiv.appendChild(logo);
rootDiv.appendChild(title);
rootDiv.appendChild(container);

var request = new XMLHttpRequest();

// get, post(here's the server, here's you and you want to post info into the server), delete (delete data from the database), (put [make update/edits], patch)

request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function() {
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status <400) {
        data.forEach(users => {
            var card = document.createElement('div');
                card.style.textAlign = 'center';
                card.style.padding = '2.5rem';
                
            var usersName = document.createElement('h2');
                usersName.textContent = 'Name: ' + users.name + ' ID: ' + users.id;
                usersName.classList.add('w3-border','w3-border-blue','w3-hover-border-red','w3-round-large');

            var userName = document.createElement('h3');
                userName.textContent = 'Username: ' + users.username;

            var email = document.createElement('h3');
                email.textContent = 'Email: ' + users.email;
            
            var phoneNum = document.createElement('h3');
                phoneNum.textContent = 'Phone #: ' + users.phone;
            
            var catchPhrase = document.createElement('h4');
                catchPhrase.textContent = 'Catch Phrase: ' + users.company.catchPhrase;
            
            var address1 = document.createElement('h4');
                address1.textContent = 'Address: ' + users.address.street + ', ' + users.address.suite;
            
            var address2 = document.createElement('h4');
                address2.textContent = users.address.city + ', ' + users.address.zipcode;
            
            container.appendChild(card);
            card.appendChild(usersName);
            card.appendChild(userName);
            card.appendChild(email);
            card.appendChild(phoneNum);
            card.appendChild(catchPhrase);
            card.appendChild(address1);
            card.appendChild(address2);
        });
    } else {
        console.log('ERROR')
            var errorMsg = document.createElement('marquee');
                errorMsg.textContent = 'Hey! What did you do this time?!';
                rootDiv.appendChild(errorMsg);
    }
}

request.send();