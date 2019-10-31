<template>
    <el-container>
        <!-- 标题部分 -->
        <el-header>
            <div class="menu fl">
                <el-button @click="menuflag=!menuflag">
                    <i class="el-icon-menu"></i>
                </el-button>
            </div>
            <!-- 我感觉这里只用一个span好low -->
            <span>后台管理系统</span>
            <el-dropdown class="hover fr" style="margin-right: 20px;">
                <i class="el-icon-user">
                    <span>hhhghh</span>
                </i>

                <el-dropdown-menu>
                    <el-dropdown-item>切换用户</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <!-- 主体部分 包括左侧导航栏和主要内容 -->
        <el-container class="main">

            <!-- 动画嵌套 -->
            <el-collapse-transition>
                <!-- 左侧导航栏 -->
                <el-aside v-show="menuflag">
                    <el-menu :default-openeds="['0', '2']">
                        <el-submenu :index="i+''" v-for="(item, i) in menu" :key="i">
                            <span slot="title">{{item.name}}</span>
                            <el-menu-item-group>
                                <el-menu-item :index="i+''+index" v-for="(sonItem,index) in item.children" :key="index">
                                    {{sonItem}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </el-collapse-transition>

            <!-- 主体部分 -->
            <el-main>
                main
            </el-main>
        </el-container>
        <!-- 页脚 -->
        <el-footer>页脚</el-footer>
    </el-container>
</template>

<!-- 公共样式部分 -->
<style>
    .fr {
        float: right;
    }

    .fl {
        float: left;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .hover {
        cursor: pointer;
    }

    .cover {
        position: absolute;
        width: 100%;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
<!-- 局部样式部分 -->
<style scoped>
    /* 手机和pc样式部分 */
    .main {
        min-height: 100vh;
        display: flex;
    }

    .el-header,
    .el-footer {
        /* background-color: #B3C0D1; */
        background-color: #d9ecff;
        
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        /* background-color: #D3DCE6; */
        color: #333;
        text-align: center;
        line-height: 200px;
        max-height: 100hv;
    }

    .el-main {
        /* background-color: #E9EEF3; */
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    /* 手机样式部分 */
    @media only screen and (max-width: 768px) {
        .menu {
            margin-top: 20px;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                menuflag: true,
                menu: [
                    { name: "人才培养方案", children: ["人才培养定位", "培养目标", "毕业要求", "指标点"] },
                    { name: "人才培养方案", children: ["人才培养定位", "培养目标", "毕业要求", "指标点"] },
                    { name: "人才培养方案", children: ["人才培养定位", "培养目标", "毕业要求", "指标点"] },
                    { name: "人才培养方案", children: ["人才培养定位", "培养目标", "毕业要求", "指标点"] },
                ]
            }
        },
        methods: {

        }
    };
</script>