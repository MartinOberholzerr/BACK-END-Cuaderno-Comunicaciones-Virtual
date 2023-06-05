reason: TopologyDescription {
    type: 'Single',
    setName: null,
    maxSetVersion: null,
    maxElectionId: null,
    servers: Map(1) {
      'localhost:27017' => ServerDescription {
        address: 'localhost:27017',
        error: Error: connect ECONNREFUSED 127.0.0.1:27017
            at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1132:16) {
          name: 'MongoNetworkError'
        },
        roundTripTime: -1,
        lastUpdateTime: 58154302,
        lastWriteDate: null,
        opTime: null,
        type: 'Unknown',
        topologyVersion: undefined,
        minWireVersion: 0,
        maxWireVersion: 0,
        hosts: [],
        passives: [],
        arbiters: [],
        tags: []
      }
    },
    stale: false,
    compatible: true,
    compatibilityError: null,
    logicalSessionTimeoutMinutes: null,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    commonWireVersion: null
}