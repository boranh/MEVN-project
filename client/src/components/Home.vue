<template>
  <div class="wrapper">
    <div class="title">Wellcome {{name}}</div>
    <div class="form">
      <div class="inputfield">
        <label>SIGNAL</label>
        <div class="custom_select">
          <select v-model="signal">
            <option value="">Select</option>
            <option value="BUY">Buy</option>
            <option value="SELL">Sell</option>
          </select>
        </div>
      </div>
      <div class="inputfield">
        <label>SCRIP</label>
        <input
          v-model="scrip"
          type="text"
          class="input"
          placeholder="eg. canbk"
        />
      </div>

      <div class="inputfield">
        <label>CMP</label>
        <input
          v-model="cmp"
          type="number"
          class="input"
          placeholder="Enter Amount"
        />
      </div>

      <div class="inputfield">
        <label>TGT</label>
        <input
          v-model="tgt"
          type="number"
          class="input"
          placeholder="Enter Amount"
        />
      </div>

      <div class="inputfield">
        <label>SL</label>
        <input
          v-model="sl"
          type="number"
          class="input"
          placeholder="Enter amount"
        />
      </div>
      <div class="inputfield">
        <input v-on:click="submit" type="submit" value="Submit" class="btn" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      signal: "",
      scrip: "",
      cmp: "",
      tgt: "",
      sl: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.name = JSON.parse(user).name;
    } else {
      this.$router.push({ name: "SignUp" });
    }
  },
  methods: {
    async submit() {
      console.warn(
        "Home",
        this.name,
        this.signal,
        this.scrip,
        this.cmp,
        this.tgt,
        this.sl
      );
      let result = await axios.post("http://localhost:8000/form", {
        name: this.name,
        signal: this.signal,
        scrip: this.scrip,
        cmp: this.cmp,
        tgt: this.tgt,
        sl: this.sl,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 500px;
  width: 100%;
  background: #fff;
  margin: 50px auto;
  padding: 30px;
}

.wrapper .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fec107;
  text-transform: uppercase;
  text-align: center;
}

.wrapper .form {
  width: 100%;
}

.wrapper .form .inputfield {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.wrapper .form .inputfield label {
  width: 200px;
  color: #757575;
  margin-right: 10px;
  font-size: 14px;
}

.wrapper .form .inputfield .input,
.wrapper .form .inputfield .textarea {
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.wrapper .form .inputfield .textarea {
  width: 100%;
  height: 125px;
  resize: none;
}

.wrapper .form .inputfield .custom_select {
  position: relative;
  width: 100%;
  height: 37px;
}

.wrapper .form .inputfield .custom_select:before {
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #d5dbd9 transparent transparent transparent;
  pointer-events: none;
}

.wrapper .form .inputfield .custom_select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  height: 100%;
  border: 0px;
  padding: 8px 10px;
  font-size: 15px;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
}

.wrapper .form .inputfield .input:focus,
.wrapper .form .inputfield .textarea:focus,
.wrapper .form .inputfield .custom_select select:focus {
  border: 1px solid #fec107;
}

.wrapper .form .inputfield p {
  font-size: 14px;
  color: #757575;
}
.wrapper .form .inputfield .check {
  width: 15px;
  height: 15px;
  position: relative;
  display: block;
  cursor: pointer;
}
.wrapper .form .inputfield .check input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.wrapper .form .inputfield .check .checkmark {
  width: 15px;
  height: 15px;
  border: 1px solid #fec107;
  display: block;
  position: relative;
}
.wrapper .form .inputfield .check .checkmark:before {
  content: "";
  position: absolute;
  top: 1px;
  left: 2px;
  width: 5px;
  height: 2px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-45deg);
  display: none;
}
.wrapper .form .inputfield .check input[type="checkbox"]:checked ~ .checkmark {
  background: #fec107;
}

.wrapper
  .form
  .inputfield
  .check
  input[type="checkbox"]:checked
  ~ .checkmark:before {
  display: block;
}

.wrapper .form .inputfield .btn {
  width: 100%;
  padding: 8px 10px;
  font-size: 15px;
  border: 0px;
  background: #fec107;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}

.wrapper .form .inputfield .btn:hover {
  background: #ffd658;
}

.wrapper .form .inputfield:last-child {
  margin-bottom: 0;
}

@media (max-width: 420px) {
  .wrapper .form .inputfield {
    flex-direction: column;
    align-items: flex-start;
  }
  .wrapper .form .inputfield label {
    margin-bottom: 5px;
  }
  .wrapper .form .inputfield.terms {
    flex-direction: row;
  }
}
</style>