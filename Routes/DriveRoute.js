const express = require('express');
const router = express.Router();
const { AuthenticateUser, restrictTo } = require('../Middleware/Authentication');

const { handleGetAllDrive, handleDisplayDrive, handleNewDrive, handleApplyToDrive, handleGetSelectedStu, handleDriveStudent, handleAddEligibleStu, handleAddSelectedStu, handleRejectStu } = require('../Controllers/DriveController');

router.route('/getAllDrive').get(AuthenticateUser, handleGetAllDrive);

router.route('/dsiplay/:id').get(AuthenticateUser, handleDisplayDrive)

router.route('/newDrive').post(AuthenticateUser, restrictTo(["TPO_Admin"]), handleNewDrive)

router.route('/Apply/:id').post(AuthenticateUser, restrictTo(["Student"]), handleApplyToDrive);

router.route('/getSelectedStu/:id').get(AuthenticateUser, handleGetSelectedStu)

router.route('/getStudent/:cat/:id').get(AuthenticateUser, restrictTo(["TPO_Admin"]), handleDriveStudent)

router.route('/addEligibleStu/:id').post(AuthenticateUser, restrictTo(["TPO_Admin"]), handleAddEligibleStu);

router.route('/addSelectedStu/:id').post(AuthenticateUser, restrictTo(["TPO_Admin"]), handleAddSelectedStu);

router.route('/rejectStu/:id').post(AuthenticateUser, restrictTo(["TPO_Admin"]), handleRejectStu);

module.exports = router;