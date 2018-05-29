# 图书跟踪应用工作区
它是Udacity其中一个项目。

这是一个简单的应用程序，允许用户搜索书籍并对它们进行分类。

## 项目开始 :

1. git clone 'https://github.com/hoverlew/Book-tracking.git'
2. 导航到存储库，然后运行 'npm install'
3. 'npm start' 启动应用程序
4. 在网页浏览器打开地址： 'http://localhost:3000/' 

## BooksAPI概要:

### `getAll()`
* 返回一个解决方案，该解决方案包含一个包含对象的集合的JSON对象。
* 此集合代表当前应用程序中的书架中的书籍。

### `update(book, shelf)`
* book: `<Object>` 至少包含一个 `id` 属性。
* shelf: `<String>` 包含其中之一 ["wantToRead", "currentlyReading", "read"]。  
* 返回一个解决方案，该解决方案包含包含POST请求的响应数据的JSON对象。

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` 由于后端服务器的性质，即使在设置较高的情况下，搜索结果也被限制在20。
* 返回一个解决方案，该解决方案包含一个包含对象的集合的JSON对象。
* 这些书不知道他们在哪一个架子上。它们只是原始结果。在搜索页面上，您需要确保书籍具有正确的状态。

## 重点
* 后端API使用一组固定的缓存搜索结果，并且限制在搜索项的特定集合中，这可以在[SEARCH_TERMS.md](SEARCH_TERMS.md)中找到。
* 该术语列表是与后端一起使用的唯一术语，所以，如果您的搜索不会以任何结果返回，也不要惊讶。
## create-react-app

* 这个项目有参考[Create React App](https://github.com/facebookincubator/create-react-app)。
* 您可以找到有关如何执行常见任务的更多信息[点击这里](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
