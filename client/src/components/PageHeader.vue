<template>
    <div id="block-header">
        <h1 id="title">How many states have you visited?</h1>
    </div>
</template>

<script>
export default {
    name: 'PageHeader'
}
</script>

<style scoped>
#block-header {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    background-color: lightblue;
    background-image: url('~@/assets/map_header.jpg');
    background-position: center;
    background-size: cover;
}
#title {
    font-weight: 500;
    color: ghostwhite;
    text-shadow: 0 0 5px black;
}

</style>