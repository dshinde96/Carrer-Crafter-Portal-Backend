const express = require('express');
const router = express.Router();
const { AuthenticateUser, restrictTo } = require('../Middleware/Authentication');
const { handleCompaniesVisited } = require('../Controllers/PlacementStatController');

router.route('/CompaniesVisited').get(AuthenticateUser, handleCompaniesVisited);
// router.get('/SelectedStu/:CompanyName',AuthenticateUser,handleCompanyStu);

module.exports = router;