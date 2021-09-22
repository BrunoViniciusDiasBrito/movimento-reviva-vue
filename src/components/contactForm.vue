<template>
  <form class="form">
    <input type="text" v-model="name" placeholder="Nome" />
    <input type="email" v-model="email" placeholder="E-mail" />

    <button @click.prevent="handleEmailSender">Enviar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    handleEmailSender() {
      if (this.name != "") {
        const information = {
          name: this.name,
          email: this.email,
        };
        console.log(information.name);
      } else {
        console.error("nop");
      }
    },
  },
};
</script>
