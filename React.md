This file contains the details and notes about react implementation :

React solved the problem of designing and building interactive and dynamic websites which could be build using js also but it is very complex and complicated . ad refreshes the whole page when ever a change is reflected and it is procedural based . but react works state based , you just need to know state of UI nad renders rusable components accodingly . it is for single page aplications matlab pa 1 hi oga usi pe mponents reder kr vayenge according to state of UI . so , it is not multipage website .   

we can start by npx create-react-app <name of react app / project> . it is utility but very bulky as it install so any things which we sometimes dont even require . so , we use vite or parcel . actually this is a way of sarting a project or installing all the requirements at once . 
other way is npm create vite@latest se hich is less bulky and is sufficient 

scripts : run to run in production environment , build to run in prod environment , test to run all the test cases and eject to get react out when work finished . build run krne e build folder bn jata hai aur prod me users ko ahi build folder serve kiya jata hai browser ke through .

less number of dependencies get installed here . dev dependenies are or work purpose only for devlopment purpose , they don't go in production . 

jaha pe package.json ho us directory me cd kro aur fir npm i krdo to install the dependencies . 

what React Dom does ? It actually creates it's own DOM just like browser creates a DOM . react creates it's own and then compare it with actual DOM and add elements in original DOM whihc are in React Dom and not in browser DOM . it renders custom tags (html) also . it creates it's DOM using an element from your html file you want to inject react js file . it gives power to manupulate and play with html . renders in strict method for developer , can render without it also . i project by createreact-app ; what happensis react scripts automatically injects js file in html file but in vite they by default inject js or jsx file in html file . js and jsx are same js files only . jsx extension is used when we write components . 

according to vite they have configuration that you can only render 1 element in main . so what we do here is that we wrap up the whole content either in div or in <> , </> empty which is called fragment . ! also function which will be used for components need to start with a capital lettter ! .

learning till now : capitalize functions name , file ext should be jsx if you are returning components in it .
also keep the folders name capitalized . capitalize here means that first letter should be capital . 

{} bracket is used to use JS inside jsx file . it is similar to `${}` concept in js . ut here we use {} only . 

Props children : this is used when we need to use a container or a card or something like that , jiske andar kuch bhi daalo , vo just use show krde . component need not to be pssed anthing as prop . it's responsibility is to only render what has been wrapped inside it's opening and closing tags . 
inside that container type component ; we need to accept props and then return props.children wrapped in a fragment . 

always pass a function as a refeence inside_on click or on change type of event handlers . avoid passing arows functions directly there .

Why state management and the problem , it solved : So , the problem with JS was that every time you have to manually update DOM elements and other thing was that when react re renders , variabl is again initialised and to store the vlues of variabes between renders . state manaagement was introduced whihc stores the variabes values between renders or in short remembers the state of UI and works acc to state of UI .

... which is spread operator se hum purne array ki values spread kr te hain aur , new item add krke aur purni values se ek nayaa array banate hain sur set kr dete hain . Nothing much, we don't use push_back because itis said  that whatever you obtain from a state should remain immutable . so , we create a new array .  

React internal working : a react element is created , it must contain some properties , type , content . the using  loop , it is assigned proper values and then at last appnded after root id vala div or whatever elemen you have chosen in your html while creating DOM through react . this is it , it renders the html . 
what happens behind the scene is ; we render functions using reactDOM , function me we return html . JSX stands for java script + html ka blend . it uses bundler which converts this html into object format using render of react and then it ets apend into root . even we can do thsi this if we know the syntax that how it is accepting roperties etc and how is it converting into tree etc . 

!! check internal working and depth of how react works in lecture 3 of react series by chai .

react ki need and hooks ; actually when you update something , it gets updated eveywhere . here comes React where Reac takes the power to control of updating things using hooks . 

each hook has to be studied like what it returns , what it does and all . 
UseState is used to assign a value to a variable . it returns 2 things the value assigned and a function which changes the avlue of variable . 

filter is used while deleting something in react because filter creates a new array in whihc it only pushes whihc thing follows the condition of filter function . 

