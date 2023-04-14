<script setup lang="ts">
import HeaderView from '@/modules/shared/header/views/HeaderView.vue';
import FooterView from '@/modules/shared/footer/views/FooterView.vue';
</script>

<template>
    <div>
        <HeaderView />
        <RouterView />
        <FooterView />
    </div>
</template>

<style scoped>

</style>