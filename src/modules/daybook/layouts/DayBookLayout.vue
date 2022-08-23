<template>
    <nav-bar></nav-bar>
    <div class="row justify-content-md-center" v-if="isLoading">
        <div class="col-3 alert alert-info text-center mt">
            Espere, por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>
    <div class="d-flex" v-else>
        <div class="col-4">
            <entry-list></entry-list>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex' 

export default {
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    },
    methods: {
        ...mapActions('journal', ['loadEntries'])
    },
    computed: {
        ...mapState('journal', ['isLoading'])
    },
    created() {
        this.loadEntries()
    }
}
</script>