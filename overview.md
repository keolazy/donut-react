# Overview

-----------------------
### Contents

#### [Plot](readme.md)

#### [Getting Started](getting_started.md)

#### [Overview & Tables](overview.md)

#### [Shop Routes and Pages](shop_routes_pages.md)

#### [Donut Routes and Pages](donut_routes_pages.md)
-------------------------


Your app consists of three resources: shops, employees, and donuts.  Employees are able to login and edit their own information, but not other employees.

Business Rules:

 - Shops have many donuts, many donuts belong to many shops.
 - *Shops have many employees, employee belongs to a shop.
 - *Employee has one favorite donut

* employees is bonus
*plot stuff: the donuts for all the shops are stored and distributed from one factory.*

## Tables

|Shop
|----------------
|id
|name (text)
|city (text)


|Donut
|----------------
|id
|name (text)
|topping (text)
|price (int)


|Shop_donut
|----------------
|id
|shop_id (fk)
|donut_id (fk)


|Employee
|----------------|
|id
|first_name (text)
|last_name (text)
|email (text)
|hashed_password
|favorite_donut (fk)
|shop_id (fk)


#### [⇐ Previous (Getting started)](getting_started.md) | [Next (Shop Routes & Pages) ⇒](shop_routes_pages.md)
