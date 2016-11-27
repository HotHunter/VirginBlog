# Virgin_blog RESTful Document
## 增 Create
- 新增文章
        
        Request:
            Method: Post
            URI: articles/
            请求体: json格式的文章

## 删 Delete
- 删除文章
        
        Request: 
            Method: Delete
            URI: articles/<要删除的文章id>

## 改 Update
- 更新文章

        Request:
            Method: Put
            URI: articles/<要修改的文章id>
            请求体: json格式的文章

## 查 Retrieve
- 文章总数
        
        Request:
            Method: Get
            URI: articles/count

        Response:
            响应格式: json
            响应体: {count: <总数>}

- 文章列表
        
        Request:
            Method: Get
            参数:
                start: 起始文章，默认从0开始
                quantity: 从起始位置获取多少篇，，默认20

        Response:
            响应格式: json
            响应体: 文章集合

## 错误处理
- 服务执行失败将返回状态码403，并在响应体中附上错误信息。

##PostMan请求包：请下载RESTful API Request.postman_collection，导入PostMan后使用
