
const form = document.querySelector('#form-contact')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    var data = {
        name : e.target[0].value,
        email : e.target[2].value,
        phone : e.target[4].value,
        text : e.target[6].value
    }
    console.log(data)
    if(data.name === '' || data.email === '' || data.phone === '' || data.text === ''){
        alert('Please Fill In The Blanks ')
    }else{
        axios.post('http://localhost:5050/insert',data)
        .then(() =>{
            alert('successful')
        })
        .catch( e =>console.log(e))
    }


})  