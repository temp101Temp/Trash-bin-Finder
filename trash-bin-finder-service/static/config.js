module.exports = {
    clientSettings: {
        baseSettings: {
            baseUrl: "http://localhost:9000/api",
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
    redisClientSettings: {
        url: "redis://:@localhost:6379",
        expireAtQuery: { EX: 300 }
    },
    servicePort: 3000
}