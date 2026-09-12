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

!! check internal working and depth of how react works in lecture 3 of react series by chai .

react ki need and hooks ; actually when you update something , it gets updated eveywhere . here comes React where Reac takes the power to control of updating things using hooks . 

each hook has to be studied like what it returns , what it does and all . 
UseState is used to assign a value to a variable . it returns 2 things the value assigned and a function which changes the avlue of variable . 

conept of virtual DOM and react fibre algo behind it . react fibre allows us to pause , update , prioritize an update in DOM . React uses reconciliation algo which is updating the difference between the trees or 2 trees here . render means ru the compoonent and check how UI looks . when there is a change in a component , react compares it's own DOM with originl one and pdates that difference in that DOM , we don't need to create DOM from starting . this solved a big problem which earlier was a head ache that is our web page consists of lot of things api calls , compponents , images . so , each time something changes , DOM has to render which is dleete old one and create a new one whenever state changed . React solved this by reconcilation algo whihcv compares the difference between two DOMS and then update that part only in the UI . 
Hooks are special react functions which rovide extra features to the component like it provides some memory to the component . useState se it remmbers else it forgets . useEffect hook is used to perform some sside work after rendering UI . like chnge the browser title . so component is renderd first and then side work is done using this hook . hooks should be at the top level of component .problem is that react remembers the hooks in an order or sequence . so , if we keep hooks inside loop or if-else block then order might chabge when condition changes from true to false . so , hokks should not be inside if-else blockl or loop .  

To plugin tailwind css into react projects . follow installation setup from tailwind documentation and then instead of class keyword we use className here and then to regular tailwind . this is beause it is not html as well as js . t is jsx in which class acts a resere keyword . so we use className for using tailwind classes .

props in react are like arguments passed ina function which can be used . props stands for properties. f passing props then variable is used as {props.<variable-name>} . if passing as {variable name} then directly {variable-name} can be used . props are simply defined in a function and used in react components . it can any data type , array , object , string , int etc .  we can also pass default values for the props or argument passed . 

props is actually available and accessible to evry function in react . itis initially empty objhect but as soon you make variables , they get added in this object , i can be an array or object too . we can pass props as dereferenced also and used directly as variables insted of props.var-name . 

!! interview question : when useState hook is used , usme set vala function agar simultneously 4 baar use kr liya to 4 baar incrmeent nhi hoga ek hi baar hoga in setCount(count + 2) . isme 2 se hi incrmeent hoga agar 4 baar bhi chla liya to . this is because react uses batching process internally to group state updates for better performance . it batces or groups state updates if same varible value is being updated . so , to implement it what you can do is use callbacksyntax for changing value through setCount(count => count + 2) . ab isko agar 4 baar likhog ek sequence me to 8 se value increment ho jayegi . 

More on hooks : useCallback(fn , []) , this hook takes a function as allback and optimize it on dependencies . it means it keeps the fution in cache whenever there is a change in any of dependency passed . it optimizes the function by keeping it in memory or cache .

UseEffect is another hook which runs the function whenever there is change in any of dependency passed . it takes  calack and an array of dependencies . 

useRef is another hook which helps us access an element using this hook . we have to tie it to an elwement using ref = {<that ref variable where we stored the reference >} . and then use that ref vraible to access it . 

Custom Hooks : hooks are simply function , we can write hooks on our own too . we can even use built in hooks inside our custom hooks .  

to improve performance in loops in react , always use a key . we create a index.js file in components so that we can import all the components in index,js and then for main we can export index.js index wise , better readability . 