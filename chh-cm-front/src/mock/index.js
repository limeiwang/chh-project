import Mock from 'mockjs'
import homeData from './modules/homeData'
import details from './modules/details'

Mock.mock('/homedata', 'post', homeData.homeData)
Mock.mock('/goods', 'post', details.getRecipe)
