<template>
  <div
    class="flex flex-col justify-start items-center bg-result-background bg-no-repeat bg-bottom gap-6"
  >
    <div class="w-5/6 text-left mt-28">
      <h2 class="text-xl font-bold">
        <span class="text-primary-color">희연</span> 님을 위한 <br />
        스크립트를 생성했어요!
      </h2>
    </div>
    <div class="bg-white w-5/6 rounded-2xl p-6 font-medium break-keep">
      result
    </div>
    <h1 class="font-bold mt-2 w-5/6 text-left">
      스크립트를 읽을 때 이런 부분을 조심해주세요!
    </h1>
    <div class="bg-white w-5/6 rounded-2xl p-6 font-medium break-keep">
      <h2 class="font-bold text-lg my-2">발음과 억양</h2>
      <p>
        특정 단어나 문장의 발음과 억양을 주의 깊게 연습하세요.<br />
        청중이 쉽게 이해할 수 있도록 명확하게 발음해주세요.
      </p>
      <h2 class="font-bold text-lg my-2">목소리와 속도</h2>
      <p>
        너무 빠르거나 느리지 않게, 적절한 속도로 읽으세요.<br />
        중요한 발표에서는 진지한 톤을, 가벼운 대화에서는 밝은 톤을 사용하세요.
      </p>
      <h2 class="font-bold text-lg my-2">호흡과 리듬</h2>
      <p>긴 문장을 읽을 때는 적절한 곳에서 숨을 쉬어야 합니다.</p>
    </div>
    <div class="flex flex-row bg-white w-full px-5 gap-6">
      <NextButttonComponent
        class="bg-primary-color"
        text="이미지 저장"
      /><NextButttonComponent
        text="다시하기"
        :handleClickNextButton="handleClickNextButton"
      />
    </div>
  </div>
</template>
<script>
import router from "@/router/router";
import NextButttonComponent from "./NextButttonComponent.vue";
export default {
  components: { NextButttonComponent },
  setup() {
    const handleClickNextButton = () => {
      router.push("/");
    };
    return { handleClickNextButton };
  },
};
</script>
<style></style>
