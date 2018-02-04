import Vue from "vue";
import Router from "vue-router";
// import Users from "@/components/Users";
import Groups from "@/components/Groups";
import OUnits from "@/components/OrganizationalUnits";
import Security from "@/components/Security";

import DashboardLayout from "@/components/Dashboard/Layout/DashboardLayout";
// GeneralViews
import NotFound from "@/components/GeneralViews/NotFoundPage";

// Admin pages
import Overview from "@/components/Dashboard/Views/Overview";
import UserProfile from "@/components/Dashboard/Views/UserProfile";
import TableList from "@/components/Dashboard/Views/TableList";
import Typography from "@/components/Dashboard/Views/Typography";
import Icons from "@/components/Dashboard/Views/Icons";
import Maps from "@/components/Dashboard/Views/Maps";
import Notifications from "@/components/Dashboard/Views/Notifications";
import UsersList from "@/components/Dashboard/Views/UsersList";
import Users from "@/components/Users";
// import UsersAdd from "@/components/UsersAdd";
import UsersAdd from "@/components/Dashboard/Views/UserProfile/AddUserForm";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: DashboardLayout,
      children: [
        {
          path: "overview",
          name: "Overview",
          component: Overview
        },
        {
          path: "user",
          name: "User",
          component: UserProfile
        },
        {
          path: "table-list",
          name: "Table List",
          component: TableList
        },
        {
          path: "typography",
          name: "Typography",
          component: Typography
        },
        {
          path: "icons",
          name: "Icons",
          component: Icons
        },
        {
          path: "maps",
          name: "Maps",
          component: Maps
        },
        {
          path: "userslist",
          name: "UsersList",
          component: UsersList
        },
        {
          path: "notifications",
          name: "Notifications",
          component: Notifications
        },
        {
          path: "users",
          name: "Users",
          component: Users
        },
        {
          path: "users/add",
          name: "UsersAdd",
          component: UsersAdd
        },
        {
          path: "groups",
          name: "groups",
          component: Groups
        },
        {
          path: "ous",
          name: "ounits",
          component: OUnits
        },
        {
          path: "sos",
          name: "security",
          component: Security
        }
      ]
    },
    { path: "*", component: NotFound }
  ]
});
