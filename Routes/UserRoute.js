const express = require('express');
const router = express.Router();
const { AuthenticateUser, restrictTo } = require('../Middleware/Authentication');
const { body, validationResult } = require('express-validator');

const {handleRegisterStu,handleRegisterAdmin,handleLogin,handleRegistrationReq,handleReqAcept,handleReqReject,handleGetAllStu,handleUpdatePersonalDet,handleSendVerificationOTP,handleVerifyOTP}=require('../Controllers/UserController');

router.route('/SendVerificationOTP').post(body('email', "Enter a valid Email").isEmail(),handleSendVerificationOTP);

router.route('/VerifyOTP').post(body('otp', "Enter a valid Email").notEmpty(),handleVerifyOTP);

router.route('/RegisterStu').post( handleRegisterStu);

router.route('/RegisterAdmin').post( handleRegisterAdmin);

router.route('/RegisterDeptAdmin').post(AuthenticateUser, restrictTo(["TPO_Admin"]), handleRegisterAdmin);

router.route('/login').post( handleLogin);

router.route('/registration_req').get( AuthenticateUser,restrictTo(["TPO_Admin","TPO_Dept_Admin"]), handleRegistrationReq);

router.route('/registration_req/:id')
    .post( AuthenticateUser,restrictTo(["TPO_Dept_Admin"]), handleReqAcept)
    .delete(AuthenticateUser,restrictTo(["TPO_Dept_Admin"]), handleReqReject);

router.route('/getAllStudents').get( AuthenticateUser,restrictTo(["TPO_Admin","TPO_Dept_Admin"]), handleGetAllStu);

router.route('/UpdatePersonalDetails').post(AuthenticateUser,handleUpdatePersonalDet);

module.exports = router;