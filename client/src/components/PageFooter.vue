<template>
    <div>
        <span class="nav-link">
            <router-link to="/">Home</router-link>
        </span>

        <span class="nav-link">
            <router-link to="/about">About</router-link>
        </span>
        
        <p>
            Header photo by by 
            <a href="https://unsplash.com/@geojango_maps?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GeoJango Maps</a> on <a href="https://unsplash.com/photos/Z8UgB80_46w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
            </a>

        </p>
        <p>
            <a target="_blank" href="https://icons8.com/icon/85931/map-marker">Map Marker</a> 
            icon by 
            <a target="_blank" href="https://icons8.com">Icons8</a>
        </p>    
    </div>
</template>

<script>
export default {
    name: 'PageFooter'
}
</script>

<style scoped>

.nav-link {
    margin: 1rem;
}
</style>