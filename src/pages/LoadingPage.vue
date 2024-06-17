<script setup>
import OpenAI from "openai";
import { usePageStepStore } from "@/stores/store";
import { useRouter } from "vue-router";

const pageStepStore = usePageStepStore();
const router = useRouter();
const scriptData = pageStepStore.scriptData;

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
let isRequestSent = false;

const getGPTResponse = async () => {
  if (isRequestSent) return;
  try {
    isRequestSent = true;

    const happyOrSadEvent = `${scriptData[1]}에게 ${scriptData[2][1]}에 대한 ${scriptData[2][0]} 메시지를 작성해주세요.\n`;
    const otherEvent = `${scriptData[1]}에게 ${scriptData[2][1]}(을)를 작성해주세요.`;

    const prompt =
      "당신은 상황에 따른 메시지를 작성해주는 인공지능입니다.\n" +
        scriptData[2][0] ===
      "기타"
        ? otherEvent
        : happyOrSadEvent +
          `메시지의 길이는 ${scriptData[3]}이 되도록 해주세요.\n상대방과의 친밀도는 ${scriptData[4]}이며, ${scriptData[5]} 말투로 작성해주세요.`;
    console.log(prompt);
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    console.log(response);
    router.push({
      name: "result",
      state: { resultData: response.choices[0].message.content },
    });
  } catch (error) {
    console.error(error);
  }
};

getGPTResponse();
</script>
<template>
  <div
    class="h-full flex flex-col justify-start items-center bg-result-background bg-no-repeat bg-bottom"
  >
    <h1 class="w-5/6 mt-28 mb-8 text-left font-bold text-xl text leading-9">
      스크립트를 생성하고 있어요. <br />
      잠시만 기다려주세요!
    </h1>
    <div class="h-56 bg-white w-5/6 rounded-2xl p-6 font-semibold break-keep">
      축사는 보통 2~5분 정도의 길이를 가지는 것이 일반적이에요. 하지만 이러한
      길이는 상황에 따라 다를 수 있어요. 행사가 길거나 청중의 집중력이 떨어질
      경우, 축사를 짧게 유지하는 것이 좋을 수 있어요!
    </div>
  </div>
</template>

<style></style>
