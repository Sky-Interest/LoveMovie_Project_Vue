import request from '@/utils/request'

const BASE_URL = '/admin/system/sysRole';
export default {
    // 列表 
    getPageList(page, limit, searchObj) {
        return request({
            // url: '/admin/system/role' + page + "/" + limit,
            url: `${BASE_URL}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    // 删除
    removeId(id) {
        return request({
            //  url: '/admin/system/role/'+page+"/"+limit,
            url: `${BASE_URL}/removeRoleById/${id}`,
            method: 'delete', // 提交方式
        })
    },
    saveRole(role) {
        return request({
            url: `${BASE_URL}/addRole`,
            method: 'post', // 提交方式为 post
            data: role // 传递json 数据
        })
    },
    // 根据id 去获取一个角色
    getRoleById(id) {
        return request({
            url: `${BASE_URL}/findRoleById/${id}`,
            method: 'get', // 提交方式
        })
    },
    updateRole(role) {
        return request({
            url: `${BASE_URL}/updateRole`,
            method: 'post', // 提交方式为 post
            data: role
        })
    },
}