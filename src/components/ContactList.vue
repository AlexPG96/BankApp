<template>
    <h3 class="px-2">Contact List</h3>
    <div class="row py-3 px-3 infiniteScroll">
        <SingleContact v-for="(contact, index) in 32" :key="index" 
        icon="icon.jpg"
        name="Name"
        account="Account Number"
        :receive="receive"/>

    </div>
</template>

<script>
import SingleContact from "./SingleContact";
export default {
    name: 'ContactList',
    components: {
        SingleContact
    },
    props: {
        receive: Boolean,
    }
}
</script>

<style lang="scss" scoped>

.infiniteScroll {
    overflow: auto;
    height: 450px;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #aeaeae transparent;
    padding-bottom: 0 !important;
}
</style>