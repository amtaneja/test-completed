export const utils = {
    makeWebRequest: (url, method, body) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: method,
            headers: myHeaders,
            redirect: 'follow'
        };

        if (body) {
            var raw = JSON.stringify(body);
            requestOptions.body = raw;
        }

        return new Promise(function (resolve, reject) {
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => {
                    let json = JSON.parse(result);
                    resolve(json);
                }).catch((error) => {
                    reject(error);
                });
        });
    },
    cleanHTMLText: (html)=>{
        var div = document.createElement("div");
        div.innerHTML = html;
        let ans = div.textContent;
        div.remove();
        return ans;
    }
}