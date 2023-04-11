<template>
    <div class="flex flex-row">
        <div class="flex flex-col">
            <img :src="'/public/assets/'+img" alt="">
        </div>
        <div class="flex flex-col ml-2">
            <div class="w-141px">
                <p class="font-bold text-sm">{{ name }}</p>
            </div>
            <p class="not-italic font-semibold font-sm flex items-center text-grey">
                {{ label }}
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            img: String,
            name: String,
            label: String
        },
        data() {
            return {
                img: this.$props.img,
                name: this.$props.name,
                label: this.$props.label
            }
        },
    }
</script>