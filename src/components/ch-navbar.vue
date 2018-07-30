<template>
    <nav id="top-bar" class="top-bar fixed">
        <div class="container">
            <div name="spacer"></div>
            <div class="menu-wrapper">
                <ul id="menu" class="menu">
                    <li v-for="(section, i) in menuTab" :key="i"> 
                       <a :href="'#' + section.id"> {{ section.menu.name }} </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="less"scoped>
    nav {
        &.top-bar {
            height: 128px;
            padding: 45px 0 25px;
            width: 100%;
            background-color: #2E2E2E;
            transition: all .5s ease-in-out;
            &.fixed {
                position: fixed;
                z-index: 99999;
            }
            .container {
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;    
            }
        }
        .menu-wrapper {
            .menu {
                padding: 0;
                margin: 0;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                a {
                    width: auto;
                    height: 50px;
                    line-height: 50px;
                    display: inline-block;
                    padding: 0 30px;
                    transition: all .5s ease-in-out;
                    color: white;
                }
            }
        }

    }
</style>

<script>
    export default {
        name: "ch-navbar",

        props: {
		    menuTab: {
                type: Array,
		    	default () {
		    		return []
		    	}
		    },
        },
    }
</script>