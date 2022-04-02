const descriptionItem = require('../models/descriptionItem.model');

const createDescriptionItem = async (req, res) => {
    try {
        const newDescriptionItem = await descriptionItem.create({
            materialItem: req.body.materialItem,
            colorItem: req.body.colorItem,
            companyItem: req.body.companyItem,
            sizeItem: req.body.sizeItem,
            dateOfFoundLoss: req.body.dateOfFoundLoss,
            descriptionText: req.body.descriptionText
        })
        res.send('Description Item saved successfully!', newDescriptionItem)
    }
    catch (error) {
        console.log("Can't save this Description Item with error: " + error);
    }
}

const getDescriptionItemById = async (req, res) => {
    const id = req.params.id;
    try{
        const description = descriptionItem.findById(id);
        if(!description)
        {
            res.status(404).send({message:"Not found subCategory with id " + id })
        }
        res.send(description)
    }
    catch{
        res.status(500).send({message:"Error retrieving subCategory with id " + id })
    }
}

const updateDescriptionItem = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "description item to update can not be empty!"
        });
    }
    const id = req.params.id;
    try{
        const description = await descriptionItem.findByIdAndUpdate(id , req.body , { useFindAndModify: false})
        if(!description)
        {
            res.status(404).send( {
                   message: `Cannot update description with id=${id}. Maybe description was not found!` 
                } )
        }
        else res.send({ message: "description was updated successfully." });
    }
    catch{
        res.status(500).send({
            message: "Error updating description with id=" + id
        });
    }

}

module.exports = {
    createDescriptionItem,
    getDescriptionItemById,
    updateDescriptionItem
}