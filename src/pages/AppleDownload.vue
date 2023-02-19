<template>
  <div id="home">
    <el-header>
      <div class="header">
        <div class="title">Light加速器</div>
      </div>
    </el-header>
    <el-main id="main">
      <div id="des-text">请登录外区苹果账号</div>
      <div id="timer">还有 {{ time }} 秒跳转</div>
      <a id="link" ref="link" :href="'https://apps.apple.com/app/id1636165585'" target="_blank"> </a>
    </el-main>
  </div>
</template>

<style scoped>
#home {
  padding: 25px;
}

#main {
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

#des-text {
    font-size: 18px;
    font-family: poppins;
    color: white;
}

#timer {
    font-size: 14px;
    font-family: poppins;
    color: white;
    opacity: 0.6;
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
</style>

<script>
export default {
  data: function () {
    return {
      time: 3,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }

      if (this.time <= 0) {
        const a = this.$refs['link'];
        a.click();
      }
    }, 1000);
  },
};
</script>
