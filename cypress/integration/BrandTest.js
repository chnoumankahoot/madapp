describe("Brand Routes Testing", () => {
    it("TC - 01: View Brands", () => {
        cy.request({
            method: "GET",
            url: "/admin/brand/view",
            headers: {
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal([
    {
        "_id": "61cb357a01b9f11459fa3fad",
        "name": "Olper",
        "category": "61cb345a01b9f11459fa3f9e",
        "createdAt": "2021-12-28T16:04:10.715Z",
        "updatedAt": "2021-12-28T16:04:10.715Z",
        "__v": 0
    },
    {
        "_id": "61cb358b01b9f11459fa3fb0",
        "name": "Milk Pak",
        "category": "61cb345a01b9f11459fa3f9e",
        "createdAt": "2021-12-28T16:04:27.609Z",
        "updatedAt": "2021-12-28T16:04:27.609Z",
        "__v": 0
    },
    {
        "_id": "61cb35aa01b9f11459fa3fb3",
        "name": "LU",
        "category": "61cb34bc01b9f11459fa3faa",
        "createdAt": "2021-12-28T16:04:58.224Z",
        "updatedAt": "2021-12-28T16:04:58.224Z",
        "__v": 0
    },
    {
        "_id": "61cb35ba01b9f11459fa3fb6",
        "name": "Peak Freans",
        "category": "61cb34bc01b9f11459fa3faa",
        "createdAt": "2021-12-28T16:05:14.942Z",
        "updatedAt": "2021-12-28T16:05:14.942Z",
        "__v": 0
    },
    {
        "_id": "61cb35cc01b9f11459fa3fb9",
        "name": "Gibs",
        "category": "61cb34bc01b9f11459fa3faa",
        "createdAt": "2021-12-28T16:05:32.328Z",
        "updatedAt": "2021-12-28T16:05:32.328Z",
        "__v": 0
    },
    {
        "_id": "61cb35dd01b9f11459fa3fbc",
        "name": "Bisconni",
        "category": "61cb34bc01b9f11459fa3faa",
        "createdAt": "2021-12-28T16:05:49.566Z",
        "updatedAt": "2021-12-28T16:05:49.566Z",
        "__v": 0
    },
    {
        "_id": "61cb360c01b9f11459fa3fbf",
        "name": "Sunsilk",
        "category": "61cb349901b9f11459fa3fa7",
        "createdAt": "2021-12-28T16:06:36.572Z",
        "updatedAt": "2021-12-28T16:06:36.572Z",
        "__v": 0
    },
    {
        "_id": "61cb362201b9f11459fa3fc2",
        "name": "Head & Shoulder",
        "category": "61cb349901b9f11459fa3fa7",
        "createdAt": "2021-12-28T16:06:58.826Z",
        "updatedAt": "2021-12-28T16:06:58.826Z",
        "__v": 0
    },
    {
        "_id": "61cb366801b9f11459fa3fc5",
        "name": "Lifebuoy",
        "category": "61cb349901b9f11459fa3fa7",
        "createdAt": "2021-12-28T16:08:08.477Z",
        "updatedAt": "2021-12-28T16:08:08.477Z",
        "__v": 0
    }
]);
        })
    });

    it("TC - 02: Adding Brand", () => {
        cy.request({
            method: "POST",
            url: "/admin/brand/add",
            body: {
                "name": "Lays",
                "category": "61cb344a01b9f11459fa3f9b"
            },
            headers: {
                "content-type": "application/json",
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal({
                "Message": "New Brand Added Successfully."
            });
        })
    });

    it(" TC - 03: Delete Brand", () => {
        cy.request({
            method: "DELETE",
            url: "/admin/brand/view/delete/61cb358b01b9f11459fa3fb0",
            headers: {
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal({
                "message": "Brand Deleted Successfully"
            })
        })
    });

    it("TC - 04: View One Brand", () => {
        cy.request({
            method: "GET",
            url: "/admin/brand/view/61cb357a01b9f11459fa3fad",
            headers: {
                "content-type": "application/json",
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal([
    {
        "_id": "61cb496e34cb0bfaa311e5ea",
        "name": "Olper 250ML",
        "eachPrice": 45,
        "packing": "28",
        "price": 1120,
        "brand": "61cb357a01b9f11459fa3fad",
        "category": "61cb345a01b9f11459fa3f9e",
        "createdAt": "2021-12-28T17:29:18.195Z",
        "updatedAt": "2021-12-28T17:29:18.195Z",
        "__v": 0
    },
    {
        "_id": "61cb499534cb0bfaa311e5ed",
        "name": "Olper 1000ML",
        "eachPrice": 160,
        "packing": "12",
        "price": 1900,
        "brand": "61cb357a01b9f11459fa3fad",
        "category": "61cb345a01b9f11459fa3f9e",
        "createdAt": "2021-12-28T17:29:57.016Z",
        "updatedAt": "2021-12-28T17:29:57.016Z",
        "__v": 0
    },
    {
        "_id": "61cb49b234cb0bfaa311e5f1",
        "name": "Olper 1500ML",
        "eachPrice": 220,
        "packing": "8",
        "price": 1800,
        "brand": "61cb357a01b9f11459fa3fad",
        "category": "61cb345a01b9f11459fa3f9e",
        "createdAt": "2021-12-28T17:30:26.574Z",
        "updatedAt": "2021-12-28T17:30:26.574Z",
        "__v": 0
    }
]);
        });
    });
});