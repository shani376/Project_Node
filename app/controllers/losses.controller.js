const Losses = require("../models/losses.model");

 const addOnelosses = async(req, res) => {

    try {
            console.log("hi i am in post losses");

        const { userId, descriptionText, lossesDate, subCategory,category} = req.body
         
        const ansNewLosses = await Losses.create({
            userId,
            descriptionText,
            lossesDate,
            subCategory,
            category
        });
    
        res.send(ansNewLosses)       
    } catch (error) {
        console.log("Can't save this losses  with error: " + error);
    }  
}

const getLossesById = async(req, res) => {
    const id = req.params.id;
    try {
        const losses = await Losses.findById(id)
        if (!losses)
            res.status(404).send({ message: "Not found losses with id " + id });
        else res.send(losses);
    } catch {
        res
            .status(500)
            .send({ message: "Error retrieving losses with id " + id });
    }
}

const getAllLosses = async(req, res) => {
    try {
        console.log("hi i am in getAllLosses");
        const allLosses = await Losses.find().sort({ idUser : 1 })
        res.send(allLosses);
    } catch {
        res
            .status(500)
            .send({ message: "Error" });
    }
};

const updateLosses = async(req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    try {
        console.log("hi i am in updete");
        const losses = await Losses.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        if (!losses) {
            res.status(404).send({
                message: `Cannot update losses with id=${id}. Maybe item was not found!`
            });
        } else res.send({ message: "losses was updated successfully." });
    } catch {
        res.status(500).send({
            message: "Error updating user with id=" + id
        });
    }
};

const deleteLossesById = async(req, res) => {
    const id = req.params.id;
    try {
        const losses = await Losses.findByIdAndRemove(id)
        if (!losses) {
            res.status(404).send({
                message: `Cannot delete losses with id=${id}. Maybe losses was not found!`
            });
        } else {
            res.send({
                message: "losses was deleted successfully!"
            });
        }

    } catch {
        res.status(500).send({
            message: "Could not delete losses with id=" + id
        });
    }

};

module.exports= {
    addOnelosses,
    getLossesById,
    getAllLosses,
    updateLosses,
    deleteLossesById
};