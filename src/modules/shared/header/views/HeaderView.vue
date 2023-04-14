<script setup lang="ts">
import { RouterLink } from 'vue-router'
import useHeaders from '@/modules/shared/header/composables/useHeaders'

const { navbar } = useHeaders();

</script>

<template>
    <div>
        <h1>Header</h1>
        <ul>
            <RouterLink 
                v-for="option in navbar"
                :key="option.name"
                :to="option.url"
            >
                <li>{{ option.name }}</li>
            </RouterLink>
        </ul>
    </div>
</template>

<style scoped>

</style>