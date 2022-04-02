const SubCategory = require('../models/subCategory.model');

const createSubCategory = async (req, res) => {
    try {
        const ansNewSubCategory = await SubCategory.create({
            subCategoryName: req.body.subCategoryName,
            categorySuper: req.body.categorySuper
        });
        res.send('SubCategory saved successfully!', ansNewSubCategory)
    }
    catch (error) {
        console.log("Can't save this SubCategory with error: " + error);
    }
}
const UpdateSubCategory = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "SubCategory to update can not be empty!"
        });
    }
    const id = req.params.id;
    try{
        const subCategory = await SubCategory.findByIdAndUpdate(id , req.body , { useFindAndModify: false})
        if(!subCategory)
        {
            res.status(404).send( {
                   message: `Cannot update SubCategory with id=${id}. Maybe SubCategory was not found!` 
                } )
        }
        else res.send({ message: "SubCategory was updated successfully." });
    }
    catch{
        res.status(500).send({
            message: "Error updating Subcategory with id=" + id
        });
    }

}
const getSubCategory = async (req, res) => {
    try{
        const allSubCategories = await SubCategory.find().sort({idSubCategoy:1})
        res.send(allSubCategories)
    }
    catch{
        res.status(500).send({ message: "Error" });
    }
}
const getSubCategoruById = async (req, res) => {
    const id = req.body.id;
    try{
        const subCategory = SubCategory.findById(id)
        if(!subCategory)
        {
            res.status(404).send({message:"Not found subCategory with id " + id })
        }
        res.send(subCategory)
    }
    catch{
        res.status(500).send({ message: "Error retrieving subCategory with id " + id });
    }
}
module.exports = {
    createSubCategory,
    UpdateSubCategory,
    getSubCategory,
    getSubCategoruById
}