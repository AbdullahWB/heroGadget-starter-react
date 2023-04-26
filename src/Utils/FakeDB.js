const addToDb = id => {

    // localStorage.setItem('shopping-cart', id)

    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity

    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const getStoredCart = () => {

    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    return shoppingCart ;
}

const removeFormDB = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')


export { addToDb, getStoredCart, removeFormDB, deleteShoppingCart };