import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getClothes } from '../../store/features/clothesSlice'
import { useEffect } from 'react'
import { ProductCard } from '../productCard'

type TProductsBoxProps = {
  itemsCount: number
};

export const ProductsBox = ({ itemsCount = 8 }: TProductsBoxProps) => {

  const dispatch = useAppDispatch ()
  const clothes = useAppSelector ((state) => {
    return state.clothes.clothesData
  })

  useEffect (() => {
    dispatch (getClothes ())
  }, [dispatch])

  return (
    <>
      {clothes?.slice (0, itemsCount).map ((product) => (
        <ProductCard
          key={product.id}
          src={product.image}
          title={product.brand}
          description={product.description}
          price={`£${product.price}`}
        />
      ))}
    </>
  )
}
