<template>
    <div class="flex flex-col gap-7">

        <PageHeadline headline="Neues Projekt starten" :image="{}" />

        <form class="max-w-3xl"> <!--  sm:mt-20 -->
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                 <!-- modelValue, type, placeholder, color, fullSize -->

                <FormInputText v-model="form.firstname" placeholder="Vorname *" for="name" type="text" :fullSize="false" />

                <FormInputText v-model="form.lastname" placeholder="Nachname *" for="lastname" type="text" :fullSize="false" />

                <FormInputText v-model="form.phone" placeholder="Telefon *" for="phone" color="text-gray-500" type="tel" :fullSize="false" />

                <FormInputText v-model="form.email" placeholder="Email *" for="email" type="email" :fullSize="false" />

                <FormInputText v-model="form.subject" placeholder="Betreff *" for="subject" type="text" :fullSize="true" />

                <FormInputTextfield rows="5" v-model="form.message" placeholder="Nachricht *" for="text" type="text"  :fullSize="true" />

                <FormInputCheckboxWithLink 
                    name="dinner" 
                    v-model="checked"
                    @toggle="checked = !checked"
                    textBefore="Ich stimme zu das meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werdern. 
                    desweiteren bin ich mit der verabeitung meiner Daten gemäß der" 
                    atext="Datenschutzverordnung"
                    ahref="/datenschutz" 
                    textAfter="einverstanden." 
                    :fullSize="true"
                />

                <div class="sm:col-span-2">
                    <FormInputMoveButton v-model="buttonPosition" @sendMailHandler="submitForm" />
                </div>

               <!--  <ButtonLabelWithAnimatedIcon title="zurück" url="/" target="_self"></ButtonLabelWithAnimatedIcon> -->

                <Transition>
                    <ul class="sm:col-span-2">
                        <li v-for="error in errorMessages" :key="error.key">
                            <p v-if="error" class="text-red-500 response error">
                                <strong>Error:</strong> 🔥 <span>{{ error.error }}</span>
                            </p>
                        </li>
                    </ul>
                </Transition>
                
                <Transition>
                    <p v-if="success" class="text-green-500 response success">
                        <strong>Success:</strong> 📤 <span>Mail send!</span>
                    </p>
                </Transition>

                <div>
                    <p class="text-red-500">{{ error.message }}</p>
                </div>

                
            </div>
        </form>
    </div>
</template>

<script setup>
    const { create } = useStrapi()
    import validator from 'validator';
    const buttonPosition = ref(0)
    const form = ref({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const error = ref(false)
    const errorMessages = ref([])
    const success = ref(false)
    const checked = ref(false)

    async function submitForm() {
        const currentDomain = window.location.hostname;

        errorMessages.value = []

        isValid(JSON.parse(JSON.stringify(form.value)));

        if (errorMessages.value.length === 0) {

            try {
                const { data } = create('emails', form.value).then(() => {
                    error.value = false;
                    success.value = true;
                    checked.value = false;
                    resetForm()
                })

                
            } catch (e) { console.log(e) }

            /*await create('emailss', form.value)
                .then(() => {
                    error.value = false;
                    success.value = true;
                    checked.value = false;
                    resetForm()
                }).catch((error) => {
                    error.value = true;
                    success.value = false;
                    checked.value = false;
                    buttonPosition.value = 0
                    
                    this.$router.push(`/error/${error.statusCode}`);
                    
                    throw createError({
                        statusCode: error.statusCode,
                        statusMessage: error.statusMessage
                    })
                    
                
                }) */
        }
    };

    async function isValid(body) {
        const errors = [];
        if (checked.value === false) {
            errors.push({
                field: "checked",
                error: `Datenschutz wurde nicht akzeptiert.`
            });
        }
        Object.entries(body).forEach(([key, value]) => {
            

            if (validator.isEmpty(value)) {
                errors.push({
                    field: key,
                    error: `${key} ist Leer.`
                });
            } else if (key === 'email' && !validator.isEmail(value)) {
                errors.push({
                    field: key,
                    error: `${value} ist keine valide Email Adresse.`
                });
            }


        });

        errorMessages.value = errors;
    }

    const resetForm = () => {
        Object.keys(form.value).forEach((key) => {
            form.value[key] = "";
        },
        setTimeout(() => {
            success.value = false;
            checked.value = false;
        }, "5000")
    );

    
 
};
</script>

<style lang="scss" scoped>
    .response {
        display: flex;
        gap: 10px;
        span {
            position: relative;
            top: 0;
            left: 0;
            background: none;
            
        }
    }

    .response.error {
        color: red;
    }
    .response.success {
        color: green;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.3s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>