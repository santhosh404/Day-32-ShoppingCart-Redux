# React Shopping Cart Using Redux

***Features***
1. Users able to increase and decrease the product quantity.
2. Based on product quantity, the product's actual price and offer price will be updated.
3. Actual price is calculated from the product's discount percentage, using below formula, <br />
     ***const actualPrice = (product.quantity || 1) * product.price + (((product.quantity || 1) * product.price) * (product.discountPercentage / 100))***
5. User can remove the product from cart.
6. User can also see the original total price without dicount and total discount amount, which is calculated from below formulae, <br />
      ***a. let totalDiscount = data.products.reduce((acc, current) => acc + (current.actualPrice || ((current.quantity || 1) * current.price + (((current.quantity || 1) * current.price) * (current.discountPercentage / 100)))) * (current.quantity || 1), 0)<br/>
    totalDiscount = parseInt(totalDiscount - subTotal);<br/>***
   ***b. let originalPrice = parseInt(parseFloat(subTotal) + parseFloat(totalDiscount));***
8. There is section called total and subtotal price of all products, based on the above actions, total price or subtotal price will be updated.


<b>Created using:</b> React.js, Chakra UI, Tailwind CSS, react-redux, redux-toolkit

***Please find the deployed url below***<br/>
https://shoppingcart-redux-demo.netlify.app
