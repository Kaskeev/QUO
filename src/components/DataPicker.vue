<script setup>
import { ref } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import localize  from '@/../lang/localize.js'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
    modelValue: [Number, String],
    class: String,
    disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const date = ref(new Date(props.modelValue))

const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
}
           
function handleDate(value) {

    let new_date = new Date(value)

    let month = new_date.getMonth() + 1

    if (month < 10)
    {
        month = '0' + month;
    }
    
    emit('update:modelValue', new_date.getFullYear() + '-' + month + '-' + new_date.getDate())
}

const format = (date) => {
    return date.toLocaleString(usePage().props.value.user.language, options);
}
</script>

<template>
    <VueDatePicker
        v-model="date"
        position="left" 
        :select-text="localize('project.analytics.datatime.apply')"
        :cancel-text="localize('project.analytics.datatime.cancel')"
        :locale="usePage().props.value.user.language"
        :enable-time-picker="false"
        class="text-sm border border-zinc-300 form-text-color overflow-hidden rounded-md focus:ring-indigo-500 focus:outline-none h-10 focus:ring-1 bg-neutral-100 py-px"
        @update:model-value="handleDate"
        :format="format"
        :preview-format="format"
        :disabled="disabled">
    </VueDatePicker>
</template>

<style>
    .dp__input {
        border: none;
        font-size: 0.875rem;
        color: #71717a;
    }

    .dp__action_buttons {
        width: 100%;
    }
    .dp__action 
    {
        padding: 1px 3px;
    }    
    .dp__select 
    {
        color: #4338ca;
        font-weight: 400;
    }

    .dp__cancel 
    {
        color: #6b7280;
        font-weight: 400;
        margin-right: 10px;
    }

    .dp__selection_preview 
    {
        width: 100%;
        text-align: left;
    }
</style>