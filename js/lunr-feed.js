<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="keywords" content=" ">
<title> | Data Science with MATLAB</title>
<link rel="stylesheet" href="/matlab/css/prismOkaidia.css">
<script src="/matlab/js/prismOkaidia.js"></script>
<!--
<link rel="stylesheet" href="/matlab/css/syntax.css">
-->
<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="/matlab/css/bootstrap.min.css">



<link rel="stylesheet" href="/matlab/css/customstyles.css">
<link rel="stylesheet" href="/matlab/css/boxshadowproperties.css">
<!-- most color styles are extracted out to here -->
<link rel="stylesheet" href="/matlab/css/theme-cdslab.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script src="/matlab/js/jquery.navgoco.min.js"></script>
<!-- make sidebar non-accordion -->
<script src="/matlab/js/lockScrollbarPosition.js"></script>
<!-- make sidebar non-accordion -->
<script type="text/javascript">
    $(document).ready(function() {
        $('.sidenav').navgoco({
              accordion: false,
              caret: '<span class="caret"></span>',
              openClass: 'open',
              save: true,
              cookie: {
                  name: 'navgoco',
                  expires: false,
                  path: '/'
              },
              slide: {
                  duration: 400,
                  easing: 'swing'
              }
          });
    });
</script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<!-- Anchor.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/anchor-js/4.2.0/anchor.min.js"></script>
<!--
-->
<script src="/matlab/js/toc.js"></script>
<script src="/matlab/js/customscripts.js"></script>
<link rel="shortcut icon" href="/matlab/images/favicon.ico">
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<link rel="alternate" type="application/rss+xml" title="" href="/matlab/feed.xml">

    <script>
        $(document).ready(function() {
            // Initialize navgoco with default options
            $("#mysidebar").navgoco({
                caretHtml: '',
                accordion: true,
                openClass: 'active', // open
                save: false, // leave false or nav highlighting doesn't work right
                cookie: {
                    name: 'navgoco',
                    expires: false,
                    path: '/'
                },
                slide: {
                    duration: 400,
                    easing: 'swing'
                }
            });
            $("#collapseAll").click(function(e) {
                e.preventDefault();
                $("#mysidebar").navgoco('toggle', false);
            });
            $("#expandAll").click(function(e) {
                e.preventDefault();
                $("#mysidebar").navgoco('toggle', true);
            });
        });
    </script>
    <script>
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>
    <script>
        $(document).ready(function() {
            $("#tg-sb-link").click(function() {
                $("#tg-sb-sidebar").toggle();
                $("#tg-sb-content").toggleClass('col-md-9');
                $("#tg-sb-content").toggleClass('col-md-12');
                $("#tg-sb-icon").toggleClass('fa-toggle-on');
                $("#tg-sb-icon").toggleClass('fa-toggle-off');
            });
        });
    </script>
    
    </head>
    <body>
        <!-- Navigation -->
