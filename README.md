1- .value()

sb say pehlay hum nay div bnai uss pr alignemnt k liay bootstrap apply ki
phir uss mei aik input field and button rakha 
phir js mei uss pr selection lgai 
then input k variable mei value default saqlain set kr di 
or phir event listner lgaya k jb user button click kray to user ko apni input alert mei show ho.

2- innerHTML()

Sab say pehlay hum nay input element select kia. 
Phir hum nay uss mei innerHTML ki help say value set ki aur event listener laga kr button click par innerHTML alert mei show krwanay ki koshish ki. 
Lekin input element ki actual value innerHTML mei store nahi hoti, is liay alert mei kuch bhi show nahi hua. 
Input ki value read karne k liay .value use hota hai.

3- textContent()

Sab say pehlay hum nay input element select kia. 
Phir hum nay uss mei textContent ki help say text set kia. 
TextContent mei text set ho gaya aur jab hum nay usay alert mei read kia to text show ho gaya, lekin ye input field ki actual/current value nahi thi. 
Input ki actual user-entered value read karne k liay .value hi use hota hai.
