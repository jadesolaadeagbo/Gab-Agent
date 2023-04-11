<template>
    <div>
        <!-- label  -->
        <p class="not-italic mb-3 font-semibold text-sm flex items-center">
            {{ form.label }}
        </p>        
        <input 
            required
            v-if="required"
            :type="type" 
            class="box-border flex flex-row items-center h-12 pt-[17px] pr-[16px] pb-[17px] pl-[25px] gap-2.5 md:w-[476px] border border-dark-grey rounded-[13px]"
            :placeholder="form.placeholder"
            v-model="input"
            @input="$emit('input', input)"
        >
        <input         
            v-else
            :type="type" 
            class="box-border flex flex-row items-center h-12 pt-[17px] pr-[16px] pb-[17px] pl-[25px] gap-2.5 md:w-[476px] border border-dark-grey rounded-[13px]"
            :placeholder="form.placeholder"                        
            v-model="input"
            @input="$emit('input', input)"
        >
    </div>
</template>
<script>    
    export default{
        props: {            
            label:String,
            placeholder: String,
            required: Boolean,
            type: String       
        },
        data() {
            return {
                form: {                    
                    label: this.$props.label,
                    placeholder: this.$props.placeholder,
                    required: this.$props.required,
                    type: this.$props.type
                },
                input:""
            }
        },
    }
</script>