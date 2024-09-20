import request from '@/utils/request'

// 定义公共的api 
const BASE_URL = '/admin/system/sysUser';

export default {
    // 查询用户和分页
    getUserPageInfo(page, limit, searchObj) {
        return request({
            url: `${BASE_URL}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    // 添加用户
    saveUser(user) {
        return request({
            url: `${BASE_URL}/addUser`,
            method: 'post',
            data: user
        })
    },
}