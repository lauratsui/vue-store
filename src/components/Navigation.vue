 <!--<template>
  
  <header class="navigation">
    <nav>
      <ul>
        <li>
          <router-link to="/products" exact>Products</router-link>
        </li>
        <li>
          <router-link to="/carts">Carts ({{ cartItemNumber }})</router-link>
        </li>
        <li>
          <a @click="logout">Logout</a>
        </li>
      </ul>
    </nav>
  </header> 

</template>
-->

<template>
  <b-navbar> 
    <template slot = "start">
      <b-navbar-item href = '#'>
        <router-link to="/products" exact>Products</router-link>
      </b-navbar-item>
      <b-navbar-item href = '#'>
        <router-link to="/carts" exact>Carts ({{ cartItemNumber}})</router-link>
      </b-navbar-item>
      <b-navbar-item href = '#'>
        <router-link to="/" exact>logout</router-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    cartItemNumber() {
      return this.$store.getters.cartItemNumber
    }
  },
  methods: {
    logout () {
      this.$store.commit('setToken', '')
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss">
.navigation  {
  width: 100%;
  height: 4.5rem;
  background: #7A378B;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  a {
    display: block;
    text-decoration: var(--text-decoration, none);
    color: var(--color, black);
    border-radius: var(--border-radius, 0);
    padding: var(--padding, 0);
    cursor: pointer;
  }
  .router-link-active {
    background: var(--background-active, white);
    color: var(--color-active, black);
    cursor: auto;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  li {
    margin: 0 1rem;
    border-radius: 5px;
    a {
      --color: white;
      --border-radius: 5px;
      --padding: 0.5rem 1rem;
    }
    &:hover {
      background: white;
      color: #00179b;
    }
    &:hover a {
      --color: black;
    }
  }
}
</style>