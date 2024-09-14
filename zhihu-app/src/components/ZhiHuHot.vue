<template>
    <div>
        <h2>知乎专题</h2>
        <div class="container">
            <div v-for="item in list" :key="item.id" class="special-item">
                <div class="item-left">
                    <img :src="item.banner" alt="" />
                </div>
                <div class="item-right">
                    <h3>{{ item.title }}</h3>
                    <p>
                        <span class="updated">{{ item.updated }}更新</span>
                        <span>{{ item.viewCount }}次浏览</span>
                    </p>
                    <p>
                        {{ item.introduction }}
                    </p>
                </div>
                <span v-if="item.isFollowing === 'TRUE'" class="follow followed">
                    已关注
                </span>
                <span v-else class="follow unfollow">
                    关注
                </span>
            </div>
            <div style="text-align: center">
                <button @click="prevPage" :disabled="isFirstPage" :class="{ disabled: isFirstPage }">上一页</button>
                <button @click="nextPage" :disabled="isLastPage" :class="{ disabled: isLastPage }">下一页</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

interface Special {
    id: string
    title: string
    banner: string
    introduction: string
    isFollowing: string
    followersCount: number
    viewCount: number
    updated: string
}

const list = ref<Special[]>([])

const fetchAll = (): void => {
    axios
        .get(`http://localhost:8080/api/v1/special/all`)
        .then((res) => {
            list.value = res.data.data as Special[];
            console.log(list.value);
        })
        .catch((err) => {
            console.error(err);
        });
}

fetchAll();

const limit = ref<number>(3)
const offset = ref<number>(0)
const total = ref<number>(0)

const fetchByPage = (): void => {
    axios
        .get(`http://localhost:8080/api/v1/special/page?limit=${limit.value}&offset=${offset.value}`)
        .then((res) => {
            console.log(res)
            list.value = res.data.data.specials;
            total.value = res.data.data.total;
        })
        .catch((err) => {
            console.error(err);
        })
}

const nextPage = (): void => {
    if (offset.value + limit.value >= list.value.length) {
        offset.value += limit.value;
        fetchByPage();
    }
}

const prevPage = (): void => {
    if (offset.value > 0) {
        offset.value -= limit.value;
    }
    fetchByPage();
}

const isFirstPage = computed(() => offset.value === 0);

const isLastPage = computed(() => offset.value + limit.value >= total.value);

onMounted(() => {
    fetchByPage();
})

</script>

<style scoped>
.container {
    width: 100%;
    margin: 0 auto;
}

.special-item {
    display: flex;
    background-color: white;
    color: black;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
}

.item-left {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    flex: 1;
    margin-right: 20px;
}

.item-right {
    flex: 4;
    padding: 10px;
}

p {
    margin: 0;
}

p span {
    font-size: 13px;
    color: #333;
}

.updated {
    margin-right: 20px;
}

.follow {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 5px 10px;
    font-size: 14px;
}

.followed {
    background-color: #f6f6f6;
    color: #716c6c;
}

.unfollow {
    background-color: #eff4fe;
    color: #3678ee;
}

button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

button:disabled,
button.disabled {
    background-color: #d6d6d6;
    color: #888;
    cursor: not-allowed;
}
</style>