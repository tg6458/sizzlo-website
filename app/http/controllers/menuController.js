const Menu= require('../../models/menucanteen');
const Menuramjihatti = require('../../models/menuramjihatti');
const Menuvan=require('../../models/menuchinese')
const Menushake=require('../../models/menushake');
const Menubindrapakode = require('../../models/menubindrapakode');
const Menumotherdairy = require('../../models/menumotherdairy');
function menuControllers()
{
    return {
        async index(req,res)
        {
            const menuItems=await Menu.find()
            res.render('menu',{menuItems:menuItems});
        },

        async menuvan(req,res){
            const menuItems=await Menuvan.find()
            res.render('menuChineseCorner',{menuItems:menuItems});
        },

        async menuramjihatti(req,res){
            const menuItems=await Menuramjihatti.find()
            res.render('menuramjihatti',{menuItems:menuItems});
        },

        async menushake(req,res){
            const menuItems=await Menushake.find()
            res.render('menushake',{menuItems:menuItems});
        },
        async menubindrapakode(req,res){
            const menuItems=await Menubindrapakode.find()
            res.render('menubindrapakode',{menuItems:menuItems});
        },
        async menumotherdairy(req,res){
            const menuItems=await Menumotherdairy.find()
            res.render('menumotherdairy',{menuItems:menuItems});
        }
    }
}

module.exports=menuControllers; 