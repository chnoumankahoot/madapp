const Product = require('../Models/Product');
const Category = require('../Models/Category');
const Brand = require('../Models/Brand');

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

module.exports.searchProduct = (req, res) => {
    Category.find({ name: req.body.name })
        .exec((err, cat) => {
            if (cat.length >= 1) {
                Product.find({ "category": cat[0]._id })
                    .exec((err1, pro) => {
                        if (pro.length === 0) {
                            sendJsonResponse(res, 404, {
                                "message": "No Product Found"
                            });
                            return;
                        } else if (err1) {
                            sendJsonResponse(res, 404, err1);
                            return;
                        }
                        sendJsonResponse(res, 200, pro);
                        return;
                    });
            } else if (cat.length === 0) {
                Brand.find({ name: req.body.name })
                    .exec((err2, br) => {
                        if (br.length >= 1) {
                            Product.find({ "brand": br[0]._id })
                                .exec((err3, pro) => {
                                    if (pro.length === 0) {
                                        sendJsonResponse(res, 404, {
                                            "message": "No Product Found"
                                        });
                                        return;
                                    } else if (err3) {
                                        sendJsonResponse(res, 404, err3);
                                        return;
                                    }
                                    sendJsonResponse(res, 200, pro);
                                    return;
                                });
                        } else if (err2) {
                            sendJsonResponse(res, 404, err2);
                            return;
                        } else {
                            sendJsonResponse(res, 404, {
                                "message": "No Product Found"
                            });
                        }
                    });
            }
        });
}

// module.exports.viewProduct = (req, res) => {
//     Product.find({})
//         .exec((err, pro) => { 
//             if (pro.length < 1) {
//                 sendJsonResponse(res, 404, {
//                     "message": "No Product Found"
//                 });
//                 return;
//             } else if (err) {
//                 sendJsonResponse(res, 404, err);
//                 return;
//             }
//             sendJsonResponse(res, 200, pro);
//         });
// }

// module.exports.deleteProduct = (req, res) => {
//     const id = req.params.productId;
//     Product.findByIdAndDelete(id, (err) => {
//         if (err) {
//             sendJsonResponse(res, 404, err);
//             return;
//         }
//         sendJsonResponse(res, 200, {
//             "message": "Product Deleted Successfully"
//         })
//     });
// }
