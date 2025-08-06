import { ref, onMounted, onUnmounted } from 'vue';

export function useFocus(targetRef) {
    const isFocused = ref(true);

    const handler = e => {
        isFocused.value = targetRef.value && targetRef.value.contains(e.target);
    };

    onMounted(() => document.addEventListener('mousedown', handler));
    onUnmounted(() => document.removeEventListener('mousedown', handler));

    return { isFocused };
}
