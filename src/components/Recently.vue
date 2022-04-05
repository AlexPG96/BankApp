<template>
  <div class="row py-3 px-3">
      <div class="col-12 rencentlyRow">
          <div class="d-flex justify-content-between">
            <h3>Recently</h3>
            <div>
                <select class="form-select" aria-label="Default select example">
                    <option v-for="(filter, index) in filters" :key="index" :value="filter">{{filter}}</option>
                </select>
            </div>
          </div>
          <AutoCarousel :users="firstUsers" :secondCarousel="false"/>
          <AutoCarousel class="ms-5" :users="secondUsers" :secondCarousel="true" />
      </div>
  </div>
</template>

<script>
import AutoCarousel from "../components/AutoCarousel.vue";
export default {
    name: "Recently",
    components: {
        AutoCarousel,

    },
    setup() {
        const filters = ['Today', 'Weekly', 'Monthly', 'Yearly'];
        const firstUsers = [
            {
                id: 1,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 2,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 3,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 4,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 5,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 6,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 7,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 8,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 9,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 10,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 11,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 12,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 13,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 14,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 15,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 16,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 17,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 18,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 19,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 20,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
        ];

        const secondUsers = [
            {
                id: 1,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 2,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 3,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 4,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 5,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 6,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 7,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 8,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 9,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 10,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 11,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 12,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 13,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 14,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 15,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 16,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 17,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 18,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 19,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 20,
                logo: 'https://media0.giphy.com/media/wbzCLsyT1VjZ6/200w.gif?cid=82a1493b8xcktn1lskowq4rvi1zont05iv252zndcs4wjqf5&rid=200w.gif',
                name: 'Test',
                accountNumber: '5689 ****'
            },
        ];
    
        return {
            filters,
            firstUsers,
            secondUsers,
        }
    }
}
</script>

<style lang="scss" scoped>

.rencentlyRow {
    border: 1px solid red;
    border-radius: 15px;
    padding: 15px;
}
</style>