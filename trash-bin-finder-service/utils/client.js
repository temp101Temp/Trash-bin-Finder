const axios = require('axios');

class myClient {
    constructor(baseSettings) {
        this._client = axios.create({
            baseURL: baseSettings.baseUrl,
            headers: baseSettings.headers,
            timeout:baseSettings.timeout
        })
        this._urlEnding
    }
    get = async (urlEnding,params) => {
        try {
            return params?await this._client.get(urlEnding,{params:params}):
            await this._client.get(urlEnding);
        } catch (error) {
            throw error;
        }
    }

    put = async (urlEnding, body) => {
        try {
            return await this._client.put(urlEnding, body);;
        } catch (error) {
            throw error;
        }
    }

    post = async (urlEnding, body) => {
        try {
            return await this._client.post(urlEnding, body);;
        } catch (error) {
            throw error;
        }
    }

    delete = async (urlEnding,params) => {
        try {
            return await this._client.delete(urlEnding,{params:params});;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = myClient;