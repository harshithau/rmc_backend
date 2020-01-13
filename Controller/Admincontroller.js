const volunteerModel = require('../Model/volunteersModel');
const marketModel = require('../Model/Marketmodule');
const productModel = require('../Model/productsmodule')

exports.markets = (req, res, next) => {
    const market = new marketModel({
        marketName: req.body.marketName,
      
    })
    return market.save()
      .then(result => {
        res.status(200).json({
          message: "Markets created",
          market_id: result._id
  
        })
      })
  }
exports.volunteers = (req, res, next) => {
    const volun = new volunteerModel({
        marketId:req.body.marketId,
        volunteerName: req.body.volunteerName,
      
    })
    return volun.save()
      .then(result => {
        res.status(200).json({
          message: "Volunteers created",
          volunteer_id: result._id
  
        })
      })
  }
//   exports.getallVolunteers = (req, res, next) => {
//     debugger;
//     volunteerModel.find({} )
//       .then(result => {
//         res.status(200).json({
//           message: 'give market vulunteers',
//           result: result
//         })
//       })
//       .catch(err => {
//         if (!err.statusCode) {
//           err.statusCode = 500;
//         }
//         next(err);
//       });
//   }
  exports.getVolunByMrktId = (req, res, next) => {
    debugger;
    volunteerModel.find({marketId: { $in: req.params.marketId1 }})
      .then(result => {
        res.status(200).json({
          message: 'give market vulunteers',
          result: result
        })
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  }
  exports.getSingleVolunByMrktId = (req, res, next) => {
    debugger;
    volunteerModel.find({})
      .then(result => {
        res.status(200).json({
          message: 'give single vulunteers',
          result: result
        })
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  }
  exports.products = (req, res, next) => {
    const product = new productModel({
        volunteersId: req.body.volunteersId,
        productName: req.body.productName,
        productWeight: req.body.productWeight,
        Amount: req.body.Amount

    })
    return product.save()
      .then(result => {
        res.status(200).json({
          message: "Products successfully added",
          product_id: result._id
        })
      })
  }
  exports.getProductsByVolunId = (req, res, next) => {
    debugger;
    productModel.find({volunteersId: { $in: req.params.volunteersId1 }})
      .then(result => {
        res.status(200).json({
          message: 'Give product details based on volunteers',
          result: result
        })
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  }
  exports.getProductsDetails = (req, res, next) => {
    debugger;
    productModel.find({})
      .then(result => {
        res.status(200).json({
          message: 'Give all product details ',
          result: result
        })
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  }
  exports.getallVolunteers = function(req, res) {
    volunteerModel.find({}, function(err, task) {
    if (err)
    res.send(err);
    res.json(task);
    });
    };