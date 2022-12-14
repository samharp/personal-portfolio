<?php
  $page_redirected_from = $_SERVER['REQUEST_URI'];  // this is especially useful with error 404 to indicate the missing page.
  $server_url = "http://" . $_SERVER["SERVER_NAME"];
  $redirect_url = $_SERVER["REDIRECT_URL"];
  $redirect_url_array = parse_url($redirect_url);
  $end_of_path = strrchr($redirect_url_array["path"], "/");

  switch(getenv("REDIRECT_STATUS")){
    # "400 - Bad Request"
    case 400:
    $error_code = "400";
    break;

    # "401 - Unauthorized"
    case 401:
    $error_code = "401";
    break;

    # "403 - Forbidden"
    case 403:
    $error_code = "403";
    break;

    # "404 - Not Found"
    case 404:
    $error_code = "404";
    break;
  }
?>

<!DOCTYPE html>
  <head>
    <title>Page Not Found</title>

    <meta name="robots" content="noindex">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Sammy Harper: Web & Graphic Design Portfolio">
    <meta name="author" content="Sammy Harper">
    <meta name="keywords" content="graphic design, web design, photography, animation, pixel planet, pixel art, artist, pixel planet today, html, css, animation, video, music, writing, audio, freelancer, multimedia, graduate, nebraska, programmer, techie, nerd, omaha, terrabyte, golden harp media">

    <meta name="theme-color" content="#fddd10" />

    <!-- favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@600&display=swap" rel="stylesheet">

    <!-- site styles -->
    <link href="/css/general-styles.css" rel="stylesheet" type="text/css" />
    <link href="/css/hero-styles.css" rel="stylesheet" type="text/css" />
    <link href="/css/section-styles.css" rel="stylesheet" type="text/css" />
    <link href="/css/footer-styles.css" rel="stylesheet" type="text/css" />


    <!-- javascript -->
    <script src="/js/scripts.js"></script>

    
    <!-- initial load transition -->
    <style>
      .loading{
        opacity:0;
      }
    </style>
    <script>
      window.addEventListener("load", function(){
        document.body.classList.remove("loading");
      })
    </script>

    <noscript>
      <style>
        .loading{
          opacity:1;
        }
      </style>
    </noscript>

    <!-- hide JS only items when there isn't js -->
    <noscript>
      <style>
        .show-with-js{
          display:none;
        }
      </style>
    </noscript>

  <script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>

  </head>

  <body class="loading">
    <section id="error-section" class="flex-container align-center">

      <!-- <div class="set-width flex-container align-center"> -->
        <div class="flex-width">
          <h2>
            <span class="highlighter-container" data-highlight-text="This doesn't look">This doesn't look</span><br>
            <span class="highlighter-container" data-highlight-text="quite right...">quite right...</span>
          </h2>
        </div>
        <div class="flex-width">
          <h3 class="text-left">We ran into an error (<?php print ($error_code); ?>)</h3>
          <p>Check the URL above and try again. You can also head to the homepage (<a class="standard-link" href="<?php print ($server_url); ?>"><?php print ($server_url); ?></a>) to try to find what you were looking for there.</p>
        </div>
      <!-- </div> -->
      
    </section>


    <footer>
      <div class="reg-footer">
        <section class="flex-container">
          <div class="flex-width">
            <p>Copyright &copy; <span id="copyright-year"></span>, Sammy Harper. All Rights Reserved.</p>
            <p>Website hosted by <a class="standard-link" href="https://goldenharpmedia.com" target="_blank">Golden Harp Media</a>.</p>
          </div>
          <div class="flex-width text-right">
            
          </div>
        </section>
      </div>
    </footer>

  </body>
</html>