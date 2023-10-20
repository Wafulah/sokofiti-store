
let headers = new Headers();
headers.append("Authorization", "Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==");
fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", { headers })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log(error));


headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer GILNgL4C9f4TNIPh1DW9iGMxA4fG");
  ​
fetch("https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl", {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "ShortCode": 600426,
      "ResponseType": "Completed",
      "ConfirmationURL": "https://mydomain.com/confirmation",
      "ValidationURL": "https://mydomain.com/validation",
    })
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error));  