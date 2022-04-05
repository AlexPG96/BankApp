<template>
    <div class="carouselContainer">
        <ul class="carousel">
            <li class="d-flex align-items-center" :class="{'ms-5': secondCarousel, 'me-1': !secondCarousel}" v-for="(user, index) in users" :key="index">
                <div class="iconContainer" style="background: black;">
                    <img :src="user.logo" alt="" width="60" height="60">
                </div>
                <div class="carouselItem">
                    <div class="d-flex flex-column">
                        <span>{{user.name}}</span>
                        <small>{{user.accountNumber}}</small>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="carousel">
            <li class="d-flex align-items-center" :class="{'ms-5': secondCarousel, 'me-1': !secondCarousel}" v-for="(user, index) in users" :key="index">
                <div class="iconContainer" style="background: black;">
                    <img :src="user.logo" alt="" width="60" height="60">
                </div>
                <div class="carouselItem">
                    <div class="d-flex flex-column">
                        <span>{{user.name}}</span>
                        <small>{{user.accountNumber}}</small>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AutoCarousel",
    props: {
        users: Array,
        secondCarousel: Boolean,
        
    }

}
</script>

<style lang="scss" scoped>
.carouselContainer {
  display: flex;
  padding: 8px 0;
  overflow: hidden;
    .carousel {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    transform: translate(-4%);
    animation: carousel 80s alternate infinite;

        .iconContainer {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 15px;

            img {

            }
        }
        .carouselItem {
        display: flex;
        width: 120px;
        height: 60px;
        padding: 1rem;
        margin-right: 30px;
        align-items: center;
        justify-content: start;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.05);
        background-color: #ffffff;
        border-radius: 15px;
        }
    }

    @keyframes carousel {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100%);
        }
    }
}




</style>