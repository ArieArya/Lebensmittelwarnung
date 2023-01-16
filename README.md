# Lebensmmittelwarnung

### Introduction 

This project is part of the Fullstack Engineering challenge proposed by QuantCo to hack and improve an existing API from [bund.dev](https://bund.dev/)! In particular, the API [lebensmittelwarnung](https://lebensmittelwarnung.api.bund.dev/) is chosen for this project, which is an API used to extract all consumer product warnings in different regions in Germany. The official website to browse such warnings can be found in https://www.lebensmittelwarnung.de/bvl-lmw-de/liste/alle/hessen/10/0.

This project was chosen for a few reasons:
1. The API's documentation is quite poorly designed - with a single POST request to obtain product warnings based only on the published date and category (either food or general product)
2. The UI of the [main website](https://www.lebensmittelwarnung.de/bvl-lmw-de/liste/alle/hessen/10/0) is also relatively difficult to navigate, with many pages and having no option to search for individual products (only filtering by affected regions).

This project addresses the problem above through the following:
1. Consumer product warnings are scraped and stored in **AWS OpenSearch** - an open-source search engine which enables full-text search on any product warnings. This enables users to search for a specific item, warning, or even description of a warning.
2. A modern UI is provided to enable users to search for specific product warnings. 
3. Two API endpoints are also exposed to allow 3rd party applications to query product warnings via the [OpenSearch query domain-specific language (DSL)](https://opensearch.org/docs/latest/opensearch/query-dsl/index/). See the API documentation page for more details.
    - GET /api/search/{search-query}/
    - POST /api/search/


___

### Website Demonstration

![](https://github.com/ArieArya/Lebensmittelwarnung/website-demo.gif)

___

### Tech Stack
- AWS OpenSearch (Search Engine)
- AWS EC2 (Infrastructure)
- ReactJS + TypeScript (Frontend)
- Django (Backend)
- REST
