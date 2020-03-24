exports.handler = async event => {
    const subject = event.queryQueryStringParameters || "World"
    return {
        statusCode: 200,
        body: `hello ${subject}`,
    }
}
