<template>
    <div class="searchimage">
        <p>幅広いコレクションの中から、最適な背景がきっと見つかります。<br>あなたのリモートミーティングを素敵な背景で彩りましょう。と言ってますけども</p>
           <div class="imageview">
                <ui v-for="image in images" v-bind:key="image.id">
                    <li><img :src="image.image_URL" /><li>
                    <li>{{image.id}}<li>
                </ui>
            </div>
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
       
        }
    },
    mounted (){
        if (process.client) {
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
    .searchimage img{
        width:1000;
        height:130;
    }

        /* スマホ　767px以下 */
    @media only screen and (max-width: 767px){
    .imageview img{
        width: 100px;
        height: 100px;
    }
    }
    /* pc　768px以上 */
    @media only screen and (min-width: 768px), print {
    .imageview img{
        width: 100px;
        height: 100px;
    }
    }
    .imageview li{
        list-style: none;
        /* display:inline-block; */
        margin:10px 10px;/*←上下5px、左右2pxのマージン指定の場合*/

    }
</style>