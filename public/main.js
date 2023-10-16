
let myButton = document.querySelector('button');
let myDiv = document.querySelector('div');

let baseUrl = 'http://localhost:4000'

myButton.addEventListener('click', () => {
    axios.get(`/cat`)
    .then((res) => {
        let cat = res.data 
        myDiv.innerHTML = ''
        let p = document.createElement('p')
        p.innerHTML = cat
        myDiv.appendChild(p)
    })
    .catch((error) => {
        console.log(error);
    })
});