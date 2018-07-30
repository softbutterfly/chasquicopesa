<template>
    <div class="services columns">
        <div class="columns vertical-centering">
            <div class="service-number column is-3">
                <p>01</p>
            </div>
            <div class="service-icon column is-4">
                <img src="../assets/images/service-icon1.svg" alt="">
            </div>
            <div class="service-title column is-5">
                <a href="">Servicios in house</a>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .services {
        &.columns {
            justify-content: center;
            .service-number{
                p {
                    margin: 0;
                    cursor: default;
                    color: #EFAB1E;
                    font-weight: bold;
                    font-size: 36px;
                }
            }
            .service-icon {
                img {
                    display: block;
                    height: auto;
                }
            }
            .service-title>a {
                font-size: 16px;
                color: black;
                &:hover {
                    text-decoration: none;
                    border-bottom: 2px solid #EFAB1D;
                }
            }
        }
    }
</style>

<script>
export default {
    name: "service-item"
}
</script>
