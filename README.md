# React觀念

## 高鐵頁面規劃

### header

- LOGO
- 4 個按鈕
- 一個大頭貼
- 一個搜尋

### main

- 搜尋列
- 下拉 啟程站
- 下拉 終點站
- 下拉 時間
- 按鈕 搜尋
- 時刻表
- 卡片版
- 列表版
- 換頁數
- 號碼按鈕
- 換頁按鈕 前一頁 下一頁


## React 元件兩大重點

- State 元件本身的狀態 
因為專案變大，state會很複雜，所以會有一些框架來幫忙管理，例如redux。
React自己也有，叫做React.context
- Props 元件被傳入的值 類似 function 的參數


## React 兩大Hook

- useState
- useEffect 參數ㄧ function 參數二 陣列
 1. 陣列什麼都不設定，每次渲染都執行
 2. 陣列設定某個state，某個state變化渲染才執行
 3. 陣列設定空的，永遠都只有第一次載入會執行


# API觀念

## 高鐵api文件

https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_Station
https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_ODDailyTimetable

## Restful
- GET
- POST
- PUT // 修改
- DELETE // 刪除

## AJAX 
highspeed

- domain(根root): https://ptx.transportdata.tw/MOTC/
- 路由route
- JSON XML
- GET也可以傳參數，這些參數叫做querystring

## GET VS POST
- POST跟GET傳送給後端的資料（參數）都可以在開發者介面看到
- 唯一的區別是，GET可以透過「網址列」傳送（包裹）參數，
- 但是如果是帳號密碼的資訊不能直接放到網址列上。
- 所以如果是隱秘性比較高的資料，都要用POST的方式去「包裹」參數。

## 範例：高鐵時刻表

1. 取得時刻表 API (GET) https://www.highspeed.com/getList?id=01&direction=南下
```

......
key
xxx.getXXX('id') // 01
xxx.getXXX('direction') // 南下

[
  {
    id: "01",
    name: "班次100",
    direction: "南下",
    time: "2021/01/01"
    cars: [0, 1, 2]
  },
  {
    id: "02",
    name: "班次100",
    direction: "南下",
    time: "2021/01/01",
    cars: [0, 1, 2]
  },
  ...
]
```

2. 修改時刻表 API (POST) https://www.highspeed.com/updateList
```
  // 參數
  {
    id: "01"
    name: "班次100",
  },
```

3. 新增時刻表 API (POST) https://www.highspeed.com/appendList
```
  {
    name: "班次100",
    direction: "南下",
    time: "2021/01/01"
  }
```

4. 刪除時刻表 API (POST) https://www.highspeed.com/deleteList
```
  {
    id: "01"
  },
```

# 實作

1.  JQuery
- $.post
- $.get(URL,callback);
- 底層 xmlhttprequest

2. 瀏覽器原生
- fetch

3. AXIOS
- axios