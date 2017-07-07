<?php
   //Esta es uno de los archivos más importantes
   //Aquí se encuentran todas las funciones que interactuan con la base de datos.
   require_once("libs/parameters.php");

   // ------------------------

   //Aquí se pasan todos los parámetros para establecer la conexion.
   $conexion = new mysqli($server, $user, $pswd ,
                          $database, $port);

   //Si la conexion presenta un error la destruye
   if($conexion->connect_errno){
        //die();
        die($conexion->connect_error);
   }

   //Función para obtener más de un registro de la base de datos.
   function obtenerRegistros($sqlstr, &$conexion = null){
        if(!$conexion) global $conexion;
        $result = $conexion->query($sqlstr);
        $resultArray = array();
        foreach($result as $registro){
            $resultArray[] = $registro;
        }
        return $resultArray;
   }

   //Función para optener un solo registro de la base de datos.
   function obtenerUnRegistro($sqlstr, &$conexion = null){
        if(!$conexion) global $conexion;
        $result = $conexion->query($sqlstr);
        $resultArray = array();

        $resultArray = $result->fetch_assoc();

        return $resultArray;
   }

   //Función para ejecutar un query, devuelve la cantidad de filas afectadas.
   function ejecutarNonQuery($sqlstr, &$conexion = null){
        if(!$conexion) global $conexion;
        $result = $conexion->query($sqlstr);
        return $conexion->affected_rows;
   }

   //Función para validar que un dato sea un string.
   function valstr($str, &$conexion = null){
      if(!$conexion) global $conexion;
      return $conexion->escape_string($str);
   }

   //Ejecuta un query pero la diferencia es que devuelve un mensaje de error en caso que hubiera uno, ideal para depurar.
   function ejecutarNonQueryConErrores($sqlstr, &$conexion = null){
        if(!$conexion) global $conexion;
        $result = $conexion->query($sqlstr);
        return $conexion->error;
   }

   //Devuelve la última llave primaria insertada de una conexión activa.
   function getLastInserId(&$conexion = null){
     if(!$conexion) global $conexion;
     return $conexion->insert_id;
   }
?>
