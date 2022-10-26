# Task 3

For the next task, we want you to call a 3rd party API during the POST /payments call. The response from the third party api includes an `id` property which should be extracted and saved as an `internalId` property on the payment which is persisted to the db and returned to the user.

---

<br>

## Example response from `POST /payments`

Http status code: `200`

```json
{
  "_id": "635177a16e14d17ac3ec4e66",
  "recipient": "John smith",
  "amount": 1250.0,
  "internalId": "999999999"
}
```

<br>

<br>

# Third party api

The third party API has a single `POST` endpoint with the url below.

```text
    https://internal.tbol/api/v2/payments
```

<br>

## Example third party request body

The endpoint will take a JSON request body containing the following fields:

```json
{
  "recipient": "John smith",
  "amount": 1250.0
}
```

<br>

## Example third party response body

Http status code: `200`

```json
{
  "id": "999999999"
}
```

<br>

---
