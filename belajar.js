function getName(params) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    // response = var jawaban dari fetch
    .then(response => response.json())
    //parse response beda bentuk
    .then(result => console.log(result))
}

console.log(getName());