Vue.component('error-message', {
    props: ['visibility'],
    template: `
            <div class="error-message" v-show="visibility">Ошибка доступа к ресурсу.</div>
    `
})