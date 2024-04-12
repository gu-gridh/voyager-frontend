<template>
  <footer id="footer">
      <div>
          <a href="https://dh.gu.se/">
    <div id="CDHLogo">#GRIDH</div>
  </a>
      </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
#footer {
display:block;
background-color: #222;
color: white;
line-height: 1;
height: 82px;
width: 100%;
font-size: 12px;
position: absolute;
z-index: 3000;
bottom: 0px;;
font-family: "Barlow Condensed", sans-serif;
position:absolute;
}

a {
font-weight: bold;
}
#CDHLogo {
float: right;
margin-top: 0px;
margin-right: 50px;
width: auto;
height: auto;
text-align: left;
font-weight: 100;
font-style: normal;
font-size: 45px;
line-height: 0.4;
padding: 30px 0px 10px 0px;
vertical-align: middle;
color:white;
}
.link {
float: left;
font-size: 40px;
font-weight: 100;
font-style: normal;
line-height: 0.4;
padding: 30px 0px 10px 0px;
margin-left: 10px;
}
</style>