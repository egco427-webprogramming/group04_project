<template>
    <!-- Carousal -->
    <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselId1" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselId2" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselId3" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <!-- Single item -->
                <div class="carousel-item active">
                    <video class="img-fluid" autoplay loop muted>
                        <source src="https://www.uniqlo.com/jp/ja/contents/collaboration/theory/22ss/common/imgs/home/hero-video-desktop.mp4" type="video/mp4" />
                    </video>
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Spring/Summer 2022 Collections</h2>
                        <p>Bringing sophistication to every day.</p>
                        <br>
                    </div>
                </div>
                <!-- Second item -->
                <div class="carousel-item">
                    <video class="img-fluid" autoplay loop muted>
                        <source src="https://www.uniqlo.com/jp/ja/contents/collaboration/uniqlo-u/22ss/common/imgs/home/hero-video-desktop.mp4" type="video/mp4" />
                    </video>
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Spring/Summer 2022 Collections</h2>
                        <h6>Available online and in selected stores.</h6>
                        <br>
                    </div>
                </div>
                <!-- Third item -->
                <div class="carousel-item">
                    <div class="video-container"> 
                        <video class="img-fluid" autoplay loop muted>
                            <source src="https://www.uniqlo.com/jp/ja/contents/collaboration/jwanderson/22ss/common/imgs/home/hero-video-desktop.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <!-- <img src="https://www.uniqlo.com/jp/ja/contents/collaboration/jwanderson/22ss/common/imgs/home/hero-1-desktop.webp?1648189327077" class="d-block w-100"> -->
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Spring/Summer 2022 Collections</h2>
                        <h6>At home with the sea.</h6>
                        <br>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
    </div>
</template>

<script>

    export default {

    }
</script>

<style>
.carousel-item {
    width: 100%;
    height: 95vh;
    /* object-fit: cover;     */
}
.img-fluid {
    top: 0;
    left: 0;
    width: 100%;

}
</style>