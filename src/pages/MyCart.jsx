import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_PRODUCTS } from '../redux/slices/CartSlice';
import Cart from '../components/Cart';

export default function MyCart() {
    const data = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch()

    //Calculating the subtotal
    const subTotal = data.products.reduce((acc, current) => acc + current.price * (current.quantity || 1), 0);

    //Total discount
    let totalDiscount = data.products.reduce((acc, current) => acc + (current.actualPrice || ((current.quantity || 1) * current.price + (((current.quantity || 1) * current.price) * (current.discountPercentage / 100)))) * (current.quantity || 1), 0)
    totalDiscount = parseInt(totalDiscount - subTotal);

    //Original price
    let originalPrice = parseInt(parseFloat(subTotal) + parseFloat(totalDiscount));

    useEffect(() => {
        dispatch(ADD_PRODUCTS([
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192882.jpg",
                    "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/950/950/detailed/2449/full_body_housing_for_apple_iphone_9_white_maxbhi.com_41205.jpg?t=1700812354",
                    "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192882.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://images-cdn.ubuy.co.in/65414af8fd4858736a695a7e-pre-owned-apple-iphone-x-256gb-factory.jpg",
                    "https://images-cdn.ubuy.co.in/65b4e9fce6392731aa7814d3-pre-owned-apple-iphone-x-64gb-factory.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/4/43/IPhone_X%2C_back_and_front%2C_Silver.png"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": [
                    "https://www.layers.shop/cdn/shop/products/samsung-galaxy-note-9-universe--back.jpg?v=1686051738"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 4,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": [
                    "https://m.media-amazon.com/images/I/61Gf1OIORhS.jpg",
                    "https://darlingretail.com/cdn/shop/products/TeHuJiTT1qwTCgAl.jpg?v=1663914851",
                    "https://m.media-amazon.com/images/I/61Gf1OIORhS.jpg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 3,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGVAlmVUxGojDUeDBGZUO2BL82Rywj3JLl3FZe4EpWg&s",
                    "https://images-cdn.ubuy.co.in/633ff647ed8e2e306c7cdcdd-huawei-p30-pro-128gb-8gb-ram-vog-l29.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGVAlmVUxGojDUeDBGZUO2BL82Rywj3JLl3FZe4EpWg&s"
                ]
            }
        ]))
    }, [])



    return (
        <>
            <Box className="px-8 py-3 box '' md:sticky md:top-0 '' md:z-10 '' md:bg-[#fff]">

                <Box className="flex justify-center items-center my-5 flex-wrap gap-5">
                    <Box className="mr-4 w-[220px] h-[100px] border-2 border-gray-500 p-4 rounded flex justify-center items-center  gap-2">
                        <p className='font-[700]'>Delivery: </p>
                        <p>FREE</p>
                    </Box>
                    <Box className="mr-4 w-[220px] h-[100px]  border-2 border-gray-500 p-4 rounded flex justify-center items-center gap-2">
                        <p className='font-[700]'>Original Total Price</p>
                        <p>$ {originalPrice} </p>
                    </Box>
                    <Box className="mr-4 w-[220px] h-[100px]  border-2 border-gray-500 p-4 rounded flex justify-center items-center gap-2">
                        <p className='font-[700]'>Total Discount price: </p>
                        <p>$ {totalDiscount} </p>
                    </Box>
                    <Box className="mr-4 w-[220px] h-[100px] border-2 border-gray-500 p-4 rounded flex justify-center items-center  gap-2">
                        <p className='font-[700]'>Sub Total (with discount)</p>
                        <p>$ {subTotal}</p>
                    </Box>
                    <Box className="mr-4 w-[220px] h-[100px] border-2 border-gray-500 p-4 rounded flex justify-center items-center  gap-2">
                        <p className='font-[700]'>Total (with discount)</p>
                        <p>$ {subTotal}</p>
                    </Box>
                </Box>
                <h1 className="text-4xl font-[900] my-5">
                    My Cart ({data?.products?.length})
                </h1>
            </Box>
            <Box className='px-8 py-3'>

                <TableContainer>
                    <Table variant="simple" className='h-[10px] overflow-auto w-full'>
                        <Thead>
                            <Tr>
                                <Th className='font-[900]'>Description</Th>
                                <Th className='font-[900]'>Quantity</Th>
                                <Th className='font-[900]'>Remove</Th>
                                <Th className='font-[900]'>Price per quantity</Th>
                                <Th className='font-[900]'>Total Price per quantity</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                data.products?.length === 0 ? <tr>
                                    <td colSpan="100%">
                                        <p className="flex justify-center p-10">No Products in the cart</p>
                                    </td>
                                </tr> :
                                    data.products.map(product => (
                                        <Cart
                                            product={product}
                                            dispatch={dispatch}
                                            key={product.id}
                                        />
                                    ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>



        </>

    )
}
