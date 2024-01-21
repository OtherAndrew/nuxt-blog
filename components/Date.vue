<script setup>
import { parseISO, format } from 'date-fns';

const props = defineProps(["dateString"]);
const parsedDate = ref(parseISO(props.dateString));
const formattedDate = ref(format(parsedDate.value, 'LLLL d, yyyy'));
</script>

<template>
    <time :dateTime="parsedDate">{{ formattedDate }}</time>
</template>