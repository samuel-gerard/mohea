@extends('base')

@section('title')
    How to use Mohea
@endsection

@section('main-content')
<nav id="header" class="header min show-logo">
    <ul class="d-flex jc-e ai-c">
        <li class="new"><a class="button primary" href="{{ route('project.create') }}">New project</a></li>
        <li class="logo ml-auto mr-auto"><a href="/"><img src="images/logo_medium.png" alt="Logo of Mohea"
                    draggable="false"></a></li>
        @if (Auth::check())
            <li><a class="link primary" href="{{ route('dashboard') }}">Your dashboard</a></li>
        @endif
    </ul>
</nav>

<main class="container">

    <h1>Help Page</h1>

    <div class="intro-mohea">
        <h2>How to use Mohea?</h2>

        <p>Mohea is a tool for creating fully accessible HTML menus, forms and tables.</p>
        <p>To create and export a project you must create an account. You can choose to connect via Google, Facebook, GitHub.</p>
        <p>Once logged in you will be able to choose what type of project you want to create from your Dashboard. This is also where you'll find the list of your saved projects. You can delete or copy an existing project.</p>
        <p>To save a created project you will need to give it a name and click on the <strong>"Save"</strong> button.</p>
        <p>It is possible to interact with a project with a few shortcuts:</p>

        <ul class="list-group">
            <li class=""><strong>CTRL + S</strong> to save the project</li>
            <li class=""><strong>CTRL + Z</strong> to cancel the last action</li>
            <li class=""><strong>CTRL + Y</strong> to return to the last action</li>
            <li class=""><strong>"Undo"</strong> and <strong>"Redo"</strong> buttons are also available on each module.</li>
        </ul>

        <p>A page also allows you to modify your account information (name, email, avatar).</p>
    </div>

    <div class="help-form">
        <h2>Create Form</h2>

        <p>The form creation module allows you to build an HTML form with all the elements of your choice and to generate the code in order to integrate it directly into your project.</p>
        <p>The forms are fully accessible since they use all the navigation and reading help properties such as <strong>aria-describedby</strong>.</p>
        
        <h3>Add an element</h3>
        <p>It is possible to choose the different elements to be integrated into the form In the<strong>&nbsp;"Add an Element"</strong> menu on the left side of the interface we find the following elements:</p>
        
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li class="">Text</li>
                    <li class="">Title</li>
                    <li class="">Submit</li>
                    <li class="">Text Input</li>
                    <li class="">Text Area</li>
                    <li class="">Select</li>
                    <li class="">Date</li>
                </ul>
            </div>
            <div class="col">
                <ul class="list-group">
                    <li class="">Checkbox</li>
                    <li class="">Radio Button</li>
                    <li class="">Email</li>
                    <li class="">Link</li>
                    <li class="">Password</li>
                    <li class="">Phone</li>
                </ul>
            </div>
        </div>
        
        <p>Just click on the field to add it to the project. It will be displayed directly in the central part of the interface.</p>
        <p>In the central part is the visual of your form. You must click on an element to give it the focus in order to be able to modify it afterwards.</p>
        
        <h3>Modifying an element</h3>
        <p>Once you have selected the element you want to customize, the Edit panel appears on the right side of the <strong>"Edit an Element"</strong> box.</p>
        <p>The fields related to an element can be modified (for example: <strong>placeholder</strong>, <strong>required</strong>, <strong>label</strong>,). It is possible to duplicate an already created element, as well as to modify its position using the <strong>"Up"</strong> and<strong>&nbsp;" own"&nbsp;</strong>buttons.</p>
        <p>For Radio Button, CheckBox and Select elements it is possible to add one or more options by clicking on the <strong>"Add New Option"</strong> button in the element editing interface. Then choose the item to be modified in the <strong>"Edit Options"&nbsp;</strong>list.</p>
        <p>It is possible to delete an element from the form, using the <strong>" Delete "</strong> button, and to completely reset the form, using the<strong>&nbsp;"Reset"</strong> button.</p>
    </div>    

    <div class="help-menu">
        <h2>Create Menus</h2>

        <p>The menu creation module allows you to build a fully accessible HTML menu. It will be directly possible to integrate it into your web page.</p>
        <p>It is possible to add or remove menu items in this way by using the<strong>&nbsp;"+"</strong> or <strong>"-"</strong> buttons. This is also applicable for submenus.</p>
        
        <h3>Editing an item</h3>
        <p>To complete a menu item just fill in the corresponding box.</p>
        <p>A menu item is customizable, it is possible to modify several options:</p>

        <ul class="list-group">
            <li class="">The style (Bold, Italic, Underline, font size)</li>
            <li class="">The color of the text and the Background</li>
            <li class="">The URL and title of a link</li>
            <li class="">If the link is opened in a new tab</li>
        </ul>

        <p>A global style is applied to the menu, with the possibility to choose or not the Bootstrap theme, and to choose a Dark or Light style.</p>
        <p>A <strong>" Reset "</strong> button is also used to reset the entire project.</p>
    </div>

    <div class="help-table">
        <h2>Create Tables</h2>
        
        <p>The table creation module allows you to build and generate accessible HTML tables. It will be directly possible to integrate it into your web page.</p>
        <p>When creating a blank table it is possible to generate a table by entering the number of rows and columns, or by importing a CSV or JSON file. These files must contain valid data to be transformed into a table.</p>
        <p>It is also possible to create the table simply by using the add buttons :</p>

        <ul class="list-group">
            <li class=""><strong>"Col +"</strong> and <strong>"Col -"</strong> allow you to add or delete a column.</li>
            <li class=""><strong>"Head +"</strong> and <strong>"Head -"&nbsp;</strong>are used to add or remove a THEAD component.</li>
            <li class=""><strong>"Body +"&nbsp;</strong>and <strong>"Body -"</strong> are used to add or remove a TBODY component.</li>
            <li class=""><strong>"Foot +"</strong> and <strong>"Foot -"&nbsp;</strong>allow you to add or remove a TFOOT component.</li>
        </ul>    

        <p>The merging of cells is possible with THEAD elements thanks to the <strong>"Merge"</strong> button placed under a cell.</p>
        
        <h3>Modify an element</h3>

        <h4>The cells can be customized, it is possible to modify :</h4>

        <ul class="list-group">
            <li class="">The color of the text and the background</li>
            <li class="">Text size and alignment</li>
            <li class="">Text style (bold, italics, underlining)</li>
        </ul>

        <h4>A global style can be applied to the whole table :</h4>

        <ul class="list-group">
            <li class="">Bootstrap style</li>
            <li class="">Striped</li>
            <li class="">Dark</li>
            <li class="">Bordered</li>
            <li class="">Hover</li>
            <li class="">Responsive</li>
        </ul>
    </div>

    <div class="help-code">
        <h2>Import the generated code</h2>
        <p>When the table is finished, the code that has been generated is copied by clicking on the<strong>&nbsp;"Copy to Clipboard"&nbsp;</strong>button in the lower part of the interface. Don't forget to import the Bootstrap library by clicking on <strong>"Copy Bootstrap Sources"</strong> if you haven't already done so.</p>
        <p>For any other questions, please send an email to <strong><a href = "mailto: mohea.app@gmail.com">mohea.app@gmail.com</a></strong>.</p>
    </div>

</main>

<footer>
    <div class="footer-links">
        <a class="link action" href="{{ route('help') }}">I need help</a>
        <a class="link info" href="{{ route('privacy') }}">Terms of use</a>
        <span>Copyright Mohea © 2020</span>
    </div>
</footer>
@endsection
