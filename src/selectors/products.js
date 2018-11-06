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

export const getProductUtilities = createSelector(
    [getProducts],
    function(products) {
        const productUtilities = products.map(product =>
            product.components.reduce((totalUtility, component) =>
                totalUtility + component.allComponents[component.currentIndex].baseUtility,
                0
            )
        )
        return productUtilities
    }
)
