# HyperIslandMosaiq

This is a simple Websocket server that takes certain predetermined requests and answers with a number of possible messages and payloads.

## Installation and start up
After having cloned the repo, run `npm install` to install the dependencies. To start the server (runs on port 3000), run `npm start` or if using nodemon, run `npm run dev`.

## This is the current list of expected request:
- `{ "type": "MineService", "action": "LOAD_ALL_CONNECTIONS" }`

- `{ "type": "MineService", "action": "LOAD_ALL_EXPLORERS" }`
- `{ "type": "MineService", "action": "LOAD_ALL_MINERS" }`
- `{ "type": "PoolService", "action": "LOAD_ALL_POLLERS" }`
The three above will most likely be replaced by a single action:
- `{ "type": "JobService", "action": "LOAD_ALL_JOBS" }`


- `{ "type": "MineService", "action": "LOAD_JOB_TYPE", "jobType": "se.iquest.iqmine.poller.SMHIPoller"}`
- `{ "type": "", "action": "LOAD_CONNECTION_TYPE", "connectionType": "se.iquest.iqmine.connections.SMHIConnection" }`
- ```JSON
    {
        "type": "MineService",
        "action": "CREATE_CONNECTION",
        "connection": {
            "address": "",
            "description": "",
            "name": "smhitest",
            "password": "",
            "passwordRepeat": "",
            "username": "",
            "type": "se.iquest.iqmine.connections.SMHIConnection",
            "allowedExplorers": [
                "SMHI"
            ],
            "version": "V2",
            "forecastLength": 10,
            "locations": [
                {
                    "site": "Seminariet",
                    "street": "PrÃ¤stgatan 26",
                    "city": "Uppsala",
                    "country": "Sweden",
                    "lat": "59.8686687",
                    "lon": "17.6180381"
                }
            ],
            "explorer": "se.iquest.iqmine.explorers.SMHIExplorer"
        }
    }
    ```
- ```JSON
    {
    "type": "PoolService",
    "action": "RUN_EXPLORER",
    "connection": "smhi1",
    "job": {
        "dataPoints": [],
        "connection": "smhi1",
        "type": "se.iquest.iqmine.poller.SMHIPoller",
        "description": "",
        "minHistoryInterval": "TENMINUTE",
        "filters": [],
        "name": "smhi1",
        "deleteData": null,
        "jobType": "dataFetch"
    },
    "data": null
    }
    ```

Please note that the last two request bodies above (CREATE_CONNECTION and RUN_EXPLORER) contains dynamic data, so the values presented above are only examples.

## Data permeance
Since the data is never saved except within the current session, reloading the server will cause all saved data to disapear. To make testing easier, one connection and a job is hardcoded and will always be returned to the frontend. The values of those can be modified as desired.