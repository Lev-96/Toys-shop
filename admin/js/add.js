function add() {
    let name = document.getElementById('input1').value
    let price = document.getElementById('input2').value
    let image = document.getElementById('img').files[0]['name']

    let id = 1

    if (localStorage.getItem('id') != null) {
        id = +localStorage.getItem('id') + 1
    }

    let product = {
        id: id,
        name: name,
        price: price,
        image: image
    }

    localStorage.setItem(`product_${id}`, JSON.stringify(product))
    localStorage.setItem(`id`, id)

    location.href = 'admin.html'
}