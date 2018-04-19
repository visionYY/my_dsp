<template>
    <div id='creative'>
        <div class="header">
            <h2>广告创意</h2>
        </div>
        <el-row class='row1'>
            <el-col :span='24'>
                <el-select v-model="value" placeholder="创意ID">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-input placeholder="请输入关键字查询"></el-input>
                <el-select v-model="value1" placeholder="请选择">
                    <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-button>查询</el-button>
            </el-col>
            <!-- <el-col :span='8'>11</el-col> -->
        </el-row>
        <el-row class='row2'>
            <el-col :span='12'>
                <el-button @click='tonewIdea'>+ 新建创意</el-button>
                <el-select v-model="value2" placeholder="批量修改">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span='12'>
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
                <el-select v-model="value3" placeholder="自定义列">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">

            <el-table-column
            type="selection"
            width="55">
            </el-table-column>

            <el-table-column
            label="创意素材"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>

            <el-table-column
            prop="id"
            label="创意ID"
            width="120">
            </el-table-column>

            <el-table-column
            prop="type"
            label="创意类型"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            prop="link"
            label="落地页链接"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            prop="link1"
            label="监测链接"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            prop="bao"
            label="曝光量"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            prop="click"
            label="点击量"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            prop="state"
            label="状态"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value:"",
                options1: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value1:"",
                options2: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value2:"",
                value3:"",
                tableData3:[],
                multipleSelection: []
            }
        },
        mounted(){
            // console.log('发起数据请求')
            this.$store.dispatch('getList')
            setTimeout(() =>{
                this.tableData3 = this.$store.state.list
            })
        },
        methods:{
            tonewIdea(){
                console.log('quleo')
                this.$router.push({
                    path:"/new/found"
                })
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>
<style>
    #creative{
        width:100%;
        height:100%;
    }
    .header{
        width:100%;
        height:40px;
        background: #fff;
    }
    .header h2{
        /* border-bottom:4px solid #00f; */
        line-height:40px;
        padding-left:10px;
        box-sizing: border-box;
        float:left;
    }
    .row1{
        padding:10px;
        /* margin-top:15px; */
        margin:0;
        background: #fafafa;
        display: flex;
    }
    .row1 .el-col-24{
        float:left;
    }
    .row1 .el-select{
        left:0;
        float:left;
    }
    .row1 .el-input{
        margin:0 10px;
        width:400px;
        float:left;
    }
    .row1 .el-input--suffix{
        width:100px;
    }
    .row1 .el-button--default{
        float:left;
        color:#ccc;
        background: #252525;
    }

    .row2{
        padding:10px;
        background: #fff;
    }
    .row2 .el-col .el-button, .el-select, .el-date-editor{
        float:left;
    }
</style>
