const Drug =require("../models/Drug.model");

module.exports.drugsController = {
    createDrugs: async (req, res) => {
       try{ const data = await Drug.create({
            name: req.body.name,
            catId: req.body.catId,
            price: req.body.price,
            recept: req.body.recept
        });
        res.json(data)}
        catch(err){
        res.json(err)
        }
    },
    updateDrugs: async(req, res) => {
        try{
            const data = await Drug.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                catId: req.body.catId,
                price: req.body.price,
                recept: req.body.recept
            });
            res.json(data)}
       
        catch(err){ 
            res.json(err)}
    },
    deleteDrugs: async(req, res)=> {
        await Drug.findByIdAndRemove(req.params.id);
        res.json("лекарство удалено")
    },
    getDrugs: async (req, res)=> {
       const data =  await Drug.find();
       res.json(data)
    },
    getDrugsCatId: async(req, res)=> {
        const data = await Drug.find({catId: req.body.catId}).populate("catId");
        res.json(data)
    },
    getIdDrugs: async(req, res)=> {
        const data = await Drug.findById(req.params.id);
        res.json(data)
    }

}
