const express = require('express');
const router = express.Router();
const { AuthenticateUser, restrictTo } = require('../Middleware/Authentication');

const { handleMyProfile, handleDisplayProfile, handleAddProject, handleUpdateProject, handleDeleteProject, addExp, updateExp, deleteExp, handleUpdateEdu } = require('../Controllers/UserStuController')

router.route('/profile/myprofile').get(AuthenticateUser, handleMyProfile);

router.route('/profile/display/:id').get(AuthenticateUser, restrictTo(["TPO_Admin", "TPO_Dept_Admin", "Student"]), handleDisplayProfile);

router.route('/profile/project').post(AuthenticateUser, restrictTo(["Student"]), handleAddProject)

router.route('/profile/project/:id')
    .put(AuthenticateUser, restrictTo(["Student"]), handleUpdateProject)
    .delete(AuthenticateUser, restrictTo(["Student"]), handleDeleteProject);

router.route('/profile/experience').post(AuthenticateUser, restrictTo(["Student"]), addExp);

router.route('/profile/experience/:id')
    .put(AuthenticateUser, restrictTo(["Student"]), updateExp)
    .delete(AuthenticateUser, restrictTo(["Student"]), deleteExp);

router.route('/profile/education/:id')
    .put(AuthenticateUser, restrictTo(["Student"]), handleUpdateEdu);
module.exports = router;