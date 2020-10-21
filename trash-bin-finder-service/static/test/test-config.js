module.exports = {
    mockServicePort: 4444,
    clientSettings: {
        baseSettings: {
            baseUrl: "http://localhost:4444/api",
            headers: { "Content-Type": "application/json" },
            timeout: 100000
        },
        urlEnding: {
            getByLocation: "/byDistanceFromPoint",
            getByEmptyingDate: "/byEmptyingDate",
            updateLocation: "/locationById",
            updateEmptyingDate: "/emptyingDateById",
            deleteById: "/",
            add: "/",
        }
    },
    redisClientSetting: {
        url: "redis://:@localhost:6379",
        expireAtQuery: { EX: 300 }
    }
}