import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/login/login"
import Index from "@/components/index/index"
import tack from "@/components/tack/tack"
import Gong from "@/components/gong/gong"
import Schedule from "@/components/Schedule/Schedule"
import business from "@/components/business/business"
import customer from "@/components/customer/customer"
import guide from "@/components/guide/guide"
import contract from "@/components/contract/contract"
import money from "@/components/money/money"
import product from "@/components/product/product"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:Login,
  },
  {
    path:"/index",
    component:Index,
    children:[{
      path:"/tack",
      component:tack,
    },{
      path:"/gong",
      component:Gong
    },{
      path:"/Schedule",
      component:Schedule
    },{
      path:"/business",
      component:business
    },{
      path:"/customer",
      component:customer
    },{
      path:"/guide",
      component:guide
    },{
      path:"/contract",
      component:contract
    },{
      path:"/money",
      component:money
    },{
      path:"/product",
      component:product
    }]
  }
  ]
})
