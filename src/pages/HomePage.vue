<template>
  <div id="home">
    <el-container>
      <el-header>
        <div class="header">
          <div class="title">Flow加速器</div>
        </div>
      </el-header>
      <el-main class="main">
        <Vue3Lottie :animationData="RocketJSON" :height="200" :width="200" />
        <div class="des">
          <div>一键回国 纯净体验</div>
          <div>回国看剧, 听音乐, 玩游戏无压力</div>
        </div>
        <div class="download">
          <a
            class="download-container"
            :href="'https://apps.apple.com/app/id1641117217'"
          >
            App Store
          </a>
          <a
            class="download-container"
            :href="'https://play.google.com/store/apps/details?id=com.vau.studio.vpn.waterapp'"
          >
            Google Play
          </a>
        </div>
      </el-main>
      <el-footer>
        <div class="contact">
          <div style="padding-right: 10px"> 联系方式 </div>
          <a :href="contactLink" style="color: wheat">{{ contact }}</a>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import RocketJSON from "@/assets/lotties/rocket.json";

export default {
  data: function () {
    return {
      RocketJSON: RocketJSON,
      contact: "waterproxyteam@gmail.com",
      contactLink: "mailto:waterproxyteam@gmail.com"
    };
  },
};
</script>

<style scoped>
#home {
  padding: 25px;
}

.main {
  height: 700px;
}

.header {
  min-width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  font-family: poppins;
}

.title {
  color: #f6ae2d;
}

.des {
  color: white;
  font-size: 20px;
  flex-direction: column;
  font-family: poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  opacity: 0.8;
}

.download {
  font-family: poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
}

.download-container {
  margin: 0 15px 0 15px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  color: gainsboro;
  opacity: 0.6;
  text-decoration: none;
}

.download-container:hover {
  margin: 0 15px 0 15px;
  padding: 10px 20px 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  background: gray;
  opacity: 0.8;
}

.contact {
  min-width: 100%;
  display: flex;
  margin: 25px 0 25px 0;
  justify-content: center;
  color: wheat;
  font-size: 12px;
}
</style>
