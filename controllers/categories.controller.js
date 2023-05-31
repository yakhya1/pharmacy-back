const Category  = require("../models/Category.model");

module.exports.categoryController = {
    createCategory: async(req, res) => {  //создание категории
        await Category.create({
            name: req.body.name
        });
        res.json("категория добавлена")
    },
    updateCategory: async(req, res)=> {
        await Category.findByIdAndUpdate(req.params.id, { //обновление категории
            name: req.body.name
        });
        res.json("категория обновлена")
    },
    deleteCategory: async(req, res)=> {
        await Category.findByIdAndRemove(req.params.id); //удаление категории
        res.json("категория удалена")
    }
}