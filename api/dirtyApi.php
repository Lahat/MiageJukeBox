<?php
    /**
     * Created by PhpStorm.
     * User: Geoffrey
     * Date: 09/11/2014
     * Time: 17:47
     */


    /*
     * Ce fichier est une faille de sécurité à lui seul! (volontaire)
     * Il est utilisé pour tester les données dans la partie cliente en attendant d'avoir une vrai API
     */

    function clean($str){

        $cleaned =  str_replace ( "\\/", "/", $str);
        return $cleaned;
    }

    function getJSON($strQuery){
        $conn = mysqli_connect("localhost", 'root', null, 'music');
        mysqli_query($conn, "SET NAMES UTF8");

        $query = mysqli_query($conn, $strQuery);
        $res = array();
        if($query){
            while($current = mysqli_fetch_assoc($query)) {

                $res[] = $current;
            }
        }
        return  clean( json_encode($res));
    }






    if(isset($_REQUEST['table'])){


        echo getJSON("SELECT * from ".$_REQUEST['table'].";");
    }
    else{
        echo "parametre ?table=&lt;nom de table sql&gt;";
    }



?>