<template>
    <div>
        <div :class="[width,height,color,rounded]">
            <div class="absolute">
                <p class="w-[166px] h-[39px] top-[10px] left-[32px] absolute not-italic text-sm font-bold flex items-center text-grey">
                    {{ label }}
                </p>                
                <!-- <img src="/public/assets/info.png" alt="" class="w-[16px] h-[16px] top-[42px] left-[332px] absolute not-italic text-sm font-bold flex items-center text-grey"> -->
                <img :src="'/assets/'+img" class="relative w-[80px] h-[68px] left-[32px] top-[70px] rounded-[18px]" alt="">
                <p 
                    class="relative not-italic font-bold text-md flex flex-row items-center text-center top-[80px] left-[32px]">
                    {{amount}}
                </p>
            </div>

        </div>        
    </div>
</template>
<script>
    export default{
        props : {
            color: String,
            width: String,
            height: String,
            img: String,
            amount: String,
            label: String
        },
        data() {
            return {
                rounded: "rounded-[30px]",
                color: this.$props.color,
                width: this.$props.width,
                height: this.$props.height,
                img: this.$props.img,
                amount: this.$props.amount,
                label: this.$props.label
            }
        },
    }
</script>