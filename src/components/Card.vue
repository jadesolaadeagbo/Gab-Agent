<template>
    <div>
        <div :class="[width,height,color,rounded]">
            <div class="flex flex-col space-y-3 px-5 pt-2">
                <p class="w-[166px] h-[39px] text-sm font-bold flex items-center text-grey ">
                    {{ label }}
                </p>                
                <span class=" bg-black w-[50px] rounded-2xl flex justify-center">
                    <img :src="'/assets/'+img" class=" w-[40px] h-[50px] rounded-[40px]" alt="">                
                </span>

                <p 
                    class="relative font-bold text-md flex flex-row items-center text-center">
                    {{amount}}
                </p>
                <div class="progress-bar">
                    <div class="progress" :style="{ width: `${progress}%`, backgroundColor: `${bgcolor}`}"></div>
                </div>
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
            label: String,
            progress: Number,
            bgcolor: String
        },
        data() {
            return {
                rounded: "rounded-[30px]",
                color: this.$props.color,
                width: this.$props.width,
                height: this.$props.height,
                img: this.$props.img,
                amount: this.$props.amount,
                label: this.$props.label,
                progress:this.$props.progress,
                bgcolor:this.$props.bgcolor 
            }
        },
    }
</script>

<style>
.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  /* background-color: #42b983; */
  transition: width 0.3s ease-in-out;
  border-radius: 4px;
}
</style>