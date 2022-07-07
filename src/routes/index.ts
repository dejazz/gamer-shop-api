import { Express } from 'express'
import { buyRoutes } from './buy.routes'
import { cartRoutes } from './cart.routes'
import { productRoutes } from './product.routes'
import { userRoutes } from './user.routes'


export const appRoutes = (app: Express) => {

    app.use('/users', userRoutes())
    app.use('/products', productRoutes())
    app.use('/cart',cartRoutes)
    app.use('/buys', buyRoutes)

}