<template>
    <div @click="$router.push({name: 'entry', params: {id: 10}})" class="entry-container mb-3 pointer p-2">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <div class="entry-description">
            Ea quis tempor cillum excepteur do incididunt dolore. Mollit eiusmod veniam sunt consectetur proident voluptate nisi ullamco proident amet Lorem. Labore cupidatat laborum mollit qui. Dolore occaecat nostrud anim ipsum laboris commodo amet voluptate non labore occaecat fugiat et nulla. Laboris nulla consequat ipsum ullamco magna amet cupidatat tempor consectetur laboris duis veniam velit. Aliqua adipisicing sint ut duis commodo deserunt aute proident consectetur ipsum sint labore. Commodo aliquip incididunt dolore enim anim fugiat pariatur anim id magna.
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>