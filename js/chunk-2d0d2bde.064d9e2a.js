(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d2bde"],{"5a95":function(e,l,i){"use strict";i.r(l);var t=function(){var e=this,l=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,l=e.$createElement,i=e._self._c||l;return i("div",[i("p",{staticClass:"text-4xl text-MyColor-H3 font-bold pt-4"},[e._v("判斷式")]),i("p",{staticClass:"text-3xl text-MyColor-H5"},[e._v("注意事項")]),i("br"),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("稱為ConditionalExpressions、條件判斷式、條件表達式")]),i("li",[e._v("條件成立 => 執行指定代碼")]),i("li",[e._v("條件通常是指True或是False")]),i("li",[e._v("假設 ...(條件) 則 ...(做甚麼)")]),i("li",[e._v("如果 ...(條件) 則 ...(做甚麼)")]),i("li",[e._v("若 ...(條件) 則 ...(做甚麼)")]),i("li",[e._v("當 ...(條件) 會 ...(做甚麼)")]),i("li",[e._v("當 ...(條件) A是 ...(A變甚麼)")]),i("li",[e._v("萬一 ...(條件) 就會 ...(發生甚麼)")]),i("li",[e._v("If ...(條件) Then ...(執行甚麼Code)")])]),i("br"),i("p",{staticClass:"text-3xl text-MyColor-H5"},[e._v("IF判斷式")]),i("br"),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("If代表如果")]),i("li",[e._v("Else代表否則")]),i("li",[e._v("ElseIf代表否則如果")]),i("li",[e._v("條件成立只會跑一個區域，這個區域是最早遇到的判斷")]),i("li",[e._v("一組If必定只會有[1個IF]和 [0 ~ 1個Else]且中間可以有[多組ElseIf]")]),i("li",[e._v("If裡面有If叫做巢狀If，外面判斷成立才會進入裡面的判斷")]),i("li",[e._v(" If結束下面又跑出一個If稱為兩組If倆著無關聯性，先跑上面If才跑下面If ")])]),i("br"),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[e._v("PyThon")]),i("li",[e._v("單行寫法")]),i("li",[i("code",[e._v("if (條件): 執行程式碼")])]),i("li",[i("code",[e._v("if True: a += 10")])]),i("li",[e._v("多行寫法")]),i("li",[i("code",[e._v("if 條件:")])]),i("li",[i("code",[i("pre",[e._v("    執行程式碼")])])]),i("li",[i("code",[e._v("elif 條件:")])]),i("li",[i("code",[i("pre",[e._v("    執行程式碼")])])]),i("li",[i("code",[e._v("else:")])]),i("li",[i("code",[i("pre",[e._v("    執行程式碼")])])]),i("li",[e._v("範例")]),i("li",[i("code",[e._v("if a > 10:")])]),i("li",[i("code",[i("pre",[e._v("    a -= 10")])])]),i("li",[i("code",[e._v("elif a < 10:")])]),i("li",[i("code",[i("pre",[e._v("    a += 10")])])]),i("li",[i("code",[e._v("else:")])]),i("li",[i("code",[i("pre",[e._v("    a %= 10")])])]),i("li",[e._v("PyThon是透過Tab(四個空白)表示裡面的區域(Block)")])]),i("br"),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("當 a > 10 則 a -= 10, 否則執行2")]),i("li",[e._v("當 a < 10 則 a += 10, 否則執行3")]),i("li",[e._v("a %=10")])]),i("br"),i("p",{staticClass:"text-left Indent"},[e._v("結果範例")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("a = 10 則a 變成 0")]),i("li",[e._v("a = 11 則a 變成 1")]),i("li",[e._v("a = 9 則a 變成 19")])]),i("br"),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[e._v("VB")]),i("li",[e._v("單行寫法")]),i("li",[i("code",[e._v("If (條件) Then 執行程式碼")])]),i("li",[i("code",[e._v("if True Then a += 10")])]),i("li",[e._v("多行寫法")]),i("li",[i("code",[e._v("If 條件 Then")])]),i("li",[i("code",[i("pre",[e._v("    執行程式碼")])])]),i("li",[i("code",[e._v("ElseIf 條件 Then")])]),i("li",[i("code",[i("pre",[e._v("    執行程式碼")])])]),i("li",[i("code",[e._v("Else")])]),i("li",[i("code",[i("pre",[e._v("    執行程式碼")])])]),i("li",[i("code",[e._v("End If")])]),i("li",[e._v("範例")]),i("li",[i("code",[e._v("If a > 10 Then")])]),i("li",[i("code",[i("pre",[e._v("    a -= 10")])])]),i("li",[i("code",[e._v("ElseIf a < 10 Then")])]),i("li",[i("code",[i("pre",[e._v("    a += 10")])])]),i("li",[i("code",[e._v("Else")])]),i("li",[i("code",[i("pre",[e._v("    a = a mod 10")])])]),i("li",[i("code",[e._v("End If")])])]),i("br"),i("p",{staticClass:"text-justify italic underline Indent"},[e._v(" 陷阱1 ")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[i("code",[e._v("if 3 < a > 5:")])]),i("li",[i("code",[i("pre",[e._v("    a += 10")])])]),i("li",[i("code",[e._v("else:")])]),i("li",[i("code",[i("pre",[e._v("    a *= 10")])])])]),i("br"),i("p",{staticClass:"text-justify italic Indent"},[e._v(" 先轉換3 < a > 5 成 3 < a and a > 5 ")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[e._v("3 < a and a > 5則 a+=10 否則 a*=10")])]),i("br"),i("p",{staticClass:"text-justify  Indent"},[e._v(" 結果範例 ")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("a = 2 則 a變成20(else)")]),i("li",[e._v("a = 4 則 a變成40(else)")]),i("li",[e._v("a = 6 則 a變成16(if)")])]),i("br"),i("p",{staticClass:"text-justify italic underline Indent"},[e._v(" 陷阱2 ")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[i("code",[e._v("if a > 5:")])]),i("li",[i("code",[i("pre",[e._v("    a += 10")])])]),i("li",[i("code",[i("pre",[e._v("    a -= a")])])]),i("li",[i("code",[e._v("else:")])]),i("li",[i("code",[i("pre",[e._v("    a *= 10")])])]),i("li",[i("code",[e._v("if a == 0:")])]),i("li",[i("code",[i("pre",[e._v("    a = True")])])]),i("li",[i("code",[e._v("else:")])]),i("li",[i("code",[i("pre",[e._v("    a = False")])])])]),i("br"),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("當 a > 5 則 a += 10再a -= a, 否則執行2")]),i("li",[e._v("a *= 10")])]),i("p",{staticClass:"text-left Indent"},[e._v("上面跑完跑下一組If")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("當 a == 0 則 a = True")]),i("li",[e._v("a = False")])]),i("br"),i("p",{staticClass:"text-left Indent"},[e._v("結果範例")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("a = 0 則a先變成0[0](第一組If)，再變成True(第二組If)")]),i("li",[e._v("a = 4 則a先變成40(第一組If)，再變成False(第二組If)")]),i("li",[e._v("a = 5 則a先變成50(第一組If)，再變成False(第二組If)")]),i("li",[e._v("a = 6 則a先變成0[16 - 16](第一組If)，再變成True(第二組If)")])]),i("br"),i("p",{staticClass:"text-justify italic underline Indent"},[e._v(" 陷阱3 ")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[i("code",[e._v("if a > 5:")])]),i("li",[i("code",[i("pre",[e._v("    a += 10")])])]),i("li",[i("code",[i("pre",[e._v("    a -= a")])])]),i("li",[i("code",[e._v("elif a < 5:")])]),i("li",[i("code",[i("pre",[e._v("    a *= 2")])])]),i("li",[i("code",[i("pre",[e._v("    if a > 6:")])])]),i("li",[i("code",[i("pre",[e._v("        a += 10")])])]),i("li",[i("code",[i("pre",[e._v("    a //= 2")])])]),i("li",[i("code",[e._v("else:")])]),i("li",[i("code",[i("pre",[e._v("    a *= 10")])])]),i("li",[i("code",[e._v("if a > 0:")])]),i("li",[i("code",[i("pre",[e._v("    a = True")])])]),i("li",[i("code",[e._v("else:")])]),i("li",[i("code",[i("pre",[e._v("    a = False")])])])]),i("br"),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("當 a > 5 則 a += 10再a -= a, 否則執行2")]),i("li",[e._v("當 a < 5 則 a *= 2 進入三，之後再a //=2")]),i("li",[e._v("當 a > 6 則 a += 10")])]),i("p",{staticClass:"text-left Indent"},[e._v("上面跑完跑下一組If")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("當 a >= 0 則 a = True")]),i("li",[e._v("a = False")])]),i("br"),i("p",{staticClass:"text-left Indent"},[e._v("結果範例")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v(" a = -2 則a先變成-2[-4(因為-4 沒有 > 6所以沒進入第一組If裡面的If) / 2 => -2](第一組If)，再變成True(第二組If) ")]),i("li",[e._v(" a = 0 則a先變成0[ (0 * 2 = 0)=> 條件(0 > 6 => False)=>(0//2 => 0)](第一組If)，再變成False(第二組If) ")]),i("li",[e._v(" a = 2 則a先變成2[4(因為4 沒有 > 6所以沒進入第一組If裡面的If) / 2 => 2](第一組If)，再變成False(第二組If) ")]),i("li",[e._v(" a = 3 則a先變成3[6(因為6 沒有 > 6所以沒進入第一組If裡面的If) / 2 => 3](第一組If)，再變成False(第二組If) ")]),i("li",[e._v(" a = 4 則a先變成9[18(因為8 有 > 6所以沒進入第一組If裡面的If) / 2 => 9](第一組If)，再變成False(第二組If) ")]),i("li",[e._v("a = 5 則a先變成50(第一組If)，再變成False(第二組If)")]),i("li",[e._v("a = 6 則a先變成0[16 - 16](第一組If)，再變成True(第二組If)")])]),i("br"),i("p",{staticClass:"text-3xl text-MyColor-H5"},[e._v("Select...Case")]),i("br"),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("VB獨有")]),i("li",[e._v("傳一個值進去到Select")]),i("li",[e._v("看這個值是否有對應的Case")]),i("li",[e._v("只會跑最上面的Case即不會跑兩個含以上的Case")]),i("li",[e._v("最多存在1個Case Else")]),i("li",[e._v("To表示範圍")])]),i("br"),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[e._v("VB")]),i("li",[i("code",[e._v("Select Case 值")])]),i("li",[i("code",[i("pre",[e._v("    Case a")])])]),i("li",[i("pre",[e._v("    即值等於a")])]),i("li",[i("code",[i("pre",[e._v("        執行程式碼")])])]),i("li",[i("code",[i("pre",[e._v("    Case b to c")])])]),i("li",[i("pre",[e._v("    即值是從b到c的範圍內")])]),i("li",[i("code",[i("pre",[e._v("        執行程式碼")])])]),i("li",[i("code",[i("pre",[e._v("    Case d, e, f")])])]),i("li",[i("pre",[e._v("    即值是d或e或f")])]),i("li",[i("code",[i("pre",[e._v("        執行程式碼")])])]),i("li",[i("code",[i("pre",[e._v("    Case Else")])])]),i("li",[i("pre",[e._v("    即最上面的Case都沒執行才會執行的")])]),i("li",[i("code",[i("pre",[e._v("        執行程式碼")])])]),i("li",[i("code",[e._v("End Select")])]),i("li",[e._v("範例")]),i("li",[i("code",[e._v("Select Case a")])]),i("li",[i("code",[i("pre",[e._v("    Case 1")])])]),i("li",[i("code",[i("pre",[e._v("        a += 10")])])]),i("li",[i("code",[i("pre",[e._v("    Case 1 To 5")])])]),i("li",[i("code",[i("pre",[e._v("        a *= 10")])])]),i("li",[i("code",[i("pre",[e._v("    Case 6, 7, 8")])])]),i("li",[i("code",[i("pre",[e._v("        a = 10")])])]),i("li",[i("code",[i("pre",[e._v("    Case Else")])])]),i("li",[i("code",[i("pre",[e._v("        a = 0")])])]),i("li",[i("code",[e._v("End Select")])])]),i("br"),i("p",{staticClass:"text-left Indent"},[e._v("結果範例")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v(" a = 0 則 a 變成 0 ")]),i("li",[e._v(" a = 1 則 a 變成 11(因為只會跑第一個出現的不會跑第二個出現) ")]),i("li",[e._v(" a = 2 則 a 變成 20 ")]),i("li",[e._v(" a = 5 則 a 變成 50 ")]),i("li",[e._v(" a = 6 則 a 變成 10 ")]),i("li",[e._v(" a = 7 則 a 變成 10 ")]),i("li",[e._v("a = 9 則 a 變成 0(找不到對應只好跑Else)")])]),i("br"),i("p",{staticClass:"text-justify italic underline Indent"},[e._v(" 陷阱1 ")]),i("ol",{staticClass:"text-left list-none list-inside Indent"},[i("li",[i("code",[e._v("Select Case a = 10")])]),i("li",[i("code",[i("pre",[e._v("    Case True")])])]),i("li",[i("code",[i("pre",[e._v("        a += 10")])])]),i("li",[i("code",[i("pre",[e._v("    Case 1 To 5")])])]),i("li",[i("code",[i("pre",[e._v("        a *= 10")])])]),i("li",[i("code",[i("pre",[e._v("    Case 6, 7, 8")])])]),i("li",[i("code",[i("pre",[e._v("        a = 10")])])]),i("li",[i("code",[i("pre",[e._v("    Case Else")])])]),i("li",[i("code",[i("pre",[e._v("        a = 0")])])]),i("li",[i("code",[e._v("End Select")])])]),i("br"),i("p",{staticClass:"text-left Indent"},[e._v("結果範例")]),i("ol",{staticClass:"text-left list-decimal list-inside Indent"},[i("li",[e._v("a = 0 帶進去會是False因為0不等於10，所以跑Case Else，即a變成0")]),i("li",[e._v("a = 2 帶進去會是False因為2不等於10，所以跑Case Else，即a變成0")]),i("li",[e._v("a = 10 帶進去會是True因為10等於10，所以跑Case True，即a變成20")]),i("li",[e._v(" Select Case a = 10 這行是比較不是賦值所以會產生False或是True，所以是拿True或是False進去進行尋找Case ")])]),i("br"),i("br")])}],s={name:"Conditional"},_=s,v=i("2877"),d=Object(v["a"])(_,t,a,!1,null,null,null);l["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d2bde.064d9e2a.js.map