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
            //app.load('https://prod.spline.design/IoTkVnibUXm85T9T/scene.splinecode');
            app.load('https://prod.spline.design/rOvTUn2rXP-S8r75/scene.splinecode');
        });

        return { canvas };
    },
};
</script>

