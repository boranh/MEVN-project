<template>
  <body>
    <section class="wrapper">
      <div class="content">
        <header>
          <h1>Please enter your details</h1>
        </header>
        <section>
          <form action="" class="login-form">
            <div class="input-group">
              <label for="username">Name</label>
              <input
                v-model="name"
                type="text"
                placeholder="Channel Name"
                id="username"
              />
            </div>

            <div class="input-group">
              <label for="username">Email</label>
              <input
                type="text"
                v-model="email"
                placeholder="Enter Your Email"
                id="username"
              />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                placeholder="Enter Your Password"
                id="password"
              />
            </div>
            <div class="input-group">
              <button type="submit" v-on:click="signUp">submit</button>
            </div>
          </form>
        </section>
        <footer>
          <router-link to="/login" href="#"
            >Already Have An Account? Sign-In</router-link
          >
        </footer>
      </div>
    </section>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.warn("signUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:8000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
body {
  background-color: #262936;
  margin: 0;
  padding: 0;
  height: 100vh;
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .content {
  background-color: #292c3a;
  padding: 30px 15px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  min-width: 200px;
}

.wrapper .content button {
  padding: 15px;
  width: 150px;
  border: unset;
  background: #262936;
  border-radius: 50px;
  color: #333;
  cursor: pointer;
}

.wrapper .content button:focus {
  outline: none;
}

.wrapper .content header {
  text-align: center;
}

.wrapper .content header h1 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 200%;
}

.wrapper .content .login-form {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper .content .login-form .input-group {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  max-width: 310px;
}

.wrapper .content .login-form .input-group input {
  padding: 15px;
  font-size: 13px;
  border: 1px solid #262936;
  background-color: #262936;
  border-radius: 50px;
  -webkit-tranistion: background 0.5s;
}

.wrapper .content .login-form .input-group input:focus {
  color: #fff;
  outline: 0;
}

.wrapper .content .login-form .input-group label {
  color: #999;
  font-size: 12px;
  margin-bottom: 3px;
  margin-left: 0px;
}

.wrapper .content .login-form .input-group button {
  background-color: #3f5bd8;
  border: unset;
  color: #fff;
  align-self: center;
  margin-top: 15px;
  transition: background 0.5s;
  -webkit-transition: background 0.5s;
}

.wrapper .content .login-form .input-group button:hover {
  background-color: #262936;
}

.wrapper .content footer {
  padding-top: 15px;
  text-align: center;
}

.wrapper .content footer a {
  color: #999;
  text-decoration: none;
  font-size: 11px;
}

@media screen and (max-width: 720px) {
  .wrapper .content {
    padding-right: 0;
    padding-left: 0;
    margin: 0 10px;
  }
}
</style>
