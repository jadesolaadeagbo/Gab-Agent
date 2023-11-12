<template>
    <div>
        <div :class="[width,height,color,rounded]">
            <div class="flex flex-col space-y-2 px-5 pt-10 text-white">
               
                <span class="">    
                    <i class="fa-solid" :class="[icon]"></i>           
                </span>
 
                <p 
                    class="py-5 text-2xl">
                    {{amount}}
                </p>

                <p class=" text-lg text-white flex items-center font-light ">
                    {{ label }}
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
            label: String,
            progress: Number,
            bgcolor: String,
            icon: String
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
                bgcolor:this.$props.bgcolor ,
                icon:this.$props.icon 

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