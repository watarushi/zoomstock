<template>
    <div class="searchimage">
        <p>幅広いコレクションの中から、最適な背景がきっと見つかります。<br>あなたのリモートミーティングを素敵な背景で彩りましょう。</p>
        <div id="images">
            <div v-for="image in images">
                <img :src="image.image_URL" />
            </div>
        </div>
        <!-- <img :src="image_src"> -->
        <ul v-for="item of items" v-bind:key="item.name">
            <!-- <li>{{ "item.name" }}</li> -->
            <li><img :src="item.name"></li>
        </ul>
    </div>
    
</template>

<script>
// if (process.client) {
//     
// }
import db from '../plugins/firebase.js'

export default {
    name: "images",
    data () {
        return {
            images: [],
            // image_src: require("../../assets/wallpaper.jpg"),// ←
            items: [
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") },
                { name: require("../assets/logo.png") }
             ]
        }
    },
    mounted (){
        if (process.client) {
            console.log('a')
            console.log('b')
            // const db = require('../plugins/firebase.js')
            console.log(db)
            db.collection('products').get().then(snap => {
            const array = [];
            console.log(snap)
            snap.forEach(doc => {
                array.push(doc.data());
            });
            this.images = array
            });
        }
    }
}
</script>

<style>
    .searchimage p{
        /* position: absolute;絶対配置 */
        font-weight: bold; /*太字に*/
        font-size: 200%;    
        /* color: white;文字は白に */
        top: 37%;
        left: 40%;
        margin-top: 100px;
    }
    .searchimage ul{
        display:inline-block;
        margin:10px 10px;/*←上下5px、左右2pxのマージン指定の場合*/

    }
    .searchimage img{
        width:1000;
        height:130;
    }
</style>