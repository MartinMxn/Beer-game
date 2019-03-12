<template>
    <div>
        <div class="back"></div>
        <div class="light"></div>
        <div class="content">
            <div class="fire">
                <div class="bottom"></div>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
                <figure></figure>
            </div>
            <div class="reverse">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>


        <p>Thanks for your testing
            <br>Your final score : {{totalscore}}
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo"
                    ></feColorMatrix>
                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script>
export default {
    name: "rank",
    data() {
        return {
            totalscore:0,
        };
    },
    methods: {
        back() {
            this.$router.push("/index");
        }
    },
    mounted(){
        this.totalscore = this.$route.params.totalscore;
        console.log(this.totalscore);
    }
};
</script>

<style>
.back {
  background: #141e30;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.light {
  width: 100%;
  height: 100%;
  animation: firelight 2s ease infinite;
  background: radial-gradient(ellipse at bottom, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0) 90%);
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  bottom: 0;
}

@keyframes firelight {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
.content {
  position: absolute;
  left: 50%;
  bottom: 0;
  margin: 0 0 -30px -100px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 100%;
}
.content .fire {
  filter: url(#goo);
  position: absolute;
  width: 100%;
  height: 100%;
}
.content div.bottom {
  position: absolute;
  left: 50px;
  bottom: 0;
  width: 100px;
  height: 30px;
  background: #ff9800;
  border-radius: 30px;
}
.content figure {
  position: absolute;
  margin: 0 0 -15px;
  left: calc(50% - 70px);
  bottom: 0;
  width: 70px;
  height: 70px;
  background: #ff9800;
  border-radius: 100%;
}
.content figure:nth-child(1) {
  animation: firecircle 1.2s 0.14s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 9px;
  margin-bottom: -30px;
}
.content figure:nth-child(2) {
  animation: firecircle 1.2s 0.28s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 53px;
  margin-bottom: -25px;
}
.content figure:nth-child(3) {
  animation: firecircle 1.2s 0.42s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 53px;
  margin-bottom: -36px;
}
.content figure:nth-child(4) {
  animation: firecircle 1.2s 0.56s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 48px;
  margin-bottom: -27px;
}
.content figure:nth-child(5) {
  animation: firecircle 1.2s 0.7s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 63px;
  margin-bottom: -16px;
}
.content figure:nth-child(6) {
  animation: firecircle 1.2s 0.84s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 2px;
  margin-bottom: -35px;
}
.content figure:nth-child(7) {
  animation: firecircle 1.2s 0.98s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 16px;
  margin-bottom: -22px;
}
.content figure:nth-child(8) {
  animation: firecircle 1.2s 1.12s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 56px;
  margin-bottom: -36px;
}
.content figure:nth-child(9) {
  animation: firecircle 1.2s 1.26s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 30px;
  margin-bottom: -37px;
}
.content figure:nth-child(10) {
  animation: firecircle 1.2s 1.4s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 21px;
  margin-bottom: -32px;
}
.content figure:nth-child(11) {
  animation: firecircle 1.2s 1.54s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 36px;
  margin-bottom: -25px;
}
.content figure:nth-child(12) {
  animation: firecircle 1.2s 1.68s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 41px;
  margin-bottom: -32px;
}
.content figure:nth-child(13) {
  animation: firecircle 1.2s 1.82s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 13px;
  margin-bottom: -40px;
}
.content figure:nth-child(14) {
  animation: firecircle 1.2s 1.96s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 60px;
  margin-bottom: -40px;
}
.content figure:nth-child(15) {
  animation: firecircle 1.2s 2.1s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 69px;
  margin-bottom: -34px;
}
.content figure:nth-child(16) {
  animation: firecircle 1.2s 2.24s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 17px;
  margin-bottom: -16px;
}
.content .reverse div {
  position: absolute;
  margin: 0 0 -15px;
  left: 0;
  bottom: 0;
  width: 70px;
  height: 70px;
  background: #141e30;
  border-radius: 100%;
}
.content .reverse div:nth-child(1) {
  animation: firereverseleft 1.2s 0.5s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 22px;
  margin-bottom: -22px;
}
.content .reverse div:nth-child(2) {
  animation: firereverseleft 1.2s 1s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 18px;
  margin-bottom: -35px;
}
.content .reverse div:nth-child(3) {
  animation: firereverseleft 1.2s 1.5s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 10px;
  margin-bottom: -29px;
}
.content .reverse div:nth-child(4) {
  animation: firereverseleft 1.2s 2s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 3px;
  margin-bottom: -36px;
}
.content .reverse div:nth-child(5) {
  left: 120px;
  animation: firereverseright 1.2s 0.5s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 3px;
  margin-bottom: -34px;
}
.content .reverse div:nth-child(6) {
  left: 120px;
  animation: firereverseright 1.2s 1s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 2px;
  margin-bottom: -40px;
}
.content .reverse div:nth-child(7) {
  left: 120px;
  animation: firereverseright 1.2s 1.5s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 15px;
  margin-bottom: -37px;
}
.content .reverse div:nth-child(8) {
  left: 120px;
  animation: firereverseright 1.2s 2s cubic-bezier(0.5, 0.07, 0.64, 1) infinite;
  margin-left: 8px;
  margin-bottom: -29px;
}

@keyframes firecircle {
  0% {
    transform: translateY(0) scale(1);
    background: #ff9800;
  }
  100% {
    transform: translateY(-175px) scale(0);
    background: #ffc107;
  }
}
@keyframes firereverseleft {
  0% {
    transform: translateY(0) translateX(0) scale(0.3);
  }
  100% {
    transform: translateY(-175px) translateX(50px) scale(1);
  }
}
@keyframes firereverseright {
  0% {
    transform: translateY(0) translateX(0) scale(0.3);
  }
  100% {
    transform: translateY(-175px) translateX(-50px) scale(1);
  }
}
p {
  color: white;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 42px;
  font-family: 'Cinzel', serif;
}
p span {
  width: 100%;
  font-size: 22px;
  font-style: italic;
  float: left;
  margin: 30px 0 0;
  letter-spacing: 1px;
  color: #ffc107;
  font-family: 'Open Sans Condensed', sans-serif;
}
p span:before {
  content: '? ';
}
</style>
</style>


