<template>
  <div class="container">
    <h1 class="text-center">Welcome Back Admin</h1>

    <table class="table table-hover table-bordered" id="example">
      <thead>
        <tr>
          <th>id</th>
          <th>SIGNAL</th>
          <th>SCRIP</th>
          <th>CMP</th>
          <th>TGT</th>
          <th>SL</th>
          <th>Channal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user._id }}</td>
          <td>{{ user.signal }}</td>
          <td>{{ user.scrip }}</td>
          <td>{{ user.cmp }}</td>
          <td>{{ user.tgt }}</td>
          <td>{{ user.sl }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css"; //for table good looks
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import axios from "axios";
export default {
  name: "Admin",
  mounted() {
    //Web api calling for dynamic data and you can also use into your demo project
    axios.get("http://localhost:8000/form").then((res) => {
      this.users = res.data;
      setTimeout(function () {
        $("#example").DataTable({
          pagingType: "full_numbers",
          pageLength: 40,
          processing: true,
          dom: "Bfrtip",
          buttons: ["copy", "csv", "print"],
        });
      }, 1000);
    });
  },
  data: function () {
    return {
      users: [],
    };
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0px auto;
}
.text-center {
    margin: 50px;
}
</style>