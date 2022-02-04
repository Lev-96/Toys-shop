let hash = location.hash
let id = hash.slice(1)

let product = JSON.parse(localStorage.getItem(`product_${id}`))

document.getElementById('name').value = product.name
document.getElementById('price').value = product.price
document.getElementById('imgTag').setAttribute("src", `./img/${product.image}`)

function edit() {
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value

    let image = ''

    if(document.getElementById('img').files.length == 0){
        image = document.getElementById('imgTag').getAttribute('src')
        image = image.slice(6)
    }else{
        image = document.getElementById('img').files[0]['name']
    }

    let newProduct = {
        id: id,
        name: name,
        price: price,
        image: image
    }

    localStorage.setItem(`product_${id}`, JSON.stringify(newProduct))

    location.href = 'admin.html'
}

function setImg(){
    let imgName = document.getElementById('img').files[0]['name']
    document.getElementById('imgTag').setAttribute("src", `./img/${imgName}`)
}