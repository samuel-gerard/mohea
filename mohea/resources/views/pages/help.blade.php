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

<main class="">

    <h1 style="text-align: justify;">Help Page</h1>
    <h2>How to use Mohea?</h2>
    <p>Mohea is a tool for creating fully accessible HTML menus, forms and tables.</p>
    <p>To create and export a project you must create an account. You can choose to connect via Google, Facebook,
        GitHub.</p>
    <p>Once logged in you will be able to choose what type of project you want to create from your Dashboard. This is
        also where you'll find the list of your saved projects. You can delete or copy an existing project.</p>
    <p>To save a created project you will need to give it a name and click on the <strong>"Save"</strong> button.</p>
    <p>It is possible to interact with a project with a few shortcuts:</p>
    <p><strong>CTRL + S</strong> to save the project</p>
    <p><strong>CTRL + Z</strong> to cancel the last action</p>
    <p><strong>CTRL + Y</strong> to return to the last action</p>
    <p><strong>"Undo"</strong> and <strong>"Redo"</strong> buttons are also available on each module.</p>
    <p>A page also allows you to modify your account information (name, email, avatar).</p>
    <h2>Create Form</h2>
    <p>The form creation module allows you to build an HTML form with all the elements of your choice and to generate
        the code in order to integrate it directly into your project.</p>
    <p>The forms are fully accessible since they use all the navigation and reading help properties such as
        <strong>aria-describedby</strong>.</p>
    <h3>Adding an element</h3>
    <p>It is possible to choose the different elements to be integrated into the form In the<strong>&nbsp;"Add an
            Element"</strong> menu on the left side of the interface we find the following elements:</p>
    <p>- Text</p>
    <p>- Title</p>
    <p>- Submit</p>
    <p>- Text Input</p>
    <p>- Text Area</p>
    <p>- Select</p>
    <p>- Date</p>
    <p>- Checkbox</p>
    <p>- Radio Button</p>
    <p>- Email</p>
    <p>- Link</p>
    <p>- Password</p>
    <p>- Phone</p>
    <p>Just click on the field to add it to the project. It will be displayed directly in the central part of the
        interface.</p>
    <p>In the central part is the visual of your form. You must click on an element to give it the focus in order to be
        able to modify it afterwards.</p>
    <h3>Modifying an element</h3>
    <p>Once you have selected the element you want to customize, the Edit panel appears on the right side of the
        <strong>"Edit an Element"</strong> box.</p>
    <p>The fields related to an element can be modified (for example: <strong>placeholder</strong>,
        <strong>required</strong>, <strong>label</strong>,). It is possible to duplicate an already created element, as
        well as to modify its position using the <strong>" Up "</strong> and<strong>&nbsp;" Down
            "&nbsp;</strong>buttons.</p>
    <p>For Radio Button, CheckBox and Select elements it is possible to add one or more options by clicking on the
        <strong>"Add New Option"</strong> button in the element editing interface. Then choose the item to be modified
        in the <strong>" Edit Options "&nbsp;</strong>list.</p>
    <p>It is possible to delete an element from the form, using the <strong>" Delete "</strong> button, and to
        completely reset the form, using the<strong>&nbsp;" Reset "</strong> button.</p>
    <h2>Create Menus</h2>
    <p>The menu creation module allows you to build a fully accessible HTML menu. It will be directly possible to
        integrate it into your web page.</p>
    <p>It is possible to add or remove menu items in this way by using the<strong>&nbsp;"+"</strong> or
        <strong>"-"</strong> buttons. This is also applicable for submenus.</p>
    <h3>Editing an item</h3>
    <p>To complete a menu item just fill in the corresponding box.</p>
    <p>A menu item is customizable, it is possible to modify several options:</p>
    <p>- The style (Bold, Italic, Underline, font size)</p>
    <p>- The color of the text and the Background</p>
    <p>- The URL and title of a link</p>
    <p>- If the link is opened in a new tab</p>
    <p>A global style is applied to the menu, with the possibility to choose or not the Bootstrap theme, and to choose a
        Dark or Light style.</p>
    <p>A <strong>" Reset "</strong> button is also used to reset the entire project.</p>
    <h2>Create Tables</h2>
    <p>The table creation module allows you to build and generate accessible HTML tables. It will be directly possible
        to integrate it into your web page.</p>
    <p>When creating a blank table it is possible to generate a table by entering the number of rows and columns, or by
        importing a CSV or JSON file. These files must contain valid data to be transformed into a table.</p>
    <p>It is also possible to create the table simply by using the add buttons :</p>
    <p>- <strong>"Col +"</strong> and <strong>"Col -"</strong> allow you to add or delete a column.</p>
    <p>- <strong>"Head +"</strong> and <strong>"Head -"&nbsp;</strong>are used to add or remove a THEAD component.</p>
    <p>- <strong>"Body +"&nbsp;</strong>and <strong>"Body -"</strong> are used to add or remove a TBODY component.</p>
    <p>- <strong>"Foot +"</strong> and <strong>"Foot -"&nbsp;</strong>allow you to add or remove a TFOOT component.</p>
    <p>The merging of cells is possible with THEAD elements thanks to the <strong>"Merge"</strong> button placed under a
        cell.</p>
    <h3>Modify an element</h3>
    <h4>The cells can be customized, it is possible to modify :</h4>
    <p>- The color of the text and the background</p>
    <p>- Text size and alignment</p>
    <p>- Text style (bold, italics, underlining)</p>
    <h4>A global style can be applied to the whole table :</h4>
    <p>- Bootstrap style</p>
    <p>- Striped</p>
    <p>- Dark</p>
    <p>- Bordered</p>
    <p>- Hover</p>
    <p>- Responsive</p>
    <h2>Import the generated code</h2>
    <p>When the table is finished, the code that has been generated is copied by clicking on the<strong>&nbsp;"Copy to
            Clipboard"&nbsp;</strong>button in the lower part of the interface. Don't forget to import the Bootstrap
        library by clicking on <strong>"Copy Bootstrap Sources"</strong> if you haven't already done so.</p>
    <p>
        <br>
    </p>
    <p>For any other questions, please send an email to <strong>mohea.app@gmail.com</strong>.</p>
    <p>
        <br>
    </p>

</main>

<footer>
    <div class="footer-links">
        <a class="link action" href="{{ route('help') }}">I need help</a>
        <a class="link info" href="{{ route('privacy') }}">Terms of use</a>
        <span>Copyright Mohea © 2020</span>
    </div>
</footer>
@endsection
