<template>
    <header>

        <NuxtLink to="/">
           <img src="@/assets/images/FrederikKohlerLogo.svg" height="35" alt='Pro Prothese' />
        </NuxtLink>
       
        <nav>
          <a @click="activateUl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </a>
        </nav>

        <span class="hideOnMobil"></span>
    </header>
</template>

<style lang="scss" scoped>
  @media only screen and (min-width: 770px) {
    header {
        flex-direction: column;
        min-height: 100%;
        align-items: flex-start;
    }
  }

  @media only screen and (max-width: 771px) {
    header {
        flex-direction: row;
        min-width: 100%;
        align-items: center;
    }
  }

header {
    display: flex;
    justify-content: space-between;
    background: $second;
    padding: 1.5em;

    img {
      margin: 0;
    }

    @media screen and (min-width: 770px) {
      img {
        margin: 0 0 0 0;
      }
    } 

    nav {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      align-content: center;
      gap: 1em;

      a {
        color: $white;
        text-decoration: none;
        text-transform: uppercase;
        cursor: none;

        svg {
          width: 24px;
          height: 24px;
        }
        
        &:hover {
          cursor: pointer;
        }
      }
          
    }
}
</style>

<script>
export default {
  data() {
    return {
      imageHeight: 200 
    };
  },
  methods: {
    activateUl() {
      this.$emit('activate-ul');
    }
  },
};
</script>