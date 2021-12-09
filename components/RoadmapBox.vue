<template>
    <div class="flex flex-col md:flex-row bg-red-500 items-center m-2 p-4 rounded-lg w-full md:w-2/3 lg:w-1/2">
        <div class="text-3xl md:text-4xl lg:text-5xl text-center md:w-1/4" style="width: 200px;">
            <slot name="percent"/>
        </div>
        <div class="text-lg lg:text-xl md:w-3/4">
            <slot name="text"/>
        </div>
    </div>
</template>
<script>
    export default{
       name: "RoadmapBox"
    }
</script>