<nav class="navbar navbar-inverse navbar-static-top">
    <div id="sticky" class="container topnavlinks">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="fa fa-book fa-lg navbar-brand" href="/matlab/index.html">&nbsp;<span class="projectTitle"> Data Science with MATLAB</span></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <!-- toggle sidebar button -->
                <li><a id="tg-sb-link" href="#"><i id="tg-sb-icon" class="fa fa-toggle-on"></i> Nav</a></li>
                <!-- entries without drop-downs appear here -->
                
                
                
                <!-- entries with drop-downs appear here -->
                <!-- conditional logic to control which topnav appears for the audience defined in the configuration file.-->
                
                    
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">CDSLab<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                
                                
                                <li><a href="https://www.cdslab.org/#about" target="_blank" rel="noopener">About</a></li>
                                
                                
                                
                                <li><a href="https://www.cdslab.org/people" target="_blank" rel="noopener">People</a></li>
                                
                                
                                
                                <li><a href="https://www.cdslab.org/research" target="_blank" rel="noopener">Research</a></li>
                                
                                
                            </ul>
                        </li>
                    
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Tutorials<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                
                                
                                <li><a href="https://www.cdslab.org/matlab/" target="_blank" rel="noopener">MATLAB Programming</a></li>
                                
                                
                                
                                <li><a href="https://www.cdslab.org/python/" target="_blank" rel="noopener">Python Programming</a></li>
                                
                                
                            </ul>
                        </li>
                    
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">UTA<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                
                                
                                <li><a href="https://www.uta.edu/science/" target="_blank" rel="noopener">College of Science</a></li>
                                
                                
                                
                                <li><a href="https://www.uta.edu/science/data-science/" target="_blank" rel="noopener">Data Science</a></li>
                                
                                
                                
                                <li><a href="https://www.uta.edu/physics/" target="_blank" rel="noopener">Physics</a></li>
                                
                                
                            </ul>
                        </li>
                    
                
                
                <!--comment out this block if you want to hide search-->
                <li>
                    <!--start search-->
                    <div id="search-demo-container">
                        <input type="text" id="search-input" placeholder="keyword search...">
                        <ul id="results-container"></ul>
                    </div>
                    <script src="/matlab/js/jekyll-search.js" type="text/javascript"></script>
                    <script type="text/javascript">
                            SimpleJekyllSearch.init({
                                searchInput: document.getElementById('search-input'),
                                resultsContainer: document.getElementById('results-container'),
                                dataSource: "/matlab/search.json",
                                searchResultTemplate: '<li><a href="https://www.cdslab.org/matlab{url}" title="">{title}</a></li>',
                    noResultsText: 'No results found.',
                            limit: 10,
                            fuzzy: true,
                    })
                    </script>
                    <!--end search-->
                </li>
            </ul>
        </div>
        </div>
        <!-- /.container -->
</nav>

        <!-- Page Content -->
        <div class="container">
            <div id="main">
                <!-- Content Row -->
                <div class="row">
                    
                    
                        <!-- Sidebar Column -->
                        <div class="col-md-3" id="tg-sb-sidebar">
                            
<ul id="mysidebar" class="sidenav">
    <!--
    -->
    <li class="sidebarTitle">Table of Pages </li>
    
        
            
                <li>
                    <a title="Overview" href="#"><b>Overview</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Preface" href="/matlab/notes/overview/preface/index.html">Preface</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Release note 1" href="/matlab/notes/overview/release-note-1/index.html">Release note 1</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Release note 2" href="/matlab/notes/overview/release-note-2/index.html">Release note 2</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Preliminary foundations" href="#"><b>Preliminary foundations</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Version control system" href="/matlab/notes/preliminary-foundations/version-control-system/index.html">Version control system</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Programming history" href="/matlab/notes/preliminary-foundations/programming-history/index.html">Programming history</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Computer program structure" href="/matlab/notes/preliminary-foundations/computer-program-structure/index.html">Computer program structure</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="MATLAB for beginners" href="/matlab/notes/preliminary-foundations/matlab-for-beginners/index.html">MATLAB for beginners</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Values, variables, and types" href="#"><b>Values, variables, and types</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="First program" href="/matlab/notes/values-variables-types/first-program/index.html">First program</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Values" href="/matlab/notes/values-variables-types/values/index.html">Values</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Variables" href="/matlab/notes/values-variables-types/variables/index.html">Variables</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Operators" href="/matlab/notes/values-variables-types/operators/index.html">Operators</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Control constructs" href="#"><b>Control constructs</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Branching" href="/matlab/notes/control-constructs/branching/index.html">Branching</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Looping" href="/matlab/notes/control-constructs/looping/index.html">Looping</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Program units" href="#"><b>Program units</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Functions" href="/matlab/notes/program-units/functions/index.html">Functions</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Variable scope" href="/matlab/notes/program-units/variable-scope/index.html">Variable scope</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Data transfer (I/O)" href="#"><b>Data transfer (I/O)</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Data input/ouput methods" href="/matlab/notes/data-transfer/io/index.html">Data input/ouput methods</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Errors and exceptions" href="#"><b>Errors and exceptions</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Exception handling" href="/matlab/notes/exceptions-errors/exception-handling/index.html">Exception handling</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Unit testing" href="/matlab/notes/exceptions-errors/unit-testing/index.html">Unit testing</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Scientific Computing" href="#"><b>Scientific Computing</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Vectorization and array computing" href="/matlab/notes/scientific-computing/vectorization/index.html">Vectorization and array computing</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Visualization and plotting" href="/matlab/notes/scientific-computing/visualization/index.html">Visualization and plotting</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Random numbers" href="/matlab/notes/scientific-computing/random-numbers/index.html">Random numbers</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
            
                <li>
                    <a title="Object-oriented programming" href="#"><b>Object-oriented programming</b></a>
                    <ul>
                        
                                
                                    
                                        <li><a title="Instantiation" href="/matlab/notes/object-oriented-programming/instantiation/index.html">Instantiation</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Encapsulation" href="/matlab/notes/object-oriented-programming/encapsulation/index.html">Encapsulation</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Inheritance" href="/matlab/notes/object-oriented-programming/inheritance/index.html">Inheritance</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Polymorphism" href="/matlab/notes/object-oriented-programming/polymorphism/index.html">Polymorphism</a></li>
                                    
                                    
                                
                        
                                
                                    
                                        <li><a title="Abstraction" href="/matlab/notes/object-oriented-programming/abstraction/index.html">Abstraction</a></li>
                                    
                                    
                                
                        
                    </ul>
                </li>
            
        
    
    <!-- if you aren't using the accordion, uncomment this block:
    -->
    <p class="external">
        <a href="#" id="collapseAll">Collapse All</a> | <a href="#" id="expandAll">Expand All</a>
    </p>
