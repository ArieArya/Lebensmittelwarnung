export type ApiResponse = {
    title: string;
    responseCode: string;
    contentType: string;
    body: string;
}

export type ApiDocumentation = {
    apiTitle: string;
    apiDescription: string;
    apiType: "GET" | "POST" ;
    apiEndpoint: string;
    apiResponses: ApiResponse[];
    
}

