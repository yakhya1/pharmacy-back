//CRUD операции юзера

const { Router } = require("express");
const { drugsController } = require("../controllers/drugs.controller");
const { userController } = require("../controllers/users.controller");

const router = Router();

//создать юзера
router.post("/users", userController.createUser)
router.get("/users", userController.getUser)

//Get запросы на лекарства
router.get("/drugs", drugsController.getDrugs) //  - просматривать все лекарства
router.get("/drugs/category/:id", drugsController.getDrugsCatId) //  - просматривать все лекарства по определенной категории
router.get("/drugs/:id", drugsController.getIdDrugs) //  - просматривать определенное лекарство

//работа с корзиной
router.patch("/user/:usId/drugs/:id",  userController.addDrugs) //  - добавлять определенное лекарство в корзину
router.delete("/user/:usId/drugs/:id", userController.deleteDrugCart) //  - удалять лекарство из корзины
router.patch("/cart/clear/user/:id", userController.clearCart ) //  - очищать корзину
router.patch("/user/:id/drugs/buy",  userController.buyDrugs) //  - покупать товар из корзины (корзина должна очиститься)

//баланс
router.patch("/users/:id/cash", userController.userCash) //  - пополнять свой кошелек

module.exports = router;