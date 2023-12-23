
const { createApp, ref, onMounted } = Vue

createApp({
  setup() {
    const title = ref('');
    const message = ref('');

    async function getAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
    
        title.value = data.slip.id
        message.value = data.slip.advice;
    }

    onMounted(() => {
        getAdvice();
      })

    return {
      message,
      title,
      getAdvice
    }
  }
}).mount('#app')