import { createRouter } from '../core/core'
import Home from './Home.js'
import Movie from './Movie'

export default createRouter([
    { path : '#/', component: Home},
    { path : '#/movie', component: Movie}
])