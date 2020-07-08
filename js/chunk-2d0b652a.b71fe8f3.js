(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b652a"],{"1d56":function(t,l,i){"use strict";i.r(l);var s=function(){var t=this,l=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,l=t.$createElement,i=t._self._c||l;return i("div",[i("p",{staticClass:"text-4xl text-MyColor-H3 font-bold pt-4"},[t._v("資料型態")]),i("p",{staticClass:"text-3xl text-MyColor-H5"},[t._v("注意事項")]),i("br"),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[t._v("稱為DataType、資料型別")]),i("li",[t._v(" [ 資料結構DataStructure ]是基於[ 資料型別DataType ]的延伸兼子集，兩者不是同一個東西 ")]),i("li",[t._v("DataType 決定占用記憶體空間")]),i("li",[t._v("DataStructure 決定讀取修改刪除的速度")]),i("li",[t._v("PyThon不會自動型別轉換，但VB會，因此VB是弱型別，PyThon是強型別")]),i("li",[t._v(" PyThon不能宣告型別，但VB可以且VB也可以不宣告，兩個語言皆為動態型別，其中VB也可以是強型別 ")]),i("li",[t._v("[自動轉換Type]稱為弱型別")]),i("li",[t._v("[不能自動轉換Type]稱為強型別")]),i("li",[t._v("[允許變數 更換Type]稱為動態型別")]),i("li",[t._v("[不允許變數 更換Type]稱為靜態型別")])]),i("br"),i("p",{staticClass:"text-3xl text-MyColor-H5"},[t._v("DataType")]),i("br"),i("table",{staticClass:" mx-auto my-2 w-4/5"},[i("thead",[i("tr",[i("th",{staticClass:"w-1/2 px-4 py-2"},[t._v("項目")]),i("th",{staticClass:"w-1/4 px-4 py-2"},[t._v("VB")]),i("th",{staticClass:"w-1/4 px-4 py-2"},[t._v("PyThon")])])]),i("tbody",[i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v("字元(存放Ascii數字，表示一個字)")]),i("td",{staticClass:"border px-4 py-2"},[t._v("Char")]),i("td",{staticClass:"border px-4 py-2"},[t._v("(隱含在字串裡)")])]),i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v("字串(由多個字元所串在一起 簡稱字串)")]),i("td",{staticClass:"border px-4 py-2"},[t._v("String")]),i("td",{staticClass:"border px-4 py-2"},[t._v("str")])]),i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v(" 短整數(-2^15[-32768] ~ 2^15-1[32767]) ")]),i("td",{staticClass:"border px-4 py-2"},[t._v("Short")]),i("td",{staticClass:"border px-4 py-2"},[t._v("(隱含在整數裡)")])]),i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v(" 整數(-2^31 ~ 2^31-1 備註PyThon沒有上限) ")]),i("td",{staticClass:"border px-4 py-2"},[t._v("Integer")]),i("td",{staticClass:"border px-4 py-2"},[t._v("int")])]),i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v("長整數(-2^63 ~ 2^63-1)")]),i("td",{staticClass:"border px-4 py-2"},[t._v("Long")]),i("td",{staticClass:"border px-4 py-2"},[t._v("(隱含在整數裡)")])]),i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v("浮點數(即有小數點)")]),i("td",{staticClass:"border px-4 py-2"},[t._v("Single")]),i("td",{staticClass:"border px-4 py-2"},[t._v("float")])]),i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v("雙精度浮點數(即兩倍空間的浮點數)")]),i("td",{staticClass:"border px-4 py-2"},[t._v("Double")]),i("td",{staticClass:"border px-4 py-2"},[t._v("(隱含在浮點數裡)")])]),i("tr",[i("td",{staticClass:"border px-4 py-2"},[t._v("布林值(表示 真(True) 或 偽(False))")]),i("td",{staticClass:"border px-4 py-2"},[t._v("Boolean")]),i("td",{staticClass:"border px-4 py-2"},[t._v("bool")])])])]),i("br"),i("p",{staticClass:"text-3xl text-MyColor-H5"},[t._v("轉換方式")]),i("br"),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("數字轉字串")]),i("li",[t._v("PyThon")]),i("li",[i("code",[t._v("str(20)")])]),i("li",[t._v("把整數20轉成字串20，str是轉換的函式同時也是str這個型別的建構子")]),i("li",[t._v(" 備註 建構子是函式的一種，是class(類別)裡面定義用來建構Object(物件)的函式 ")]),i("li",[t._v("所以"),i("code",[t._v("a = str(20)")])]),i("li",[t._v("可以稱a裡面存放的是型別為str的物件")]),i("li",[t._v("VB")]),i("li",[i("code",[t._v("Str(20)")])]),i("li",[t._v("同上")]),i("li",[t._v("其他轉換依此類推")])]),i("br"),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("需要注意地方")]),i("li",[t._v("PyThon")]),i("li",[i("code",[t._v("int(True)")])]),i("li",[t._v("把bool(True)轉成數字1")]),i("li",[i("code",[t._v("int(False)")])]),i("li",[t._v("把bool(False)轉成數字0")]),i("li",[t._v("VB")]),i("li",[i("code",[t._v("Int(True)")])]),i("li",[t._v("把Boolean(True)轉成數字-1")]),i("li",[i("code",[t._v("Int(False)")])]),i("li",[t._v("把Boolean(False)轉成數字0")])]),i("p",{staticClass:"text-3xl text-MyColor-H5"},[t._v("所謂轉換")]),i("br"),i("img",{staticClass:"mx-auto",attrs:{src:"https://2.bp.blogspot.com/-z6nC9JYj8vY/WsWy73hIO8I/AAAAAAAAT4I/3DhB8aOI2JAQTJumnGOEPq2HtgF_R4s0wCLcBGAs/s1600/b0aeb7ffd1667b9162e5329154d43777_hd.jpg",alt:""}}),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("VB的弱型別轉換")]),i("li",[i("code",[t._v("Dim A As Integer")])]),i("li",[t._v("上述代碼 定義一個名為A的變數 型態是Integer")]),i("li",[i("code",[t._v('A = "20"')])]),i("li",[t._v('上述代碼 表示對A賦予，字串"20"')]),i("li",[t._v('基於弱型別轉換，變數A會變成整數20，因為字串"20"是可以轉成數字的。')])]),i("br"),i("p",{staticClass:"text-left underline Indent"},[t._v("陷阱1")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("VB的弱型別轉換")]),i("li",[i("code",[t._v("Dim A As Integer")])]),i("li",[t._v("上述代碼 定義一個名為A的變數 型態是Integer")]),i("li",[i("code",[t._v('A = "A"')])]),i("li",[t._v('上述代碼 表示對A賦予，字串"A"')]),i("li",[t._v(' 基於弱型別轉換，會爆錯，字串"A"不能轉成數字，即使她有Ascii(65)也不行。 ')])]),i("br"),i("p",{staticClass:"text-left underline Indent"},[t._v("陷阱2")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("VB的弱型別轉換")]),i("li",[i("code",[t._v("Dim A As Integer")])]),i("li",[t._v("上述代碼 定義一個名為A的變數 型態是Integer")]),i("li",[i("code",[t._v("A = 4.5")])]),i("li",[t._v("上述代碼 表示對A賦予，浮點數 4.5")]),i("li",[t._v(" 基於弱型別轉換，會是整數4，因為VB轉換是跑[ Cint ]函式，也就是傳說中的4捨6入5取偶(3.5 = 4 , 4.5 = 4) ")])]),i("br"),i("p",{staticClass:"text-left underline Indent"},[t._v("陷阱3")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("VB的動態型別轉換")]),i("li",[i("code",[t._v("Dim A")])]),i("li",[t._v("上述代碼 定義一個變數為A，沒有限制型別")]),i("li",[i("code",[t._v('A = "10"')])]),i("li",[t._v('上述代碼 表示對A賦予，字串 "10"')]),i("li",[t._v('基於動態型別轉換(注意不是弱型別)，會是字串"10"')]),i("li",[i("code",[t._v("A = 10")])]),i("li",[t._v("上述代碼 表示對A賦予，整數 10")]),i("li",[t._v("基於動態型別轉換(注意不是弱型別)，會是整數 10")]),i("li",[t._v("上述表示 動態型別允許一個變數任意切換型別")])]),i("br"),i("p",{staticClass:"text-left underline Indent"},[t._v("陷阱4")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("VB的動態型別轉換+弱型別")]),i("li",[i("code",[t._v("Dim A")])]),i("li",[t._v("上述代碼 定義一個變數為A，沒有限制型別")]),i("li",[i("code",[t._v("A = 10")])]),i("li",[t._v("上述代碼 表示對A賦予，整數 10")]),i("li",[t._v('基於動態型別轉換(注意不是弱型別)，會是字串"10"')]),i("li",[i("code",[t._v('A = A + "10"')])]),i("li",[t._v('上述代碼 表示對A賦予，A(整數10) + 字串"10"')]),i("li",[t._v(" 基於弱型別轉換，後面的Type會轉成前面的Type，除非後面的Type不能轉成前面的Type，變成前面的Type轉成後面的Type。 ")]),i("li",[t._v("變成 A = 10 + 10 即 A = 20")]),i("li",[t._v(' 從頭到尾變數的Type沒有轉換可是那個字串"10"卻變成整數，實際上只用到弱型別轉換 ')])]),i("br"),i("p",{staticClass:"text-left underline Indent"},[t._v("陷阱5")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("VB的動態型別轉換+弱型別")]),i("li",[i("code",[t._v("Dim A")])]),i("li",[t._v("上述代碼 定義一個變數為A，沒有限制型別")]),i("li",[i("code",[t._v("A = 10")])]),i("li",[t._v("上述代碼 表示對A賦予，整數 10")]),i("li",[t._v('基於動態型別轉換(注意不是弱型別)，會是字串"10"')]),i("li",[i("code",[t._v('A = A & "10"')])]),i("li",[t._v('上述代碼 表示對A賦予，A(整數10) & 字串"10"')]),i("li",[t._v(' &運算符是表示字串合併，即前後運算子轉成字串，即A(整數10)轉成字串"10" ')]),i("li",[t._v('變成 A = "10" + "10" 即 A = "1010"')]),i("li",[t._v(' A的Type從Integer變成String是動態型別的運用，而A原本的整數10變成字串"10"是弱型別的運用 ')])]),i("br"),i("p",{staticClass:"text-left underline Indent"},[t._v("陷阱6")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("PyThon的動態型別轉換")]),i("li",[i("code",[t._v("A = 20")])]),i("li",[t._v("上述代碼 賦一個名為A的變數20這個值 型態是int")]),i("li",[t._v("備註PyThon不存在變數宣告這件事情")]),i("li",[i("code",[t._v('A = "10"')])]),i("li",[t._v('上述代碼 表示對A賦予，字串 "10"')]),i("li",[t._v(' 基於動態型別轉換(注意不是弱型別)，會是字串"10"，所謂[動態型別]是指DateType動態化 ')]),i("li",[t._v("允許變數從int轉成str，即不限制變數的型別是什麼")])]),i("br"),i("p",{staticClass:"text-left underline Indent"},[t._v("陷阱7")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[t._v("PyThon的動態型別轉換+強型別")]),i("li",[i("code",[t._v("A = 20")])]),i("li",[t._v("上述代碼 賦一個名為A的變數20這個值 型態是int")]),i("li",[t._v("備註PyThon不存在變數宣告這件事情")]),i("li",[i("code",[t._v('A = A + "10"')])]),i("li",[t._v('上述代碼 表示對A賦予，A(整數20) + 字串 "10"')]),i("li",[t._v(" 基於強型別特性，不允許自動轉換會報錯，因為str不能和int進行運算符操作。 ")])]),i("br"),i("br")])}],a={name:"DataType"},_=a,v=i("2877"),n=Object(v["a"])(_,s,e,!1,null,null,null);l["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0b652a.b71fe8f3.js.map