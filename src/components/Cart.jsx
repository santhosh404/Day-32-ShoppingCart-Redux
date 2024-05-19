import React, { useEffect } from 'react'
import { DECREMENT, INCREMENT, REMOVE } from '../redux/slices/CartSlice'
import { Button } from '@chakra-ui/react'

export default function Cart({ product, dispatch }) {

    return (
        <>
            <div>Product: {product.title}</div>
            <div>Price per quantity: ${product.price}</div>
            <div>Price: ${product.price * (product.quantity || 1)}</div>
            <div className='line-through'>${product.actualPrice || ((product.quantity || 1) * product.price + (((product.quantity || 1) * product.price) * (product.discountPercentage / 100))).toFixed(2)}</div>
            <div>Discount percentage: {product.discountPercentage}%</div>
            <div>Quantity: {product.quantity || 1}</div>
            <Button onClick={() => dispatch(INCREMENT({ id: product.id }))}>Increment</Button>
            <Button onClick={() => dispatch(DECREMENT({ id: product.id }))}>Decrement</Button>
            <Button onClick={() => dispatch(REMOVE({ id: product.id }))}>Remove</Button>
            {
                product.isOutOfStock && <p>Out of stock</p>
            }
        </>
    )
}
