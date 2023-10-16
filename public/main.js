
let myButton = document.querySelector('button');
let myDiv = document.querySelector('div');

myButton.addEventListener('click', () => {
    axios.get('/cats')
    .then((res) => {
        let cat = res.data 
        myDiv.innerHTML = ''
        let newP = document.createElement('p')
        newP.innerHTML = cat
        myDiv.appendChild(newP)
    })
    .catch((error) => {
        console.log(error);
    })
});