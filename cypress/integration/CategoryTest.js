describe("Category Routes Testing", () => {
    it("TC - 01: Adding Category", () => {
        cy.request({
            method: "POST",
            url: "/admin/category/add",
            body: {
                "name": "Soap"
            },
            headers: {
                "content-type": "application/json",
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal({
                "Message": "New Category Added Successfully."
            });
        })
    });

    it("TC - 02: View Categories", () => {
        cy.request({
            method: "GET",
            url: "/admin/category/view",
            headers: {
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal([
    {
        "_id": "61cb344a01b9f11459fa3f9b",
        "name": "Snacks",
        "createdAt": "2021-12-28T15:59:06.530Z",
        "updatedAt": "2021-12-28T15:59:06.530Z",
        "__v": 0
    },
    {
        "_id": "61cb345a01b9f11459fa3f9e",
        "name": "Milk",
        "createdAt": "2021-12-28T15:59:22.325Z",
        "updatedAt": "2021-12-28T15:59:22.325Z",
        "__v": 0
    },
    {
        "_id": "61cb346d01b9f11459fa3fa1",
        "name": "Juice",
        "createdAt": "2021-12-28T15:59:41.309Z",
        "updatedAt": "2021-12-28T15:59:41.309Z",
        "__v": 0
    },
    {
        "_id": "61cb347b01b9f11459fa3fa4",
        "name": "Detergents",
        "createdAt": "2021-12-28T15:59:55.433Z",
        "updatedAt": "2021-12-28T15:59:55.433Z",
        "__v": 0
    },
    {
        "_id": "61cb349901b9f11459fa3fa7",
        "name": "Shampoo",
        "createdAt": "2021-12-28T16:00:25.855Z",
        "updatedAt": "2021-12-28T16:00:25.855Z",
        "__v": 0
    },
    {
        "_id": "61cb34bc01b9f11459fa3faa",
        "name": "Biscuit",
        "createdAt": "2021-12-28T16:01:00.797Z",
        "updatedAt": "2021-12-28T16:01:00.797Z",
        "__v": 0
    }
]);
        })
    });

    it("TC - 03: Delete Category", () => {
        cy.request({
            method: "DELETE",
            url: "/admin/category/view/delete/61cb349901b9f11459fa3fa7",
            headers: {
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal({
                "message": "Category Deleted Successfully"
            })
        })
    });

    it("TC - 04: View One Category", () => {
        cy.request({
            method: "GET",
            url: "/admin/category/view/61cb34bc01b9f11459fa3faa",
            headers: {
                "content-type": "application/json",
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal([
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
    }
]);
        });
    })
});