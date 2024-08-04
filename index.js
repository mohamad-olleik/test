
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        var users=document.getElementById('users');
        json.forEach(Element => {
            var user=document.createElement('option')
            user.innerHTML=Element.name;
            users.appendChild(user);
            
        });

    
    })