conept of virtual DOM and react fibre algo behind it . react fibre allows us to pause , update , prioritize an update in DOM . React uses reconciliation algo which is updating the difference between the trees or 2 trees here . render means ru the compoonent and check how UI looks . when there is a change in a component , react compares it's own DOM with originl one and pdates that difference in that DOM , we don't need to create DOM from starting . this solved a big problem which earlier was a head ache that is our web page consists of lot of things api calls , compponents , images . so , each time something changes , DOM has to render which is dleete old one and create a new one whenever state changed . React solved this by reconcilation algo whihcv compares the difference between two DOMS and then update that part only in the UI . 
Hooks are special react functions which rovide extra features to the component like it provides some memory to the component . useState se it remmbers else it forgets . useEffect hook is used to perform some sside work after rendering UI . like chnge the browser title . so component is renderd first and then side work is done using this hook . hooks should be at the top level of component .problem is that react remembers the hooks in an order or sequence . so , if we keep hooks inside loop or if-else block then order might chabge when condition changes from true to false . so , hokks should not be inside if-else blockl or loop .  

To plugin tailwind css into react projects . follow installation setup from tailwind documentation and then instead of class keyword we use className here and then to regular tailwind . this is beause it is not html as well as js . t is jsx in which class acts a resere keyword . so we use className for using tailwind classes .

props is the name of object whihc contan arguments passed to a functon or a component in simple words through the main component . actually props are passed by the mai or app type of components wjhere we are combining all the components . jaise html ags ke andar arguments pass krte the like input k andar type = "text" bilkul vaise hi in components ke tag ke andar argument pass krte hian aur us dide component receives these arguments ion form of an object . us props se value use krte hain component ke andar like you passed foodItem = {some variable} or foodItem = "" etc etc . then in component function we use it like props.foodItem . this workslike a 1 way comm from parent to child .  
another way to use this thing is by dereferencing the object while receivibg it like ; ( ke andar hi receive i like {foodItem}) nd then use it directly as foodItem matlab object accep hi khula hua accepT kra .

props is actually available and accessible to evry function in react . itis initially empty objhect but as soon you make variables , they get added in this object , i can be an array or object too . we can pass props as dereferenced also and used directly as variables insted of props.var-name . 

!! interview question : when useState hook is used , usme set vala function agar simultneously 4 baar use kr liya to 4 baar incrmeent nhi hoga ek hi baar hoga in setCount(count + 2) . isme 2 se hi incrmeent hoga agar 4 baar bhi chla liya to . this is because react uses batching process internally to group state updates for better performance . it batces or groups state updates if same varible value is being updated . so , to implement it what you can do is use callbacksyntax for changing value through setCount(count => count + 2) . ab isko agar 4 baar likhog ek sequence me to 8 se value increment ho jayegi . 

More on hooks : useCallback(fn , []) , this hook takes a function as allback and optimize it on dependencies . it means it keeps the fution in cache whenever there is a change in any of dependency passed . it optimizes the function by keeping it in memory or cache .

UseEffect is another hook which runs the function whenever there is change in any of dependency passed . it takes  calack and an array of dependencies . 

useRef is another hook which helps us access an element using this hook . we have to tie it to an elwement using ref = {<that ref variable where we stored the reference >} . and then use that ref vraible to access it . 

Custom Hooks : hooks are simply function , we can write hooks on our own too . we can even use built in hooks inside our custom hooks .  

to improve performance in loops in react , always use a key especially while using maps because otherwise react will be able to differetiate and will treate components as same and will work slow . we create a index.js file in components so that we can import all the components in index.js and then for main we can export index.js index wise , better readability . 

useID hook is used for generating unique id's . 

Link and NavLink tag in react-router-dom . NavLink provides extra features . instead of href we use To for Link . we use classNames ina callback when we want to switch colour of urls on swicthing url's and we get isActive variable when we use clssNames in a callback and then we apply these text-colour changes in other links using this isActive . isActive se pta chl jayega ki vo url pe hai ya nhi hai to class apply kr denge else nhi . 

