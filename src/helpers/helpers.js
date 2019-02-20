/**
 * @name sortArrayOfDatesByDateProp
 * @description sort Array that has at least one property from type Date string, returns sorted Array
 * @type method
 * @params items
 * @params prop
 * @returns {Array}
 * */

const sortArrayOfDatesByDateProp = (items, prop) => {
    return items.sort((a, b) => {
        return new Date(b[prop]) - new Date(a[prop]);
    });
}


/**
 * @name errorResponseHandler
 * @description It takes respose param that comming from the firts promise from the Fetch API, check if response.ok is truthy value, and returns the respose.json() if is ok
 * @type method
 * @params respose
 * @params prop
 * @returns {Array}
 * */

const errorResponseHandler = (respose) => {
    if (respose.ok) {
        return JSON.stringify(respose);
    } else {
        throw new Error(
            "response.ok is false, check your end-point and required query params"
        );
    }
}

/**
 * @name fetchData
 * @description fetch the data from the provided url(end-point) and returned as Promise
 * @type method
 * @params url
 * @returns {Promise}
 * */

 function fetchData (url) {
    return fetch(url)
        .then(respose => {
            return errorResponseHandler(respose);
        })
        .then(data => {
            const { items } = data;
            return items;
        })
        .catch(e => {
            console.log(e);
        });
}

export { 
    sortArrayOfDatesByDateProp,
    errorResponseHandler,
    fetchData
}