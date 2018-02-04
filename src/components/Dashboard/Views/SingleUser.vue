<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <div slot="header">
              <div>
                <h4 class="card-title">{{ singleUser.sn }}</h4>
              </div>
            </div>
            <div>
              <div>
                {{ singleUser.uid }}
              </div>
              <div>
                {{ singleUser.description }}
              </div>
              <div>
                {{ singleUser.objectClass }}
              </div>
              <div>
                {{ singleUser.cn }}
              </div>
            </div>
            <button
              class="btn btn-danger btn-fill float-right"
              @click.prevent="deleteUser">
              Delete User
            </button>
            <router-link
              class="btn btn-warning btn-fill float-right"
              :to="'/users/:sn/edit'"
            >
              Edit User
            </router-link>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/UIComponents/Cards/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      singleUser: {
        sn: "",
        uid: "",
        description: "",
        objectClass: "",
        cn: ""
      }
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      fetch(
        `http://localhost:8443/objects/inetOrgPerson/${this.$route.params.cn}/`
      )
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
          this.singleUser.sn = data[0]["sn"][0];
          this.singleUser.uid = data[0]["uid"][0];
          this.singleUser.description = data[0]["description"][0];
          this.singleUser.objectClass = data[0]["objectClass"][0];
          this.singleUser.cn = data[0]["cn"][0];
        });
    },
    deleteUser() {
      fetch(
        `http://localhost:8443/objects/inetOrgPerson/${this.$route.params.cn}/`,
        {
          method: "delete"
        }
      ).then(data => {
        this.$router.push("/users");
      });
    }
  }
};
</script>
<style>

</style>
