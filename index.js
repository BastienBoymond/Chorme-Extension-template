const baseUrl = //URL
    
// This function is called to send a request to a API
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

// This function is called to delete thing in storage
function delete_value(key)
{
    chrome.storage.sync.remove(key);
}
