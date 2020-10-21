module.exports = (router, trashBinApi) => {

    router.get("/byEmptyingDate", async (req, res) => {
        let emptyingDate = req.query.emptyingDate;
        try {
            console.log(`action: get by emptyingDate request. params:${JSON.stringify({ emptyingDate })}`)
            let result = await trashBinApi.getAllTrashBinByEmptyingDate(emptyingDate);
            console.log(`action: successfully complete get by emptyingDate request. params:${JSON.stringify({ emptyingDate })}`)
            res.send(result);
        } catch (err) {
            let msg =`action: An error occurred in the proccess of 
            -get by emptying date request.`
            console.log(`${msg} params:${JSON.stringify({ emptyingDate, err })}`)
            res.status(500).send(msg);
        }

    })

    router.get("/byDistanceFromPoint", async (req, res) => {
        let { geoLocation, distance } = req.query;
        geoLocation = JSON.parse(geoLocation);
        console.log(`action: get by distance from point request. params:${JSON.stringify({ geoLocation, distance })}`)
        try {
            let result = await trashBinApi.getAllTrashBinsByDistanceFromSpecificPoint({ geoLocation, distance });
            console.log(`action: successfully complete get by distance from point request. params:${JSON.stringify({ geoLocation, distance })}`)
            res.send(result);
        } catch (err) {
            let msg =`action: An error occurred in the proccess of 
            -get by distance from point request.`
            console.log(`${msg} params:${JSON.stringify({ geoLocation, distance, err })}`)
            res.status(500).send(msg);
        }
    })

    router.delete("/", async (req, res) => {
        let id = req.query.id;
        console.log(`action: delete by id request . params:${JSON.stringify({ id })}`)
        try {
            await trashBinApi.deleteTrashBinById(id);
            console.log(`action: successfully complete delete by id . params:${JSON.stringify({ id })}`)
            res.send()
        } catch (err) {
            let msg =`action: An error occurred in the proccess of 
            -delete by id request.`
            console.log(`${msg} params:${JSON.stringify({ id, err })}`)
            res.status(500).send(msg);
        }

    })

    router.put("/", async (req, res) => {
        let body = req.body;
        console.log(`action: add new trash bin request . params:${JSON.stringify({ body })}`)
        try {
            await trashBinApi.addTrashBin(body);
            console.log(`action: successfully complete add new trash bin request.
            params:${JSON.stringify({ body })}`)
            res.send()
        } catch (err) {
            let msg =`action: An error occurred in the proccess of 
            -add new trash bin request.`
            console.log(`${msg} params:${JSON.stringify({ body, err })}`)
            res.status(500).send(msg);
        }

    })

    router.post("/locationById", async (req, res) => {
        let { geoLocation, id } = req.body;
        console.log(`action: update location by id request . params:${JSON.stringify({ geoLocation, id })}`)
        try {
            await trashBinApi.updateTrashBinLocationById({ geoLocation, id });
            console.log(`action: successfully complete update location by id request.
            params:${JSON.stringify({ geoLocation, id })}`)
            res.send()
        } catch (err) {
            let msg =`action: An error occurred in the proccess of 
            -update location by id request.`
            console.log(`${msg} params:${JSON.stringify({ geoLocation, id, err })}`)
            res.status(500).send(msg);
        }

    })

    router.post("/emptyingDateById", async (req, res) => {

        let { emptyingDate, id } = req.body;
        console.log(`action: update emptying date by id request . params:${JSON.stringify({ emptyingDate, id })}`)
        try {
            await trashBinApi.updateTrashBinEmptingDateById({ emptyingDate, id });
            console.log(`action: successfully complete update emptying date by id request 
            . params:${JSON.stringify({ emptyingDate, id })}`)
            res.send()
        } catch (err) {
            let msg =`action: An error occurred in the proccess of 
            -update emptying date by id request.`
            console.log(`${msg} params:${JSON.stringify({ emptyingDate, id, err })}`)
            res.status(500).send(msg);
        }

    })

    return router;
}