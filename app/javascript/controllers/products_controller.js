import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="products"
export default class extends Controller {
  static values = { size: String, product: Object }

  addToCart() {
    // store the products the user has added to cart into local storage
    console.log("product: ", this.productValue)
    const cart = localStorage.getItem("cart")
    if (cart) { // if the user have product in cart
      const cartArray = JSON.parse(cart)
      const foundIndex = cartArray.findIndex(item => item.id === this.productValue.id && item.size === this.sizeValue)
      if (foundIndex >= 0) {
        cartArray[foundIndex].quantity = parseInt(cartArray[foundIndex].quantity) + 1
      } else {
        cartArray.push({
          id: this.productValue.id,
          name: this.productValue.name,
          price: this.productValue.price,
          size: this.sizeValue,
          quantity: 1
        })
      }
      localStorage.setItem("cart", JSON.stringify(cartArray))
    } else { // if the user doesnt have product in cart
      const cartArray = []
      cartArray.push({
        id: this.productValue.id,
        name: this.productValue.name,
        price: this.productValue.price,
        size: this.sizeValue,
        quantity: 1
      })
      localStorage.setItem("cart", JSON.stringify(cartArray))
    }
  }

  selectSize(e) {
    this.sizeValue = e.target.value
    const selectedSizeEl = document.getElementById("selected-size") 
    selectedSizeEl.innerText = `Selected Size: ${this.sizeValue}`
  }
}