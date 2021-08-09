<template>
<div v-if="images.length === 0"></div>
<div v-else-if="images.length === 1">
    <v-img 
    :src="`http://localhost:3085/${images[0].src}`"
    contain
    aspect-ratio="2"
    />
</div>
<div class="double-img" v-else-if="images.length === 2">
    <v-img 
    :src="`http://localhost:3085/${images[0].src}`"
    contain
    aspect-ratio="2"
    style="flex: 1"
    />
    <v-img 
    :src="`http://localhost:3085/${images[1].src}`"
    contain
    aspect-ratio="2"
    style="flex: 1"
    />
</div>
<div class="multi-img" v-else-if="images.length > 2">
    <v-img 
    :src="`http://localhost:3085/${images[0].src}`"
    contain
    aspect-ratio="2"
    />
    <div class="img-dots">
        <v-icon>mdi-dots-horizontal</v-icon>
    </div>
</div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.double-img
{
    display: flex;

}

.double-img v-img
{
    flex: 1;
}

.multi-img
{
    display: flex;
}

.multi-img v-img
{
    flex:1
}

.img-dots
{
    display: flex;
    justify-content: center;
    align-content: center;
    flex: 1;
}
</style>