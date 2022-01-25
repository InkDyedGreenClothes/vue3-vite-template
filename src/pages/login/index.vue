<template>
  <div class="login-container">
    <div class="login-top">
      <div class="navigation-bar"></div>
      <div class="content">
        <div class="content-left">
          <div class="content-tab">
            <div class="tab-item">微信扫码登录</div>

            <div class="tab-item">企业微信扫码登录</div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-bottom">Copyright 2019-2021</div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  //   padding-top: 60px;
  background: #f0f2f5;
  .login-top {
    padding-top: 60px;
    height: calc(100vh - 120px);
    background: #fff;
    .navigation-bar {
      height: 62px;
      background: linear-gradient(
        340deg,
        #36bbff 0%,
        #43cef5 6%,
        #0dd0c1 33%,
        #4bdae5 50%,
        #18a9e5 84%,
        #1c9bf2 91%,
        #1f8dff 100%
      );
    }
    .content {
      height: 460px;
      width: 520px;
      background: red;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .login-bottom {
    height: 60px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
