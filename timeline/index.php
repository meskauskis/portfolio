<?php

require __DIR__ . '/vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

include __DIR__ . '/vendor/twig/twig/lib/Twig/Autoloader.php';

Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader, array(
    //'cache' => 'cache'
));
$template = $twig->loadTemplate('index.html.twig');
echo $template->render(array(
    //'title' => 'Welcome to Twig template'
));
