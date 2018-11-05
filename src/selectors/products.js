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
    /*products => products.map(
        product => product.components.reduce((totalUtility, component) =>
            totalUtility + component.allComponents[component.currentIndex].baseUtility,
            0
        )
    )*/
    products => products.map(function(product) {
        console.log(product);
        return product.components.reduce((totalUtility, component) =>
            totalUtility + component.allComponents[component.currentIndex].baseUtility,
            0
        )
    })
)
