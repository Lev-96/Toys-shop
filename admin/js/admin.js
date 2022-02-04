if(localStorage.getItem('admin') == null){
    location.href = 'login.html'
}

function show(){
    let tbody = document.getElementsByTagName('tbody')[0]
    tbody.innerHTML = ''

    let id = localStorage.getItem('id')

    for(let i = 1; i <= id; i++){
        let product = JSON.parse(localStorage.getItem(`product_${i}`))

        if(product != null){
            tbody.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} $</td>
                    <td><img src="./img/${product.image}"></td>
                    <td>
                        <div class="action">
                            <a href="edit.html#${product.id}" id="edit">
                                <i class="fa fa-pen"></i>
                            </a>
                            <a href="#" id="delete" onclick="remove(${product.id})">
                                <i class="fa fa-trash"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            `
        }
    }
}

function logOut(){
    localStorage.removeItem('admin')
    location.href = '../index.html'
}

show()