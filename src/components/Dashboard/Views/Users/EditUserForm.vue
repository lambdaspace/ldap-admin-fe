<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <h4
              slot="header"
              class="card-title">Edit User</h4>
            <form>
              <div class="row">
                <div class="col-md-5">
                  <fg-input
                    type="text"
                    label="SN"
                    placeholder="User sn"
                    v-model="user.sn"/>
                </div>
                <div class="col-md-3">
                  <fg-input
                    type="text"
                    label="Uid"
                    placeholder="User uid"
                    v-model="user.uid"/>
                </div>
                <div class="col-md-4">
                  <fg-input
                    type="text"
                    label="Description"
                    placeholder="User description"
                    v-model="user.description"/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <fg-input
                    type="text"
                    label="Object Class"
                    placeholder="User Object Class"
                    v-model="user.objectClass"/>
                </div>
                <div class="col-md-6">
                  <fg-input
                    type="text"
                    label="Cn"
                    placeholder="User cn"
                    v-model="user.cn"/>
                </div>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-info btn-fill float-right"
                  @click.prevent="updateUser">
                  Update User
                </button>
              </div>
              <div class="clearfix"/>
            </form>
          </card>
        </div>
      </div>
    </div>
</div></template>
<script>
import Card from "@/components/UIComponents/Cards/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      user: {
        sn: "",
        uid: "",
        email: "",
        firstName: "",
        lastName: ""
      }
    };
  },
  methods: {
    updateUser() {
      let request = {
        dn: `cn=${this.user.cn},dc=example,dc=com`,
        attributes: {
          description: `${this.user.description}`,
          cn: `${this.user.cn}`,
          objectClass: "person",
          sn: `${this.user.sn}`,
          uid: `${this.user.uid}`
        }
      };
      fetch("http://localhost:8443/objects/inetOrgPerson/", {
        method: "post",
        body: JSON.stringify(request)
      }).then(response => {
        this.$router.push("/users");
      });
    }
  }
};
</script>
<style>

</style>
