class TrashBinApi {
    constructor(client) {
        this._client = client;
    }
    // get
    getAllTrashBinsByDistanceFromSpecificPoint = async (urlEnding, params) => {
        try {
            let result = await this._client.get(urlEnding, params)
            return result.data
        } catch (err) {
            throw err
        }
    }

    getAllTrashBinByEmptyingDate = async (urlEnding, emptyingDate) => {
        try {
            let result = await this._client.get(urlEnding, { emptyingDate })
            return result.data;
        } catch (err) {
            throw err
        }
    }

    // PUT
    addTrashBin = async (urlEnding, params) => {
        try {
            return await this._client.put(urlEnding, params)
        } catch (err) {
            throw err
        }
    }
    // DELETE
    deleteTrashBinById = async (urlEnding, id) => {
        try {
            return await this._client.delete(urlEnding, { id });
        } catch (err) {
            throw err
        }
    }

    // post
    updateTrashBinLocationById = async (urlEnding, params) => {
        try {
            return await this._client.post(urlEnding, params);
        } catch (err) {
            throw err
        }
    }

    updateTrashBinEmptingDateById = async (urlEnding, params) => {
        try {
            return await this._client.post(urlEnding, params);
        } catch (err) {
            throw err
        }
    }
}
module.exports = TrashBinApi;