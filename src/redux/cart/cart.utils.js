export const addItemToCart = (cartItems, cartItemToadd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToadd.id 
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToadd. id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        )
    }
    
    return [...cartItems, {...cartItemToadd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemve) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemve.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemve.id)
    }

    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemve.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem
    )
}