const User = require("../models/User.model");
const Drug = require("../models/Drug.model");


module.exports.userController = {
    createUser: async(req, res)=> {
        const data = await User.create({
            name: req.body.name,
            cash: req.body.cash,
            cart: req.body.cart,
            receptUs: req.body.receptUs
        }) ;
        res.json(data)
    },
    addDrugs: async(req, res)=> {//добавляет корзину
        const user = User.findById(req.params.usId);
        const drug = Drug.findById(req.params.id);

        if( user.receptUs === true && drug.recept === false){
            res.json("у вас нет рецепта")
        } 
        await User.findByIdAndUpdate(req.params.usId, {
            $push: {cart: req.params.id}
        });
        res.json("лекарство добавлено")
    },
    getUser: async(req, res)=>{ //вывод юзеров
        const data = await User.find(req.params.id);
        res.json(data)
    },
    deleteDrugCart: async(req, res)=> {
        const user =User.findById(req.params.usId);
        const drug = Drug.findById(req.params.id);
        
        await User.findByIdAndUpdate(req.params.usId, {
            $pull: {cart: req.params.id}
        });
        res.json("лекарство удалено")
    },
    clearCart: async(req, res)=> {
        await User.findByIdAndUpdate(req.params.id, {
            $set: {cart: []}
        });
        res.json("корзина очищена")
    },
    userCash: async(req, res)=> {
        await User.findByIdAndUpdate(req.params.id, {
            cash: req.body.cash
        });
        res.json("счет пополнен")
    },
    buyDrugs: async(req, res)=> {
        const { cart, cash }= await User.findById(reqparams.id).populate("cart");

        const summa = cart.reduce((acc, sum)=> acc + sum.summa, 0);
        
        if(summa > cash) {
            res.json("недостаточно средств")
        }

        await User.findByIdAndUpdate(req.body.id, {
            cash: cash - summa,
            cart: []
        });

        res.json("покупка совершена")

    }

    }


