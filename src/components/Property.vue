<template>
  <a href="#" class="box-article">
    <div class="box-article__image"><img src="../assets/visual-1.jpg" /></div>
    <div class="box-article__content">
      <p class="content__title">Maison 4 chambres</p>
      <p class="content__location">Luxembourg-ville</p>

      <p class="content__price">
        500 000€
        <span class="label-status">A vendre</span>
      </p>

      <div class="grid-flex">
        <div class="column info-house">
          <img src="../assets/home.svg" alt="" > <span>150m²</span>
        </div>
        <div class="column info-house">
          <img src="../assets/plans.svg" alt="" > <span>5</span>
        </div>
        <div class="column info-house">
          <img src="../assets/bed.svg" alt="" > <span>3</span>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">

  .label-status {
    background-color: #aed000;
    color: #ffffff;
    font-weight: 500;
    border-radius: 4px;
    display: inline-block;
    padding: 5px 10px;
    font-size: 14px;
  }

  .box-article {
    text-decoration: none;
    box-shadow: 0 0 23px 0 rgba(0,0,0,0.13);
    display: block;
    border-radius: 8px;

    .box-article__content {
      padding: 20px;

      .content__title {
        color: #000000;
        font-weight: 700;
        font-size: 18px;
      }

      .content__location {
        color: #666666;
        font-size: 14px;
        margin-top: 2px;
      }

      .content__price {
        margin-top: 10px;
        .label-status {
          margin-left: 10px;
        }
      }

      .grid-flex .column {
        padding-bottom: 0;
      }

      .info-house {
        display: flex;
        align-items: center;
        img {width: 25px;margin-right: 8px;}
        span {
          font-size: 16px;
        }
      }
    }
  }
</style>

