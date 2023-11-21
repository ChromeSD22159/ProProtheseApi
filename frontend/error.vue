<template>
    
    <main class="h-screen w-full flex flex-col justify-center items-center fk-bg-prime">

    <ul>
        <li class="flex flex-col justify-center items-center backdrop-blur bg-white/10 p-10 rounded-xl rotate-3 card z-40">

            <h1 class="text-9xl font-extrabold fk-colored-text tracking-widest"> {{ error.statusCode }} </h1>
            <!-- <div class="fk-bg-highlight px-2 text-sm rounded rotate-12 absolute"> -->
            <div class=" px-2 text-sm rounded rotate-12 absolute backdrop-blur bg-white/40">
                {{ error.statusMessage }}
            </div>

            <code v-html=error.stack />

            <button class="mt-5">
                <a
                    class="relative inline-block text-sm font-medium fk-text-highlight group active:text-orange-500 focus:outline-none focus:ring"
                    @click="handleError"
                > 

                    <span class="relative block px-8 py-3 backdrop-blur  hover:bg-black/70 border border-current button">
                        Go Home
                    </span>
                </a>
            </button>

        </li>

        <li class=" backdrop-blur bg-white/10 z-20 rounded-xl"></li>
        <li class=" backdrop-blur bg-white/10 z-0 rounded-xl"></li>
    </ul>

        </main>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<style lang="scss" scoped>
    * {
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

    a {
        cursor: pointer;
    }

    ul {
        position: relative;

        li {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all ease-in-out .3s;
            transform: rotate(0deg);
        }

        li:nth-child(2) {
            position: absolute;
            opacity: 0;
        }

         li:nth-child(3) {
            position: absolute;
            opacity: 0;
        }

        .button {
                 background-color: rgb(0 0 0 / 0.1);
            }

        &:hover {
            .button {
                 background-color: rgb(0 0 0 / 0.5);
            }

            .button:hover {
                 background-color: rgb(0 0 0 / 0.6);
            }

            li:nth-child(2) {
                transform: rotate(-15deg);
                opacity: 1;
            }

            li:nth-child(3) {
                transform: rotate(10deg);
                opacity: 1;
            }
        }
    }
</style>

<!--
https://tailwindcomponents.com/component/404-page-not-found
-->