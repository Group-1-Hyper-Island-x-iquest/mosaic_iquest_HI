const v4 = require('uuid')

//TODO: create responses for LOAD_ JOB_TYPE and LOAD_CONNECTION_TYPE

const requests = [
    { "type": "MineService", "action": "LOAD_ALL_CONNECTIONS" },
    { "type": "JobService", "action": "LOAD_ALL_JOBS" },
    { "type": "JobService", "action": "LOAD_ALL_EXPLORERS" },
    { "type": "MineService", "action": "LOAD_JOB_TYPE", "jobType": "se.iquest.iqmine.poller.SMHIPoller"},
    { "type": "", "action": "LOAD_CONNECTION_TYPE", "connectionType": "se.iquest.iqmine.connections.SMHIConnection" },
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
    },
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
];

const responses = [
    {
        "payload": [
            {
                "password": "",
                "address": "",
                "port": 0,
                "forecastLength": 10,
                "name": "smhi1",
                "explorer": "se.iquest.iqmine.explorers.SMHIExplorer",
                "description": "",
                "locations": [
                    {
                        "country": "Sweden",
                        "site": "Seminariet",
                        "city": "Uppsala",
                        "street": "Seminariegatan 26",
                        "lon": "17,6081122",
                        "lat": "59,8713861"
                    }
                ],
                "type": "se.iquest.iqmine.connections.SMHIConnection",
                "uuid": "3708f64d-b12f-4373-b53f-2e327e2e20fd",
                "username": ""
            },
        ],
        "action": "LOAD_ALL_CONNECTIONS_SUCCESS"
    },
    {
        "payload": [
            {
                "avg_runtime": 0.0,
                "lastRun": "2022-09-30T11:04:37.177Z",
                "minHistoryInterval": "TENMINUTE",
                "description": "",
                "type": "se.iquest.iqmine.poller.SMHIPoller",
                "uuid": "56ba9870-e5c6-4ea5-afc3-d824d344f0d7",
                "running": false,
                "alertStates": [],
                "task": "inactive",
                "name": "test",
                "connection": null,
                "status": "inactive"
            }
        ],
        "action": "LOAD_ALL_POLLERS_SUCCESS"
    },
    {
        "payload": [
        ],
        "action": "LOAD_ALL_MINERS_SUCCESS"
    },
    {
        "payload": {
            "configs": [
                "poller_2910 Hubimport 1.xml",
                "poller_dfg.xml",
                "poller_test11.xml",
                "tmp_poller_2910 Hubimport 1.xml-old",
                "tmp_poller_2910 Hubimport 12345.xml-old",
                "tmp_poller_2910 Hubimport.xml-old",
                "tmp_poller_prÃ¤st.xml-old",
                "tmp_poller_prÃ¤sten.xml-old",
                "tmp_poller_prÃ¤sterna.xml-old",
                "tmp_poller_prÃ¤sternas.xml-old",
                "tmp_poller_prÃ¤stgatan.xml-old",
                "tmp_poller_test.xml-old"
            ],
            "application": [
                "ACL.log",
                "connections.log",
                "console.log",
                "explorers.log",
                "exporter_5272 HÃ¶rnan 1.log",
                "exporter_5272 HÃ¶rnan 1000-2022-12-20.log.gz",
                "exporter_5272 HÃ¶rnan 1000.log",
                "exporter_afadasd.log",
                "exporter_grafminer.log",
                "exporter_grafminer11.log",
                "exporter_grafminersss.log",
                "kafka.log",
                "minerservice.log",
                "overwrite.log",
                "poolservice.log",
                "service.log",
                "storage.log",
                "transmitter.log"
            ],
            "pollers": [
                "poller_2910 Hubimport 1.log",
                "poller_2910 Hubimport 12345-2022-12-20.log.gz",
                "poller_2910 Hubimport 12345.log",
                "poller_2910 Hubimport-2022-12-14.log.gz",
                "poller_2910 Hubimport.log",
                "poller_dfg.log",
                "poller_fgdfgdfgfd.log",
                "poller_ki;j.log",
                "poller_prÃ¤st-2022-12-08.log.gz",
                "poller_prÃ¤st.log",
                "poller_prÃ¤stgatan.log",
                "poller_test-2022-09-29.log.gz",
                "poller_test.log",
                "poller_testSMHI.log"
            ],
            "miners": [
                "exporter_grafminer_test-2022-10-13.log.gz",
                "exporter_grafminer_test.log"
            ]
        },
        "action": "LOAD_ALL_FILES_SUCCESS"
    }, //Is this needed?
    {
        "payload": [
            {
                "name": "AH-Energi",
                "class": "se.iquest.iqmine.explorers.EnergiExplorer"
            },
            {
                "name": "AllianceCsvHttp",
                "class": "se.iquest.iqmine.explorers.AllianceCsvHttpExplorer"
            },
            {
                "name": "Atlas",
                "class": "se.iquest.iqmine.explorers.Atlas"
            },
            {
                "name": "Bastec",
                "class": "se.iquest.iqmine.explorers.Bastec"
            },
            {
                "name": "CitectExplorer",
                "class": "se.iquest.iqmine.explorers.CitectExplorer"
            },
            {
                "name": "Elvaco",
                "class": "se.iquest.iqmine.explorers.Elvaco"
            },
            {
                "name": "Fidelix",
                "class": "se.iquest.iqmine.explorers.Fidelix"
            },
            {
                "name": "Graph",
                "class": "se.iquest.iqmine.explorers.GraphExplorer"
            },
            {
                "name": "HubApp",
                "class": "se.iquest.iqmine.explorers.HubAppExplorer"
            },
            {
                "name": "Iconics",
                "class": "se.iquest.iqmine.explorers.Iconics"
            },
            {
                "name": "Johnson",
                "class": "se.iquest.iqmine.explorers.Johnson"
            },
            {
                "name": "Larmia",
                "class": "se.iquest.iqmine.explorers.Larmia"
            },
            {
                "name": "Lindinspect API",
                "class": "se.iquest.iqmine.explorers.Lindinspect"
            },
            {
                "name": "Myrspoven",
                "class": "se.iquest.iqmine.explorers.Myrspoven"
            },
            {
                "name": "Obix",
                "class": "se.iquest.iqmine.explorers.Obix"
            },
            {
                "name": "Orbiq data export",
                "class": "se.iquest.iqmine.explorers.OrbiqDataExportExplorer"
            },
            {
                "name": "Piscada",
                "class": "se.iquest.iqmine.explorers.Piscada"
            },
            {
                "name": "RealEstateCore Kafka",
                "class": "se.iquest.iqmine.explorers.RECKafkaExplorer"
            },
            {
                "name": "SMHI",
                "class": "se.iquest.iqmine.explorers.SMHIExplorer"
            },
            {
                "name": "ScriptJob",
                "class": "se.iquest.iqmine.explorers.ScriptJobExplorer"
            },
            {
                "name": "Standard",
                "class": "se.iquest.iqmine.explorers.Standard"
            },
            {
                "name": "Tridium",
                "class": "se.iquest.iqmine.explorers.Tridium"
            },
            {
                "name": "Ultrabase",
                "class": "se.iquest.iqmine.explorers.Ultrabase"
            },
            {
                "name": "Vista",
                "class": "se.iquest.iqmine.explorers.Vista"
            },
            {
                "name": "Wdc",
                "class": "se.iquest.iqmine.explorers.Wdc"
            },
            {
                "name": "Wdc Explorer",
                "class": "se.iquest.iqmine.explorers.WdcExplorer"
            },
            {
                "name": "WebFactory(SQL)",
                "class": "se.iquest.iqmine.explorers.WEBfactorySQL"
            },
            {
                "name": "Webport API",
                "class": "se.iquest.iqmine.explorers.WebportApi"
            },
            {
                "name": "Webport Databas",
                "class": "se.iquest.iqmine.explorers.Webport"
            },
            {
                "name": "Zabbix",
                "class": "se.iquest.iqmine.explorers.ZabbixExplorer"
            }
        ],
        "action": "LOAD_ALL_EXPLORERS_SUCCESS"
    },
    {
        "payload": [
        ],
        "action": "LOAD_ALL_SCRIPTS_SUCCESS"
    },
];

