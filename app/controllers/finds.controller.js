const Findes = require("../models/losses.model");
const Match =require('./match.controler')


 const addOneFindes = async(req, res) => {

    try {
            console.log("hi i am in post findes");

        const { userId, lossesDate,descriptionText,subCategory,category} = req.body
         
        const ansNewfines = await Findes.create({
            userId,
             lossesDate,
             descriptionText,
             subCategory,
             category
        })
        res.send(ansNewfines) 
        Match.funmatch(ansNewfines)  
    } catch (error) {
        console.log("Can't save this findes  with error: " + error);
    }  
  
}

const getFindesById = async(req, res) => {
    const id = req.params.id;
    try {
        const findes = await Findes.findById(id)
        if (!findes)
            res.status(404).send({ message: "Not found findes with id " + id });
        else res.send(findes);
    } catch {
        res
            .status(500)
            .send({ message: "Error retrieving findes with id " + id });
    }
}

const getAllFindes = async(req, res) => {
    try {
        console.log("hi i am in getAllFindes");
        const allFindes = await Findes.find().sort({ idUser : 1 })
        res.send(allFindes);
    } catch {
        res
            .status(500)
            .send({ message: "Error" });
    }
};

const updateFindes = async(req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    try {
        console.log("hi i am in updete");
        const findes = await Findes.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        if (!findes) {
            res.status(404).send({
                message: `Cannot update findes with id=${id}. Maybe item was not found!`
            });
        } else res.send({ message: "findes was updated successfully." });
    } catch {
        res.status(500).send({
            message: "Error updating findes with id=" + id
        });
    }
};

const deleteFindesById = async(req, res) => {
    const id = req.params.id;
    try {
        const findes = await Losses.findByIdAndRemove(id)
        if (!findes) {
            res.status(404).send({
                message: `Cannot delete findes with id=${id}. Maybe losses was not found!`
            });
        } else {
            res.send({
                message: "findes was deleted successfully!"
            });
        }

    } catch {
        res.status(500).send({
            message: "Could not delete findes with id=" + id
        });
    }

};

module.exports= {
    addOneFindes,
    getFindesById,
    getAllFindes,
    updateFindes,
    deleteFindesById
};