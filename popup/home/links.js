
function get_stored_value(key) {
    return new Promise((resolve) => {
        chrome.storage.sync.get(key, function(value) {
            resolve(value[key]);
        });
    });
}

function delete_value(key)
{
    chrome.storage.sync.remove(key); 
}

//CREATE YOUR FUNCTION HERE

//here event click on button
window.onclick = function(event) {
    const target = event.target; //get the target of the event
}