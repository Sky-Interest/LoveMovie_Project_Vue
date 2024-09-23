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
    // 根据id去得到一个用户 
    getUserById(id) {
        return request({
            url: `${BASE_URL}/findUserById/${id}`,
            method: 'get'
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
    // 修改用户
    updateUser(user) {
        return request({
            url: `${BASE_URL}/updateUser`,
            method: 'post',
            data: user
        })
    },
    // 删除用户
    removeUserById(id) {
        return request({
            url: `${BASE_URL}/removeUserById/${id}`,
            method: 'delete'
        })
    },
    // 批量删除用户
    batchRemoveUser(ids) {
        return request({
            url: `${BASE_URL}/removeBatchUserByIds`,
            method: 'delete',
            data: ids
        })
    },
    // 更改用户状态
    updateStatus(id, status) {
        return request({
            url: `${BASE_URL}/updateStatus/${id}/${status}`,
            method: 'get'
        })
    },
    
}