const createConnectionResponse = (data) => {
    const uuid = v4();
    return {
        "payload": {
            "password": "",
            "address": "",
            "port": 0,
            "forecastLength": data.forecastLength,
            "name": data.name,
            "explorer": "se.iquest.iqmine.explorers.SMHIExplorer",
            "description": "",
            "locations": [...data.locations],
            "type": "se.iquest.iqmine.connections.SMHIConnection",
            "uuid": uuid,
            "username": ""
        },
        "action": "CREATED_CONNECTION"
    }
}

const createJobResponse = (data) => {
    return {
        "payload": {
            "dataPoints": [
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_spp",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, -9 or 0-100",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "percent",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "spp",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Percent of precipitation in frozen form. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "percent",
                        "orbiqTag": "asdasd_spp",
                        "lastDateTimeMined": null,
                        "name": "spp",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_pcat",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 0-6",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "category",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "pcat",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Precipitation category. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "category",
                        "orbiqTag": "asdasd_pcat",
                        "lastDateTimeMined": null,
                        "name": "pcat",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_pmin",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "kg/m2/h",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "pmin",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Minimum precipitation intensity. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "kg/m2/h",
                        "orbiqTag": "asdasd_pmin",
                        "lastDateTimeMined": null,
                        "name": "pmin",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_pmean",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "kg/m2/h",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "pmean",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Mean precipitation intensity. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "kg/m2/h",
                        "orbiqTag": "asdasd_pmean",
                        "lastDateTimeMined": null,
                        "name": "pmean",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_pmax",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "kg/m2/h",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "pmax",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Maximum precipitation intensity. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "kg/m2/h",
                        "orbiqTag": "asdasd_pmax",
                        "lastDateTimeMined": null,
                        "name": "pmax",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_pmedian",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "kg/m2/h",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "pmedian",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Median precipitation intensity. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "kg/m2/h",
                        "orbiqTag": "asdasd_pmedian",
                        "lastDateTimeMined": null,
                        "name": "pmedian",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_tcc_mean",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 0-8",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "octas",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "tcc_mean",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Mean value of total cloud cover. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "octas",
                        "orbiqTag": "asdasd_tcc_mean",
                        "lastDateTimeMined": null,
                        "name": "tcc_mean",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_lcc_mean",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 0-8",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "octas",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "lcc_mean",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Mean value of low level cloud cover. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "octas",
                        "orbiqTag": "asdasd_lcc_mean",
                        "lastDateTimeMined": null,
                        "name": "lcc_mean",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_mcc_mean",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 0-8",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "octas",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "mcc_mean",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Mean value of medium level cloud cover. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "octas",
                        "orbiqTag": "asdasd_mcc_mean",
                        "lastDateTimeMined": null,
                        "name": "mcc_mean",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_hcc_mean",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 0-8",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "octas",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "hcc_mean",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Mean value of high level cloud cover. Clouds above 6000 meters. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "octas",
                        "orbiqTag": "asdasd_hcc_mean",
                        "lastDateTimeMined": null,
                        "name": "hcc_mean",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_t",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "\tDecimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "Cel",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "t",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Air temperature. 2m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "Cel",
                        "orbiqTag": "asdasd_t",
                        "lastDateTimeMined": null,
                        "name": "t",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_msl",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "hPa",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "msl",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Air pressure. 0m above mean sea level",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "hPa",
                        "orbiqTag": "asdasd_msl",
                        "lastDateTimeMined": null,
                        "name": "msl",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_vis",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "km",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "vis",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Horizontal visibility. 2m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "km",
                        "orbiqTag": "asdasd_vis",
                        "lastDateTimeMined": null,
                        "name": "vis",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_wd",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "degree",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "wd",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Wind direction. 10m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "degree",
                        "orbiqTag": "asdasd_wd",
                        "lastDateTimeMined": null,
                        "name": "wd",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_ws",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "m/s",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "ws",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Wind speed. 10m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "m/s",
                        "orbiqTag": "asdasd_ws",
                        "lastDateTimeMined": null,
                        "name": "ws",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_r",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 0-100",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "percent",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "r",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Relative humidity. 2m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "percent",
                        "orbiqTag": "asdasd_r",
                        "lastDateTimeMined": null,
                        "name": "r",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_tstm",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 0-100",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "percent",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "tstm",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Thunder probability. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "percent",
                        "orbiqTag": "asdasd_tstm",
                        "lastDateTimeMined": null,
                        "name": "tstm",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_gust",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Decimal number, one decimal",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "m/s",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "gust",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Wind gust speed. 10m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "m/s",
                        "orbiqTag": "asdasd_gust",
                        "lastDateTimeMined": null,
                        "name": "gust",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                },
                {
                    "dataPoint": {
                        "lastSavedQstamp": null,
                        "scriptBinder": [],
                        "historySegments": [],
                        "lastReadValue": null,
                        "lastSavedTime": null,
                        "lastReadTime": null,
                        "origTag": "asdasd_Wsymb2",
                        "type": "se.iquest.iqmine.poller.SMHIDataPoint",
                        "uuid": null,
                        "measurement": "MV",
                        "tags": [
                            {
                                "tagValue": "Integer, 1-27",
                                "tagType": "@valueRange"
                            },
                            {
                                "tagValue": "category",
                                "tagType": "@unit"
                            },
                            {
                                "tagValue": "Wsymb2",
                                "tagType": "@name"
                            },
                            {
                                "tagValue": "Weather symbol. 0m above ground",
                                "tagType": "@description"
                            }
                        ],
                        "lastSavedValue": null,
                        "lastReadQstamp": null,
                        "earlierExists": true,
                        "unit": "category",
                        "orbiqTag": "asdasd_Wsymb2",
                        "lastDateTimeMined": null,
                        "name": "Wsymb2",
                        "ealiestDateTimeMined": null,
                        "oldestHistoryToMine": "2022-02-22",
                        "interval": 900,
                        "location": {
                            "site": "asdasd",
                            "address": {
                                "country": "Sweden",
                                "city": "asdasd",
                                "street": "asdasd"
                            },
                            "coordinates": {
                                "lon": 31.0,
                                "lat": 34.0
                            }
                        },
                        "enableCov": false
                    },
                    "minedBy": null
                }
            ],
            "tags": [
                {
                    "values": [
                        "percent",
                        "category",
                        "kg/m2/h",
                        "octas",
                        "Cel",
                        "hPa",
                        "km",
                        "degree",
                        "m/s"
                    ],
                    "type": "@unit"
                },
                {
                    "values": [
                        "spp",
                        "pcat",
                        "pmin",
                        "pmean",
                        "pmax",
                        "pmedian",
                        "tcc_mean",
                        "lcc_mean",
                        "mcc_mean",
                        "hcc_mean",
                        "t",
                        "msl",
                        "vis",
                        "wd",
                        "ws",
                        "r",
                        "tstm",
                        "gust",
                        "Wsymb2"
                    ],
                    "type": "@name"
                },
                {
                    "values": [
                        "Percent of precipitation in frozen form. 0m above ground",
                        "Precipitation category. 0m above ground",
                        "Minimum precipitation intensity. 0m above ground",
                        "Mean precipitation intensity. 0m above ground",
                        "Maximum precipitation intensity. 0m above ground",
                        "Median precipitation intensity. 0m above ground",
                        "Mean value of total cloud cover. 0m above ground",
                        "Mean value of low level cloud cover. 0m above ground",
                        "Mean value of medium level cloud cover. 0m above ground",
                        "Mean value of high level cloud cover. Clouds above 6000 meters. 0m above ground",
                        "Air temperature. 2m above ground",
                        "Air pressure. 0m above mean sea level",
                        "Horizontal visibility. 2m above ground",
                        "Wind direction. 10m above ground",
                        "Wind speed. 10m above ground",
                        "Relative humidity. 2m above ground",
                        "Thunder probability. 0m above ground",
                        "Wind gust speed. 10m above ground",
                        "Weather symbol. 0m above ground"
                    ],
                    "type": "@description"
                }
            ]
        },
        "action": "RUN_EXPLORER_SUCCESS"
    };
};

//Request for connection form structure?


module.exports = {
    responses: responses,
    createConnectionResponse: createConnectionResponse,
    createJobResponse: createJobResponse
}