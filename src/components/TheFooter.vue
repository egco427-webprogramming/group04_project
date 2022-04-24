<template>
    <div class="footer-dark" >
        <footer>
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-sm-6 col-md-3 item"  align="left">
                        <h3>Products</h3>
                        <ul>
                            <li><router-link :to="{name:'Main'}">All Products</router-link></li>
                            <li><router-link :to="{name:'Promotion'}">Promotions</router-link></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Jewelery</a></li>
                            <li><a href="#">Men's Clothing</a></li>
                            <li><a href="#">Women's Clothing</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item" align="left">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                </div>
                <br>
                <br>
                <div class="col item social">
                    <a href="#"><sui-icon name="facebook square" /></a>
                    <a href="#"><sui-icon name="twitter square" /></a>
                    <a href="#"><sui-icon name="instagram" /></a>
                    <a href="#"><sui-icon name="envelope outline" /></a>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-dark {
  padding:50px 0;
  color:#f0f9ff;
  background-color:#282d32;
}

.footer-dark h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-dark ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-dark ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.6;
}

.footer-dark ul a:hover {
  opacity:1;
}

@media (max-width:767px) {
  .footer-dark .item:not(.social) {
    text-align:center;
    padding-bottom:20px;
  }
}

.footer-dark .item.text {
  margin-bottom:36px;
}

@media (max-width:767px) {
  .footer-dark .item.text {
    margin-bottom:0;
  }
}

.footer-dark .item.text p {
  opacity:0.6;
  margin-bottom:0;
}

.footer-dark .item.social {
  text-align:center;
}

@media (max-width:991px) {
  .footer-dark .item.social {
    text-align:center;
    margin-top:20px;
  }
}

.footer-dark .item.social > a {
  font-size:35px;
  line-height:0px;
  margin:0 8px;
  color:#fff;
  opacity:0.75;
  text-decoration: none;
  align-items: center;
}

.footer-dark .item.social > a:hover {
  opacity:1;
}

.footer-dark .copyright {
  text-align:center;
  padding-top:24px;
  opacity:0.4;
  font-size:13px;
  margin-bottom:0;
}

</style>