<template>
  <div class="row m-3">
      <div class="col-12 rencentlyRow">
          <div class="borderGradient">
            <div class="d-flex justify-content-between">
                <h3 class="col-10">Recently</h3>
                <div class="col-2">
                    <Select 
                    :options="filters"
                    />
                </div>
            </div>
            <AutoCarousel :users="firstUsers" :secondCarousel="false"/>
            <AutoCarousel class="ms-5" :users="secondUsers" :secondCarousel="true" />
          </div>
      </div>
  </div>
</template>

<script>
import AutoCarousel from "../components/AutoCarousel.vue";
import Select from "../components/Select.vue";
export default {
    name: "Recently",
    components: {
        AutoCarousel,
        Select

    },
    setup() {
        const filters = ['Today', 'Weekly', 'Monthly', 'Yearly'];
        const firstUsers = [
            {
                id: 1,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 2,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 3,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 4,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 5,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 6,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 7,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 8,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 9,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 10,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 11,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 12,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 13,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 14,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 15,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 16,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 17,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 18,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 19,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
            {
                id: 20,
                logo: 'icon.jpg',
                name: 'Jacob',
                accountNumber: '5689 ****'
            },
        ];

        const secondUsers = [
            {
                id: 1,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 2,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 3,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 4,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 5,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 6,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 7,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 8,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 9,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 10,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 11,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 12,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 13,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 14,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 15,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 16,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 17,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 18,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 19,
                logo: 'icon.jpg',
                name: 'Test',
                accountNumber: '5689 ****'
            },
            {
                id: 20,
                logo: 'icon.jpg',
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
    /* border: 1px solid red;
    border-radius: 15px;
    padding: 15px; */
    max-width: 100%;
    padding: 1rem;
    position: relative;
    background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    padding: 1px;
    border-radius: 15px;
    margin: 0px auto;

    .borderGradient {
        background: #020201;
        padding: 2rem;
        border-radius: 15px;
    }
}
</style>