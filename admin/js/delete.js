function remove(id){
    localStorage.removeItem(`product_${id}`)
    show()
}