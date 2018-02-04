<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Users</h4>
              <p class="card-category">Here is a subtitle for this table</p>
              <router-link
                class="btn btn-info btn-fill float-right"
                :to="'users/add'"
              >
                Add User
              </router-link>
            </template>
            <div class="table-responsive">
              <l-table
                class="table-hover table-striped"
                :columns="table1.columns"
                :data="table1.data"/>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LTable from "@/components/UIComponents/Table";
import Card from "@/components/UIComponents/Cards/Card";

const tableColumns = ["Sn", "Uid", "Description", "ObjectClass", "Cn"];

export default {
  name: "Users",
  components: {
    LTable,
    Card
  },
  data() {
    return {
      table1: {
        columns: [...tableColumns],
        data: []
      }
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      fetch("http://localhost:8443/objects/inetOrgPerson/")
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
          for (var i = 0, len = data.length; i < len; i++) {
            this.table1.data.push({
              sn: data[i]["sn"][0],
              uid: data[i]["uid"][0],
              description: data[i]["description"][0],
              objectclass: data[i]["objectClass"][0],
              cn: data[i]["cn"][0]
            });
          }
        });
    }
  }
};
</script>
<style>

</style>
