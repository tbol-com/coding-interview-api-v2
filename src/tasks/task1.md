# Task 1

The current solution exposes a skeleton `POST /payments` endpoint to create a payment. For this task, we want you to implement this endpoint and persist the data to MongoDB using mongoose.

```text
http://localhost:3000/payments
```

---

<br>

### Example request

The endpoint will take a JSON request body containing the following fields:

```json
{
  "recipient": "John smith",
  "amount": 1250.0
}
```

### Example response

Http status code: `200`

```json
{
  "_id": "635177a16e14d17ac3ec4e66",
  "recipient": "John smith",
  "amount": 1250.0
}
```

<br>

---

<br>

## Validation

Request must meet the requirements below, otherwise the API should throw a `400 - Bad Request` (We have created a base HttpException)

- Request body must not be empty
- recipient must not be null / empty / undefined
- amount must be greater than 0

<br>

## Validation Response

Http status code: `400`

Example Bad request response

```json
{
  "status": 400,
  "message": "Bad request"
}
```