we don't need app to render when we use React Router . 

main me we create routing setup using Route tags which takes element and path . we can nesting inside it too . 
2 ways of creating routes here is use a router and pas an array of objects , each object containing info as path , element in form of < element /> and children : nested routing . 
other way is to use a router and inside it use a function create routes from elements and use , <Route /> tags inside it and yuo can do nesting dirctly inside it . takes path and element in same way . 
for taking params from url or pathh ; contact/:<params-name> to access this param ., use my-params hook and use it jis url se params le rhe hain , jis element kme routing kri ha us url ki , usi ke ndar access kr skte hain  . art last main me render ke time we dont pass app here , we pass RouterProvider and it takes prop which is router . 

Loader is used for optimization : you can directly fetch inside loader also . idea is when you go on some link to click it before it when you points curser on it , fetching starts through loader and stores the info in cache which makes it faster and more optimized . useLoaderData hook is used for this purpose . 
you can write that loader functio in that component itself and then pass it along with path and element in Route tag . use hook also in that component file . 

Context Api is a solution which solves the problem of passing data . earlier itwas required to use props from 1 place to every place till it reaches targeted component . Redux also does sme thing datta passing through global variable file or say clean state management and data passing . 
Prop drilling is the actual; problem which they have slved , it was ki to pass a  prop you have to manually pass it in many intermeddiate steps which itself doesn't even require that . so , that was the issue hihc they solved by providing a global structure from we cn directly pass props . 

syntax for it's setup is pehle ek file banao aur usme context create kro , then create another file for context provider jisme context.provider se hum children ko wrap kr denge aur jo bhi fetch vagera rna hai jo bhi krna hai vahi kr lenge . then export that context provider and use it in app as a wrapper again and pass values which you want to give access to . 

seedhi baat : context banaoo , fir uska provider banao jisme value pass krni hai aur components ko wrap krna hai jis me access provide krna hai value ka . and then use thatvalues through useContext hook . you ca fetch as well aas set the data using this context .

Redux : Redux is also a library which solves the problem of state management or say props passing . Redux setup is much complex and is actual main player but redux-toolkit and redux-react are much better to use as it connects reactwith it's framework and setup is easy and simple . it handles everything internally , all middlewares , functionalities etc whihc were used in redux and other complexities . reducers are used for functionalities . 

There is store which is sort of global variable and it contains mini stores jisme se functionalities or say reducers . useSelector se we extract functonalities from the store and useDispatch se we send the functionality back to store . 

Redux Toolkit : configuration and setup : set up a store first , then features folder and then name the files with slice config as an idntifier to know redux toolkit is being used . uske andar methods / functionalities / reducers hote hain aur kya . createSlice se reducers kaam me lete hain . every thing in redux is around objects . 

difference between context api and redux toolkit is that in context api we used to declare functions and not define them there only but in redux toolkit what we do is we declare the function there . we get state and function in useSlice . state tells us current state of the store and action provides the values such as id etc which we may require .  

Summarizing Redux Toolkit : Redux is seperate library , React is seperate and React-redux is a library that wires both the library . 
start by making a single store and configure it , we have to pass a key val pair jis se use pta chle reducers kahan se lene hain . 
features ko slice kehte hain hum redux mai , createSlice se banate hain . we require 3 things in it that is initial state , name , reducers ki list . reducers me key val pair ; reducers me hme state aur action milte hain , id nanaoid se , text L: action.payload se . state me push krte hain baad me . 
exportt all the reducers seperately and then export export slice ke reducers which contains the source jahan sare reducers pde hain . ye soure store ke andar pass krni hai configure krte time . 

components ke andar useDispatchaur useSelector use  kra . dispatch ka use krke us reducer ke andar value pass krte hain . selector ka use krke state ke throuhle skte hain . 
last me providfer se wrap krna hai aur store pass krna hai as prop . 
Also one more important thing : use Redux dev kit on right click just like inspect and see the magic ; visual represenntation of state movements along with the performance . 