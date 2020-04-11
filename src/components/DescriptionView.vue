<template>
    <div class="description">
        <img alt="Vue logo" src="../assets/wallpaper.jpg">
        <nav>
            <ul>
                <p class="title"> zoomstock <p>
                <li class="current"><router-link to="/">Home</router-link></li>
                <li><router-link to="/upload">アップロード</router-link></li>
                    <!-- <a href="/upload" @click.stop.prevent="goUpload">アップロード</a></li> -->
            </ul>
        </nav>
        <h1 class="service_message">リモートミーティングに<br>最適な背景を見つけよう
                                    <br><input type="search" name="search" placeholder="キーワードを入力"><input type="submit" name="submit" value="検索">
        </h1>
    </div>
    <!-- <div><img alt="Vue logo" src="./assets/logo.png"></div> -->
</template>

<script>
export default {
    name: 'DescriptionView',
    methods: {
        goUplaod () {
            this.$router.push({ path: 'upload' });
            }
        }
    };
</script>

<style>

* {
    margin: 0px;
    padding: 0px;
}

.description{
    position: relative;/*相対配置*/
}

.description h1{
    position: absolute;/*絶対配置*/
    font-weight: bold; /*太字に*/
    font-size: 300%;    
    color: white;/*文字は白に*/
    top: 37%;
    left: 40%;
}


.description nav{
    position: absolute;/*絶対配置*/
    /* background-color: black; */
    top: 5%;
    left: 2%;
    padding-top: 10px;
}

.description p.title{
    color: white;
    margin-right: 10px;
    font-weight: bold; /*太字に*/
    font-size: 150%; 
    text-align: center;
}
.description ul{
    display: table;
    text-align: center;
    font-size: 120%; 
}
.description ul li{
    display: table-cell;
    padding-left: 10px;
    padding-right: 10px;
}
.description ul li a{
    display: block;
    text-decoration: none;
    color: gray;
    font-weight: bold;
}
.description ul li.current{
    text-decoration : underline;
    font-size: 120%; 
    /* background-color: #DEEBF7; */
}
.description ul li a:hover{
    color: white
}
.description ul li.current a{
    color: gray;
}
.description ul li.current a:hover{
    color: white
}


.description img{
    /* width: 100%; */
    max-width: 100%;
    height: auto;
    text-align:center;
    /* height: 0; */
    /* 表示画像の高さ ÷ 表示画像の幅 × 100 */
    /* padding-top: 30.25%; */
  /* background: url(bg.jpg) center center / cover no-repeat; */
}

.resizeimage img { width: 100%; }


</style>