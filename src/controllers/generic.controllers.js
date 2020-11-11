const boom = require('boom')

const genericCRUD = model => ({
    async findOne({ params: { id } }, res) {
        try {
            const data = await model.findById(id)
            return res.status(200).json(data)
        } catch (err) {
            return res.status(400).json(boom.boomify(err))
        }
    },
    async findAll(req, res) {
        try {
            const data = await model.find()
            return res.status(200).json(data)
        } catch (err) {
            return res.status(400).json(boom.boomify(err))
        }
    },
    async create({ body }, res) {
        try {
            const item = new model(body)
            const newItem = await item.save(item)
            return res.status(200).json(newItem)
        } catch (err) {
            return res.status(400).json(boom.boomify(err))
        }
    },
    async update({ params: { id }, body: body }, res) {
        try {
            const data = await model.findByIdAndUpdate(id, body, { new: true })
            return res.status(200).json(data)
        } catch (err) {
            return res.status(400).json(boom.boomify(err))
        }
    },
    async delete({ params: { id } }, res) {
        try {
            const data = await model.findByIdAndDelete(id)
            return res.status(200).json(data)
        } catch (err) {
            return res.status(400).json(boom.boomify(err))
        }
    }
})

module.exports = genericCRUD