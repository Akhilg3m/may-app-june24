
Angular: Angular is a framework to build a single page applications(SPA).
========

        Framework: Combination of languages and libraries

                   HTML
                   CSS
                   TypeScript
                   Rxjs
                   Zone.js

        SPA: Only one HTML page
             Part of page will change WRT user activity.


ANGULAR Setup:
==============

1) Download and install nodejs

    check: node -v
           npm -v

2) Install angular 

    npm install -g @angular/cli@14

    check: ng version

3) Create new app

    ng new my-app

4) Run the app

    cd my-app
    ng serve

    check output in the browser: localhost:4200



    ***) Enable scripts execution in VSCode

        -> Open powershell as administrator and run

            set-executionPolicy Unrestricted



ANGULAR CONCEPTS:
=================





ROUTING:  
======== 

    Angular is a SPA
    Routing helps us to navigate form one view to another view.

    Implementation:
    ---------------
    1. Create routes in app-routing.module.ts => routes array
    2. Add router-outlet in app.component.html (to load router output)


    4 Types of Routes: 
    ----------------

        1. General Route:
        -----------------
            {path:'login', component:LoginComponent}

        2. Empty Route:
        ---------------
            {path:'', comp}

        3. WildCard Route/ Fallback Route:
        ----------------------------------
            {path:'**', component: pageNotFoundComponent}

        4. Children Route:
        -----------------
            {path:'dashboard', component:DashComponent, children:[
                {path:'welcome', component:WelcomeComponent}
            ]}

            => add router outlet in dashboard component.


    Navigation:
    ==========

        1. From HTML:
        -------------

            <button routerLink="/dashboard">



        2. From TS:
        -----------



    ANGULAR ARCHITECTURE:   
    =====================


    DIRECTIVES:  Useful to alter the DOM
    ===========

        3 types:
        ---------
        1) Structural Directives
        2) Attribute Directives
        3) Component Directies


        1) Structural Directives: Alters DOM stucrure
        -------------------------

            *ngFor: Iteratively add elments to DOM.
            ------

                <p *ngFor="let price of prices; let i=index">


            *ngIf: Conditionally show or hide element from DOM.
            ------

                <p *ngIf="true/false">


        2) Attribute Directives: Alters attribute value dynamically
        ------------------------

            [ngStyle] :   To alter CSS property value dynamically..
            ----------

                <td [ngStyle]="{ 'color': product.price>100?'red':'green' }"


            [ngClass] :  To alter class name dynamicaaly
            ----------

                <td [ngClass]=" 'low':CONDITION, 'medium':CONDITION ">


        3) Component Directives: Add new elements to the DOM
        ------------------------

            ***) Directives are superset and components are subset.




    PIPES: Useful to transform the data from one format to another format.
    ------

        ***) It won't change the variable value


        EX:

            {{ name | uppercase }}
            {{ name | lowercase }}

            {{ name | date }}
            {{ name | date:'dd-MM-yyyy' }}


    GIT:
    ====

        1) Laptop  <->  website
        =======================

            1) install git 
            2) create account in git hub
            3)

            git config --global user.name "XXXXXXX"
            git config --global user.email "XXXXXXX"

        
            CHECK:
            ------
                git config --list



        2) Project <-> Repository
        =========================

            git init
            git remote add origin XXXXXXXXX

            CHECK:
            ------
            git remote -v


        3) Process
        ============

            git add .                           changes -> stanged changes
            git commit -m "XXXXXX"              staged change -> 0
            git push                            check commit list in git hub


let prices = [10,20,30,40,50,60,70];

// map
prices = prices.map(price=>price+5);

// filter
prices = prices.filter(price=>price<50);

// sort
prices = prices.sort((a,b)=>b-a);

// reduce
let total = prices.reduce((sum,a)=>sum+a);


let products = [
    {name:'pen', price:20, rating:4},
    {name:'Phone', price:30000, rating:4.5},
    {name:'Laptop', price:50000, rating:3.8},
    {name:'remote', price:1000, rating:2},
    {name:'shirt', price:3000, rating:1.5}
  ]

// map
let productPrices = products.map(product=>product.price+5);
console.log(productPrices);

products = products.map(product=>{
  product.price = product.price+5;
  return product;
})

// filter
products = products.filter(product=>product.price<10000)


// sort
products = products.sort((a,b)=>b.price-a.price);


// reduce
let totalPrice = products.reduce((sum,a)=>sum+a.price,0);






console.log(products,totalPrice);
let prices = [10,20,30,40,50,60,70];

// map
prices = prices.map(price=>price+5);

// filter
prices = prices.filter(price=>price<50);

// sort
prices = prices.sort((a,b)=>b-a);

// reduce
let total = prices.reduce((sum,a)=>sum+a);



HTTP: API Integration:
======================

Client Server Architecture: (REST API)
---------------------------




RXJS: Responsible for all async operations in angular
----- 

    3 features:
    -----------
    1. Promise
    2. Observable
    3. Subject

    
         Promise                   Observable
        =========                 =============

1)   single callback            Multiple callbacks

2)   Executes automaticlly      Executes when ever we subscribe

3)   can not stop in b/w        we can stop in b/w using unsubscribe method.

4)   less rxjs operators        more rxjs operators.



            Observable                     subject
            ==========                     ========

1.        unicasting                        multicasting

2.        does not maintain state          maintains state



SERVICE:
========

    we use service

        1. when logic is not realated to view
        2. logic that is requried across multiple components

    create:  ng g s XXXXX


DATA FLOW IN FE APPS:
=====================




API INTEGRATION ANGULAR:
========================

1) Cerate vehicle component and service

2) Import HttpClientModule

3) Inject HttpClientService in VehicleService

4) Create getVehicles method
  
    - it will return observable of data

5) Inject vehicle service in vehicle component

    - subscribe to getVehicles method to listed data

    - data, error two callbacks will be triggered.

    
ALL POSSIBLE API CALLS:
=======================

1. all          get        get(url)

2. specific     get        get(url/id)

3. pagination   get        get(url?limit=10&page=1)

4. filtering    get        get(url?filter=red)

5. sorting      get        get(url?sortBy=color&order=asc/desc)

6. create       post       post(url,data);

7. update       put        put(url/id, data);

8. delete       delete     delete(url/id);



Angular Forms:
==============

    2 types:
    --------
    1. Template Driven Forms
    2. Reactive Forms

    ***) Reactive forms provide more features than TDForms.
            Like: touched, dirty, custom validators, form arrays

    Reactive Forms:
    ---------------
    1) Import Reactive forms Module.
    2) Create FormGroup in class.
    3) Create Form in template.
    4) Map the controls.
    5) Check the output in console.

COMMUNICATIONS:
===============

    3 types

        1) Page Communication
        2) Component Communication
        3) Module Communication


