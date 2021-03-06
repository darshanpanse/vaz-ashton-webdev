/**
 * Created by Ashton on 2/7/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", userService);

    function userService($http) {

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        function createUser(user) {
            return $http.post("/api/user",user);
        }

        function findUserById(uid) {
            return $http.get("/api/user/"+uid);
        }

        function findUserByUsername(username) {
            return $http.get("/api/user?username="+username);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username="+username+"&password="+password);
        }

        function updateUser(uid, newUser) {
            return $http.put("/api/user/"+uid, newUser);
        }

        function deleteUser(uid) {
            return $http.delete("/api/user/"+uid);
        }
    }
})();