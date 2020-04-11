<template>
    <nav>
        <ul>
            <h1 class="title"> zoomstock </h1>
            <li class="current"><a href="#">Home</a></li>
            <li><a href="#">アップロード</a></li>
        </ul>
    </nav>
</template>

<style>

nav{
    background-color: black
}
p.title{
    color: white;
    margin-right: 10px
}
ul{
    display: table;
    text-align: center;
}
ul li{
    display: table-cell;
    padding-left: 10px;
    padding-right: 10px;
}
ul li a{
    display: block;
    text-decoration: none;
    color: gray;
    font-weight: bold;
}
ul li.current{
    text-decoration : underline;
    /* background-color: #DEEBF7; */
}
ul li a:hover{
    color: white
}
ul li.current a{
    color: gray;
}
ul li.current a:hover{
    color: white
}
</style>
