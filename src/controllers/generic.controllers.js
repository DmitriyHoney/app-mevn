const boom = require('boom')

const genericCRUD = model => ({
    async findOne({ params: { id } }) {
        try {
            const data = await model.findById(id)
            return data
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async findAll() {
        try {
            const data = await model.find()
            return data
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async create({ body }) {
        try {
            const item = new model(body)
            const newItem = await item.save(item)
            return newItem
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async update({ params: { id }, body: body }) {
        try {
            const data = await model.findByIdAndUpdate(id, body, { new: true })
            return data
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async delete({ params: { id } }) {
        try {
            const data = await model.findByIdAndDelete(id)
            return data
        } catch (err) {
            throw boom.boomify(err)
        }
    }
})

module.exports = genericCRUD