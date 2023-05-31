//CRUD операции для Админа

const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");
const { drugsController } = require("../controllers/drugs.controller");

const router = Router();

//CRUD операции админа для КАТЕГОРИЙ 

router.post("/admin/category", categoryController.createCategory ) //создание категории
router.patch("/admin/category/:id", categoryController.updateCategory) //обновление категории
router.delete("/admin/category/:id", categoryController.deleteCategory ) //удаление категории 

//CRUD операции админа для ЛЕКАРСТВ

router.post("/admin/drug", drugsController.createDrugs) //создать лекарство
router.patch("/admin/drug/:id", drugsController.updateDrugs) //обновить лекарство
router.delete("/admin/drug/:id", drugsController.deleteDrugs)//удалить лекарство

module.exports = router;