</ul>
<!--
This highlights the active parent class in the navgoco sidebar. 
This is critical so that the parent expands when you're viewing a page.
This must appear below the sidebar code above.
Otherwise, if placed inside customscripts.js,
the script runs before the sidebar code runs and the class never gets inserted.
-->
<script>$("li.active").parents('li').toggleClass("active");</script>

                        </div>
                        
                    
                    <!-- Content Column -->
                    <div class="col-md-9" id="tg-sb-content">
                        <div class="post-header">
   <h1 class="post-title-main"></h1>
</div>

<div class="post-content">
    
    
        <br>
        
<script>
    $( document ).ready(function() {
        // Handler for .ready() called.
        $('#toc').toc({ minimumHeaders: 0 
                      , listType: 'ol'
                      , showSpeed: 0
                      , headers: 'h2,h3,h4,h5,h6'
        });
        /* the following offset helps account for the space taken up by the floating toolbar. */
        $('#toc').on('click', 'a', function() {
            var target = $(this.getAttribute('href')), scroll_target = target.offset().top$(window).scrollTop(scroll_target - 10);
            return false
        })
    });
</script>

<div id="toc"></div>

    
    
    !function(){var t=function(e){var n=new t.Index;return n.pipeline.add(t.trimmer,t.stopWordFilter,t.stemmer),e&&e.call(n,n),n};t.version="0.6.0",t.utils={},t.utils.warn=function(t){return function(e){t.console&&console.warn&&console.warn(e)}}(this),t.utils.asString=function(t){return void 0===t||null===t?"":t.toString()},t.EventEmitter=function(){this.events={}},t.EventEmitter.prototype.addListener=function(){var t=Array.prototype.slice.call(arguments),e=t.pop(),n=t;if("function"!=typeof e)throw new TypeError("last argument must be a function");n.forEach(function(t){this.hasHandler(t)||(this.events[t]=[]),this.events[t].push(e)},this)},t.EventEmitter.prototype.removeListener=function(t,e){if(this.hasHandler(t)){var n=this.events[t].indexOf(e);this.events[t].splice(n,1),this.events[t].length||delete this.events[t]}},t.EventEmitter.prototype.emit=function(t){if(this.hasHandler(t)){var e=Array.prototype.slice.call(arguments,1);this.events[t].forEach(function(t){t.apply(void 0,e)})}},t.EventEmitter.prototype.hasHandler=function(t){return t in this.events},t.tokenizer=function(e){return arguments.length&&null!=e&&void 0!=e?Array.isArray(e)?e.map(function(e){return t.utils.asString(e).toLowerCase()}):e.toString().trim().toLowerCase().split(t.tokenizer.seperator):[]},t.tokenizer.seperator=/[\s\-]+/,t.Pipeline=function(){this._stack=[]},t.Pipeline.registeredFunctions={},t.Pipeline.registerFunction=function(e,n){n in this.registeredFunctions&&t.utils.warn("Overwriting existing registered function: "+n),e.label=n,t.Pipeline.registeredFunctions[e.label]=e},t.Pipeline.warnIfFunctionNotRegistered=function(e){var n=e.label&&e.label in this.registeredFunctions;n||t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},t.Pipeline.load=function(e){var n=new t.Pipeline;return e.forEach(function(e){var i=t.Pipeline.registeredFunctions[e];if(!i)throw new Error("Cannot load un-registered function: "+e);n.add(i)}),n},t.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(e){t.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},t.Pipeline.prototype.after=function(e,n){t.Pipeline.warnIfFunctionNotRegistered(n);var i=this._stack.indexOf(e);if(-1==i)throw new Error("Cannot find existingFn");i+=1,this._stack.splice(i,0,n)},t.Pipeline.prototype.before=function(e,n){t.Pipeline.warnIfFunctionNotRegistered(n);var i=this._stack.indexOf(e);if(-1==i)throw new Error("Cannot find existingFn");this._stack.splice(i,0,n)},t.Pipeline.prototype.remove=function(t){var e=this._stack.indexOf(t);-1!=e&&this._stack.splice(e,1)},t.Pipeline.prototype.run=function(t){for(var e=[],n=t.length,i=this._stack.length,r=0;n>r;r++){for(var o=t[r],s=0;i>s&&(o=this._stack[s](o,r,t),void 0!==o&&""!==o);s++);void 0!==o&&""!==o&&e.push(o)}return e},t.Pipeline.prototype.reset=function(){this._stack=[]},t.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return t.Pipeline.warnIfFunctionNotRegistered(e),e.label})},t.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},t.Vector.Node=function(t,e,n){this.idx=t,this.val=e,this.next=n},t.Vector.prototype.insert=function(e,n){this._magnitude=void 0;var i=this.list;if(!i)return this.list=new t.Vector.Node(e,n,i),this.length++;if(e<i.idx)return this.list=new t.Vector.Node(e,n,i),this.length++;for(var r=i,o=i.next;void 0!=o;){if(e<o.idx)return r.next=new t.Vector.Node(e,n,o),this.length++;r=o,o=o.next}return r.next=new t.Vector.Node(e,n,o),this.length++},t.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t,e=this.list,n=0;e;)t=e.val,n+=t*t,e=e.next;return this._magnitude=Math.sqrt(n)},t.Vector.prototype.dot=function(t){for(var e=this.list,n=t.list,i=0;e&&n;)e.idx<n.idx?e=e.next:e.idx>n.idx?n=n.next:(i+=e.val*n.val,e=e.next,n=n.next);return i},t.Vector.prototype.similarity=function(t){return this.dot(t)/(this.magnitude()*t.magnitude())},t.SortedSet=function(){this.length=0,this.elements=[]},t.SortedSet.load=function(t){var e=new this;return e.elements=t,e.length=t.length,e},t.SortedSet.prototype.add=function(){var t,e;for(t=0;t<arguments.length;t++)e=arguments[t],~this.indexOf(e)||this.elements.splice(this.locationFor(e),0,e);this.length=this.elements.length},t.SortedSet.prototype.toArray=function(){return this.elements.slice()},t.SortedSet.prototype.map=function(t,e){return this.elements.map(t,e)},t.SortedSet.prototype.forEach=function(t,e){return this.elements.forEach(t,e)},t.SortedSet.prototype.indexOf=function(t){for(var e=0,n=this.elements.length,i=n-e,r=e+Math.floor(i/2),o=this.elements[r];i>1;){if(o===t)return r;t>o&&(e=r),o>t&&(n=r),i=n-e,r=e+Math.floor(i/2),o=this.elements[r]}return o===t?r:-1},t.SortedSet.prototype.locationFor=function(t){for(var e=0,n=this.elements.length,i=n-e,r=e+Math.floor(i/2),o=this.elements[r];i>1;)t>o&&(e=r),o>t&&(n=r),i=n-e,r=e+Math.floor(i/2),o=this.elements[r];return o>t?r:t>o?r+1:void 0},t.SortedSet.prototype.intersect=function(e){for(var n=new t.SortedSet,i=0,r=0,o=this.length,s=e.length,a=this.elements,h=e.elements;;){if(i>o-1||r>s-1)break;a[i]!==h[r]?a[i]<h[r]?i++:a[i]>h[r]&&r++:(n.add(a[i]),i++,r++)}return n},t.SortedSet.prototype.clone=function(){var e=new t.SortedSet;return e.elements=this.toArray(),e.length=e.elements.length,e},t.SortedSet.prototype.union=function(t){var e,n,i;return this.length>=t.length?(e=this,n=t):(e=t,n=this),i=e.clone(),i.add.apply(i,n.toArray()),i},t.SortedSet.prototype.toJSON=function(){return this.toArray()},t.Index=function(){this._fields=[],this._ref="id",this.pipeline=new t.Pipeline,this.documentStore=new t.Store,this.tokenStore=new t.TokenStore,this.corpusTokens=new t.SortedSet,this.eventEmitter=new t.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},t.Index.prototype.on=function(){var t=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,t)},t.Index.prototype.off=function(t,e){return this.eventEmitter.removeListener(t,e)},t.Index.load=function(e){e.version!==t.version&&t.utils.warn("version mismatch: current "+t.version+" importing "+e.version);var n=new this;return n._fields=e.fields,n._ref=e.ref,n.documentStore=t.Store.load(e.documentStore),n.tokenStore=t.TokenStore.load(e.tokenStore),n.corpusTokens=t.SortedSet.load(e.corpusTokens),n.pipeline=t.Pipeline.load(e.pipeline),n},t.Index.prototype.field=function(t,e){var e=e||{},n={name:t,boost:e.boost||1};return this._fields.push(n),this},t.Index.prototype.ref=function(t){return this._ref=t,this},t.Index.prototype.add=function(e,n){var i={},r=new t.SortedSet,o=e[this._ref],n=void 0===n?!0:n;this._fields.forEach(function(n){var o=this.pipeline.run(t.tokenizer(e[n.name]));i[n.name]=o,t.SortedSet.prototype.add.apply(r,o)},this),this.documentStore.set(o,r),t.SortedSet.prototype.add.apply(this.corpusTokens,r.toArray());for(var s=0;s<r.length;s++){var a=r.elements[s],h=this._fields.reduce(function(t,e){var n=i[e.name].length;if(!n)return t;var r=i[e.name].filter(function(t){return t===a}).length;return t+r/n*e.boost},0);this.tokenStore.add(a,{ref:o,tf:h})}n&&this.eventEmitter.emit("add",e,this)},t.Index.prototype.remove=function(t,e){var n=t[this._ref],e=void 0===e?!0:e;if(this.documentStore.has(n)){var i=this.documentStore.get(n);this.documentStore.remove(n),i.forEach(function(t){this.tokenStore.remove(t,n)},this),e&&this.eventEmitter.emit("remove",t,this)}},t.Index.prototype.update=function(t,e){var e=void 0===e?!0:e;this.remove(t,!1),this.add(t,!1),e&&this.eventEmitter.emit("update",t,this)},t.Index.prototype.idf=function(t){var e="@"+t;if(Object.prototype.hasOwnProperty.call(this._idfCache,e))return this._idfCache[e];var n=this.tokenStore.count(t),i=1;return n>0&&(i=1+Math.log(this.documentStore.length/n)),this._idfCache[e]=i},t.Index.prototype.search=function(e){var n=this.pipeline.run(t.tokenizer(e)),i=new t.Vector,r=[],o=this._fields.reduce(function(t,e){return t+e.boost},0),s=n.some(function(t){return this.tokenStore.has(t)},this);if(!s)return[];n.forEach(function(e,n,s){var a=1/s.length*this._fields.length*o,h=this,u=this.tokenStore.expand(e).reduce(function(n,r){var o=h.corpusTokens.indexOf(r),s=h.idf(r),u=1,l=new t.SortedSet;if(r!==e){var c=Math.max(3,r.length-e.length);u=1/Math.log(c)}o>-1&&i.insert(o,a*s*u);for(var f=h.tokenStore.get(r),p=Object.keys(f),d=p.length,v=0;d>v;v++)l.add(f[p[v]].ref);return n.union(l)},new t.SortedSet);r.push(u)},this);var a=r.reduce(function(t,e){return t.intersect(e)});return a.map(function(t){return{ref:t,score:i.similarity(this.documentVector(t))}},this).sort(function(t,e){return e.score-t.score})},t.Index.prototype.documentVector=function(e){for(var n=this.documentStore.get(e),i=n.length,r=new t.Vector,o=0;i>o;o++){var s=n.elements[o],a=this.tokenStore.get(s)[e].tf,h=this.idf(s);r.insert(this.corpusTokens.indexOf(s),a*h)}return r},t.Index.prototype.toJSON=function(){return{version:t.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},t.Index.prototype.use=function(t){var e=Array.prototype.slice.call(arguments,1);e.unshift(this),t.apply(this,e)},t.Store=function(){this.store={},this.length=0},t.Store.load=function(e){var n=new this;return n.length=e.length,n.store=Object.keys(e.store).reduce(function(n,i){return n[i]=t.SortedSet.load(e.store[i]),n},{}),n},t.Store.prototype.set=function(t,e){this.has(t)||this.length++,this.store[t]=e},t.Store.prototype.get=function(t){return this.store[t]},t.Store.prototype.has=function(t){return t in this.store},t.Store.prototype.remove=function(t){this.has(t)&&(delete this.store[t],this.length--)},t.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},t.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},e={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",i="[aeiouy]",r=n+"[^aeiouy]*",o=i+"[aeiou]*",s="^("+r+")?"+o+r,a="^("+r+")?"+o+r+"("+o+")?$",h="^("+r+")?"+o+r+o+r,u="^("+r+")?"+i,l=new RegExp(s),c=new RegExp(h),f=new RegExp(a),p=new RegExp(u),d=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,m=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,y=/.$/,S=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\1$"),x=new RegExp("^"+r+i+"[^aeiouwxy]$"),k=/^(.+?[^aeiou])y$/,b=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,_=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,F=/^(.+?)(s|t)(ion)$/,O=/^(.+?)e$/,P=/ll$/,N=new RegExp("^"+r+i+"[^aeiouwxy]$"),T=function(n){var i,r,o,s,a,h,u;if(n.length<3)return n;if(o=n.substr(0,1),"y"==o&&(n=o.toUpperCase()+n.substr(1)),s=d,a=v,s.test(n)?n=n.replace(s,"$1$2"):a.test(n)&&(n=n.replace(a,"$1$2")),s=m,a=g,s.test(n)){var T=s.exec(n);s=l,s.test(T[1])&&(s=y,n=n.replace(s,""))}else if(a.test(n)){var T=a.exec(n);i=T[1],a=p,a.test(i)&&(n=i,a=S,h=w,u=x,a.test(n)?n+="e":h.test(n)?(s=y,n=n.replace(s,"")):u.test(n)&&(n+="e"))}if(s=k,s.test(n)){var T=s.exec(n);i=T[1],n=i+"i"}if(s=b,s.test(n)){var T=s.exec(n);i=T[1],r=T[2],s=l,s.test(i)&&(n=i+t[r])}if(s=E,s.test(n)){var T=s.exec(n);i=T[1],r=T[2],s=l,s.test(i)&&(n=i+e[r])}if(s=_,a=F,s.test(n)){var T=s.exec(n);i=T[1],s=c,s.test(i)&&(n=i)}else if(a.test(n)){var T=a.exec(n);i=T[1]+T[2],a=c,a.test(i)&&(n=i)}if(s=O,s.test(n)){var T=s.exec(n);i=T[1],s=c,a=f,h=N,(s.test(i)||a.test(i)&&!h.test(i))&&(n=i)}return s=P,a=c,s.test(n)&&a.test(n)&&(s=y,n=n.replace(s,"")),"y"==o&&(n=o.toLowerCase()+n.substr(1)),n};return T}(),t.Pipeline.registerFunction(t.stemmer,"stemmer"),t.generateStopWordFilter=function(t){var e=t.reduce(function(t,e){return t[e]=e,t},{});return function(t){return t&&e[t]!==t?t:void 0}},t.stopWordFilter=t.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),t.Pipeline.registerFunction(t.stopWordFilter,"stopWordFilter"),t.trimmer=function(t){return t.replace(/^\W+/,"").replace(/\W+$/,"")},t.Pipeline.registerFunction(t.trimmer,"trimmer"),t.TokenStore=function(){this.root={docs:{}},this.length=0},t.TokenStore.load=function(t){var e=new this;return e.root=t.root,e.length=t.length,e},t.TokenStore.prototype.add=function(t,e,n){var n=n||this.root,i=t.charAt(0),r=t.slice(1);return i in n||(n[i]={docs:{}}),0===r.length?(n[i].docs[e.ref]=e,void(this.length+=1)):this.add(r,e,n[i])},t.TokenStore.prototype.has=function(t){if(!t)return!1;for(var e=this.root,n=0;n<t.length;n++){if(!e[t.charAt(n)])return!1;e=e[t.charAt(n)]}return!0},t.TokenStore.prototype.getNode=function(t){if(!t)return{};for(var e=this.root,n=0;n<t.length;n++){if(!e[t.charAt(n)])return{};e=e[t.charAt(n)]}return e},t.TokenStore.prototype.get=function(t,e){return this.getNode(t,e).docs||{}},t.TokenStore.prototype.count=function(t,e){return Object.keys(this.get(t,e)).length},t.TokenStore.prototype.remove=function(t,e){if(t){for(var n=this.root,i=0;i<t.length;i++){if(!(t.charAt(i)in n))return;n=n[t.charAt(i)]}delete n.docs[e]}},t.TokenStore.prototype.expand=function(t,e){var n=this.getNode(t),i=n.docs||{},e=e||[];return Object.keys(i).length&&e.push(t),Object.keys(n).forEach(function(n){"docs"!==n&&e.concat(this.expand(t+n,e))},this),e},t.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.lunr=e()}(this,function(){return t})}();
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});
;
var store = [];
$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
     return null;
  }
  else{
     return results[1] || 0;
  }
};

