<template>
    <div class="state-info">

        <span class="state-name">
            {{ state.name }}
        </span>

        <div>
            <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
        </div>

        <div>
            <router-link v-bind:to="{name: 'StateMap', params: {state: state.name}}">
                <img class="map-icon" src="@/assets/map_icon.png">
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: 'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object
    },
    data() {
        return {
            visited: this.state.visited
        }
    },
    methods: {
        // when checkbox is clicked, emit msg to parent, update visited
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}
</script>

<style scoped>

.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px gray solid;
    border-radius: .3rem;
    background-color: whitesmoke;
}

.visit-state {
    margin: 1rem;
    text-align: center;
}

.map-icon {
    width: 2rem;
    height: 2rem;
}

</style>