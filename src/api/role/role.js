import request from '@/utils/request'

const BASE_URL = '/admin/system/role';
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
}