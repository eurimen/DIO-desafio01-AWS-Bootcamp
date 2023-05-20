"use strict";
const AWS = require("aws-SDK");

const fetchItem = async (event) =>{
    //MODULE.EXPORTS.FETCHiTEM = ASYNC (EVENT) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    const {id} = event.pathParameters

    let item;

    try{
        const result = await dynamodb.get({
            TableName: "ItemTable",
            Key: {id}
        }).promise();

        item = result.Item;

    } catch (error) {
        console.log(error)
    }

    return {
        statusCode: 200,
        body: JSON.stringify(item),
    };
};

module.exports ={
    handler: fetchItem,
};