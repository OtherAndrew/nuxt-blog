<script setup>
import { parseISO, format } from 'date-fns';

const props = defineProps(["dateString"]);
const parsedDate = parseISO(props.dateString);
const formattedDate = ref(format(parsedDate, 'LLLL d, yyyy'));
</script>

<template>
    <time :dateTime="props.dateString">{{ formattedDate }}</time>
</template>