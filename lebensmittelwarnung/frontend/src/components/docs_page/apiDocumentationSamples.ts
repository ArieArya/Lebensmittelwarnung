import { ApiDocumentation } from '../../model';

// 1. Search - GET
export const apiDocSearchGet: ApiDocumentation = {
    apiTitle: "Simple Search",
    apiDescription: "Gets matching search result based on pre-defined QueryDSL parameters.",
    apiType: "GET",
    apiEndpoint: "/api/search/{search-query}/",
    apiResponses: [
        {
            title: "Response Sample",
            responseCode: "200",
            contentType: "application/json",
            body: 
`
{
    "took": 240,
    "timed_out": false,
    "_shards": {
        "total": 5,
        "successful": 5,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 2,
            "relation": "eq"
        },
        "max_score": 5.5223055,
        "hits": [
            {
                "_index": "docs",
                "_id": "0",
                "_score": 5.5223055,
                "_source": {
                    "_type": ".ProductWarning",
                    "archived": false,
                    "id": 49529,
                    "link": "https://www.baua.de/SiteGlobals/Layout/DataViews/Datarecord_DBTool_Produktsicherheit.html?idDatarecord=1208737",
                    "publishedDate": 1673564400000,
                    "title": "Citroen Personenkraftwagen ( Citroen Deutschland GmbH )",
                    "product": {
                        "_type": ".ProductWarning$Product",
                        "designation": "Personenkraftwagen",
                        "imageUrls": [
                            "https://www.baua.de/media/images_produktsicherheit/Kfz.png"
                        ],
                        "manufacturer": "Citroen Deutschland GmbH",
                        "affectedProducts": "Herstellungsdaten: 22.08.2022 - 23.08.2022 Rückruf-Code: JMY",
                        "brandName": "Citroen",
                        "category": "Kraftfahrzeuge, -teile und -zubehör",
                        "countryOfOrigin": "Slowakische Republik",
                        "model": "EG-Typgenehmigung/-Modell e2*2007/46*0003*69 Verkaufsbezeichnung: C3",
                        "shortDescription": "Personenkraftwagen"
                    },
                    "rapexInformation": {
                        "alertNumber": "A12/00095/23",
                        "message": "<div>Freiwillige Maßnahme: Rückruf des Produktes vom Endverbraucher<br /><br />Durch unsachgemäße Verschraubung bestimmter Bauteile (Bremssattel, Hinterachshalter, Sperrrad, ABS-Sensor, Bremsschlauch, Bremsschlauchhalter, vorderer Querlenker, horizontaler vorderer Querlenker, Stabilisator, Servolenkung) können die betroffenen Teile verloren gehen oder beschädigt werden. Dies kann zu verschiedenen Fehlfunktionen führen, z. B. zum Verlust der Verbindung zwischen Hinterrad und Spurstange der Achse oder zum Reißen der hinteren Bremsleitung während der Fahrt, wodurch sich die Unfallgefahr erhöht. Das Produkt entspricht nicht der Verordnung über die Genehmigung und Marktüberwachung von Kraftfahrzeugen und Kraftfahrzeuganhängern sowie von Systemen, Bauteilen und selbstständigen technischen Einheiten für diese Fahrzeuge.</div>"
                    },
                    "safetyInformation": {
                        "ordinance": "Straßenverkehrs-Zulassungs-Ordnung (StVZO)"
                    }
                }
            }
        ]
    }
}
`
        }
    ]
}

// 2. Search - POST
export const apiDocSearchPost: ApiDocumentation = {
    apiTitle: "Advanced Search",
    apiDescription: "Gets search result using QueryDSL standard (https://opensearch.org/docs/latest/opensearch/query-dsl/index/).",
    apiType: "POST",
    apiEndpoint: "/api/search/",
    apiResponses: [
        {
            title: "Request Sample",
            responseCode: "Payload",
            contentType: "application/json",
            body: 
`
{
    "size": 30,
    "query": {
        "multi_match": {
            "query": "citroen",
            "fuzziness": 1
        }
    }
}
`
        },
        {
            title: "Response Sample",
            responseCode: "200",
            contentType: "application/json",
            body: 
`
{
    "took": 240,
    "timed_out": false,
    "_shards": {
        "total": 5,
        "successful": 5,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 2,
            "relation": "eq"
        },
        "max_score": 5.5223055,
        "hits": [
            {
                "_index": "docs",
                "_id": "0",
                "_score": 5.5223055,
                "_source": {
                    "_type": ".ProductWarning",
                    "archived": false,
                    "id": 49529,
                    "link": "https://www.baua.de/SiteGlobals/Layout/DataViews/Datarecord_DBTool_Produktsicherheit.html?idDatarecord=1208737",
                    "publishedDate": 1673564400000,
                    "title": "Citroen Personenkraftwagen ( Citroen Deutschland GmbH )",
                    "product": {
                        "_type": ".ProductWarning$Product",
                        "designation": "Personenkraftwagen",
                        "imageUrls": [
                            "https://www.baua.de/media/images_produktsicherheit/Kfz.png"
                        ],
                        "manufacturer": "Citroen Deutschland GmbH",
                        "affectedProducts": "Herstellungsdaten: 22.08.2022 - 23.08.2022 Rückruf-Code: JMY",
                        "brandName": "Citroen",
                        "category": "Kraftfahrzeuge, -teile und -zubehör",
                        "countryOfOrigin": "Slowakische Republik",
                        "model": "EG-Typgenehmigung/-Modell e2*2007/46*0003*69 Verkaufsbezeichnung: C3",
                        "shortDescription": "Personenkraftwagen"
                    },
                    "rapexInformation": {
                        "alertNumber": "A12/00095/23",
                        "message": "<div>Freiwillige Maßnahme: Rückruf des Produktes vom Endverbraucher<br /><br />Durch unsachgemäße Verschraubung bestimmter Bauteile (Bremssattel, Hinterachshalter, Sperrrad, ABS-Sensor, Bremsschlauch, Bremsschlauchhalter, vorderer Querlenker, horizontaler vorderer Querlenker, Stabilisator, Servolenkung) können die betroffenen Teile verloren gehen oder beschädigt werden. Dies kann zu verschiedenen Fehlfunktionen führen, z. B. zum Verlust der Verbindung zwischen Hinterrad und Spurstange der Achse oder zum Reißen der hinteren Bremsleitung während der Fahrt, wodurch sich die Unfallgefahr erhöht. Das Produkt entspricht nicht der Verordnung über die Genehmigung und Marktüberwachung von Kraftfahrzeugen und Kraftfahrzeuganhängern sowie von Systemen, Bauteilen und selbstständigen technischen Einheiten für diese Fahrzeuge.</div>"
                    },
                    "safetyInformation": {
                        "ordinance": "Straßenverkehrs-Zulassungs-Ordnung (StVZO)"
                    }
                }
            }
        ]
    }
}
`
        }
    ]
}