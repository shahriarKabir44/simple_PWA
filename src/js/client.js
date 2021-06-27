if (navigator.serviceWorker) {
    navigator.serviceWorker.register('worker.js')
        .then(reg => {
            console.log(reg)
        })
        .catch(er => {
            console.log(`er`, er)
        })
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        document.getElementById('root').innerHTML = (JSON.stringify(json))
    })