<template>
    
        <main class="h-screen w-full flex flex-col justify-center items-center fk-bg-prime">

    <ul>
        <li class="flex flex-col justify-center items-center backdrop-blur bg-white/10 p-10 rounded-xl rotate-3 card z-40">

            <h1 class="text-9xl font-extrabold fk-colored-text tracking-widest"> {{ findError($route.params.slug).code }} </h1>
            <!-- <div class="fk-bg-highlight px-2 text-sm rounded rotate-12 absolute"> -->
            <div class=" px-2 text-sm rounded rotate-12 absolute backdrop-blur bg-white/40 status">
               {{ findError($route.params.slug).statusCode }}
            </div>
            
            <button class="mt-5">
            <a
                class="relative inline-block text-sm font-medium fk-text-highlight group active:text-orange-500 focus:outline-none focus:ring"
                @click="handleError"
            >

                <p class="text-center text-xs max-w-sm mb-5">
                     {{ findError($route.params.slug).message }}
                </p>

                <p>{{ error }}</p>

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
const route = useRoute();

const errors = ref([
    { code: '400', statusCode: 'Bad Request', message: 'The request could not be understood or was missing required parameters.' },
    { code: '401', statusCode: 'Unauthorized', message: 'Authentication is required and has failed or has not been provided.' },
    { code: '403', statusCode: 'Forbidden', message: 'The server understood the request, but it refuses to authorize it.' },
    { code: '404', statusCode: 'Page Not Found', message: 'The requested resource could not be found on the server.' },
    { code: '500', statusCode: 'Internal Server Error', message: 'An unexpected condition was encountered on the server.' },
    { code: '502', statusCode: 'Bad Gateway', message: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.' },
    { code: '503', statusCode: 'Service Unavailable', message: 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or is overloaded.' },
])

const handleError = () => {
  clearError({
    redirect: '/',
  });
};

const findError = (id) => {
  const errorObject = errors.value.find((e) => e.code === id)
  return errorObject || { statusCode: '500', message: 'Internal Server Error' }
}
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

            .status {
                position: absolute;
                top: 7rem;
            }
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