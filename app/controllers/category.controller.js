const Category = require("../models/category.model");
const SubCategory = require("../models/subCategory.model");

const createCategory = async (req, res) => {
    try {
        const ansNewCategory = await Category.create({
            categoryName: req.body.categoryName,
            subCategoriesRef: req.body.subCategoriesRef
        });
        res.send("Category saved successfuly!" + ansNewCategory)
    } catch (error) {
        console.log("Can't save this Category with error: " + error);
    }
};
const updateCategory = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Category to update can not be empty!"
        });
    }
    const id = req.params.id;
    try {
        const category = await Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        if (!category) {
            res.status(404).send({
                message: `Cannot update Category with id=${id}. Maybe Category was not found!`
            });
        } else res.send({ message: "Category was updated successfully." });
    } catch {
        res.status(500).send({
            message: "Error updating category with id=" + id
        });
    }

};
const getCategory = async (req, res) => {
    try {
        const allCategories = await Category.find().sort({ idCategory: 1 })
        res.send(allCategories);
    }
    catch {
        res.status(500).send({ message: "Error" });
    }
}
const getCategoryById = async (req, res) => {
    const id = req.body.id;
    try {
        const subCategory = SubCategory.findById(id);
        if (!subCategory) {
            res.status(404).send({ message: "Not found subCategory with id " + id })
        }
        res.send(subCategory)
    }
    catch{
        res.status(500).send({ message: "Error retrieving category with id " + id });
    }
}
module.exports = {
    createCategory,
    updateCategory,
    getCategory,
    getCategoryById
};