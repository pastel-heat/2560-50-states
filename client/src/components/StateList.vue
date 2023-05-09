<template>
    <div>
        <state-summary v-bind:states="states"></state-summary>
    </div>
    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
            <state-detail 
            v-bind:state="state"
            v-on:update-visited="updateVisted"
            ></state-detail>
        </div>
    </div>
</template>

<script>
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary.vue'

export default {
    components: {
        StateDetail,
        StateSummary
    },
    name: "StateList",
    data() {
        return {
            states: []
        }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() {
            this.$stateService.getAllStates().then( states => {
                this.states = states
            })
            .catch( err => {
                alert('Can\'t fetch state info')
                console.error(err)
            })
        },
        // send patch req to database, update visited
        updateVisted(stateName, visited) {
            this.$stateService.setVisited(stateName, visited).then( () => {
                this.fetchAllStates()
            })
            .catch( err => {
                alert('error updating state')
                console.error(err)
            })
        }
    }
}
</script>

<style scoped>

.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.state-container {
    margin: 1rem;
}

</style>