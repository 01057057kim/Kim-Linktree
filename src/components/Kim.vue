<template>
    <div class="">
        <canvas ref="canvas" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Application } from '@splinetool/runtime';

export default {
    setup() {
        const canvas = ref(null);

        onMounted(() => {
            const app = new Application(canvas.value);
            app.load('https://prod.spline.design/WZUP7FPNrK3tOJy8/scene.splinecode');
        });

        return { canvas };
    },
};
</script>

