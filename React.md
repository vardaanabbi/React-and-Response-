This file contains the details and notes about react implementation :

we can start by npx create-react-app <name of react app / project> . it is utility but very bulky as it install so any things which we sometimes dont even require . so , we use vite or parcel . actually this is a way of sarting a project or installing all the requirements at once . 
other way is npm create vite@latest se hich is less bulky and is sufficient 

scripts : run to run in production environment , build to run in prod environment , test to run all the test cases and eject to get react out when work finished . build run krne e build folder bn jata hai aur prod me users ko ahi build folder serve kiya jata hai browser ke through .

less number of dependencies get installed here . dev dependenies are or work purpose only for devlopment purpose , they don't go in production . 

jaha pe package.json ho us directory me cd kro aur fir npm i krdo to install the dependencies . 

what React Dom does ? It actually creates it's own DOM just like browser creates a DOM . react creates it's own and then compare it with actual DOM and add elements in original DOM whihc are in React Dom and not in browser DOM . it renders custom tags (html) also . it creates it's DOM using an element from your html file you want to inject react js file . it gives power to manupulate and play with html . renders in strict method for developer , can render without it also . i project by createreact-app ; what happensis react scripts automatically injects js file in html file but in vite they by default inject js or jsx file in html file . js and jsx are same js files only . jsx extension is used when we write components . 

according to vite they have configuration that you can only render 1 element in main . so what we do here is that we wrap up the whole content either in div or in <> , </> empty which is called fragment . ! also function which will be used for components need to start with a capital lettter ! .

learning till now : capitalize functions name , file ext should be jsx if you are returning components in it .
also keep the folders name capitalized . capitalize here means that first letter should be capital . 

React internal working : a react element is created , it must contain some properties , type , content . the using  loop , it is assigned proper values and then at last appnded after root id vala div or whatever elemen you have chosen in your html while creating DOM through react . this is it , it renders the html . 
what happens behind the scene is ; we render functions using reactDOM , function me we return html . JSX stands for java script + html ka blend . it uses bundler which converts this html into object format using render of react and then it ets apend into root . even we can do thsi this if we know the syntax that how it is accepting roperties etc and how is it converting into tree etc . 