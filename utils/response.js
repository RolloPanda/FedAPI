const successResponse = (res,data,statusCode=200) => {
    return res.status(statusCode).json({
        success :true,
        data : data,
        error : null,
    });
};
const errorResponse = (res,data,statusCode=500) => {
    return res.status(statusCode).json({
        success : false,
        data : data,
        error : Message,
    });
};

module.exports = { successResponse, errorResponse};