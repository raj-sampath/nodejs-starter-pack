const statsSuccess = "SUCCESS";
const statusFailure = "FAILURE"
const genericSuccessFunction = (status, message, data) => {
   return {
       status, 
       message, 
       data
    }
};
const genericFailureFunction = (status, message) => {
    return {
        status,
        message
    }
}

module.exports = {
    __GENERIC_FAILURE_OBJ: (error) => genericFailureFunction(statusFailure, error),
    __GENERIC_FOUND_OBJ: (data, type) => genericSuccessFunction(statsSuccess, type + " Found !!!", data),
    __GENERIC_CREATION_SUCCESS_OBJ: (data, type) => genericSuccessFunction(statsSuccess, type + " Created Successfully !!!", data),
    __GENERIC_NOT_FOUND_OBJ: (type) => genericFailureFunction(statusFailure, type + " Not Found !!!"),
    __GENERIC_UPDATE_SUCCESSFUL_OBJ: (data, type) => genericSuccessFunction(statsSuccess, type + " Updated Successfully !!!", data),
}