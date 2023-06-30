import { createRouter } from '../core/core'
import Home from './Home.js'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound.js'

export default createRouter([
    { path : '#/', component: Home},
    { path : '#/movie', component: Movie},
    { path : '#/about', component: About },
    { path: '.*', component: NotFound }
])