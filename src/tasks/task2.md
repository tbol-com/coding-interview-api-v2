# Task 2

The current solution exposes a skeleton `GET /payments` endpoint to retrieve payments. The database is already seeded with data (40 records). For this task, we want you to implement the GET endpoint and return a list of paginated payments.

```text
http://localhost:3000/payments
```

---

<br>

# Pagination

Pagination on the query should be implemented using the following requirements.

| Query param | Default value | Description                        |
| :---------- | :-----------: | :--------------------------------- |
| page        |       1       | the page number you require        |
| pagesize    |      10       | maximum number of records per page |

<br>

> **Note** If no records exist for the paginated request we should return a **_404 - Not Found_**

<br>

<br>

## Example request

The endpoint will return a list of payments like the example below:

```text
http://localhost:3000/payments?page=2&pagesize=15
```

<br>

## Example response

Http status code: `200`

```json
[
    {
        "_id": "635177a16e14d17ac3ec4e66",
        "recipient": "John smith",
        "amount": 1250.00,
    },
    {
        "_id": "695222a47ye65d19ac5rct55",
        "recipient": "Dangerous dan",
        "amount": 2000.00,
    },
    ...
]
```

<br>

---

<br>
