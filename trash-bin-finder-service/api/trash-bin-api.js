class TrashBinApi {
    constructor(client) {
        this._client = client;
    }
    // GET
    //#region getAllTrashBinsByDistanceFromSpecificPoint summary
    /**
     * @swagger
     * /api/byDistanceFromPoint:
     *  get:
     *    description: Get all of the trash bins that in the given distance from given geo point 
     *    parameters:
     *       - name: geoLocation
     *         description: geo point of the location.
     *         in: query
     *         required: true
     *         type: object
     *       - name: distance
     *         description: number and measurement unit (ending could be 'm','km etc)
     *         in: query
     *         required: true
     *         type: string
     *    responses:
     *      '200':
     *        description: An array conatining search result
     *        schema:
     *            type: array
     *            items:
     *              type: object
     *              required:
     *                - id
     *                - color
     *                - type
     *                - geoLocation
     *                - emptyingDate
     *              properties:
     *                id:
     *                  type: string
     *                color:
     *                  type: string
     *                type:
     *                  type: string
     *                geoLocation:
     *                  type: object
     *                  required:
     *                    - lan
     *                    - lat
     *                  properties:
     *                    lan:
     *                      type: integer
     *                      format: double
     *                    lat:
     *                      type: integer
     *                      format: double
     *                emptyingDate:
     *                  type: string
     *                  format: date
     *                 
     */
    //#endregion
    getAllTrashBinsByDistanceFromSpecificPoint = async (urlEnding, params) => {
        try {
            let result = await this._client.get(urlEnding, params)
            return result.data
        } catch (err) {
            throw err
        }
    }

    //#region getAllTrashBinByEmptyingDate summary
    /**
     * @swagger
     * /api/byEmptyingDate:
     *  get:
     *    description: Get all of the trash bins thats matches the emptying date 
     *    parameters:
     *       - name: emptyingDate 
     *         description: trash bin emptying date.
     *         in: query
     *         required: true
     *         type: string
     *         format: date
     *    responses:
     *      '200':
     *        description: An array conatining search result
     *        schema:
     *            type: array
     *            items:
     *              type: object
     *              required:
     *                - id
     *                - color
     *                - type
     *                - geoLocation
     *                - emptyingDate
     *              properties:
     *                id:
     *                  type: string
     *                color:
     *                  type: string
     *                type:
     *                  type: string
     *                geoLocation:
     *                  type: object
     *                  required:
     *                    - lan
     *                    - lat
     *                  properties:
     *                    lan:
     *                      type: integer
     *                      format: double
     *                    lat:
     *                      type: integer
     *                      format: double
     *                emptyingDate:
     *                  type: string
     *                  format: date
     *                 
     */
    //#endregion
    getAllTrashBinByEmptyingDate = async (urlEnding, emptyingDate) => {
        try {
            let result = await this._client.get(urlEnding, { emptyingDate })
            return result.data;
        } catch (err) {
            throw err
        }
    }

    // PUT
    //#region addTrashBin summary
    /**
     * @swagger
     * /api/:
     *  put:
     *    description: Add new trash bin
     *    parameters:
     *      - in: body
     *        name: trash bin
     *        description: The trash bin to add.
     *        schema:
     *          type: object
     *          required: true
     *          properties:
     *            id:
     *              type: string
     *            type:
     *              type: string
     *            color:
     *              type: string
     *            emptyingDate:
     *              type: string
     *              format: date
     *            geoLocation:
     *              type: object
     *              properties:
     *                  lon:
     *                    type: integer
     *                    format: double
     *                  lat:
     *                    type: integer
     *                    format: double
     *    responses:
     *      '200':
     *        description: Trash bin added             
     */
    //#endregion
    addTrashBin = async (urlEnding, params) => {
        try {
            return await this._client.put(urlEnding, params)
        } catch (err) {
            throw err
        }
    }

    // DELETE
    //#region deleteTrashBinById summary
    /**
     * @swagger
     * /api/:
     *  delete:
     *    description: delete trash bin
     *    parameters:
     *       - name: id 
     *         description: trash bin id.
     *         in: query
     *         required: true
     *         type: string
     *    responses:
     *      '200':
     *        description: Trash bin deleted             
     */
    //#endregion
    deleteTrashBinById = async (urlEnding, id) => {
        try {
            return await this._client.delete(urlEnding, { id });
        } catch (err) {
            throw err
        }
    }

    // POST
    //#region updateTrashBinLocationById summary
    /**
     * @swagger
     * /api/locationById:
     *  post:
     *    description: update trash bin location by his id
     *    parameters:
     *      - in: body
     *        name: request
     *        description: The request details.
     *        schema:
     *          type: object
     *          required: true
     *          properties:
     *            id:
     *              type: string
     *            geoLocation:
     *              type: object
     *              properties:
     *                  lon:
     *                    type: integer
     *                    format: double
     *                  lat:
     *                    type: integer
     *                    format: double
     *    responses:
     *      '200':
     *        description: Trash bin location updated             
     */
    //#endregion
    updateTrashBinLocationById = async (urlEnding, params) => {
        try {
            return await this._client.post(urlEnding, params);
        } catch (err) {
            throw err
        }
    }

      //#region updateTrashBinLocationById summary
    /**
     * @swagger
     * /api/emptyingDateById:
     *  post:
     *    description: update trash bin emptying date by his id
     *    parameters:
     *      - in: body
     *        name: request
     *        description: The request details.
     *        schema:
     *          type: object
     *          required: true
     *          properties:
     *            id:
     *              type: string
     *            emptyingDate:
     *              type: string
     *              format: date
     *    responses:
     *      '200':
     *        description: Trash bin emptying date updated             
     */
    //#endregion
    updateTrashBinEmptingDateById = async (urlEnding, params) => {
        try {
            return await this._client.post(urlEnding, params);
        } catch (err) {
            throw err
        }
    }
}
module.exports = TrashBinApi;