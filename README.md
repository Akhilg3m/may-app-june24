
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




