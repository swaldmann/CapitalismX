import { createSelector } from 'reselect'

const getProducts = state => state.products

export const makeGetVisibleProducts = () => {
    return createSelector(
        [getProducts],
        (products) => {
            return products
        }
    )
}
