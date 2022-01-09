describe("Admin Routes Testing", () => {
    it("TC - 01: Admin Signup", () => {
        cy.request({
            method: "POST",
            url: "/admin/signup",
            body: {
                "name": "Saad Rashid",
                "email": "saadrashid304@gmail.com",
                "password": "saadrashid304"
            },
            headers: {
                "content-type": "application/json"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal({
                "message": "Admin Account Created Successfully."
            });
        })
    });

    it("TC - 02: Admin Signin", () => {
        cy.request({
            method: "POST",
            url: "/admin/signin",
            body: {
                "email": "saadrashid304@gmail.com",
                "password": "saadrashid304"
            },
            headers: {
                "content-type": "application/json"
            }
        }).then((res) => {
            expect(res.body.message).to.equal("Authorization Successful");
        })
    });

    it("TC - 03: Admin View Account", () => {
        cy.request({
            method: "GET",
            url: "/admin/account/61ccd48db46506bbe488fefa",
            headers: {
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal({
    "_id": "61ccd48db46506bbe488fefa",
    "name": "Fahad Rashid",
    "email": "fahadrashid304@gmail.com",
    "password": "$2b$10$AX09jCCiKj9xA3ebIPwnbuJpNmNoUmQRCbKtUrPW0MQEDi2PwRIZi",
    "createdAt": "2021-12-29T21:35:09.187Z",
    "updatedAt": "2021-12-29T21:35:09.187Z",
    "__v": 0
})
        })
    });

    it("TC - 04: Admin Delete Account", () => {
        cy.request({
            method: "DELETE",
            url: "/admin/61ccd48db46506bbe488fefa",
            headers: {
                "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmFoYWQgUmFzaGlkIiwiZW1haWwiOiJmYWhhZHJhc2hpZDMwNEBnbWFpbC5jb20iLCJhZG1pbklkIjoiNjFjY2Q0OGRiNDY1MDZiYmU0ODhmZWZhIiwiaWF0IjoxNjQwODg3ODA1LCJleHAiOjE2NDA5NzQyMDV9.2LYvJW3O3cg0QWk4vpEUWVQ_Ya7HEEEOv5mpqqJsNNs"
            }
        }).then((res) => {
            expect(res.body).to.deep.equal({
                "message": "Admin Account Deleted"
            })
        })
    });
});