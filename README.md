# Talent-training-program-system
关于人才培养方案系统的设计

## user
| 字段 | 类型   | 备注                             |
|------|--------|----------------------------------|
| name | string | 专业负责人  课程负责人  普通教师 |
| 权限 |        | 专业负责人>课程负责人>普通教师   |


## 权限详情
| name         | 职能                                  | 权限级别   |
|--------------|---------------------------------------|------------|
| 专业负责人   | 负责人才培养方案指定  指定课程负责人  | 一级管理员 |
| 课程负责人： | 编写教学大纲                          | 二级       |
| 普通教师：   | 设置课程考核及环节比例 计算目标达成度 | 三级       |

## 人才培养方案

- 人才培养定位（修改）
    - String 学校培养定位
    - String 本专业培养定位
- 培养目标
    - Array<String>

- 毕业要求(与培养目标多对多)
    - Array<String> 

- 指标点（与毕业要求关联 一对多）


## 课程（与指标点多对多）（课程对应课程目标 一个课程多个课程目标）（课程目标与指标点多对多）
- 课程编码

## 课程目标 （与课程考核环节多对多）




## 后台用户管理及权限

### 账号管理路由表
| 请求方法 | 请求路径     | get或post参数                              | 备注         |
|----------|--------------|--------------------------------------------|--------------|
| POST     | /login       | username,password                          | 登录界面     |
| GET      | /user        |                                            | 渲染用户界面 |
| GET      | /user/new    |                                            | 渲染增加页面 |
| POST     | /user/new    | username,password,realname,sex,phone,role  | 增加用户     |
| GET      | /user/delete | id                                         | 删除用户     |
| GET      | /user/alter  | id                                         | 渲染修改页面 |
| POST     | /user/alter  | username,password,realname,sex,phone,limit | 修改用户     |

### 角色管理路由表
| 请求方法 | 请求路径     | get或post参数                         | 备注         |
|----------|--------------|---------------------------------------|--------------|
| GET      | /role        |                                       | 渲染角色界面 |
| GET      | /role/new    |                                       | 渲染增加页面 |
| POST     | /role/new    | rolename,description,basicp,opertionp | 增加角色     |
| GET      | /role/delete | id                                    | 删除角色     |
| GET      | /role/alter  | id                                    | 渲染修改页面 |
| POST     | /role/alter  | rolename,description,basicp,opertionp | 修改角色     |

### 权限管理路由表
| 请求方法 | 请求路径           | get或post参数                     | 备注             |
|----------|--------------------|-----------------------------------|------------------|
| GET      | /permission        |                                   | 渲染权限界面     |
| GET      | /permission/new    |                                   | 渲染增加权限页面 |
| POST     | /permission/new    | permissionName,description,nature | 增加权限         |
| GET      | /permission/delete | id                                | 删除权限         |
| GET      | /permission/alter  | id                                | 渲染权限修改页面 |
| POST     | /permission/alter  | permissionName,description,nature | 修改角色         |







### 登录页面

### 账号管理
- 账号列表
- 增删改

### 角色管理（权限）
- 角色列表
- 