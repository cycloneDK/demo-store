# JSONP 跨域
在js中动态生成script标签,赋值url?callback=handle;返回的数据会直接传入JS中的handle函数

其中，请求的json文件格式需要表示为handle({....});
