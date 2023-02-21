<template>
  <nav>
    <!-- <PersonalRouter :route="route" :buttonText="buttonText" class="logo-link"/> -->
    <router-link to="/" class="link">Home</router-link>
  
    <router-link to="/" class="link">Task Manager</router-link>
     
    <router-link to="/account" class="link">Your Account</router-link>
    
    <p>Welcome, user</p>
    <button @click="signOut" class="button-log-out">Log out</button> 
  </nav>
</template>

<script setup>
// import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { supabase } from "../supabase";

//constant to save a variable that will hold the use router method
const route = "/";
const buttonText = "Todo app";

// constant to save a variable that will get the user from store with a computed function imported from vue
// const getUser = computed(() => useUserStore().user);
const getUser = useUserStore().user;

// constant that calls user email from the useUSerStore
const userEmail = getUser.email;

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const redirect = useRouter();

const signOut = async () => {
  try{
    useUserStore().signOut();
    redirect.push({ path: "/auth/login"});
  } catch (error) {
    throw error;
  }
};

</script>

<style>
.navbar-img {
  width: 90px;
}

/* nav {
  background-color: lightgray;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

nav ul {
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
} */
</style>
