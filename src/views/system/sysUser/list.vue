<template>
    <div class="app-container">
        <!--搜索条件查询-->

        <!-- 列表 -->
        <el-table v-loading="listLoading" :data="list" stripe border style="width: 100%;margin-top: 10px;">

            <el-table-column label="序号" width="70" align="center">
                <template slot-scope="scope">
                    {{ (page - 1) * limit + scope.$index + 1 }}
                </template>
            </el-table-column>

            <el-table-column prop="username" label="用户名" width="180" />
            <el-table-column prop="name" label="姓名" width="110" />
            <el-table-column prop="phone" label="手机" />
            <el-table-column label="状态" width="80">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.status" @change="switchStatus(scope.row)">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" />

            <el-table-column label="操作" align="center" fixed="right">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row.id)" title="修改" />
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeDataById(scope.row.id)"
                        title="删除" />
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-pagination :current-page="page" :total="total" :page-size="limit"
            style="padding: 30px 0; text-align: center;" layout="total, prev, pager, next, jumper"
            @current-change="fetchData" />

    </div>
</template>
<script>
import api from '@/api/user/user.js'
export default {
    data() {
        return {
            listLoading: true, // 数据是否正在加载
            list: [], // 数据列表
            total: 0, // 数据库中的总记录数
            page: 1, // 默认页码
            limit: 3, // 每页记录数
            searchObj: {}, // 查询表单对象
            // 处理时间范围条件的
            createTimes: [],
            dialogVisible: false,
            sysUser: {},
            saveBtnDisabled: false,
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        // 修改状态
        switchStatus(row) {
            // 如果 可用  设置为 不可用  如果不可用  设置为 可用
            row.status = row.status === 1 ? 0 : 1;
            api.updateStatus(row.id, row.status).then(response => {
                //a.给出提示
                this.$message.success(response.message || '操作成功');
                //b.再次刷新列表
                this.fetchData();
            })
        },
        edit(id) {

        },
        add() {

        },
        fetchData(page = 1) {
            this.page = page;
            if (this.createTimes && this.createTimes.length == 2) {
                this.searchObj.createTimeBegin = this.createTimes[0];
                this.searchObj.createTimeEnd = this.createTimes[1];
            }

            api.getUserPageInfo(this.page, this.limit, this.searchObj).then(
                response => {
                    //this.list = response.data.list
                    this.list = response.data.records;
                    this.total = response.data.total;
                    // 数据加载并绑定成功
                    this.listLoading = false;
                }
            )
        },
        resetData() {
            // 1.清空条件搜索
            this.searchObj = {};
            //2.清空日期条件
            this.createTimes = [];
            //3.刷新数据列表
            this.fetchData();
        }
    }
}
</script>