function addParam(url, param, value) {
    var a = document.createElement('a'), regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
   var match, str = []; a.href = url; param = encodeURIComponent(param);
   while (match = regex.exec(a.search))
       if (param != match[1]) str.push(match[1]+(match[2]?"="+match[2]:""));
   str.push(param+(value?"="+ encodeURIComponent(value):""));
   a.search = str.join("&");
   return a.href;
};

$.injectResults = function(name) {
  var resultdiv = $('#search-results');
  query = decodeURIComponent(name.replace(/\+/g," "));
  $('input#search').val(query);
  var result = index.search(query);
  resultdiv.empty();
  resultdiv.prepend('<center><h2 style="background:#ad141e;border-radius: 20px;margin-bottom: 56px;color: white;" class="post_title">Found '+result.length+' result(s)</h2></center>');
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<li style="padding-top: 1rem;" class="s-post-list"><a style="float:left;font-size:1.1rem" class="title" href="'+store[ref].link+'">'+store[ref].title+'</a><div style="float:right;display:inline-block;">';
    var tags = store[ref].tags;
    for (var tag in tags) {
      searchitem += '<a class="tags" style="float:right" href="/tag/'+tags[tag]+'">'+tags[tag]+'</a>';
    };
    searchitem += '</div></li>';
    resultdiv.append(searchitem);
  }
  href = addParam(document.URL,'q',query);
  window.history.pushState('Revanth Revoori', "Search for"+query+" Revanth's Blog", href);
};

