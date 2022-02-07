const baseUrl = //URL of the API

// This function is called to send a request to a API
async function requestGetData(url){
    try {
        const res = await fetch(url, {
            method: 'GET',
            credentials: 'include',
        });
        return(res.text());
    } catch (e) {
        return (e);
    }
};

// This function is called for get the data stock in storage
function get_stored_value(key) {
    return new Promise((resolve) => {
        chrome.storage.sync.get(key, function(value) {
            resolve(value[key]);
        });
    });
}

// This function is called for set the data stock in storage
function store_value(key, value)
{
    chrome.storage.sync.set({
        [key]: value,
    })
}
