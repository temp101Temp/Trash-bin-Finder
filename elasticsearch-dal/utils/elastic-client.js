const { Client } = require('@elastic/elasticsearch')
class ElasticClient {
    constructor(config) {
        this._client = new Client({
            auth: {
                username: config.username,
                password: config.password
            }, node: config.url
        })

    }

    getAllTrashBinByEmptyingDate = async (emptyingDate) => {
        return await this._client.search({
            index: 'trash-bins',
            body: {
                query: {
                    match: { emptyingDate: emptyingDate }
                }
            }
        });
    }

    addTrashBin = async (params) => {
        return await this._client.index({
            index: 'trash-bins',
            id: params.id,
            refresh: true,
            body: params
        });
    }

    deleteTrashBinById = async (id) => {
        try {
            return await this._client.delete({
                index: 'trash-bins',
                refresh: true,
                id: id
            });
        } catch (err) {
            throw err
        }
    }

    updateTrashBinLocationById = async (params) => {
        try {
            return await this._client.update({
                index: 'trash-bins',
                refresh: true,
                id: params.id,
                body: {
                    doc: {
                        geoLocation: params.geoLocation
                    }
                }

            });
        } catch (err) {
            throw err
        }
    }
    getAllTrashBinsByDistanceFromSpecificPoint = async (params) => {
        try {
            return await this._client.search({
                index: 'trash-bins',
                body: {
                    query: {
                        bool: {
                            must: {
                                match_all: {}
                            },
                            filter: {
                                geo_distance: {
                                    distance: params.distance,
                                    geoLocation: params.geoLocation
                                }
                            }
                        }
                    }
                }
            });
        } catch (err) {
            throw err
        }
    }

    updateTrashBinEmptingDateById = async (params) => {
        try {
            return await this._client.update({
                index: 'trash-bins',
                refresh: true,
                id: params.id,
                body: {
                    doc: {
                        emptyingDate: params.emptyingDate
                    }
                }

            });
        } catch (err) {
            throw err
        }
    }
}
module.exports = ElasticClient;