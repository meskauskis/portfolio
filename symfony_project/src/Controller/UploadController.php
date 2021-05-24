<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class UploadController extends AbstractController
{
    public function __construct(ParameterBagInterface $params)
    {
        $this->params = $params;
    }
    
    public function index() 
    {
        if (!$this->params->has('app.upload_login')) {
            exit;
        }

        $loginParams = $this->params->get('app.upload_login');

        $user = $loginParams['user'];
        $password = $loginParams['password'];
        //$encoded = base64_encode($login . ':' . $password);
        //header('Authorization: Basic ' . $encoded);

        if (empty($_SERVER['PHP_AUTH_USER']) 
            || empty($_SERVER['PHP_AUTH_PW'])
            || $_SERVER['PHP_AUTH_USER'] !== $user 
            || $_SERVER['PHP_AUTH_PW'] !== $password) {
            header('WWW-Authenticate: Basic realm="Login To Upload"');
            header('HTTP/1.0 401 Unauthorized');

            die('Not Authorized');
        } 

        echo 'Hello:' . $_SERVER['PHP_AUTH_USER'];

        
        exit;
        
        
        //print_r(__DIR__);exit;
        $file = fopen("neil.txt", "r");
        
        while(!feof($file)) {
            echo fgets($file) . "<br>";
        }
        fclose($file);
        exit;

/*        
        
$foo = $_GET['test'];
$foo = $_POST['uname'];
$foo2 = $_POST['psw'];
print $foo . '-' . $foo2;exit;

 */ 

/*
session_start();
$_SESSION['loggedIn'] = true;

if (!empty($_SESSION['loggedIn']) && $_SESSION['loggedIn'] == true) {
    print 'hi';
}
*/
        return $this->render('upload.html.twig', array(
            'number' => null,
        ));
    }
}
