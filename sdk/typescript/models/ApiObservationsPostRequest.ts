/**
 * NextJS Swagger
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ApiObservationsPostRequest {
    /**
    * The trace ID associated with the observation
    */
    'traceId'?: string;
    /**
    * The type of the observation
    */
    'type'?: ApiObservationsPostRequestTypeEnum;
    /**
    * The name of the observation
    */
    'name'?: string;
    /**
    * The start time of the observation
    */
    'startTime'?: Date;
    /**
    * The end time of the observation
    */
    'endTime'?: Date;
    /**
    * Attributes of the observation
    */
    'attributes'?: { [key: string]: any; };
    /**
    * The parent observation ID associated with the observation
    */
    'parentObservationId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "traceId",
            "baseName": "traceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApiObservationsPostRequestTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "parentObservationId",
            "baseName": "parentObservationId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiObservationsPostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiObservationsPostRequestTypeEnum = "span" | "event" ;