$(document).ready(function() {
  if($.urlParam('q')) {
    var query = $.urlParam('q');
    $.injectResults(query);
    };
  $('input#search').on('input', function () {
    var query = $(this).val();
    if (!this.value) {
      $('#search-results').html('<center><h2> [Or] try multitag search ;)</h2><a href="/filtertags" id="s-tag-button">Multi Tag Search!</a></center>');
      window.history.pushState('Revanth Revoori', "", addParam(document.URL,'q',''));
    }
    else {
      $.injectResults(query);
    }
  });
});
    
    
        
    <div style="margin-top:3rem">
        <div id="disqus_thread"></div>
        <script type="text/javascript">
            /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
            var disqus_shortname = 'shahmoradi'; // required: replace example with your forum shortname
    
            /* * * DON'T EDIT BELOW THIS LINE * * */
            (function() {
                var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>


    
</div>
<hr class="shaded"/>
<footer>
    <div class="row">
        <div class="social-icons">

    
    <span class="social-icon">
        <a href="https://facebook.com/cdslab" target="_blank">
            <span class="fa-stack fa-lg">
                
                
<i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-facebook fa-stack-xs"></i>
            </span>
        </a>
    </span>
    

    
    <span class="social-icon">
        <a href="https://github.com/cdslaborg" target="_blank">
            <span class="fa-stack fa-lg">
                
<i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-github fa-stack-xs"></i>
            </span>
        </a>
    </span>
    

    

    
    <span class="social-icon">
        <a href="https://instagram.com/cdslaborg" target="_blank">
            <span class="fa-stack fa-lg">
                
<i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-instagram fa-stack-xs"></i>
            </span>
        </a>
    </span>
    

    
    <span class="social-icon">
        <a href="https://medium.com/cdslab" target="_blank">
            <span class="fa-stack fa-lg">
                
<i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-medium fa-stack-xs"></i>
                <!--
                -->
            </span>
        </a>
    </span>
    

    
    <span class="social-icon">
        <a href="https://twitter.com/cdslaborg" target="_blank">
            <span class="fa-stack fa-lg">
                
<i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-xs"></i>
            </span>
        </a>
    </span>
    

</div>

        <div class="col-lg-12 footer">
            &copy;2020 <a href="https://www.cdslab.org" target="_blank">Computational Data Science Lab</a><br />
            Site last generated: April 1, 2020 <br />
            
        <p>
            <a href="https://www.cdslab.org" target="_blank"><img class="footerlogo" src="/matlab/images/logo.png" }}" alt="cdslab.org" /></a>
            <!-- Start of statc -->
<div style="color: #ffffff; float: none; width: 100%;">
    <span style="font-size:0.8em">visitor count: 
        <script type="text/javascript">
            var sc_project=12047472; 
            var sc_invisible=0; 
            var sc_security="fe09cd78"; 
            var sc_text=3; 
            var scJsHost = "https://";
            document.write("<sc"+"ript type='text/javascript' src='" +
            scJsHost+
            "statcounter.com/counter/counter.js'></"+"script>");
        </script>
    </span>
</div>
<!-- End of statc -->
        </p>
        </div>
    </div>
    <!--Mathjax LaTeX engine-->
    
</footer>

                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /#main -->
        </div>
        
    </body>
    
</html>
