module.exports = {
    getAll(req, res) {
        const db = req.app.get('db');
        db.getAllHouses()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops! Something went wrong. Our engineers have been informed!"})
            console.log(err);
        })
    },
    addHouse(req,res) {
        const db = req.app.get('db');
        const {property_name, address, city, state, zip} = req.body

        db.addHouse([property_name, address, city, state, zip])
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops! Something went wrong. Our engineers have been informed!"})
            console.log(err);
        })
    },
    deleteHouse(req, res) {
        const db = req.app.get('db');
        const {id} = req.params;

        db.deleteHouse(id)
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "Ooops! Something went wrong. Our engineers have been informed!"})
            console.log(err);
        })
    }
}